ServerEvents.recipes(event => {
	event.replaceInput(
		{ output: 'create:copper_backtank' },
		'minecraft:copper_ingot',
		Ingredient.of('create:sturdy_sheet')
	)
})
