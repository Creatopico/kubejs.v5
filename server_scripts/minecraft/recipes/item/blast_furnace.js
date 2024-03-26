ServerEvents.recipes(event => {
	event.replaceInput(
		{ output: 'minecraft:blast_furnace' },
		'minecraft:iron_ingot',
		Ingredient.of('kubejs:cast_iron_ingot')
	)
})
