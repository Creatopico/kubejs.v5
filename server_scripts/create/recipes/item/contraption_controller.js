ServerEvents.recipes(event => {
	event.replaceInput(
		{ output: 'create:contraption_controller' },
		'create:electron_tube',
		Ingredient.of('kubejs:microcircuit')
	)
})
