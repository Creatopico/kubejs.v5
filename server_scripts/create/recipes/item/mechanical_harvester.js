ServerEvents.recipes(event => {
	event.replaceInput(
		{ output: 'create:mechanical_crafter' },
		'create:iron_sheet',
		Ingredient.of('kubejs:tungsten_ingot')
	)
})
