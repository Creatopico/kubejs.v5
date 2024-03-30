ServerEvents.recipes(event => {
	event.replaceInput(
		{ output: 'createaddition:tesla_coil' },
		'create:andesite_alloy',
		Ingredient.of('kubejs:magnetic_pyrite')
	)
})
