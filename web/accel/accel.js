/*global fluid, osc*/

(function () {
    "use strict";

    fluid.registerNamespace("ork.networkSynth");

    fluid.defaults("ork.networkSynth.accel", {
        gradeNames: ["fluid.viewComponent", "autoInit"],

        components: {
            oscNode: {
                type: "ork.networkSynth.oscNode",
                options: {
                    nodeType: "controller",
                    listeners: {
                        onOpen: {
                            "this": "window",
                            method: "addEventListener",
                            args: ["devicemotion", "{accel}.sendValue", false]
                        }
                    }
                }
            }
        },

        invokers: {
            sendValue: {
                funcName: "ork.networkSynth.accel.sendValues",
                args: [
                    "{arguments}.0",
                    "{that}.oscNode.port"
                ]
            }
        }
    });

    ork.networkSynth.accel.sendValues = function (event, oscPort, oscMessage) {
        var accel = {
            x: event.accelerationIncludingGravity.x,
            y: event.accelerationIncludingGravity.y,
            z: event.accelerationIncludingGravity.z
        };

        var accelBundle = ork.networkSynth.accel.bundleForValues("/accelerometer", accel);
        oscPort.send(accelBundle);

        var orient = {
            alpha: event.rotationRate.alpha,
            beta: event.rotationRate.beta,
            gamma: event.rotationRate.gamm
        };

        var orientBundle = ork.networkSynth.accel.bundleForValues("/orientation", accel);
        oscPort.send(orientBundle);
    };

    ork.networkSynth.accel.bundleForValues = function (addressPrefix, obj) {
        var bundle = {
            timeTag: osc.timeTag(0),
            packets: []
        };

        for (var prop in obj) {
            var val = obj[prop];
            bundle.packets.push({
                address: addressPrefix + "/" + prop,
                args: [val]
            });
        }

        return bundle;
    };

}());
