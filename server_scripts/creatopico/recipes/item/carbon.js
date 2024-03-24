ServerEvents.recipes(event => {
    event.custom({
      type: 'create:mixing',
      heatRequirement: 'superheated',
      ingredients: [
          Ingredient.of('createaddition:diamond_grit').toJson(),
		  Ingredient.of('minecraft:coal').toJson(),
		  Ingredient.of('kubejs:limestone_dust').toJson()
      ],
      results: [
          Item.of('kubejs:carbon').toJson()
      ]
    })
})