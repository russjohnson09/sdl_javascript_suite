// const SdlPsm = require('./lib/SdlPsm');

const { SdlManagerNode } = require('sdl-node');

class RemoteControlApp {

    static async createApp(connection, req) {
        let obj = new RemoteControlApp();
        obj.connection = connection;

        obj.req = req;

        await obj.init();

        return obj;

    }

    get ipInfo() {
        return this.req.clientIp;
    }

    async init() {
        let self = this;

        console.log(`get manager`, this.ipInfo);
        self.manager = await SdlManagerNode.createWsManager(self.connection, self.appConfig);
        console.log(`got manager`);

        self.manager.on(SdlManagerNode.EVENT_SESSION_CREATED, function(event) {
            console.log(`Created Session with id ${event.sessionID}`);
        });

        self.manager.on(SdlManagerNode.EVENT_APP_REGISTERED, function(event) {
            console.log(`Application registered`, event.application);
        });

        self.manager.on(SdlManagerNode.EVENT_RPC_RESPONSE, function(event) {
            // console.log(`Received rpc event`,event);
            let { response, rpcMethod } = event;
            console.log(`Received rpc response`, rpcMethod, JSON.stringify(response.getParameters()).substr(0, 100));
        });

        self.manager.on(SdlManagerNode.EVENT_RPC_NOTIFICATION, function(event) {
            // console.log(`Received notification from core`,event);
            let { response, rpcMethod } = event;
            console.log(`Received notification`, rpcMethod, JSON.stringify(response.getParameters()).substr(0, 100));

        });

        self.HMI_LEVEL = null;

        self.manager.on(
            SdlManagerNode.EVENT_ON_HMI_STATUS, function({ response }) {
                let params = response.getParameters();
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
        if (!self.isInFocus) {
            return;
        }

        // let alertParameters = {
        //     'alertText1': `Hello ${self.ipInfo}`,
        //     duration: 3000
        // };
        //
        // console.log(`Alert`, alertParameters);
        //
        // let alertResponse = await self.manager.sendRPCJson(
        //     `Alert`,
        //     alertParameters
        // );

        await self.manager.sendRPCJson(
            'Show',
            {
                'mainField1': `Hello ${self.ipInfo}`,
            }
        );

        await self.manager.sendRPCJson(
            'Show',
            {
                'mainField1': `Hello 1`,
            }
        );

        let promises = [];
        for (let i = 0; i < 100; i++) {
            let promise = self.manager.sendRPCJson(
                'Show',
                {
                    'mainField1': `Hello ${i}`,
                }
            );
            promises.push(promise);
        }
        let results = await Promise.all(promises);

        let successCount = 0;
        for (let result of results) {
            let parameters = result.getParameters();
            let { resultCode, success } = parameters;
            if (!success) {
                console.error(parameters);
            } else {
                successCount++;
            }
        }
        console.log(`${successCount} out of ${results.length} successful`);

        await this.testSetInteriorClimate();

        //test set and get interior data.

    }

    async testSetInteriorClimate() {

    }

    get appConfig() {
        return {
            appName: '1',
            appID: '1'
        };
    }

}

module.exports = RemoteControlApp;
