ServerEvents.recipes(event => {
    event.custom({
      type: 'create:filling',
      ingredients: [
        {
          item: 'kubejs:ammonia_bottle'
        },
        {
          amount: 27000,
          fluid: 'kubejs:oil',
          nbt: {}
        }
      ],
      results: [
        {
          item: 'kubejs:ethylene_bottle'
        }
      ]
    })
})
