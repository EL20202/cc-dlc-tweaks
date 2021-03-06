sc.SaveSlotButton.inject({
    setSave(a, b, c) {
        this.parent(a, b, c);
        this.chapter.showPostgameStar(a.vars && a.vars.storage && a.vars.storage.plot && a.vars.storage.plot.completedPostGame, 
                                      a.vars && a.vars.storage && a.vars.storage.plot && a.vars.storage.plot.metaSpace);
    }
})

sc.SaveSlotChapter.inject({
    postgameStarGfx: new ig.Image("media/gui/postgame-star.png"),
    postgameStar: null,

    init() {
        this.parent()
        this.postgameStar = new ig.ImageGui(this.postgameStarGfx, 0, 0, 11, 10);
        this.postgameStar.hook.transitions = {
            DEFAULT: {
                state: {},
                time: 0.2,
                timeFunction: KEY_SPLINES.LINEAR
            },
            HIDDEN: {
                state: {
                    alpha: 0
                },
                time: 0.2,
                timeFunction: KEY_SPLINES.LINEAR
            }
        };
        this.postgameStar.setAlign(ig.GUI_ALIGN.X_RIGHT, ig.GUI_ALIGN.Y_BOTTOM);
        this.postgameStar.setPos(12, 1);
        this.postgameStar.setPos(-15, 14);
        this.addChildGui(this.postgameStar);
    },

    showPostgameStar(dlcBeaten, gameBeaten) {
        this.postgameStar.doStateTransition(dlcBeaten ? "DEFAULT" : "HIDDEN", true)
        this.metaMarker.doStateTransition((gameBeaten && !dlcBeaten) ? "DEFAULT" : "HIDDEN", true)
    }
})