
import { SdlSession } from './../../../js/src/session/SdlSession.js';
import { SdlProtocol } from './../protocol/SdlProtocol.js';

class WsClientSession extends SdlSession {
   

    _setupSdlProtocol() {
        return new SdlProtocol(this._baseTransportConfig, this._sdlProtocolListener);
    }
    
}


export { WsClientSession };