const App1 = require('./App1');
/**
 * 
 */
class App2 extends App1 {

    async startOnHmiLevelFull() {
        let self = this;
        console.log('startOnHmiLevelFull');
        let result = await self.sdlManager.sendRPCJson({
            "method": "Show",
            "params": {
                "mainField1": "Hello I am app 2",
                "mainField2": '' + new Date(),
            }
        });

    }
}

let now = Date.now();
App1.appConfig = {
    "appName": '2',
    "appID": "9992",
    "fullAppID": "9992",
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

module.exports = App2;