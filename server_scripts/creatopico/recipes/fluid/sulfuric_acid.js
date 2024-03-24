ServerEvents.recipes(event => {
    event.custom({
      type: 'create:mixing',
	  heatRequirement:'superheated',
      ingredients: [
          Ingredient.of('kubejs:sulfur').toJson(),
		  Ingredient.of('kubejs:magnetic_pyrite').toJson(),
          {"amount":81000,"fluid":"minecraft:water","nbt":{}}
      ],
      results: [
        {"amount":81000,"fluid":"kubejs:sulfuric_acid","nbt":{}}
      ]
    })
})