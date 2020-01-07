
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
    start (listener) {
        this._completionListener = listener;
        const state = this.getState();
        if ((state === READY || state === LIMITED || state === ERROR) && this._completionListener  !== null) {
            this._completionListener.onComplete(state === READY || state === LIMITED);
            this._completionListener = null;
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
        if ((state === READY || state === LIMITED || state === ERROR) && this._completionListener !== null) {
            this._completionListener.onComplete(state === READY || state === LIMITED);
            this._completionListener = null;
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

// /**
//  * <strong>BaseSubManager</strong> <br>
//  *
//  * Note: This class is extended by SubManagers <br>
//  *
//  * It is broken down to these areas: <br>
//  *
//  * 1. <br>
//  */
// public abstract class BaseSubManager {

// 	// states - if this gets more complicated we can move elsewhere
// 	private int state;
// 	private final Object STATE_LOCK = new Object();
// 	public static final int SETTING_UP = 0x00, READY = 0x30, LIMITED = 0x50, SHUTDOWN = 0x80, ERROR = 0xC0;
// 	protected final ISdl internalInterface;
// 	private CompletionListener completionListener;



// 	/**
// 	 * Starts up a BaseSubManager, and calls provided callback once BaseSubManager is done setting up or failed setup.
// 	 * @param listener CompletionListener that is called once the BaseSubManager's state is READY, LIMITED, or ERROR
// 	 */
// 	public void start(CompletionListener listener){
// 		this.completionListener = listener;
// 		int state = getState();
// 		if((state == READY || state == LIMITED || state == ERROR) && completionListener != null){
// 			completionListener.onComplete(state == READY || state == LIMITED);
// 			completionListener = null;
// 		}
// 	}

// 	/**
// 	 * <p>Called when manager is being torn down</p>
// 	 */
// 	public void dispose(){
// 		transitionToState(SHUTDOWN);
// 	}

// 	protected void transitionToState(int state) {
// 		synchronized (STATE_LOCK) {
// 			this.state = state;
// 		}
// 		if((state == READY || state == LIMITED || state == ERROR) && completionListener != null ){
// 			completionListener.onComplete(state == READY || state == LIMITED);
// 			completionListener = null;
// 		}
// 	}


// 	//This allows the method to not be exposed to developers
// 	protected void handleTransportUpdated(List<TransportRecord> connectedTransports, boolean audioStreamTransportAvail, boolean videoStreamTransportAvail){
// 		this.onTransportUpdate(connectedTransports,audioStreamTransportAvail,videoStreamTransportAvail);
// 	}

// 	/**
// 	 * Transport status has been updated
// 	 * @param connectedTransports currently connected transports
// 	 * @param audioStreamTransportAvail if there is a transport that could be used to carry the
// 	 *                                     audio service
// 	 * @param videoStreamTransportAvail if there is a transport that could be used to carry the
// 	 *                                     video service
// 	 */
// 	protected void onTransportUpdate(List<TransportRecord> connectedTransports, boolean audioStreamTransportAvail, boolean videoStreamTransportAvail){}
// }
