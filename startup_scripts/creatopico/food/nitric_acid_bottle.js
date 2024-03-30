StartupEvents.registry('item', event => {
    event.create("nitric_acid_bottle")
    .displayName('Бутылочка азотной кислоты')
    .tooltip("§cМммм...Вкусно!").food(f => {
        f
            .hunger(0)
            .saturation(0)
            .effect("poison", 120 * 20, 1, 2)
            .alwaysEdible(true)
    })
})