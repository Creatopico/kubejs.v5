ServerEvents.recipes(event => {
	event.replaceInput(
		{ mod: 'farmersdelight' },
		'minecraft:iron_ingot',
		Ingredient.of('kubejs:cast_iron_ingot')
	)
})
