
import { SdlProtocolBase } from '../protocol/SdlProtocolBase.js';
import { TestTransportManager } from './TestTransportManager';


class TestSdlProtocol extends SdlProtocolBase {
    /**
     * @param {TransportConfigBase} baseTransportConfig 
     * @param {SdlSessionListener} sdlSessionListener 
     */
    constructor (baseTransportConfig, sdlSessionListener) {
        super(baseTransportConfig, sdlSessionListener);
    }

    _createTransportManager() {
        // this._transportConfig = baseTransportConfig;
        // this._sdlProtocolListener = sdlProtocolListener;
        // this._transportManager = new TestTransportManager(this._transportConfig, this._sdlProtocolListener);
        // this._transportManager = new TestTransportManager(this._transportConfig, this._sdlProtocolListener);
        this._transportManager =  new TestTransportManager(this._transportConfig, this);


    }
}

export { TestSdlProtocol };