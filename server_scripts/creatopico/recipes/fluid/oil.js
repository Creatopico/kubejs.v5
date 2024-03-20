ServerEvents.recipes(event => {
    event.custom({
      type: 'create:mixing',
	  heatRequirement:'heated',
      ingredients: [
          Ingredient.of('kubejs:sulfur').toJson(),
		  Ingredient.of('createaddition:biomass').toJson()
      ],
      results: [
        {"amount":81000,"fluid":"kubejs:oil","nbt":{}}
      ]
    })
})