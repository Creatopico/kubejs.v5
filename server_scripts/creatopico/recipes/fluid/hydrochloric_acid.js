ServerEvents.recipes(event => {
    event.custom({
      type: 'create:mixing',
	  heatRequirement:'heated',
      ingredients: [
          Ingredient.of('kubejs:salt').toJson(),
          {"amount":81000,"fluid":"kubejs:sulfuric_acid","nbt":{}}
      ],
      results: [
        {"amount":81000,"fluid":"kubejs:hydrochloric_acid","nbt":{}}
      ]
    })
})