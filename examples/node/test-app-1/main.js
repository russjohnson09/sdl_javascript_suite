



import { Bson } from './../../../lib/js/src/util/Bson';


// import { SdlSession } from './../../../lib/js/src/session/SdlSession';
// import { TestWsSession } from './../../../lib/js/src/test/TestWsSession';
import { WsClientSession } from './../../../lib/node/src/session/WsClientSession';


import { ServiceType } from './../../../lib/js/src/protocol/enums/ServiceType';
import { RpcMessage } from './../../../lib/js/src/rpc/RpcMessage';
import { RpcType } from './../../../lib/js/src/rpc/enums/RpcType';

const SdlSession = WsClientSession;

// const W3CWebSocket = require('websocket').w3cwebsocket;


function test(Bson) {
    console.log(`Bson`, Bson);
    let serial = Bson.serialize({ x: 1 })
    console.log(serial);
    let deserial = Bson.deserialize(serial)
    console.log(deserial);
}
// test(SDL.util.Bson);

test(Bson);



async function startApp(appConfig) {

    let maxCorrelationId = 0;

    let hashID;
    let sessionID;
    let sdlSession;

    let baseTransportConfig = {

    };

    let sendRPCJson = async function (
        data
    ) {

        let { method, params, bulkData } = data;
        let id = ++maxCorrelationId;

        //https://stackoverflow.com/questions/9546437/how-send-arraybuffer-as-binary-via-websocket
        let rpcMessage = new RpcMessage(
            {
                functionName: method,
                parameters: params,
                rpcType: RpcType.REQUEST,
                correlationId: id, //
            }
        );

        //bulk data is blob.
        if (bulkData) {
            rpcMessage.setBulkData(bulkData);
        }


        let result = await sendRPC(rpcMessage);

        console.log(`sendRPC result`, result);

        let result2 = {
            method: result.getFunctionName(),
            params: result.getParameters(),
            bulkData: result.getBulkData()
        };

        console.log(`sendRPC result`, result2);

        return result2;


    }

    let sendRPC = async function (rpcMessage) {

        return new Promise((resolve) => {
            let correlationId = rpcMessage.getCorrelationId();

            rpcListeners.push((rpcMessage) => {

                let responsCorrelationId = rpcMessage.getCorrelationId();

                if (responsCorrelationId === correlationId) {
                    return resolve(rpcMessage);
                }
            })

            sdlSession.sendRpc(rpcMessage);

        })
    }

    let rpcListeners = [];




    let registerApp = async function () {
        // let {method,params,bulkData} = 
        let result = await sendRPCJson(
            {
                method: 'RegisterAppInterface',
                params: appConfig,
            }
        );
        console.log(`app registered response`, { result });

        // hashID = session.getSessionId();

        // console.log(`hashID++++++++++++++++
        // ${hashID}
        // 
        // 
        // `)

        // console.log(`app registered response`, {method,params,bulkData})
    }

    let listener = {
        onTransportConnected() {
            console.log(`transport is connected`);
            initApp();
        },
        onProtocolSessionEnded() {
            console.error(`protocol session ended ACk`);
        },
        onProtocolSessionEndedNACKed() {
            console.error(`protocol session ended NACK`);
            // process.exit(1);
        },
        onProtocolSessionStarted: async function (session) {
            console.log(`session started`, session);

            await registerApp();


            //RAI request
            // sdlSession.sendRpc(rpcMessage) 
            // {
            // this._sdlProtocol.sendRpc(rpcMessage);
            // }    
        },
        onRpcMessageReceived: async function (rpcMessage) {
            console.log(`onRpcMessageReceived`,rpcMessage);
            for (listener of rpcListeners) {
                listener(rpcMessage);
            }
            // console.log(`app listener onRpcMessageReceived`,rpcMessage);

            let functionName = rpcMessage.getFunctionName();
            let parameters = rpcMessage.getParameters();
            if (functionName === 'OnHMIStatus') {
                OnHMIStatus(parameters);
            }
        }
    };

    async function OnHMIStatus(parameters) {
        console.log(`handleHmi`, { parameters });

        let { hmiLevel } = parameters;

        if (hmiLevel === 'FULL') {
            return OnHmiFull();
        }


    }

    async function OnHmiFull() {

        console.log(`send show message










++++++++++++++++++++++
`)
        let rpcResponse = await sendRPCJson(
            {
                "method": "Show",
                "params": {
                    "mainField1": "こんにちは",
                    "mainField2": "你好 ( ni hao / nĭ hăo )",
                    "mainField3": "@#$#%$^^%&**&(_     !@#$@#$~~~```"
                }
            }
        );
        console.log(`show message response`, rpcResponse);


        //get/put/delete


        await putGetDeleteImage();



        setTimeout(async function () {

            let requestJson = {
                method: `UnregisterAppInterface`
            }

            let result = await sendRPCJson(requestJson);

            console.log(`UnregisterAppInterface response`, result);

            //unregister and close session.

            console.log(`closing session`);
            sdlSession.close();
        }, 1000);
    }


    let putGetDeleteImage = async function () {
        let fileBinary = new Uint8Array([1, 2, 3]);
        try {

            let fileName = Date.now() + '';
            let fileType = 'GRAPHIC_JPEG';

            let result = await sendRPCJson({
                method: 'PutFile',
                params: {
                    syncFileName: fileName,
                    // fileType: 'GRAPHIC_PNG',
                    fileType,
                    persistentFile: true,

                },
                bulkData: fileBinary //unit8 array

            });


            // <element name="GRAPHIC_BMP" />
            // <element name="GRAPHIC_JPEG" />
            // <element name="GRAPHIC_PNG" />
            // <element name="AUDIO_WAVE" />
            // <element name="AUDIO_MP3" />
            // <element name="AUDIO_AAC" />
            // <element name="BINARY" />
            // <element name="JSON" />
            let resultGetFile = await sendRPCJson({
                method: 'GetFile',
                params: {
                    fileName: fileName,
                    fileType,
                    persistentFile: true,

                }
            });

            // let data = resultGetFile.bulkData;
            console.log(`GetFile`, { resultGetFile });

            // var blob = new Blob( [ data ], { type: "image/jpeg" } );
            // var blob = new Blob( resultGetFile.bulkData , { type: "image/jpeg" } );

            // var imageUrl = URL.createObjectURL( blob );

            // this.setState({displayImage:imageUrl})

            // console.log(`putGetImage`,resultGetFile,{imageUrl});

            // let base64 = this.base


            let resultDeleteFile = await sendRPCJson({
                method: 'DeleteFile',
                params: {
                    syncFileName: fileName,
                    fileType,
                    persistentFile: true,

                }
            });

            // console.log(`putGetImage delete`,{resultDeleteFile});

            //TODO await response.
            //TODO correlationID or messageID?
        } catch (e) {
            console.error(e);
        }
    }


    console.log(`sdlSession`,baseTransportConfig, listener);
    sdlSession = new SdlSession(baseTransportConfig, listener);



    // // const testing = new SdlServiceListener();
    // let testing = {};
    // testing.onServiceStarted = () => {

    //     console.log("1");

    //     console.log(`++++++++++++++++++++





    //     `)

    // };
    // testing.onServiceEnded = () => {console.log("2")};
    // testing.onServiceError = () => {console.log("3")};



    // sdlSession.addServiceListener(ServiceType.RPC,testing);


    sdlSession.start();

    function initApp() {
        console.log(`start service of app`);
        sdlSession.startService(ServiceType.RPC, 0x00, false);
    }



}




let appID = (Math.floor(Date.now() / 1000) + '').substr(7);

let appConfig = {
    "appName": appID,
    "appID": appID,
    "fullAppID": appID,
    "appHMIType": [
        "DEFAULT",
        "MEDIA"
    ],
    "hmiDisplayLanguageDesired": "EN-US",
    "isMediaApplication": false,
    "languageDesired": "EN-US",
    "syncMsgVersion": {
        "majorVersion": 3,
        "minorVersion": 1,
        "patchVersion": 0
    }
};

startApp(appConfig);

