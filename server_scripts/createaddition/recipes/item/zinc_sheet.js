ServerEvents.recipes(event => {
    event.remove({ output: 'createaddition:zinc_sheet' })
	event.replaceInput(
		{ mod: 'createaddition' },
		'createaddition:zinc_sheet',
		Ingredient.of('createdeco:zinc_sheet')
	)
})
