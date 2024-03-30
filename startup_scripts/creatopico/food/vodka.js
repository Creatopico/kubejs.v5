StartupEvents.registry('item', event => {
    event.create("vodka")
    .displayName("Водка")
    .tooltip("§2Шуйка").food(f => {
        f
            .hunger(1)
            .saturation(1)
            .effect("nausea", 120 * 20, 1, 2)
            .alwaysEdible(true)
    })
})