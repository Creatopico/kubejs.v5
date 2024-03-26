ServerEvents.recipes(event => {
	event.replaceInput(
		{ output: 'minecraft:anvil' },
		'minecraft:iron_ingot',
		Ingredient.of('kubejs:cast_iron_ingot')
	)
})
