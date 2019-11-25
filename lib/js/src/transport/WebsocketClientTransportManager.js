import { TransportManagerBase } from './TransportManagerBase.js';
import { SdlPsm } from './SdlPsm.js';

class WebsocketClientTransportManager extends TransportManagerBase
{


    constructor(config, transportListener) {

        super(config,transportListener);
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
        new Response(msg.data).arrayBuffer().then((arrayBuffer) => {
            let uint8 = new Uint8Array(arrayBuffer);
            console.log(`_handleIncoming`,uint8);
            for (let byte of uint8) {
                self._handleByte(byte);
            }
        });  

    }

    _handleByte(byte) {
        let self = this;
        let sdlPsm = self.sdlPsm;

        let success = sdlPsm.handleByte(byte);
        if (!success) {
            console.error(`failed`,sdlPsm);
        }
        let isFinished = sdlPsm.getState() === SdlPsm.FINISHED_STATE;

        if (isFinished) {
            const packet = sdlPsm.getFormedPacket();
            sdlPsm.reset();
            console.log(`_handleByte`,`onPacketReceived`);
            self.onPacketReceived(packet);
        }
    }
}


export { WebsocketClientTransportManager };