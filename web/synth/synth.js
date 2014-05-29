(function () {
    "user strict";

    var globalFreq = 110;

    var ork = fluid.registerNamespace("ork");

    fluid.defaults("ork.eigthSynth", {
        gradeNames: ["flock.synth", "autoInit"],

        synthDef: [
            {
                ugen: "flock.ugen.sinOsc",
                freq: globalFreq * 8,
                mul: {
                    ugen: "flock.ugen.triOsc",
                    freq: 0.5,
                    mul: {
                        ugen: "flock.ugen.triOsc",
                        freq: 3.0,
                        mul: {
                            ugen: "flock.ugen.sinOsc",
                            freq: 3.01,
                            mul: 0.05
                        }

                    }
                }
            },
            {
                ugen: "flock.ugen.sinOsc",
                freq: (globalFreq + 54.81) * 8,
                mul: {
                    ugen: "flock.ugen.triOsc",
                    freq: 0.5,
                    mul: {
                        ugen: "flock.ugen.triOsc",
                        freq: 3.0,
                        mul: {
                            ugen: "flock.ugen.sinOsc",
                            freq: 3.01,
                            mul: 0.05
                        }
                    }
                }
            },
            {
                ugen: "flock.ugen.triOsc",
                freq: globalFreq * 4,
                mul: {
                    ugen: "flock.ugen.triOsc",
                    freq: 0.5,
                    mul: {
                        ugen: "flock.ugen.triOsc",
                        freq: 3.0,
                        mul: {
                            ugen: "flock.ugen.sinOsc",
                            freq: 3.01,
                            mul: 0.05
                        }
                    }
                }
            },
            {
                ugen: "flock.ugen.triOsc",
                freq: (globalFreq + 54.81) * 4,
                mul: {
                    ugen: "flock.ugen.triOsc",
                    freq: 0.5,
                    mul: {
                        ugen: "flock.ugen.triOsc",
                        freq: 3.0,
                        mul: {
                            ugen: "flock.ugen.sinOsc",
                            freq: 3.01,
                            mul: 0.05
                        }
                    }
                }
            },
            {
                ugen: "flock.ugen.lfPulse",
                freq: globalFreq * 2,
                mul: {
                    ugen: "flock.ugen.triOsc",
                    freq: 0.5,
                    mul: {
                        ugen: "flock.ugen.triOsc",
                        freq: 3.0,
                        mul: {
                            ugen: "flock.ugen.sinOsc",
                            freq: 3.01,
                            mul: 0.025
                        }
                    }
                }
            },
            {

                ugen: "flock.ugen.lfPulse",
                freq: (globalFreq + 54.81) * 2,
                mul: {
                    ugen: "flock.ugen.triOsc",
                    freq: 0.5,
                    mul: {
                        ugen: "flock.ugen.triOsc",
                        freq: 3.0,
                        mul: {
                            ugen: "flock.ugen.sinOsc",
                            freq: 3.01,
                            mul: 0.025
                        }
                    }
                }
            },
            {
                ugen: "flock.ugen.lfSaw",
                freq: globalFreq,
                mul: {
                    ugen: "flock.ugen.triOsc",
                    freq: 0.5,
                    mul: {
                        ugen: "flock.ugen.triOsc",
                        freq: 3.0,
                        mul: {
                            ugen: "flock.ugen.sinOsc",
                            freq: 3.01,
                            mul: 0.025
                        }
                    }
                }
            },
            {
                ugen: "flock.ugen.lfSaw",
                freq: globalFreq + 54.81,
                mul: {
                    ugen: "flock.ugen.triOsc",
                    freq: 0.5,
                    mul: {
                        ugen: "flock.ugen.triOsc",
                        freq: 3.0,
                        mul: {
                            ugen: "flock.ugen.sinOsc",
                            freq: 3.01,
                            mul: 0.025
                        }
                    }
                }
            }
        ]
    });
}());
