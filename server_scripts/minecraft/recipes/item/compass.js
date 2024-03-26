ServerEvents.recipes(event => {
	event.replaceInput(
		{ output: 'minecraft:compass' },
		'minecraft:iron_ingot',
		Ingredient.of('kubejs:magnetic_pyrite')
	)

    event.replaceInput(
		{ output: 'minecraft:compass' },
		'minecraft:redstone_dust',
		Ingredient.of('createaddition:electrum_rod')
	)
})
