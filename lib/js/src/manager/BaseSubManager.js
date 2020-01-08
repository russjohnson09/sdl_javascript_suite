/*
* Copyright (c) 2020, Livio, Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* Redistributions of source code must retain the above copyright notice, this
* list of conditions and the following disclaimer.
*
* Redistributions in binary form must reproduce the above copyright notice,
* this list of conditions and the following
* disclaimer in the documentation and/or other materials provided with the
* distribution.
*
* Neither the name of the Livio Inc. nor the names of its contributors
* may be used to endorse or promote products derived from this software
* without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

/**
 * BaseSubManager handles the basic state transitions from
 * SETTING_UP to READY or ERROR. It is extended by other managers
 * like FileManager.
 */
class BaseSubManager {
    /**
     * @param {Object} internalInterface - Class that implements sendRPC.
     */
    constructor (internalInterface) {
        this._internalInterface = internalInterface;
        this._transitionToState(SETTING_UP);
    }

    /**
	 * Starts up a BaseSubManager, and calls provided callback once BaseSubManager is done setting up or failed setup.
	 * @param {Function} onComplete - Listener that is called once the BaseSubManager's state is READY, LIMITED, or ERROR
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
     * Transition and inform onComplete callback if defined.
     * @param {Number} state
     */
    _transitionToState (state) {
        this._state = state;
        if ((state === READY || state === LIMITED || state === ERROR) && this.onComplete  !== null) {
            this._onComplete(state === READY || state === LIMITED);
            this._onComplete = null;
        }
    }

    /**
     * Returns the current state.
     * @return {Number}
     */
    getState () {
        return this._state;
    }


    /**
     * This allows the method to not be exposed to developers.
     * @param {*} connectedTransports
     * @param {*} audioStreamTransportAvail
     * @param {*} videoStreamTransportAvail
     */
    handleTransportUpdated (connectedTransports, audioStreamTransportAvail, videoStreamTransportAvail) {
        this.onTransportUpdate(connectedTransports, audioStreamTransportAvail, videoStreamTransportAvail);
    }

    /**
	 * Transport status has been updated.
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