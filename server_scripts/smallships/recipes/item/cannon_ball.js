ServerEvents.recipes(event => {
    event.remove({ output: 'smallships:cannon_ball' })
	event.custom({
	  type: 'create:compacting',
	  ingredients: [
		Item.of('kubejs:cast_iron_ingot').toJson(),
		Item.of('minecraft:gunpowder').toJson()
	  ],
	  results: [Item.of('smallships:cannon_ball').toJson()]
    })
})
