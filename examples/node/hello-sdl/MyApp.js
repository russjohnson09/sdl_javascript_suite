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

const fs = require('fs');
const EventEmitter = require('events');
const SDL = require('../../../lib/node/src/index.js');

const CONFIG = require('./config.js');
const WebSocketServerTransport = SDL.transport.WebSocketServerTransport;
const TransportCallback = SDL.transport.TransportCallback;
const WebSocketServerConfig = SDL.transport.WebSocketServerConfig;
const SdlSession = SDL.session.SdlSession;
const CustomTransportConfig = SDL.transport.CustomTransportConfig;

class MyApp extends EventEmitter {
    constructor () {
        super();
        this._appConfig = {
            'appName': CONFIG.appName,
            'appID': CONFIG.appId,
            'fullAppID': CONFIG.appId,
            'appHMIType': [
                'DEFAULT',
                'MEDIA',
            ],
            'hmiDisplayLanguageDesired': 'EN-US',
            'isMediaApplication': false,
            'languageDesired': 'EN-US',
            'syncMsgVersion': {
                'majorVersion': 5,
                'minorVersion': 2,
                'patchVersion': 0,
            },
        };
        this._maxCorrelationId = 0;

        const baseTransportConfig = new CustomTransportConfig(
            new WebSocketServerTransport(
                new WebSocketServerConfig(
                    CONFIG.port
                ),
                new TransportCallback()
            )
        );

        this._sdlSession = new SdlSession(baseTransportConfig, this);
    }

    static async startApp () {
        const obj = new this();
        obj.registerApp(); // do not wait for this method to complete!
        return obj;
    }

    async registerApp () {
        console.log('start connection');
        await this._startConnection();
        console.log('start service');
        await this._startService();
        console.log('register app');
        await this._registerApp();
        console.log('set app icon');
        await this._setAppIcon();
    }

    async _fetchImageUnit8Array (path) {
        const aryBuffer = fs.readFileSync(path, null);
        return new Uint8Array(aryBuffer);
    }

    async _setAppIcon () {
        const fileBinary = await this._fetchImageUnit8Array('./test_icon_1.png');
        const fileName = `${CONFIG.appId}_icon.png`;

        // Save the image file to Core
        await this.sendRPC(
            new SDL.rpc.messages.PutFile()
                .setFileName(fileName)
                .setFileType('GRAPHIC_PNG')
                .setPersistentFile(true)
                .setFileData(fileBinary)
        );

        // Tell Core to set the app icon using the saved imaged
        await this.sendRPC(
            new SDL.rpc.messages.SetAppIcon()
                .setFileName(fileName)
        );
    }

    async _registerApp () {
        await this.sendRPC(
            new SDL.rpc.messages.RegisterAppInterface()
                .setSdlMsgVersion(
                    new SDL.rpc.structs.SdlMsgVersion()
                        .setMajorVersion(this._appConfig.syncMsgVersion.majorVersion)
                        .setMinorVersion(this._appConfig.syncMsgVersion.minorVersion)
                        .setPatchVersion(this._appConfig.syncMsgVersion.patchVersion)
                )
                .setLanguageDesired(SDL.rpc.enums.Language.EN_US)
                .setHmiDisplayLanguageDesired(SDL.rpc.enums.Language.EN_US)
                .setIsMediaApplication(false)
                .setAppName(this._appConfig.appName)
                .setFullAppId(this._appConfig.appID)
                .setAppHmiType([
                    SDL.rpc.enums.AppHMIType.DEFAULT,
                    SDL.rpc.enums.AppHMIType.MEDIA,
                ])
        );
    }

    async sendRPC (rpcRequest) {
        rpcRequest.setCorrelationId(++this._maxCorrelationId);

        return new Promise((resolve) => {
            const correlationId = rpcRequest.getCorrelationId();

            this.on('INCOMING_RPC', (rpcMessage) => {
                // notifications could be passed in here
                if (rpcMessage instanceof SDL.rpc.RpcResponse) {
                    const responseCorrelationId = rpcMessage.getCorrelationId();

                    if (responseCorrelationId === correlationId) {
                        return resolve(rpcMessage);
                    }
                }
            });

            this._sdlSession.sendRpc(rpcRequest);
        });
    }

    async _startService () {
        return new Promise((resolve) => {
            this.on('onProtocolSessionStarted', () => {
                return resolve();
            });

            this._sdlSession.startService(SDL.protocol.enums.ServiceType.RPC, 0, false);
        });
    }

    async _startConnection () {
        return new Promise((resolve) => {
            this.once('onTransportConnected', () => {
                return resolve();
            });
            this._sdlSession.start();
        });
    }

    async onTransportConnected () {
        this.emit('onTransportConnected', {});
    }

    async onProtocolSessionEnded () {
    }

    async onProtocolSessionEndedNACKed () {
    }

    async onProtocolSessionStarted () {
        this.emit('onProtocolSessionStarted');
    }

    async onRpcMessageReceived (rpcMessage) {
        this.emit('INCOMING_RPC', rpcMessage);
    }

    async _unregister () {
        await this.sendRPC(new SDL.rpc.messages.UnregisterAppInterface());
    }

    async exit () {
        await this._unregister();
        this._sdlSession.endSession();
    }
}

module.exports = MyApp;