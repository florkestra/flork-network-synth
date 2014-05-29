/*global fluid, osc*/

(function () {
    "use strict";

    fluid.registerNamespace("ork.networkSynth");

    fluid.defaults("ork.networkSynth.xy", {
        gradeNames: ["fluid.viewComponent", "autoInit"],

        components: {
            oscNode: {
                type: "ork.networkSynth.oscNode",
                options: {
                    nodeType: "controller"
                }
            }
        }
    });
}());
