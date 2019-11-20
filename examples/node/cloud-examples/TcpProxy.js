// import WsAppComponent from "../../../../react_frontend/src/components/core/ws/WsAppComponent";
const net = require('net');
const W3CWebSocket = require('websocket').w3cwebsocket;

module.exports = 
class TcpProxyOnly {
    constructor (opts) {
        this.opts = opts;

        this.coreHost = opts.coreHost || `192.168.1.57`;
        this.corePort = opts.corePort || `12346`;

        this.wsUrl = opts.wsUrl || `ws://127.0.0.1:9090/app1`;
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

        // self.ws = await self.initWsConnection();
        let client = new W3CWebSocket(this.wsUrl);
        self.ws = client;

        self.ws.addEventListener('message', async (evt) => {
            self.sdlCoreConnection.write(new Buffer(evt.data));
        });

        client.onclose = function(e) {
            console.log('WsAppManager WebSocket Client disconnect',e.reason,self.wsUrl);
        };

        client.onerror = function(e) {
            console.error('error',e,e.message);
        };
    }



    /**
     * TODO on disconnect send unregister and disconnect to core.
     */
    // async initWsConnection() {
    //     let self = this;
    //     let client = new W3CWebSocket(this.wsUrl);

    //     return new Promise(function (resolve) {
    //         client.onopen = function () {
    //             console.log('WsAppManager WebSocket Client Connected');
    //             resolve(client);
    //         };

    //         client.onclose = function() {
    //             console.log('WsAppManager WebSocket Client disconnect');
    //         }
    //     });
    // }



}