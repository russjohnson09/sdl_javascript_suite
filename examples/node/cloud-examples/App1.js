const SDL = require('sdl-node');
console.log('SDL', SDL);


const SdlManager = SDL.manager.SdlManager;

/**
 * 
 */
class App1 {


    constructor({wsConnection,appConfig}) {
        let staticInsance = this.constructor;
        this.appConfig = appConfig || staticInsance.appConfig;
        this.wsConnection = wsConnection;
    }

    static async create(opts) {
        console.log(`create app with options`,opts);
        let app = new this(opts);


        await app.init();

        return app;

    }


    async init() {


        let sdlManager = await SdlManager.create({
            sdlConnectionPrimary: this.wsConnection
            ,appConfig: this.appConfig
        });

        sdlManager.on(SdlManager.EVENTS.APP_REGISTERED, (data) => {
            console.log(SdlManager.EVENTS.APP_REGISTERED,data);
        })

        await sdlManager.initApp();
    }
}

App1.appConfig = {
    "appName": 'App1',
    "appID": "111111",
    "fullAppID": "111111",
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