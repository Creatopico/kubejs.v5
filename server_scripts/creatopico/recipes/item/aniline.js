ServerEvents.recipes(event => {
    event.custom({
      type: 'create:mixing',
      heatRequirement: 'heated',
      ingredients: [
          Ingredient.of('create:zinc_ingot').toJson(),
		  {"amount":27000,"fluid":"kubejs:hydrochloric_acid","nbt":{}},
		  {"amount":27000,"fluid":"kubejs:nitrobenzene","nbt":{}}
      ],
      results: [
          Item.of('kubejs:aniline').toJson()
      ]
    })
})