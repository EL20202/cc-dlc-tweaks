import "./js/el2020/impact/feature/base/event-steps/update-chest-count.js"

import "./js/event-step/update-chest-count.js"


sc.EnemyBooster.inject({
    updateEnemyBoostState(b){
        if (b.boosterState != sc.ENEMY_BOOSTER_STATE.NONE){
            if (this.boosted && b.boosterState == sc.ENEMY_BOOSTER_STATE.BOOSTABLE) {
                b.boosterState = sc.ENEMY_BOOSTER_STATE.BOOSTED;
                var a = b.enemyType.boostedLevel || sc.MIN_BOOSTER_LEVEL;
                sc.newgame.get("scale-enemies") && (a = sc.model.player.getParamAvgLevel(10));
                b.setLevelOverride(a)
            } else if (!this.boosted && b.boosterState == sc.ENEMY_BOOSTER_STATE.BOOSTED) {
            b.boosterState = sc.ENEMY_BOOSTER_STATE.BOOSTABLE;
            b.level.setting ? b.setLevelOverride(1 * ig.Event.getExpressionValue(b.level.setting)) : b.setLevelOverride(null)
        }}
        if (sc.model.player.getToggleItemState("dlctweaks-ascended-booster") && b.boosterState == sc.ENEMY_BOOSTER_STATE.BOOSTABLE) {
            b.setLevelOverride(!sc.newgame.get("scale-enemies") ? sc.model.player.level : sc.model.player.getParamAvgLevel(10))
            b.boosterState = sc.ENEMY_BOOSTER_STATE.BOOSTED;
        }
    }
})

sc.MapWorldMap.inject({
    _setAreaName(a){
        this.parent(a)
        let area = a.area,
            chestCount = sc.stats.getMap("chests", a.key),
            totalChests = sc.map.getChestCount(a.key),
            chestString = ""
        switch (a.key) {
            case "rhombus-sqr":
                totalChests += 7;
                chestCount += ig.vars.get("dlctweaks.chests.rhombus-sqr")
                break;
            case "bergen":
                totalChests += 1;
                chestCount += ig.vars.get("dlctweaks.chests.bergen")
                break;
        }
        if (totalChests != 0){
            chestString = chestCount >= totalChests ? ` \\c[3][${chestCount}/${totalChests}]\\c[0]` : ` [${chestCount}/${totalChests}]`
        }
        this.areaName.setText(ig.LangLabel.getText(area.name) + chestString);
    }
})