ServerEvents.recipes(event => {
    event.custom({
      type: 'create:filling',
      ingredients: [
        {
          item: 'minecraft:glass_bottle'
        },
        {
          amount: 27000,
          fluid: 'kubejs:glycerin',
          nbt: {}
        }
      ],
      results: [
        {
          item: 'kubejs:glycerin_bottle'
        }
      ]
    })
})
