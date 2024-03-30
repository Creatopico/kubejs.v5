ServerEvents.recipes(event => {
    event.replaceInput(
		{ output: 'create:mechanical_drill' },
		'create:andesite_alloy',
		Ingredient.of('create:sturdy_sheet')
	)

    event.replaceInput(
		{ output: 'create:mechanical_drill' },
		'minecraft:iron_ingot',
		Ingredient.of('kubejs:steel_ingot')
	)
})
