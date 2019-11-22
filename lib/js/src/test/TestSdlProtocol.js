
import { SdlProtocolBase } from '../protocol/SdlProtocolBase.js';
import { TestTransportManager } from './TestTransportManager';


class TestSdlProtocol extends SdlProtocolBase {
    /**
     * @param {TransportConfigBase} baseTransportConfig 
     * @param {SdlSessionListener} sdlSessionListener 
     */
    constructor (baseTransportConfig, sdlSessionListener) {
        super();
    }

    _createTransportManager() {
        this._transportManager = new TestTransportManager();
    }
}

export { TestSdlProtocol };