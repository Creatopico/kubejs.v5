ServerEvents.recipes(event => {
  event.remove({ output: 'exposure:color_film' })
	event.shaped(
        Item.of('exposure:color_film', 1), // arg 1: output
        [
          'PN ',
          'RGB', // arg 2: the shape (array of strings)
          '   '
        ], 
        {
          P: 'minecraft:paper',
          N: 'kubejs:nitric_acid_bottle',
          R: 'minecraft:red_dye',
          G: 'minecraft:green_dye',
          B: 'minecraft:blue_dye'
        }
    )
})
