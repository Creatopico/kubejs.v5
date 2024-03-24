ServerEvents.recipes(event => {
    event.custom({
      type: 'create:mixing',
      heatRequirement: 'superheated',
      ingredients: [
          Ingredient.of('kubejs:carbon').toJson(),
		  Ingredient.of('minecraft:iron_ingot').toJson()
      ],
      results: [
          Item.of('kubejs:cast_iron_ingot').toJson()
      ]
    })
})