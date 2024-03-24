ServerEvents.recipes(event => {
    event.custom({
      type: 'create:mixing',
	  heatRequirement:'heated',
      ingredients: [
          Ingredient.of('kubejs:ammonia_bottle').toJson(),
		      Ingredient.of('minecraft:oxidized_copper').toJson(),
          {"amount":81000,"fluid":"minecraft:water","nbt":{}}
      ],
      results: [
        {"amount":405000,"fluid":"kubejs:nitric_acid","nbt":{}}
      ]
    })
})