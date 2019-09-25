// const SdlPsm = require('./lib/SdlPsm');

const { SdlManagerNode } = require('sdl-node');

class RemoteControlApp {

    static async createApp(connection) {
        let obj = new RemoteControlApp();
        obj.connection = connection;
        await obj.init();

        return obj;

    }

    async init() {
        let self = this;

        console.log(`get manager`);
        self.manager = await SdlManagerNode.createWsManager(self.connection, self.appConfig);
        console.log(`got manager`);

        self.HMI_LEVEL = null;

        self.manager.on(
            'OnHMIStatus', function(rpcResponse) {
                let params = rpcResponse.getParameters();
                console.log(`OnHMIStatus`, JSON.stringify(params));

                if (self.HMI_LEVEL === params.hmiLevel) {
                    console.log(`no hmi level change`, self.HMI_LEVEL);
                } else {
                    console.log(`new hmi level`, params.hmiLevel);
                    self.HMI_LEVEL = params.hmiLevel;
                    if (params.hmiLevel === 'FULL') {
                        self.isInFocus = true;
                        self.initAppInFocus();
                    }
                }
            }
        );

    }

    async initAppInFocus() {
        let self = this;
        if (!this.isInFocus) {
            return;
        }

        //test set and get interior data.



    }

    get appConfig() {
        return {
            appName: '1',
            appID: '1'
        };
    }

}

module.exports = RemoteControlApp;
