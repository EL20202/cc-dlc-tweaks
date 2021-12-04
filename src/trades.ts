const items: { [key: string]: { [key: string]: sc.Inventory.ItemID } } = {
    gems: {
        ruby: 457,
        garnet: 458,
        diamond: 459,
        moonstone: 460,
        citrine: 461,
        topaz: 462,
        amethyst: 463,
        emerald: 464,
        lapis: 465,
        aquamarine: "dlctweaks-trade-beach-gem",
        onyx: "dlctweaks-trade-final-dng-gem",

        warmGem: "dlctweaks-trade-warm-gem",
        coolGem: "dlctweaks-trade-cool-gem",
    },

    general: {
        veggieSet: 97,
        fruitSet: 98,
        spiceSet: 130,

        junkMetal: 99,
        refinedMetal: 190,
        preciousMetal: 191,
        epicMetal: 192,

        antiqueToken: 499,
    }
}

// numeric item ids suck. why not just... "cheat" the system?
// makes it look cleaner, too! :)

const newTrades: { [key: string]: sc.TradeModel.Trader } = {
    "booster-ascended": {
        name: {
            en_US: "Booster Master"
        },
        order: 9,
        noTrack: false,
        options: [
            {
                get: [
                    {
                        id: "dlctweaks-ascended-booster",
                        amount: 1
                    }
                ],
                require: [
                    {
                        id: "el-ascension-core",
                        amount: 1
                    },
                    {
                        id: items.gems.warmGem,
                        amount: 3
                    },
                    {
                        id: items.gems.coolGem,
                        amount: 3
                    },
                    {
                        id: items.gems.aquamarine,
                        amount: 7
                    },
                    {
                        id: items.gems.onyx,
                        amount: 7
                    }
                ],
                scale: 1,
                cost: 400000
            }],
        area: "rhombus-sqr"
    },
    "booster-beach": {
        name: {
            en_US: "Archipelago Master"
        },
        order: 7,
        noTrack: false,
        options: [
            {
                get: [
                    {
                        id: "dlctweaks-beach-booster",
                        amount: 1
                    }
                ],
                require: [
                    {
                        id: "dlctweaks-trade-beach-special",
                        amount: 1
                    },
                    {
                        id: 619,
                        amount: 5
                    },
                    {
                        id: 620,
                        amount: 5
                    },
                    {
                        id: 621,
                        amount: 5
                    }
                ],
                scale: 1,
                cost: 100000
            }
        ],
        area: "rhombus-sqr"
    },

    "booster-final-dng": {
        name: {
            en_US: "Ku'lero Master"
        },
        order: 8,
        noTrack: false,
        options: [
            {
                get: [
                    {
                        id: "dlctweaks-final-dng-booster",
                        amount: 1
                    }
                ],
                require: [
                    {
                        id: "dlctweaks-trade-final-dng-special",
                        amount: 1
                    },
                    {
                        id: 563,
                        amount: 5
                    },
                    {
                        id: 565,
                        amount: 5
                    },
                    {
                        id: 561,
                        amount: 15
                    }
                ],
                scale: 1,
                cost: 100000
            }
        ],
        area: "rhombus-sqr"
    },

    basinEastExcalibruh: {
        name: {
            en_US: "Basin Weapon Supreme",
            de_DE: "Bassins Edelwaffen",
            zh_CN: "\u5df4\u8f9b\u5821\u7ec8\u6781\u6b66\u5668",
            zh_TW: "\u5df4\u8f9b\u5821\u7d42\u6975\u6b66\u5668",
            ja_JP: "\u30d9\u30a4\u30b9\u30f3\u30ad\u30fc\u30d7\u306e\u4e0a\u4f4d\u6b66\u5668",
            ko_KR: "\uc720\uc5ed \ucd5c\uace0 \ubb34\uae30"
        },
        order: 100,
        upgradeTo: "basinEastExcalibro",
        options: [
            {
                get: [
                    {
                        id: 330,
                        amount: 1
                    }
                ],
                require: [
                    {
                        id: 249,
                        amount: 30
                    },
                    {
                        id: 252,
                        amount: 30
                    },
                    {
                        id: 255,
                        amount: 30
                    }
                ],
                scale: 1,
                cost: 33333
            },
            {
                get: [
                    {
                        id: "dlctweaks-excalibro-scale",
                        amount: 1
                    }
                ],
                require: [
                    {
                        id: 330,
                        amount: 1
                    },
                    {
                        id: 254,
                        amount: 11
                    },
                    {
                        id: 257,
                        amount: 11
                    },
                    {
                        id: 260,
                        amount: 11
                    }
                ],
                scale: 1,
                cost: 66666
            }
        ],
        area: "jungle-city"
    },

    "daikon-scale-trade": {
        noTrack: true,
        name: {
            en_US: "Best Weapon Trader"
        },
        order: 100,
        options: [{
            get: [{
                id: "dlctweaks-daikon-scale",
                amount: 1
            }],
            require: [
                {
                    id: 57,
                    amount: 1
                }, {
                    id: items.general.veggieSet,
                    amount: 10
                }, {
                    id: 564,
                    amount: 20
                }, {
                    id: 63,
                    amount: 7
                }, {
                    id: 79,
                    amount: 15
                }
            ],
            scale: 1,
            cost: 69420
        }],
        area: "autumn-area"
    },

    "el-gear-1": {
        name: {
            en_US: "Rhombus Elite Extras"
        },
        noTrack: true,
        order: 65,
        options: [
            {
                get: [{
                    id: "el-scaled-tiara",
                    amount: 1
                }],
                require: [
                    {
                        id: items.general.antiqueToken,
                        amount: 5
                    }, {
                        id: items.gems.coolGem,
                        amount: 4
                    }, {
                        id: items.gems.warmGem,
                        amount: 4
                    }, {
                        id: 633,
                        amount: 7
                    }, {
                        id: 176,
                        amount: 5
                    }
                ],
                cost: 225000
            },
            {
                get: [{
                    id: 664,
                    amount: 1
                }],
                require: [
                    {
                        id: 511,
                        amount: 1
                    }, {
                        id: items.gems.onyx,
                        amount: 5
                    }, {
                        id: 565,
                        amount: 4
                    }, {
                        id: 358,
                        amount: 2
                    }
                ]
            },
            {
                get: [{
                    id: "dlctweaks-old-geta-scale",
                    amount: 1
                }],
                require: [
                    {
                        id: items.general.epicMetal,
                        amount: 7
                    }, {
                        id: items.gems.aquamarine,
                        amount: 6
                    }, {
                        id: items.gems.warmGem,
                        amount: 3
                    }, {
                        id: 382,
                        amount: 4
                    }, {
                        id: 632,
                        amount: 5
                    }
                ],
                cost: 225000
            },
            {
                get: [{
                    id: "dlctweaks-lead-boots-scale",
                    amount: 1
                }],
                require: [
                    {
                        id: items.general.epicMetal,
                        amount: 7
                    }, {
                        id: items.gems.aquamarine,
                        amount: 6
                    }, {
                        id: items.gems.warmGem,
                        amount: 3
                    }, {
                        id: 382,
                        amount: 4
                    }, {
                        id: 632,
                        amount: 5
                    }
                ],
                cost: 225000
            }
        ],
        area: "rhombus-sqr"
    },

    "el-gear-2": {
        name: {
            en_US: "Strange Gear Shop"
        },
        noTrack: true,
        order: 65,
        options: [
            {
                get: [{
                    id: "el-risktaker-plate",
                    amount: 1
                }],
                require: [
                    {
                        id: items.general.epicMetal,
                        amount: 7
                    }, {
                        id: items.gems.aquamarine,
                        amount: 6
                    }, {
                        id: items.gems.warmGem,
                        amount: 3
                    }, {
                        id: 382,
                        amount: 4
                    }, {
                        id: 631,
                        amount: 5
                    }
                ],
                cost: 225000
            },
            {
                get: [{
                    id: "el-vampire-knives",
                    amount: 1
                }],
                require: [
                    {
                        id: items.general.epicMetal,
                        amount: 5
                    }, {
                        id: items.gems.onyx,
                        amount: 6
                    }, {
                        id: items.gems.ruby,
                        amount: 8
                    }, {
                        id: 632,
                        amount: 6
                    }, {
                        id: 246,
                        amount: 4
                    }
                ],
                cost: 200000
            }
        ],
        area: "rhombus-sqr"
    },

    "el-aura-trade-1": {
        name: {
            en_US: "Auras-R-Us"
        },
        noTrack: false,
        order: 65,
        options: [
            {
                get: [
                    {
                        id: "el-effect-rainbow",
                        amount: 1
                    }
                ],
                require: [
                    {
                        id: items.gems.warmGem,
                        amount: 1
                    }, {
                        id: items.gems.coolGem,
                        amount: 1
                    }, {
                        id: items.gems.onyx,
                        amount: 3
                    }, {
                        id: 176,
                        amount: 5
                    }, {
                        id: 182,
                        amount: 2
                    }
                ],
                cost: 50000
            },
            {
                get: [
                    {
                        id: "el-effect-vaporwave",
                        amount: 1
                    }
                ],
                require: [
                    {
                        id: items.gems.aquamarine,
                        amount: 4
                    }, {
                        id: items.gems.amethyst,
                        amount: 4
                    }, {
                        id: 80,
                        amount: 6
                    }, {
                        id: 633,
                        amount: 6
                    }
                ],
                cost: 50000
            },
            {
                get: [
                    {
                        id: "el-effect-hp",
                        amount: 1
                    }
                ],
                require: [
                    {
                        id: items.gems.emerald,
                        amount: 8
                    }, {
                        id: items.gems.ruby,
                        amount: 8
                    }, {
                        id: 79,
                        amount: 4
                    }, {
                        id: 182,
                        amount: 5
                    }
                ],
                cost: 50000
            },
            {
                get: [
                    {
                        id: "el-effect-sp",
                        amount: 1
                    }
                ],
                require: [
                    {
                        id: items.gems.lapis,
                        amount: 8
                    }, {
                        id: items.gems.amethyst,
                        amount: 8
                    }, {
                        id: 357,
                        amount: 4
                    }, {
                        id: 182,
                        amount: 5
                    }
                ],
                cost: 50000
            },
            {
                get: [
                    {
                        id: "el-effect-shadow",
                        amount: 1
                    }
                ],
                require: [
                    {
                        id: items.gems.diamond,
                        amount: 5
                    }, {
                        id: 610,
                        amount: 5
                    }, {
                        id: 246,
                        amount: 5
                    }, {
                        id: 632,
                        amount: 2
                    }
                ],
                cost: 50000
            },
            {
                get: [
                    {
                        id: "el-effect-void",
                        amount: 1
                    }
                ],
                require: [
                    {
                        id: items.gems.moonstone,
                        amount: 5
                    }, {
                        id: 610,
                        amount: 5
                    }, {
                        id: 246,
                        amount: 5
                    }, {
                        id: 629,
                        amount: 2
                    }
                ],
                cost: 50000
            },
            {
                get: [
                    {
                        id: "el-effect-hax",
                        amount: 1
                    }
                ],
                require: [
                    {
                        id: items.gems.ruby,
                        amount: 8
                    }, {
                        id: 401,
                        amount: 4
                    }, {
                        id: 402,
                        amount: 2
                    }, {
                        id: 629,
                        amount: 2
                    }
                ],
                cost: 50000
            },
            {
                get: [
                    {
                        id: "el-effect-decoy",
                        amount: 1
                    }
                ],
                require: [
                    {
                        id: items.gems.emerald,
                        amount: 6
                    }, {
                        id: 629,
                        amount: 3
                    }, {
                        id: 633,
                        amount: 3
                    }, {
                        id: 182,
                        amount: 4
                    }
                ],
                cost: 50000
            }
        ],
        area: "rhombus-sqr"
    },

    "el-material-1": {
        name: {
            en_US: "Strange Materials"
        },
        order: 100,
        options: [
            {
                get: [
                    {
                        id: items.gems.warmGem,
                        amount: 1
                    }
                ],
                require: [
                    {
                        id: items.gems.ruby,
                        amount: 3
                    },
                    {
                        id: items.gems.garnet,
                        amount: 3
                    },
                    {
                        id: items.gems.diamond,
                        amount: 3
                    },
                    {
                        id: items.gems.citrine,
                        amount: 3
                    },
                    {
                        id: items.gems.topaz,
                        amount: 3
                    }
                ],
                scale: 1,
                cost: 2500
            },
            {
                get: [
                    {
                        id: items.gems.coolGem,
                        amount: 1
                    }
                ],
                require: [
                    {
                        id: items.gems.moonstone,
                        amount: 3
                    },
                    {
                        id: items.gems.amethyst,
                        amount: 3
                    },
                    {
                        id: items.gems.emerald,
                        amount: 3
                    },
                    {
                        id: items.gems.lapis,
                        amount: 3
                    }
                ],
                scale: 1,
                cost: 2500
            }
        ],
        area: "rhombus-sqr"
    },

    "el-vermillion-trades": {
        name: {
            en_US: "Wasteland Imports"
        },
        order: 100,
        area: "rhombus-sqr",
        options: [
            {
                get: [
                    {
                        id: 401,
                        amount: 2
                    }
                ],
                require: [
                    {
                        id: items.general.fruitSet,
                        amount: 1
                    }, {
                        id: 254,
                        amount: 2
                    }
                ]
            },
            {
                get: [
                    {
                        id: 401,
                        amount: 2
                    }
                ],
                require: [
                    {
                        id: items.general.veggieSet,
                        amount: 1
                    }, {
                        id: 254,
                        amount: 2
                    }
                ]
            },
            {
                get: [
                    {
                        id: 402,
                        amount: 1
                    }
                ],
                require: [
                    {
                        id: items.general.spiceSet,
                        amount: 1
                    }, {
                        id: 401,
                        amount: 2
                    }
                ],
                cost: 3333
            }
        ]
    },

    "el-observer-trade": {
        name: {
            en_US: "Classy Weapons"
        },
        order: 90,
        area: "rhombus-sqr",
        options: [
            {
                get: [
                    {
                        id: "el-fixed-sword",
                        amount: 1
                    }
                ],
                require: [
                    {
                        id: "el-shard-sword",
                        amount: 1
                    },
                    {
                        id: items.general.epicMetal,
                        amount: 6
                    },
                    {
                        id: items.gems.onyx,
                        amount: 4
                    },
                    {
                        id: items.gems.emerald,
                        amount: 3
                    },
                    {
                        id: items.gems.lapis,
                        amount: 3
                    }
                ],
                scale: 1,
                cost: 200000
            },
            {
                get: [
                    {
                        id: "el-fixed-shield",
                        amount: 1
                    }
                ],
                require: [
                    {
                        id: "el-shard-shield",
                        amount: 1
                    },
                    {
                        id: items.general.epicMetal,
                        amount: 6
                    },
                    {
                        id: items.gems.onyx,
                        amount: 5
                    },
                    {
                        id: items.gems.ruby,
                        amount: 3
                    },
                    {
                        id: items.gems.topaz,
                        amount: 3
                    }
                ],
                scale: 1,
                cost: 200000
            },
            {
                get: [
                    {
                        id: "el-fixed-gauntlet",
                        amount: 1
                    }
                ],
                require: [
                    {
                        id: "el-shard-gauntlet",
                        amount: 1
                    },
                    {
                        id: items.general.epicMetal,
                        amount: 6
                    },
                    {
                        id: items.gems.onyx,
                        amount: 5
                    },
                    {
                        id: items.gems.citrine,
                        amount: 3
                    },
                    {
                        id: items.gems.diamond,
                        amount: 3
                    }
                ],
                scale: 1,
                cost: 200000
            },
            {
                get: [
                    {
                        id: "el-fixed-deck",
                        amount: 1
                    }
                ],
                require: [
                    {
                        id: "el-shard-deck",
                        amount: 1
                    },
                    {
                        id: items.general.epicMetal,
                        amount: 6
                    },
                    {
                        id: items.gems.onyx,
                        amount: 5
                    },
                    {
                        id: items.gems.amethyst,
                        amount: 3
                    },
                    {
                        id: items.gems.aquamarine,
                        amount: 3
                    }
                ],
                scale: 1,
                cost: 200000
            },
            {
                get: [
                    {
                        id: "el-fixed-chakram",
                        amount: 1
                    }
                ],
                require: [
                    {
                        id: "el-shard-chakram",
                        amount: 1
                    },
                    {
                        id: items.general.epicMetal,
                        amount: 6
                    },
                    {
                        id: items.gems.onyx,
                        amount: 5
                    },
                    {
                        id: items.gems.moonstone,
                        amount: 3
                    },
                    {
                        id: items.gems.garnet,
                        amount: 3
                    }
                ],
                scale: 1,
                cost: 200000
            }
        ]
    }
}

sc.TradeModel.inject({
    init() {
        this.parent()
        Object.assign(this.traders, newTrades)
    }
})