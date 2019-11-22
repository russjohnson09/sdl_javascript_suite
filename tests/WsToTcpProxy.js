//node tests/WsToTcpProxy.js

const TcpProxy = require('./TcpProxy');


const express = require('express');
let app = express();
const enableWs = require('express-ws');
//https://stackoverflow.com/questions/22429744/how-to-setup-route-for-websocket-server-in-express
enableWs(app);


app.ws('/', (ws, req) => {
    TcpProxy.create({ ws });
});



const PORT = process.env.PORT || 9090;
let server = app.listen(PORT, async function() {
    console.log(`app is listening`);

});