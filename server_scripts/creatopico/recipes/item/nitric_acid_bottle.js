ServerEvents.recipes(event => {
    event.custom({
      type: 'create:filling',
      ingredients: [
        {
          item: 'minecraft:glass_bottle'
        },
        {
          amount: 27000,
          fluid: 'kubejs:nitric_acid',
          nbt: {}
        }
      ],
      results: [
        {
          item: 'kubejs:nitric_acid_bottle'
        }
      ]
    })
})
