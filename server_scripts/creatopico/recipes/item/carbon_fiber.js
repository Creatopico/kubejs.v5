ServerEvents.recipes(event => {
	event.custom({
	  type: 'create:compacting',
	  heatRequirement:'heated',
	  ingredients: [
		Item.of('kubejs:carbon').toJson(),
		Item.of('kubejs:glycerin_bottle').toJson()
	  ],
	  results: [Item.of('kubejs:carbon_fiber').toJson()]
    })
})
