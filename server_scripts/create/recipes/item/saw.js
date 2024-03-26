ServerEvents.recipes(event => {
	event.replaceInput(
		{ output: 'create:mechanical_saw' },
		'minecraft:iron_ingot',
		Ingredient.of('kubejs:tungsten_ingot')
	)

    event.replaceInput(
		{ output: 'create:mechanical_saw' },
		'create:iron_sheet',
		Ingredient.of('kubejs:steel_sheet')
	)
})
