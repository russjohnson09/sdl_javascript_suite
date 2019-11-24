import { TransportManagerBase } from './../../../js/src/transport/TransportManagerBase.js';
import { SdlPsm } from './../../../js/src/transport/SdlPsm.js';
const WebSocket = require('websocket').w3cwebsocket;

class WebsocketClientTransportManager extends TransportManagerBase
{


    constructor(config, transportListener) {

        super(config,transportListener);
        console.log(`TestTransportManager`,{config,transportListener});
        this._config = config;
        this._transportListener = transportListener;

        this.wsUrl =  `ws://localhost:9090`;

        this.sdlPsm = new SdlPsm();
    }


    start() {
        console.log(`transport manager init connection to core via ws`);

        this.init();
    }

    init() {
        const self = this;
        this.ws  = new WebSocket(this.wsUrl);

        this.ws.onopen = function() {
            console.log(`connected to core`,self._transportListener);
            self._transportListener.onTransportConnected();
        };

        this.ws.onerror = function(error) {
            console.error(`Failed to connect`,error);
        };
        this._initIncomingDataHandler();
    }


    // 0|core_node_app_6_0_0  | got core data DEBUG [20:54:03,187][RPCHandlerImpl]                     Message to convert: protocol 1; json ERROR [20:54:03,187][RPCHandlerImpl] Message received: UNSUPPORTED_VERSION
    sendPacket(packet) {
        let bytes = packet.constructPacket();
        this.ws.send(bytes);
    }


    _initIncomingDataHandler() {

        let self = this;

        self.ws.addEventListener('message', (msg) => {
            self._handleIncoming(msg);
        });
    }

    _handleIncoming(msg) {
        const self = this;
        let uint8 = new Uint8Array(msg.data);
        for (let byte of uint8) {
            self._handleByte(byte);
        }
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


export { WebsocketClientTransportManager };