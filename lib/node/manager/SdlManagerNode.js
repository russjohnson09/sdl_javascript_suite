/*
* Copyright (c) 2019, Livio, Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* Redistributions of source code must retain the above copyright notice, this
* list of conditions and the following disclaimer.
*
* Redistributions in binary form must reproduce the above copyright notice,
* this list of conditions and the following
* disclaimer in the documentation and/or other materials provided with the
* distribution.
*
* Neither the name of the Livio Inc. nor the names of its contributors
* may be used to endorse or promote products derived from this software
* without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

import { RpcMessage } from '../../js/rpc/RpcMessage';
import { RpcType } from '../../js/rpc/enums/RpcType';
import { ProtocolMessage } from '../../js/transport/ProtocolMessage';
import { RpcResponse } from '../../js/rpc/RpcResponse';
import { FunctionID } from '../../js/rpc/enums/FunctionID';

//TODO remove dev-only
import { SdlPsm } from '../../js/dev-only/SdlPsm';

import { Application } from '../../js/Application';
import {EventEmitter} from 'events';
import { SdlPacket } from '../../js/protocol/SdlPacket';

const logger = require('log4js').getLogger();
logger.level = process.env.LOG_LEVEL || 'info';


class SdlManagerNode extends EventEmitter {


    //TODO expect an application.
    constructor(application) {
        super();

        this.application = application;
        this.messageId = 1;
        this.correlationId = 1;
    }

    /**
     * Create a manager and start it.Ø
     * @param connection
     * @param appConfig
     * @returns {Promise<SdlManagerNode>}
     */
    static async createWsManager(connection, appConfig) {

        let application = new Application(appConfig);
        let obj = new SdlManagerNode(application);
        (async function() {
            await obj.setWebSocketConnection(connection);
            await obj.start();
        })();
        return obj;
    }

    sendDataToTransport(data) {

        if (this.connectionType === SdlManagerNode.CONNECTION_TYPE_WS) {
            logger.info(`Sending data`);
            this.wsConnection.send(data);
            return;
        }
        throw new Error(`Unhandled Connection Type ${this.connectionType}`);
    }

    /**
     * Creates and initializes manager for incoming websocket connection.
     * @param ws
     * @returns {Promise<void>}
     */
    setWebSocketConnection(wsConnection) {
        this.connectionType = SdlManagerNode.CONNECTION_TYPE_WS;
        this.wsConnection = wsConnection;
        this._createWsConnectionHandles();
    }

    _setSessionId(sessionID) {
        if (this._sessionId !== sessionID) {
            this._sessionId = sessionID;
            this.emit(SdlManagerNode.EVENT_SESSION_CREATED, {sessionID});
        }
    }

    //TODO should be handled by the transport.
    _createWsConnectionHandles() {
        let self = this;
        let coreWs = this.wsConnection;

        //handle
        coreWs.on('message', async msg => {
            let data = msg;

            const dataAry = new Uint8Array(data);

            //TODO handle partial chunks properly.
            let sdlPsm = SdlPsm.parseChunk(dataAry);

            self._setSessionId(sdlPsm.sessionId);

            if (sdlPsm.serviceType === SdlPacket.SERVICE_TYPE_RPC) {

                return self._handleRPCResponse(sdlPsm);
            }
            else if (sdlPsm.serviceType === SdlPacket.SERVICE_TYPE_BULK_DATA) {
                return self._handleBulkData(sdlPsm);

            }
            else {
                console.error(sdlPsm);
                throw new Error(`Unhandled service type ${sdlPsm.serviceType}`);

            }




        });

        coreWs.on('close', () => {
            //TODO logging with winston or some other logger.
        });
    }


    _handleBulkData(sdlPsm)
    {
        logger.info(`_handlBulkData`,sdlPsm);

        throw new Error(`Bulk data not handled`);
    }

    _handleRPCResponse(sdlPsm)
    {
        logger.trace(`_handleRPCResponse`);
        let self = this;
        let functionId, correlationID, parameters;

        let {frames,messageID} = sdlPsm;

        if (frames.length === 1) {
            console.log(frames[0]);
            parameters = frames[0].jsonData; //TODO rename response to parameters.
            functionId = frames[0].functionId;
            correlationID = frames[0].correlationID;

        }
        logger.trace(`_handleRPCResponse ${JSON.stringify({correlationID})}`);


        let rpcMethod = FunctionID.getNameFromId(functionId);

        if (!rpcMethod)
        {

            throw new Error(`Unhandled response functionId: ${functionId} `);
            //TODO handle these.
            // return;
        }
        let response = new RpcResponse(
            {
                parameters,
                correlationID,
            }
        );


        //TODO ID in all places instead of Id.
        //permissionItem:
        logger.trace(`_handleRPCResponse ${JSON.stringify({correlationID})} emit SdlManagerNode.EVENT_RPC_RESPONSE`);

        self.emit(SdlManagerNode.EVENT_RPC_RESPONSE, {response,messageID,rpcMethod});

        if (self._getIsNotification(rpcMethod))
        {
            self.emit(SdlManagerNode.EVENT_RPC_NOTIFICATION, {response,rpcMethod});
            self.emit(rpcMethod, {response,rpcMethod});
        }
    }

    _getIsNotification(name)
    {
        return FunctionID.getIsNotification(name)
    }

    /**
     * Returns when app has received a sessionId.
     *
     * TODO timeout.
     * @param application
     * @returns {Promise<void>}
     */
    async start() {
        let self = this;
        await self._sendInitRequest(); //protocolVersion5.2.0 and wait for response.
        await self._registerAppInterface();
    }

    async _sendInitRequest() {
        let self = this;
        let connectionRequest = SdlPsm.INIT_REQUEST;
        //  protocolVersion5.2.0

        return new Promise(function(resolve) {
            self.once(SdlManagerNode.EVENT_SESSION_CREATED, async function() {
                logger.info(`init request completed`);
                resolve();
            });
            logger.info(`send init request`);

            self.wsConnection.send(connectionRequest);

        });

    }

    get registerAppInterfaceTimeout()
    {
        if (this._registerAppInterfaceTimeout === undefined)
        {
            this._registerAppInterfaceTimeout = 5 * 1000;
        }

        return this._registerAppInterfaceTimeout;
    }

    async _registerAppInterface() {
        logger.info(`_registerAppInterface called`);
        let application = this.application;
        let rpcMessage = new RpcMessage({
                                            parameters: application.getRegisterAppInterfaceParams(),
                                            rpcType: RpcType.REQUEST,
                                            functionName: `RegisterAppInterface`,
                                        });
        let rpcResponse = await this.sendRPC(rpcMessage,this.registerAppInterfaceTimeout);

        logger.info(`app registration completed`);

        this.emit(SdlManagerNode.EVENT_APP_REGISTERED,{response:rpcResponse,application});
    }

    /**
     * Create a websocket based connection.
     * @param config
     */
    async connect(config) {

        if (type === SdlManager.CONNECTION_TYPE_WS) {
            //listen on port and wait for responses from sdl_core...
            //creating a server should be distinct from this.

        }
        throw new Error(`Unknown Connection Type ${type}`);
    }

    //com/smartdevicelink/protocol/SdlProtocolBase.java
    getNextMessageId() {
        return ++this.messageId;
    }

    getNextCorrelationId() {
        return ++this.correlationId;
    }

    async sendRPCJson(functionName, parameters) {
        let rpcMessage = new RpcMessage(
            {
                functionName,
                parameters,
                rpcType: RpcType.REQUEST,
            }
        );
        let result = await this.sendRPC(rpcMessage);

        return result;
    }

    async sendRPC(message,timeout) {
        try {
            let self = this;
            timeout = timeout || 60 * 5 * 1000;

            let correlationID = this.getNextCorrelationId();
            let requestMessageID = this.getNextMessageId();
            let pm = ProtocolMessage.buildRPC(message,
                                              this._sessionId,
                                              requestMessageID,
                                              correlationID);

            let timeoutHandler;
            return new Promise(async function(resolve,reject) {

                let onRPCResponse = function(data) {
                    let {response} = data;
                    let responseCorrelationId = response.getCorrelationID();
                    if (responseCorrelationId === correlationID)
                    {
                        self.removeListener(SdlManagerNode.EVENT_RPC_RESPONSE, onRPCResponse);
                        clearTimeout(timeoutHandler);
                        return resolve(response);
                    }
                    else {
                        logger.info(`correlationID mismatch ${responseCorrelationId} ${correlationID}`)
                    }

                };

                self.on(SdlManagerNode.EVENT_RPC_RESPONSE , onRPCResponse);

                timeoutHandler = setTimeout(function() {
                    logger.error(`Timeout for request`);
                    self.removeListener(SdlManagerNode.EVENT_RPC_RESPONSE, onRPCResponse);
                    return reject(`Timeout for request`);
                },timeout);

                logger.info(`Sending request ${message.getFunctionName()}`);
                self.sendDataToTransport(pm.getData());

            });

        } catch (e) {
            //TODO handle
            throw e;
        }
    }


}

SdlManagerNode.CONNECTION_TYPE_WS = 'WS';

//{response,error}
SdlManagerNode.EVENT_RPC_RESPONSE = 'rpcResponse';

//{sessionID,error}
SdlManagerNode.EVENT_SESSION_CREATED = 'sessionCreated';

//{application,error}
SdlManagerNode.EVENT_APP_REGISTERED = 'appRegistered';

SdlManagerNode.EVENT_RPC_NOTIFICATION = `rpcNotification`;

SdlManagerNode.EVENT_ON_HMI_STATUS = `OnHMIStatus`;


module.exports = SdlManagerNode;
