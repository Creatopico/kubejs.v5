StartupEvents.registry('item', event => {
    event.create("rattlesnake_poison").displayName("Яд гремучей змеи").food(f => {
        f
            .hunger(0)
            .saturation(0)
            .effect("poison", 10 * 20, 0, 1)
            .alwaysEdible(true)
    })
})