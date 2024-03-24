ServerEvents.recipes(event => {
	event.shaped(
        Item.of('kubejs:electro_magnet', 1), // arg 1: output
        [
          '   ',
          'WIW', // arg 2: the shape (array of strings)
          'WIW'
        ], 
        {
          I: 'minecraft:iron_ingot',
          W: 'createaddition:copper_wire'
        }
    )
})
