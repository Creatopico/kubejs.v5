ServerEvents.recipes(event => {
	event.custom({
	  type: 'create:compacting',
	  heatRequirement:'superheated',
	  ingredients: [
		Item.of('kubejs:sulfur').toJson(),
		Item.of('minecraft:iron_ingot').toJson(),
		Item.of('kubejs:carbon_fiber').toJson(),
		Item.of('kubejs:processed_silicon').toJson()
	  ],
	  results: [Item.of('kubejs:steel_ingot').toJson()]
    })
})
