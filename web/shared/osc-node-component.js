/*global fluid, flock*/

(function () {
    "use strict";

    fluid.registerNamespace("ork.networkSynth");

    fluid.defaults("ork.networkSynth.oscNode", {
        gradeNames: ["fluid.eventedComponent", "autoInit"],

        serverURL: "ws://127.0.0.1:8081",
        nodeType: "synth",

        members: {
            port: {
                expander: {
                    funcName: "ork.networkSynth.oscNode.createOSCPort",
                    args: ["{that}.options.serverURL", "{that}.events"]
                }
            }
        },

        events: {
            onOpen: null,
            onMessage: null,
            onClose: null,
            onError: null
        },

        listeners: {
            onCreate: {
                "this": "{that}.port",
                method: "open"
            },

            onOpen: {
                "this": "{that}.port.socket",
                method: "send",
                args: ["{that}.options.nodeType"]
            },

            onError: {
                funcName: "fluid.log",
                args: ["OSC Port Error: ", "{arguments}.0"]
            }
        }
    });

    ork.networkSynth.oscNode.createOSCPort = function (url, events) {
        var port = new osc.WebSocketPort({
            url: url
        });

        port.on("open", events.onOpen.fire);
        port.on("message", events.onMessage.fire);
        port.on("close", events.onClose.fire);
        port.on("error", events.onError.fire);

        return port;
    };

}());
