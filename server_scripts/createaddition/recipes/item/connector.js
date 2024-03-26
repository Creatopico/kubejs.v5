ServerEvents.recipes(event => {
	event.replaceInput(
		{ output: 'createaddition:connector' },
		'minecraft:slimeball',
		Ingredient.of('kubejs:tungsten_ingot')
	)
})
