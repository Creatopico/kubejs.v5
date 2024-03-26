ServerEvents.recipes(event => {
    event.custom({
        type: "create:splashing",
        ingredients: [
          {
            item: "kubejs:lion_skin"
          }
        ],
        results: [
          {
            chance: 1.0,
            item: "minecraft:leather"
          }
        ]
    })

    event.custom({
        type: "create:splashing",
        ingredients: [
          {
            item: "kubejs:bear_skin"
          }
        ],
        results: [
          {
            chance: 1.0,
            item: "minecraft:leather"
          }
        ]
    })
})


