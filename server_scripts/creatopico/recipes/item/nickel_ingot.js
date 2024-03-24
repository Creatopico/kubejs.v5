ServerEvents.recipes(event => {
	event.custom({
	  type: 'create:compacting',
	  heatRequirement:'superheated',
	  ingredients: [
		Item.of('kubejs:cast_iron_ingot').toJson(),
		Item.of('minecraft:gunpowder').toJson()
	  ],
	  results: [Item.of('smallships:cannon_ball').toJson()]
    })
})
