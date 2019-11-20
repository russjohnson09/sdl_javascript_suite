class WsConnection {
    constructor (connection) {
        this._connection = connection;

        this._listeners = [];
        this._init();
    }

    addListener(listener) {
        this._listeners.push(listener); // listen for onByte
    }

    _init () {
        const self = this;
        // message from core

        self._connection.addEventListener('message', (data) => {
            self._handleIncoming(data);
        });
    }

    async _handleIncoming (evt) {
        const self = this;
        let uint8 = new Uint8Array(evt.data);
        for (let byte of uint8) {
            self._onByte(byte);
        }
    }

    _onByte(byte) {
        for (const listener of this._listeners) {
            listener.onByte(byte);
        }
    }

    send (data) {
        this._connection.send(data);
    }
}


export { WsConnection };