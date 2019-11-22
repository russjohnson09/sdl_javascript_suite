import { SdlPsm } from './../transport/SdlPsm.js';
import { TransportManagerBase } from '../transport/TransportManagerBase.js';
import websocket from 'websocket';
const W3CWebSocket = websocket.w3cwebsocket;

class TestTransportManager extends TransportManagerBase
{


    constructor(config, transportListener) {

        super(config,transportListener);
        console.log(`TcpTransportManager`,{config,transportListener});
        this._config = config;
        this._transportListener = transportListener;

        this.wsUrl =  `ws://localhost:9090`;

        this.sdlPsm = new SdlPsm();
    }


    start() {
        console.log(`transport manager init connection to core via tcp`);

        this.init();
    }

    async init() {
        const self = this;
        this.sdlCoreConnection = new W3CWebSocket(this.wsUrl);

        this.sdlCoreConnection = sdlCoreConnection;

        this.sdlCoreConnection.onopen = function() {
            console.log(`connected to core`);
            self._transportListener.onTransportConnected();
        };
        this._initIncomingDataHandler();
    }


    // 0|core_node_app_6_0_0  | got core data DEBUG [20:54:03,187][RPCHandlerImpl]                     Message to convert: protocol 1; json ERROR [20:54:03,187][RPCHandlerImpl] Message received: UNSUPPORTED_VERSION
    sendPacket(packet) {
        console.log(`from app`);
        let bytes = packet.constructPacket();
        this.sdlCoreConnection.send(bytes);
    }


    _initIncomingDataHandler() {

        let self = this;

        self.ws.addEventListener('message', (msg) => {
            self._handleIncoming(msg);
        });

        let timeout;
        this.sdlCoreConnection.on('data', async chunk => {
            for (let byte of chunk) {
                self._handleByte(byte);
            }
        });
    }

    _handleIncoming(msg) {
        const self = this;
        new Response(msg.data).arrayBuffer().then((arrayBuffer) => {
            let uint8 = new Uint8Array(arrayBuffer);
            for (let byte of uint8) {
                self._handleByte(byte);
            }
        });

    }

    _handleByte(byte) {
        // console.log(`handleByte`,byte);
        let self = this;
        let sdlPsm = self.sdlPsm;

        let success = sdlPsm.handleByte(byte);
        if (!success) {
            console.error(`failed`,sdlPsm);
            process.exit(1);
        }
        let isFinished = sdlPsm.getState() === SdlPsm.FINISHED_STATE;

        if (isFinished) {
            const packet = sdlPsm.getFormedPacket();
            sdlPsm.reset();
            self.onPacketReceived(packet);
        }
    }
}


export { TestTransportManager };