ServerEvents.recipes(event => {
    event.custom({
      type: 'create:mixing',
      ingredients: [
          Ingredient.of('create:rose_quartz').toJson(),
		  Ingredient.of('kubejs:limestone_dust').toJson(),
		  Ingredient.of('minecraft:sand').toJson()
      ],
      results: [
          Item.of('kubejs:quartzite_dust').toJson()
      ]
    })
})