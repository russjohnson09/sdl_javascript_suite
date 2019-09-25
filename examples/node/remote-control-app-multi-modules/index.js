const express = require('express');
const enableWs = require('express-ws');
const RemoteControlApp = require('./RemoteControlApp');

/**
 * Example app listening on port 2004
 * with appID 1 and appName 1.
 *
 * Using ngrok to expose the 2004 port and using
 * smartdevicelink.com/manticore to test.
 *
 * Add Cloud or Embedded App with ws://<ngork-forword-tcp>
 *     appID 1 and nickname 1.
 */
(async function() {

    let app = express();
    // const expressip = require('express-ip');
    // app.use(expressip().getIpInfoMiddleware);

    const requestIp = require('request-ip');
    app.use(requestIp.mw());

    let port = process.env.PORT || 2004;

    let server = app.listen(port, async function() {
        enableWs(app, server);
        app.ws('/', async(ws, req) => {

            let app = await RemoteControlApp.createApp(ws,req);
        });

    });



})();

