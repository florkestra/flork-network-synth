/*global fluid, osc*/

(function () {
    "use strict";

    fluid.registerNamespace("ork.networkSynth");

    fluid.defaults("ork.networkSynth.xy", {
        gradeNames: ["fluid.viewComponent", "autoInit"],

        oscBundle: {
            timeTag: osc.timeTag(0),
            packets: [
                {
                    address: "/x",
                    args: [0]
                },
                {
                    address: "/y",
                    args: [0]
                }
            ]
        },

        components: {
            oscNode: {
                type: "ork.networkSynth.oscNode",
                options: {
                    nodeType: "controller"
                }
            }
        },

        invokers: {
            sendValue: {
                funcName: "ork.networkSynth.sendMouseCoordinates",
                args: [
                    "{arguments}.0",
                    "{that}.dom.container",
                    "{that}.oscNode.port",
                    "{that}.options.oscBundle"
                ]
            }
        },

        listeners: {
            onCreate: [
                {
                    "this": "{that}.container",
                    method: "mousemove",
                    args: ["{that}.sendValue"]
                },
                {
                    "this": "{that}.container",
                    method: "on",
                    args: ["touchmove", "{that}.sendValue"]
                }
            ]
        }
    });

    ork.networkSynth.sendMouseCoordinates = function (moveEvent, el, oscPort, oscBundle) {
        if (moveEvent.pageX === undefined) {
            moveEvent = moveEvent.originalEvent;
        }

        var w = moveEvent.target.clientWidth,
            h = moveEvent.target.clientHeight,
            x = moveEvent.pageX / w,
            y = moveEvent.pageY / h;

        oscBundle.packets[0].args[0] = x;
        oscBundle.packets[1].args[0] = y;

        oscPort.send(oscBundle);

        return false;
    };

}());
