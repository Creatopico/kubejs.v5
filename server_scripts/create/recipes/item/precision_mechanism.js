ServerEvents.recipes(event => {
	event.replaceInput(
		{ output: 'create:precision_mechanism' },
		'create:large_cogwheel',
		Ingredient.of('kubejs:processed_silicon')
	)
})
