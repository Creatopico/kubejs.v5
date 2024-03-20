ServerEvents.recipes(event => {
    event.custom({
      type: 'create:mixing',
      ingredients: [
          Ingredient.of('create:limestone').toJson(),
		  Ingredient.of('naturalist:shellstone').toJson()
      ],
      results: [
          Item.of('kubejs:limestone_dust').toJson()
      ]
    })
})