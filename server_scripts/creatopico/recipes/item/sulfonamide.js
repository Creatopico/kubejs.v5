ServerEvents.recipes(event => {
    event.custom({
      type: 'create:mixing',
      ingredients: [
		  Ingredient.of('kubejs:aniline').toJson(),
		  Ingredient.of('kubejs:rattlesnake_poison').toJson()
      ],
      results: [
          Item.of('kubejs:sulfonamide').toJson()
      ]
    })
})