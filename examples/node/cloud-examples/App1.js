const SDL = require('sdl-node');
console.log('SDL', SDL);


import {SdlManager} from './../../../lib/js/src/manager/SdlManager';
import {WsConnection} from './../../../lib/js/src/transport/WsConnection';

// const SdlManager = SDL.manager.SdlManager;
// const WsConnection = SDL.transport.WsConnection;



/**
 * 
 */
class App1 {


    constructor({wsConnection,appConfig}) {
        let staticInsance = this.constructor;
        this.appConfig = appConfig || staticInsance.appConfig;
        this.wsConnection = new WsConnection(wsConnection);
    }

    static async create(opts) {
        console.log(`create app with options`,opts);
        let app = new this(opts);


        await app.init();

        return app;

    }


    async init() {

        let self = this;
        let sdlManagerOpts = {
            sdlConnectionPrimary: this.wsConnection
            ,appConfig: this.appConfig
        };
        console.log(`init manager`,{sdlManagerOpts});

        let sdlManager = self.sdlManager = await SdlManager.create(sdlManagerOpts);

        sdlManager.on(SdlManager.EVENTS.APP_REGISTERED, (data) => {
            // console.log(SdlManager.EVENTS.APP_REGISTERED,data);
        });


        sdlManager.on(`${SdlManager.EVENTS.RPC_RESPONSE}.OnHMIStatus`, (data) => {

            let {params} = data;
            let {hmiLevel} = params;

            if (hmiLevel === 'FULL') {
                console.log(`${SdlManager.EVENTS.RPC_RESPONSE}.OnHMIStatus`, data);
                self.startOnHmiLevelFull();
            }
        });

        console.log(`start app`);
        await sdlManager.startApp();
    }

    async startOnHmiLevelFull() {
        let self = this;
        console.log('startOnHmiLevelFull');
        let result = await self.sdlManager.sendRPCJson({
            "method": "Show",
            "params": {
                "mainField1": "こんにちは",
                "mainField2": "English translation of 你好 ( ni hao / nĭ hăo ) - hello in Chinese",
                "mainField3": "@#$#%$^^%&**&(_     !@#$@#$~~~```"
            }
        });
        console.log('startOnHmiLevelFull','show result',result);

    }
}

let now = Date.now();
App1.appConfig = {
    "appName": '1',
    "appID": "9991",
    "fullAppID": "9991",
    "appHMIType": [
        "DEFAULT",
        "MEDIA"
    ],
    "hmiDisplayLanguageDesired": "EN-US",
    "isMediaApplication": false,
    "languageDesired": "EN-US",
    "syncMsgVersion": {
        "majorVersion": 5,
        "minorVersion": 1,
        "patchVersion": 0
    }
};

module.exports = App1;