/*global fluid, flock*/

(function () {
    "use strict";

    fluid.registerNamespace("ork");

    fluid.defaults("ork.oscSynthMapper", {
        gradeNames: ["fluid.eventedComponent", "autoInit"],

        oscInputs: {
            "/x": {
                path: "ampTriangle1.freq",
                mul: 10,
                add: 0
            },

            "/y": {
                path: "ampTriangle2.freq",
                mul: 6,
                add: 0
            },

            "/knob/0": {
                path: "carrier1.freq",
                mul: 20
            },

            "/knob/1": {
                path: "carrier2.freq",
                mul: 20
            },

            "/knob/2": {
                path: "carrier3.freq",
                mul: 20
            },

            "/knob/3": {
                path: "carrier1.freq",
                mul: 20
            }
        },

        components: {
            synth: undefined
        },

        invokers: {
            set: {
                funcName: "ork.oscSynthMapper.set",
                args: ["{that}.synth", "{arguments}.0", "{that}.options.oscInputs"]
            }
        }
    });

    ork.oscSynthMapper.set = function (synth, msg, inputSpecs) {
        var spec = inputSpecs[msg.address];
        if (!spec) {
            return;
        }

        var add = spec.add === undefined ? 0 : spec.add,
            mul = spec.mul === undefined ? 1 : spec.mul,
            scaled = msg.args[0] * mul + add;

        synth.set(spec.path, scaled);

        return scaled;
    };


}());
