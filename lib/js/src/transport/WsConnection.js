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

        self.ws.addEventListener('message', (data) => {
            self._handleIncoming(data);
        });
    }

    async _handleIncoming (data) {
        let arrayBuffer = await new Response(data.data).arrayBuffer();   //: ArrayBuffer
        let uint8 = new Uint8Array(arrayBuffer);
        for (let byte of uint8) {
            self._onByte(byte);
        }
    }

    _onByte(byte) {
        for (let listener of this._listneres) {
            listener.onByte();
        }
    }

    send (data) {
        self.connection.send(data);
    }
}


export { WsConnection };