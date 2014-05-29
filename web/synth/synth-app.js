/*global fluid, flock*/

(function () {
    "use strict";

    fluid.registerNamespace("ork.networkSynth");

    fluid.defaults("ork.networkSynth.app", {
        gradeNames: ["fluid.viewComponent", "autoInit"],

        components: {
            synth: {
                type: "ork.eightSynth"
            },

            oscNode: {
                type: "ork.networkSynth.oscNode",
                options: {
                    nodeType: "synth",
                    listeners: {
                        onOpen: {
                            func: "{synth}.play"
                        },

                        onMessage: {
                            func: "{inputMapper}.set",
                            args: ["{arguments}.0"]
                        },

                        onClose: {
                            func: "{synth}.pause"
                        }
                    }

                }
            },

            inputMapper: {
                type: "ork.oscSynthMapper",
                options: {
                    components: {
                        synth: "{app}.synth"
                    }
                }
            }
        }
    });

}());
