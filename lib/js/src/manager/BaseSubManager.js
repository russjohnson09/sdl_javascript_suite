
import { CompletionListener } from './CompletionListener.js';

class BaseSubManager {
    constructor (internalInterface) {
        this._internalInterface = internalInterface;
        this._transitionToState(SETTING_UP);
    }

    /**
	 * Starts up a BaseSubManager, and calls provided callback once BaseSubManager is done setting up or failed setup.
	 * @param {CompletionListener} listener - Listener that is called once the BaseSubManager's state is READY, LIMITED, or ERROR
	 */
    start (onComplete = null) {
        this._onComplete = onComplete;
        const state = this.getState();
        if ((state === READY || state === LIMITED || state === ERROR) && this.onComplete  !== null) {
            this._onComplete(state === READY || state === LIMITED);
            this._onComplete = null;
        }
    }

    /**
	 * Called when manager is being torn down.
	 */
    dispose () {
        this._transitionToState(SHUTDOWN);
    }


    /**
     * @param {*} state
     */
    _transitionToState (state) {
        this._state = state;
        if ((state === READY || state === LIMITED || state === ERROR) && this.onComplete  !== null) {
            this._onComplete(state === READY || state === LIMITED);
            this._onComplete = null;
        }
    }

    /**
     * Returns the current state
     * @return {Number}
     */
    getState () {
        return this._state;
    }


    /**
     * This allows the method to not be exposed to developers
     * @param {*} connectedTransports
     * @param {*} audioStreamTransportAvail
     * @param {*} videoStreamTransportAvail
     */
    handleTransportUpdated (connectedTransports, audioStreamTransportAvail, videoStreamTransportAvail) {
        this.onTransportUpdate(connectedTransports, audioStreamTransportAvail, videoStreamTransportAvail);
    }

    /**
	 * Transport status has been updated
	 * @param connectedTransports currently connected transports
	 * @param audioStreamTransportAvail if there is a transport that could be used to carry the
	 *                                     audio service
	 * @param videoStreamTransportAvail if there is a transport that could be used to carry the
	 *                                     video service
	 */
    onTransportUpdate (connectedTransports, audioStreamTransportAvail, videoStreamTransportAvail) {

    }
}

const SETTING_UP = BaseSubManager.SETTING_UP = 0x00;
const READY = BaseSubManager.READY = 0x30;
const LIMITED = BaseSubManager.LIMITED = 0x50;
const SHUTDOWN = BaseSubManager.SHUTDOWN = 0x80;
const ERROR = BaseSubManager.ERROR = 0xC0;

export { BaseSubManager };