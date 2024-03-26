ServerEvents.recipes(event => {
	event.custom({
	  type: 'create:compacting',
	  heatRequirement:'superheated',
	  ingredients: [
		Item.of('kubejs:nickel_ingot').toJson(),
		Item.of('kubejs:tungsten_ingot').toJson(),
		Item.of('kubejs:steel_ingot').toJson()
	  ],
	  results: [Item.of('kubejs:stainless_steel').toJson()]
    })
})
