ServerEvents.recipes(event => {
    event.replaceInput(
		{ output: 'create:mechanical_plough' },
		'create:iron_sheet',
		Ingredient.of('kubejs:steel_sheet')
	)
})
