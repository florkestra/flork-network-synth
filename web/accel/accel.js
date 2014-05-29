/*global fluid, osc*/

(function () {
    "use strict";

    fluid.registerNamespace("ork.networkSynth");

    fluid.defaults("ork.networkSynth.accel", {
        gradeNames: ["fluid.viewComponent", "autoInit"],

        oscMessage: {
            address: "/accel/0",
            args: [0]
        },

        components: {
            oscNode: {
                type: "ork.networkSynth.oscNode",
                options: {
                    nodeType: "controller",
                    listeners: {
                        onOpen: {
                            funcName: "ork.networkSynth.accel.create",
                            args: ["{accel}.dom.allAccel", "{accel}.sendValue"]
                        }
                    }
                }
            }
        },

        invokers: {
            sendValue: {
                funcName: "ork.networkSynth.accel.sendValue",
                args: [
                    "{arguments}.0",
                    "{arguments}.1",
                    "{that}.oscNode.port",
                    "{that}.options.oscMessage"
                ]
            }
        },

        selectors: {
            accel0: "#moAccel",
            accel1: "#moAccelGrav"
            accel2: "#moRotation",
            allAccel: "td"
        }
    });


    ork.networkSynth.accel.sendValue = function (knobId, val, oscPort, oscMessage) {
        var knobNum = knobId[knobId.length - 1];
        oscMessage.address = "/knob/" + knobNum;
        oscMessage.args[0] = val;

        oscPort.send(oscMessage);
    };

}());
