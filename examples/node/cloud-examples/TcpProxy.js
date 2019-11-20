// import WsAppComponent from "../../../../react_frontend/src/components/core/ws/WsAppComponent";
const net = require('net');
const W3CWebSocket = require('websocket').w3cwebsocket;

module.exports = 
class TcpProxyOnly {
    constructor (opts) {
        this.opts = opts;

        this.coreHost = opts.coreHost || `192.168.1.57`;
        this.corePort = opts.corePort || `12346`;

        this.wsUrl = opts.wsUrl || `ws://localhost:4040/app1`;
    }


    static async create(opts) {

        let obj = new this(opts);

        await obj.init();
        // this.init(opts);
        return obj;
    }



    async initIncomingDataHandler()
    {
        let self = this;

        let timeout;

        // self.psm = new SdlPsm();


        this.sdlCoreConnection.on('data', async chunk => {

            if (self.ws) {
                self.ws.send(chunk);
            }

        });

    }

    async init() {
        let self = this;

        let { coreHost, corePort } = self;
        let sdlCoreConnection = new net.Socket();
        sdlCoreConnection.connect(corePort, coreHost);

        self.sdlCoreConnection = sdlCoreConnection;

        await self.initIncomingDataHandler();

        self.ws = await self.initWsConnection();


        this.ws.on('message', async (msg) => {
            self.sdlCoreConnection.write(msg);
        });
    }



    /**
     * TODO on disconnect send unregister and disconnect to core.
     */
    async initWsConnection() {
        let self = this;
        let client = new W3CWebSocket(this.wsUrl);

        return new Promise(function (resolve) {
            client.onopen = function () {
                console.log('WsAppManager WebSocket Client Connected');
                resolve(client);
            };

            client.onclose = function() {
                console.log('WsAppManager WebSocket Client disconnect');
            }
        });
    }



}