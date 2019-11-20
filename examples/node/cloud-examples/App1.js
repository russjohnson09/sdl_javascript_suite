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

        let sdlManagerOpts = {
            sdlConnectionPrimary: this.wsConnection
            ,appConfig: this.appConfig
        };
        console.log(`init manager`,{sdlManagerOpts});

        let sdlManager = await SdlManager.create(sdlManagerOpts);

        sdlManager.on(SdlManager.EVENTS.APP_REGISTERED, (data) => {
            console.log(SdlManager.EVENTS.APP_REGISTERED,data);
        });

        console.log(`start app`);
        await sdlManager.startApp();
    }

    async startApp() {
        
    }
}

let now = Date.now();
App1.appConfig = {
    "appName": 'App1' + now,
    "appID": "111111" + now,
    "fullAppID": "111111" + now,
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