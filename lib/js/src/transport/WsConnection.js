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
        console.log(`_handleIncoming`,evt.data);
        // let arrayBuffer = await new Response(data.data).arrayBuffer();   //: ArrayBuffer
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
        console.log(`WsConnection send data`,data,this._connection);
        this._connection.send(data);
    }
}


export { WsConnection };