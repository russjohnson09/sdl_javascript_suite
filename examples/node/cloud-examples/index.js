let PORT = process.env.PORT || 4040;
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

    await (async function() {
        let wsUrl = `ws://localhost:4040/app1`;

        await TcpProxy.create({wsUrl});
    })();

    await (async function() {
        let wsUrl = `ws://localhost:4040/app2`;

        await TcpProxy.create({wsUrl});
    })();

}