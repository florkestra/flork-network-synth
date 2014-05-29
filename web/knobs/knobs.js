/*global fluid, osc*/

(function () {
    "use strict";

    fluid.registerNamespace("ork.networkSynth");

    fluid.defaults("ork.networkSynth.knobs", {
        gradeNames: ["fluid.viewComponent", "autoInit"],

        oscMessage: {
            address: "/knob/0",
            args: [0]
        },

        components: {
            oscNode: {
                type: "ork.networkSynth.oscNode",
                options: {
                    nodeType: "controller",
                    listeners: {
                        onOpen: {
                            funcName: "ork.networkSynth.knobs.create",
                            args: ["{knobs}.dom.allKnobs", "{knobs}.sendValue"]
                        }
                    }
                }
            }
        },

        invokers: {
            sendValue: {
                funcName: "ork.networkSynth.knobs.sendValue",
                args: [
                    "{arguments}.0",
                    "{arguments}.1",
                    "{that}.oscNode.port",
                    "{that}.options.oscMessage"
                ]
            }
        },

        selectors: {
            knob0: "#knob0",
            knob1: "#knob1",
            knob2: "#knob2",
            knob3: "#knob3",
            allKnobs: "input"
        }
    });

    ork.networkSynth.knobs.create = function (knobEls, onChange) {
        var knobs = [];
        knobEls.each(function (i, knobEl) {
            var knob = new Knob(knobEl, new Ui.P2, function (val) {
                onChange(knobEl.id, val);
            });
        });

        return knobs;
    };

    ork.networkSynth.knobs.sendValue = function (knobId, val, oscPort, oscMessage) {
        var knobNum = knobId[knobId.length - 1];
        oscMessage.address = "/knob/" + knobNum;
        oscMessage.args[0] = val;

        oscPort.send(oscMessage);
    };

}());
