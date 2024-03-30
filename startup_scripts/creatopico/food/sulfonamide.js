StartupEvents.registry('item', event => {
    event.create("sulfonamide").displayName('Сульфаниламид').food(f => {
        f
            .hunger(0)
            .saturation(0)
            .effect("regeneration", 20 * 20, 0, 1)
            .alwaysEdible(true)
    })
})