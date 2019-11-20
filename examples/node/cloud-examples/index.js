//https://github.com/inconshreveable/ngrok/issues/465
let PORT = process.env.PORT || 9090;
require = require("esm")(module/*, options*/);

const express = require('express');
const app = express();
const enableWs = require('express-ws');
const App1 = require('./App1');
const App2 = require('./App2');

const TcpProxy = require('./TcpProxy');

let server;

enableWs(app);

app.ws('/app1', (connection, req) => {
    console.log(`receviced connection`,connection);
    App1.create({wsConnection: connection});
});




app.ws('/app2', (connection, req) => {
    App2.create({wsConnection: connection});
});



server = app.listen(PORT, async function() {
    console.log(`app is listening on PORT`,PORT);

    tcpProxy();
    
});


async function tcpProxy() {
    console.log(`connect using tcp proxy`);

    // await (async function() {
    //     let wsUrl = `ws://127.0.0.1:9090/app1`;

    //     await TcpProxy.create({wsUrl});
    // })();

    // await (async function() {
    //     let wsUrl = `ws://127.0.0.1:9090/app2`;

    //     await TcpProxy.create({wsUrl});
    // })();


    //./ngrok http 9090
    await (async function() {
        // let wsUrl = `ws://10f7d549.ngrok.io/app1`;
        // let wsUrl = `ws://localhost:4040/app1`;
        let wsUrl = `ws://5f609201.ngrok.io/app2`;


        await TcpProxy.create({wsUrl});
    })();

}