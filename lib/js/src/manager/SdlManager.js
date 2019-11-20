const EVENTS = {
    RPC_RESPONSE: `RPC_RESPONSE`, //clients using wsappmanager should be able to use the async function call sendRPCJson instead of listening for a response.

    RPC_NOTIFICATION: `RPC_NOTIFICATION`,
    // RPC_SEND: `RPC_SEND`,

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

import EventEmitter from 'events';


class SdlManager extends EventEmitter {

    constructor ({appConfig, sdlConnectionPrimary, sdlConnectionSecondary}) {
        super();
        this.sdlConnectionPrimary = sdlConnectionPrimary;

        this.sdlConnectionPrimary.addListener(this);


        this.app = appConfig;

        this.mtu = 1000;

        this.maxMessageId = 1;
        this.maxCorrelationId = 1;

        this.sessionId = null;

        this.hashId = null;

        this.rpcTimeout = 1000 * 100;

        this.messageFrameAssemblerByMessageId = {};
        this.currentSdlPsm = null;

        this.dataChunksSentToCoreCount = 0;
        this.sdlPsm = new SdlPsm();
    }

    static async create({appConfig, sdlConnectionPrimary, sdlConnectionSecondary}) {
        let obj = new this(appConfig, sdlConnectionPrimary, sdlConnectionSecondary);

        await obj._init();

        return obj;
    }

    async start() {
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
        { method, params, bulkData }
    ) {

        let id = ++this.maxCorrelationId;

        let rpcMessage = new RpcMessage(
            {
                functionName: method,
                parameters: params,
                rpcType: RpcType.REQUEST,
                correlationId: id, //
            }
        );

        if (bulkData) {
            rpcMessage.setBulkData(bulkData);
        }

        let result = await this.sendRPC(rpcMessage);

        return result;
    }


    async sendRPC(rpcMessage, timeout = this.rpcTimeout) {
        let self = this;
        let constructor = self.constructor;
        //TODO get these right.
        let sessionId = self.sessionId;
        let requestMessageID = this.maxMessageId++;

        console.log(`sendRPC`,{
            // rpcMessage, //should have the correlationId set already.
            // sessionId,
            // requestMessageID,
            mtu: this.mtu, //mtu may be unkown for register app.
            rpcMessage,
            sessionId,
            messageId: requestMessageID,
            version: this.version
            // mtu
        })

        let correlationId = rpcMessage.getCorrelationId();


        let timeoutHandler;
        return new Promise(async function(resolve, reject) {
            let onRPCResponse = function(data) {
                console.log(`rpc response`,data);
                let {id} = data;
                if (id === correlationId)
                {
                    self.removeListener(EVENTS.RPC_RESPONSE, onRPCResponse);
                    clearTimeout(timeoutHandler);
                    return resolve(data);
                }
                else {
                    console.log(`correlationId mismatch ${id} ${correlationId}`)
                }

            };

            self.on(EVENTS.RPC_RESPONSE, onRPCResponse);

            timeoutHandler = setTimeout(function() {
                console.log(`Timeout for request`);
                self.removeListener(EVENTS.RPC_RESPONSE, onRPCResponse);
                return reject(`Timeout for request`);
            }, timeout);

            console.log(`Sending request ${rpcMessage.getFunctionName()}`);

            let pm = ProtocolMessage.buildRPC({
                mtu: self.mtu, //mtu may be unkown for register app.
                rpcMessage,
                sessionId,
                messageId: requestMessageID,
                version: self.version
            }, function(dataChunk) {
                    if (!dataChunk) {
                        console.log(`finished`);
                        return;
                    }
                    console.log(`WsAppManager got data chunk`,dataChunk);
                    self.sendDataToCore(dataChunk);
                }
            );
            // self.emit(EVENTS.RPC_SEND, { rpcMessage, pm });

        });
    }

    _doEmit(event,data) {
        console.log(`_doEmit`,event,data);
        if (!event) {
            throw new Error(`event must be defined`);
        }
        this.emit(event,data);
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

        console.log(`_registerAppInterface`,{app: this.app})
        // If omitted, then the previous state of an app's commands, etc. will not be restored.
        //         When sending hashID, all RegisterAppInterface parameters should still be provided (e.g. ttsName, etc.).
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
        console.log(`WsAppManager`,`handleOnSystemRequest`,data);
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

        if (!self.psmTimeout) {
            self.psmTimeout = setTimeout(function () {
                console.error(`failed sdlPsm timeout`, sdlPsm, sdlPsm.getState(), `failed sdlPsm`);
            }, self.rpcTimeout);
        }

        let success = sdlPsm.handleByte(byte);
        if (!success) {
            console.error(`failed`,sdlPsm);
            process.exit(1);
        }
        let isFinished = sdlPsm.getState() === SdlPsm.FINISHED_STATE;

        if (isFinished) {
            clearTimeout(self.psmTimeout);
            self.psmTimeout = null;
            const packet = sdlPsm.getFormedPacket();
            sdlPsm.reset();
            self.handlePacketReceived(packet);
        }
    }

}


SdlManager.EVENTS = EVENTS;

export { SdlManager };