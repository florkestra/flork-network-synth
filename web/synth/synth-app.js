/*global fluid, flock*/

(function () {
    "use strict";

    fluid.registerNamespace("ork.networkSynth");

    fluid.defaults("ork.networkSynth.app", {
        gradeNames: ["fluid.viewComponent", "autoInit"],

        components: {
            oscNode: {
                type: "ork.networkSynth.oscNode",
                options: {
                    nodeType: "synth"
                }
            }
        }
    });

}());
