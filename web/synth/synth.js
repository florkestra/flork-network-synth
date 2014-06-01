(function () {
    "user strict";

    var globalFreq = 110;

    var ork = fluid.registerNamespace("ork");

    fluid.defaults("ork.eightSynth", {
        gradeNames: ["flock.synth", "autoInit"],

        synthDef: [
            {
                id: "carrier1",
                ugen: "flock.ugen.sinOsc",
                freq: globalFreq * 8,
                mul: {
                    ugen: "flock.ugen.triOsc",
                    freq: 0.5,
                    mul: {
                        id: "ampTriangle1",
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
                id: "carrier2",
                ugen: "flock.ugen.sinOsc",
                freq: (globalFreq + 54.81) * 8,
                mul: {
                    ugen: "flock.ugen.triOsc",
                    freq: 0.5,
                    mul: {
                        id: "ampTriangle2",
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
                id: "carrier3",
                ugen: "flock.ugen.triOsc",
                freq: globalFreq * 4,
                mul: {
                    ugen: "flock.ugen.triOsc",
                    freq: 0.5,
                    mul: {
                        id: "ampTriangle3",
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
                id: "carrier4",
                ugen: "flock.ugen.triOsc",
                freq: (globalFreq + 54.81) * 4,
                mul: {
                    ugen: "flock.ugen.triOsc",
                    freq: 0.5,
                    mul: {
                        id: "ampTriangle4",
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
                id: "carrier5",
                ugen: "flock.ugen.lfPulse",
                freq: globalFreq * 2,
                mul: {
                    ugen: "flock.ugen.triOsc",
                    freq: 0.5,
                    mul: {
                        id: "ampTriangle5",
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
                id: "carrier6",
                ugen: "flock.ugen.lfPulse",
                freq: (globalFreq + 54.81) * 2,
                mul: {
                    ugen: "flock.ugen.triOsc",
                    freq: 0.5,
                    mul: {
                        id: "ampTriangle6",
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
                id: "carrier7",
                ugen: "flock.ugen.lfSaw",
                freq: globalFreq,
                mul: {
                    ugen: "flock.ugen.triOsc",
                    freq: 0.5,
                    mul: {
                        id: "ampTriangle7",
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
                id: "carrier8",
                ugen: "flock.ugen.lfSaw",
                freq: globalFreq + 54.81,
                mul: {
                    id: "ampTriangle8",
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
