// import WsAppComponent from "../../../../react_frontend/src/components/core/ws/WsAppComponent";
const net = require('net');

module.exports =
 class TcpProxy {

    constructor(opts)
    {
        this.opts = opts;

        this.coreHost = opts.coreHost || `192.168.1.57`;
        this.corePort = opts.corePort || `12346`;

        // this.coreHost = `m.sdl.tools`;
        // this.corePort = `19941`;

    }


    static async create(opts) {

        console.log(`TcpProxyOnly Create`);
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

            // console.log(`TcpProxyOnly`,data)
            console.log(`TcpProxyOnly got data`,chunk);
            //send it right back.
            self.ws.send(chunk);
            // return self.readFromTransport(chunk);

        });

        this.ws.on('message', async (msg) => {
            console.log(`TcpProxyOnly got message from app`,msg);

            self.sdlCoreConnection.write(msg);
        })
    }

    async initEventsHandler()
    {

    }

    // async initApp()
    // {
    //     console.log(`TcpProxyOnly initApp`)
    //     this.sdlCoreConnection.write(this.registerAppInterfaceMessage);

    // }

    async init() {
        let self = this;
        this.ws = this.opts.ws;
        //send this message immediately.
        this.registerAppInterfaceMessage = this.opts.registerAppInterfaceMessage;



        let { coreHost, corePort } = self;
        let sdlCoreConnection = new net.Socket();
        sdlCoreConnection.connect(corePort, coreHost);

        this.sdlCoreConnection = sdlCoreConnection;

        await this.initIncomingDataHandler();

        // await this.initEventsHandler();

        // await this.initApp();


        // this.ws.on('message', (msg) => {

        // });

    }


}