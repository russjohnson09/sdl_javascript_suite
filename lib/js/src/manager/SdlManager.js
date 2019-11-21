const EVENTS = {
    RPC_RESPONSE: `RPC_RESPONSE`, // clients using wsappmanager should be able to use the async function call sendRPCJson instead of listening for a response.

    // The app probably only needs to listen on APP_REGISTERED which means that the session is created.
    // The app can listen to SESSION_CREATED to get mtu, hashId, sessionId immediately or just request them from the manager.
    APP_REGISTERED: `APP_REGISTERED`,
    SESSION_CREATED: `SESSION_CREATED`,

    // These two are informational. The client does not need to manage these directly.
    START_SERVICE_ACK: `START_SERVICE_ACK`,
    END_SERVICE_ACK: `END_SERVICE_ACK`,

};

import { BitConverter } from './../util/BitConverter';
import { SdlPsm } from './../transport/SdlPsm';
import { FunctionID } from './../rpc/enums/FunctionID';
import { RpcType } from './../rpc/enums/RpcType';
import { MessageFrameAssembler } from './../protocol/MessageFrameAssembler';
import { BinaryFrameHeader } from './../protocol/BinaryFrameHeader';
import { SdlPacket } from './../protocol/SdlPacket';
import { JsonRpcMarshaller } from './../util/JsonRpcMarshaller';
import { ProtocolMessage } from './../protocol/ProtocolMessage';
import { RpcMessage } from './../rpc/RpcMessage';
import { RpcRequest } from './../rpc/RpcRequest';



import EventEmitter from 'events';


class SdlManager extends EventEmitter {

    constructor ({appConfig, sdlConnectionPrimary, sdlConnectionSecondary}) {
        super();
        this.sdlConnectionPrimary = sdlConnectionPrimary;

        // sdlConnection will call onByte
        this.sdlConnectionPrimary.addListener(this);


        this.app = appConfig;

        this.mtu = 1000;

        this.maxMessageId = 1;
        this.maxCorrelationId = 1;

        this.sessionId = null;

        this.hashId = null;

        this.messageFrameAssemblerByMessageId = {};
        this.currentSdlPsm = null;

        this.dataChunksSentToCoreCount = 0;
        this.sdlPsm = new SdlPsm();
    }

    static async create(opts) {
        let obj = new this(opts);

        await obj._init();

        return obj;
    }

    async startApp() {
        return this._initApp();
    }

    async _init() {

        let self = this;

        await this._initEventsHandler();

    }



    /**
     * HMI issue caused non-response from core when registering the app.
     * 
     * Core will not respond to app registration until hmi is good.
     */
    async _initApp() {
        await this._sendInitRequest();
        await this._registerAppInterface();
    }


    async sendRPCJson(
        { method, params, bulkData, timeout }
    ) {

        let id = ++this.maxCorrelationId;

        let rpcMessage = new RpcRequest(
            {
                functionName: method,
                parameters: params,
                // rpcType: RpcType.REQUEST,
            }
        );
        // rpcMessage._rpcSpecVersion = RpcType.REQUEST
        rpcMessage.setCorrelationID(id);

        if (bulkData) {
            rpcMessage.setBulkData(bulkData);
        }

        let result = await this.sendRPC(rpcMessage, timeout);

        return result;
    }


    async sendRPC(rpcMessage, timeout = null) {
        let self = this;
        let sessionId = self.sessionId;
        let requestMessageID = this.maxMessageId++;

        let correlationId = rpcMessage.getCorrelationID();


        let timeoutHandler;
        return new Promise(async function(resolve, reject) {
            let onRPCResponse = function(data) {
                let {id} = data;
                if (id === correlationId) {
                    self.removeListener(EVENTS.RPC_RESPONSE, onRPCResponse);
                    clearTimeout(timeoutHandler);
                    return resolve(data);
                }

            };

            self.on(EVENTS.RPC_RESPONSE, onRPCResponse);

            if (timeout) {
                timeoutHandler = setTimeout(function() {
                    console.error(`Timeout for request`);
                    self.removeListener(EVENTS.RPC_RESPONSE, onRPCResponse);
                    return reject(`Timeout for request`);
                }, timeout);
            }


            let pm = ProtocolMessage.buildRPC({
                mtu: self.mtu, //mtu may be unkown for register app.
                rpcMessage,
                sessionId,
                messageId: requestMessageID,
                version: self.version
            }, function(dataChunk) {
                    if (!dataChunk) {
                        return;
                    }
                    self._sendDataToCore(dataChunk);
                }
            );
        });
    }

    _doEmit(event,data) {
        if (!event) {
            throw new Error(`event must be defined`);
        }
        this.emit(event, data);
    }

    _sendDataToCore(data) {
        this.sdlConnectionPrimary.send(data);
    }


    async _sendInitRequest() {
        let self = this;
        let constructor = this.constructor;

        let app = this.app;

        let {syncMsgVersion} = app;

        let protocolVersion = '' + syncMsgVersion.majorVersion 
        + '.' + (syncMsgVersion.minorVersion ? syncMsgVersion.minorVersion : '0')
        + '.' +  (syncMsgVersion.patchVersion ? syncMsgVersion.patchVersion : '0');

        let connectionRequest = ProtocolMessage.constructInitRequest({ protocolVersion });
        return new Promise(function (resolve) {
            self._sendDataToCore(connectionRequest);
            self.once(EVENTS.START_SERVICE_ACK, async function () {
                resolve();
            });
        });
    }


    async _registerAppInterface() {


        let app = this.app;
        let rpcResponse = await this.sendRPCJson(
            {
                method: 'RegisterAppInterface',
                params: app,
            }
        );

        this._doEmit(EVENTS.APP_REGISTERED,rpcResponse);
    }

    async _initEventsHandler() {
        let self = this;
        let constructor = self.constructor;

        // listen for own emitted event and handle it.
        self.on(EVENTS.RPC_RESPONSE + `.OnSystemRequest`, (data) => {
            this._handleOnSystemRequest(data);
        });
    }

    async _handleOnSystemRequest(data) {
        let { method, params, bulkData } = data;

        let { fileType, requestType, url } = params;

        if (url && bulkData && requestType === 'PROPRIETARY') {
            return this._handlePolicyTableUpdate(data);
        }
    }

    async _handlePolicyTableUpdate(data)
    {
        return;
    }


    onByte(byte) {
        let self = this;
        let sdlPsm = self.sdlPsm;

        let success = sdlPsm.handleByte(byte);
        if (!success) {
            console.error(`failed`,sdlPsm);
            throw 'Failed to parse byte';
        }
        let isFinished = sdlPsm.getState() === SdlPsm.FINISHED_STATE;

        if (isFinished) {
            const packet = sdlPsm.getFormedPacket();
            sdlPsm.reset();
            self._handlePacketReceived(packet);
        }
    }

    async _handlePacketReceived(sdlPacket) {
        let self = this;

        let messageId = sdlPacket.getMessageID();

        /** @type {MessageFrameAssembler} */
        let messageFrameAssembler;

        if (this.messageFrameAssemblerByMessageId[messageId]) {
            messageFrameAssembler = this.messageFrameAssemblerByMessageId[messageId];
        }
        else {
            this.messageFrameAssemblerByMessageId[messageId] = messageFrameAssembler = new MessageFrameAssembler(
                // headerSize,
                async (err, sdlPacket) => {
                    const payload = sdlPacket.getPayload();
                    if (!payload || payload.length === 0) {
                        sdlPacket.frames = [];
                    }
                    else {
                        // TODO redo this. frame has the json data and potentially bulk data.
                        let frame = BinaryFrameHeader.fromBinaryHeader(sdlPacket.getPayload());
                        sdlPacket.frames = [frame];
                    }

                    //TODO should always be instance SdlPacket and not SdlPsm
                    await self._handleOnMessageAssembled(sdlPacket);
                }
            );
        }

        messageFrameAssembler.handleFrame(sdlPacket);

    }



    /**
     * 
     * @param {*} sdlPacket 
     */
    async _handleOnMessageAssembled(sdlPacket) {
        let self = this;

        let messageId = sdlPacket.getMessageID();

        delete self.messageFrameAssemblerByMessageId[messageId];

        let serviceType = sdlPacket.getServiceType();
        let frameType = sdlPacket.getFrameType();
        let controlFrameInfo = sdlPacket.getFrameInfo();


        if (frameType === SdlPacket.FRAME_TYPE_CONTROL) {
            if (controlFrameInfo === SdlPacket.FRAME_INFO_START_SERVICE_ACK) {
                return this._handleStartServiceAcknowledgment(sdlPacket);
            }
            else if (controlFrameInfo === SdlPacket.FRAME_INFO_HEART_BEAT) {
                return this._handleHeartBeat(sdlPacket);
            }
            else if (controlFrameInfo === SdlPacket.FRAME_INFO_START_SERVICE_NAK) {
                return this._handleStartServiceNotAcknowlegement(sdlPacket);
            }
            //called when service is ended. may be called if app is already registerd and connected.
            //not received from core but sent.

            //core telling us that the service has been ended from an outside source.
            //can also happen if no hearbeat response if given.
            else if (controlFrameInfo === SdlPacket.FRAME_INFO_END_SERVICE) {
                //for protocol 3 it does not look like we are given a reason.
                console.warn(`Service ended involuntarily`, sdlPacket);
                return;
                // throw new Error(`Control Frame END_SERVICE ${controlFrameInfo} not handled`);
            }
            else if (controlFrameInfo === SdlPacket.FRAME_INFO_END_SERVICE_NAK) {
                console.error(`FRAME_INFO_END_SERVICE_NAK`)
                return;
            }
            else if (controlFrameInfo === SdlPacket.FRAME_INFO_END_SERVICE_ACK) {
                return this._handleEndServiceAcknowledgement(sdlPacket);
            }
            throw `Unhandled control frame info ${controlFrameInfo}`;
        }

        if (serviceType === SdlPacket.SERVICE_TYPE_RPC) {
            return self._handleRPCResponse(sdlPacket);
        } else if (serviceType === SdlPacket.SERVICE_TYPE_BULK_DATA) {
            let { frames } = sdlPacket;

            //RPC with BULK DATA
            if (frames && frames.length > 0) {
                return self._handleRPCResponse(sdlPacket);
            } else {
                console.error(`Unhandled serviceType ${serviceType}`);
                throw `Unhandled serviceType ${serviceType}`;

            }
        } else {
            throw `Unhandled serviceType ${serviceType}`;
        }

    }












    async _handleStartServiceAcknowledgment(packet) {
        let sessionId = packet.getSessionID();
        let version = packet.getVersion();
        let frameType = packet.getFrameType();

        this.sessionId = sessionId;

        if (version === 1 && frameType === SdlPacket.FRAME_TYPE_CONTROL) {
            let bsonData = {
                protocolVersion: packet.getTag('protocolVersion'),
                mtu: packet.getTag('mtu'),
                hashId: packet.getTag('hashId'),
            };
            let emitData = {
                startServiceAcknowlegement: bsonData,
                sessionId,
            };
            emitData.sessionId = this.sessionId;
            this.mtu = bsonData.mtu;
            this.hashId = bsonData.hashId;

            //"protocolVersion": "5.1.0",
            this.protocolVersion = bsonData.protocolVersion;
            //major version passed to protocol message.
            this.version = +(this.protocolVersion.split('.')[0]);
        }
        else {
            this.mtu = null;
            // this.hashId = bsonData.hashId;
            //protocolVersion unkown.

            // this.protocolVersion = '2.0.0';
            // this.version = +(this.protocolVersion.split('.')[0]);


            let highestAppVersion = this.app.syncMsgVersion.majorVersion;
            this.version = Math.min(highestAppVersion,version);

            this.hashPayload = packet.getPayload();

            if (this.hashPayload) {
                this.hashId = BitConverter.arrayBufferToInt32(this.hashPayload.buffer);
            }
        }

        let emitData = {
            startServiceAcknowlegement: {
                hashId: this.hashId,
                protocolVersion: this.protocolVersion,
                version: this.version, //major version
                mtu: this.mtu,
            },
            sessionId,
        }

        this._doEmit(EVENTS.START_SERVICE_ACK,emitData);

    }

    async _handleEndServiceAcknowledgement(packet) {
        let bsonData = packet.bsonData;
        let sessionId = packet.getSessionID();
        let version = packet.getVersion();

        let emitData = {
            meta: {
                message: `session has been ended.`
            }
        };
        this._doEmit(EVENTS.END_SERVICE_ACK,emitData);
    }








    /**
     * 
     * @param {SdlPacket} sdlPacket 
     */
    _handleRPCResponse(sdlPacket) {
        let self = this;
        let constructor = self.constructor;
        let functionId, correlationId, parameters, bulkData, rawJson;

        let { frames } = sdlPacket;

        let version = sdlPacket.getVersion();
        let sessionId = sdlPacket.getSessionID();

        let frameType = sdlPacket.getFrameType();

        if (frames.length === 1) {

            //TODO no frames should be init in packet.
            //binary frame header
            rawJson = frames[0].getJsonData(); //TODO rename response to parameters.
            functionId = frames[0].getFunctionId();
            correlationId = frames[0].getCorrelationId();
            bulkData = frames[0].getBulkData();

        }

        let rpcMethod = FunctionID.getNameFromId(functionId);

        if (!rpcMethod) {
            return;
        };

        let emitData = {
            id: correlationId,
            method: rpcMethod,
            params: JsonRpcMarshaller.unmarshall(rawJson),
            // params: response.getParameters(),
            bulkData: null,
            meta: {
                version,
                sessionId,
                frameType,
            }
        };

        // OnHMIStatus and other notifications do not have a resultCode
        emitData.isSuccess = emitData.params && (!emitData.params.resultCode || emitData.params.resultCode === 'SUCCESS');


        if (bulkData) {
            if (!(bulkData instanceof Uint8Array)) {
                bulkData = new Uint8Array(bulkData);
            }
            emitData.bulkData = bulkData;
        }


        //two events, one for the rpc response and one for the rpc response of a specific method.

        //TODO could emit an event with the correlation id and simplify the handling of async request/response
        self._doEmit(EVENTS.RPC_RESPONSE, emitData);
        self._doEmit(EVENTS.RPC_RESPONSE + `.` + rpcMethod, emitData);
    }

}


SdlManager.EVENTS = EVENTS;

export { SdlManager };