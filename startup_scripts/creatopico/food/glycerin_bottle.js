StartupEvents.registry('item', event => {
    event.create("glycerin_bottle")
    .displayName("Баночка глицерина")
    .tooltip("§cМечта Петровича").food(f => {
        f
            .hunger(1)
            .saturation(1)
            .effect("nausea", 20 * 20, 1, 2)
            .effect("poison", 20 * 20, 0, 1)
            .alwaysEdible(true)
    })
})