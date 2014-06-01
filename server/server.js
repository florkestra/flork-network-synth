var osc = require("osc"),
    http = require("http"),
    express = require("express"),
    WebSocket = require("ws"),
    config = require(__dirname + "/config.json");

var appResources = config.webRoot.indexOf("/") === 0 ? config.webRoot : __dirname + "/" + config.webRoot,
    app = express(),
    server = app.listen(config.port),
    wss = new WebSocket.Server({
        server: server
    });

app.use("/", express.static(appResources));
console.log((new Date).toString(), "Server listening on port " + config.port);

var state = {
    synthSocket: null,
    controllerSockets: []
};

var handleNewOSCPort = function (socket, msg, serverState) {
    if (msg === "synth") {
        console.log((new Date).toString(), "A synth was registered.");
        serverState.synthSocket = socket;
    } else {
        console.log((new Date).toString(), "A controller was registered.");
        serverState.controllerSockets.push(socket);
    }
};

wss.on("connection", function (socket) {
    socket.on("message", function (data) {
        // Check to see if this is a new connection.
        if (typeof data === "string") {
            handleNewOSCPort(socket, data, state);
            return;
        }

        // Forward the message on to the synth if it's ready.
        if (state.synthSocket) {
            state.synthSocket.send(data, {
                binary: true
            });
        }
    });
});
