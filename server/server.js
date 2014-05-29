var osc = require("osc"),
    http = require("http"),
    express = require("express"),
    WebSocket = require("ws"),
    config = require(__dirname + "/config.json");

var appResources = __dirname + "/../web",
    app = express(),
    server = app.listen(config.port),
    wss = new WebSocket.Server({
        server: server
    });

app.use("/", express.static(appResources));
console.log("Server listening on port " + config.port);

var state = {
    synthSocket: null,
    controllerSockets: []
};

var handleNewOSCPort = function (socket, msg, serverState) {
    if (msg === "synth") {
        console.log("A synth was registered.");
        serverState.synthSocket = socket;
    } else {
        console.log("A controller was registered.");
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

        // Forward the message on the synth if it's ready.
        if (state.synthSocket) {
            state.synthSocket.send(data, {
                binary: true
            });
        }
    });
});
