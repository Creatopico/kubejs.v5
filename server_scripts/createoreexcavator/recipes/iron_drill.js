ServerEvents.recipes(event => {
	event.shaped(
        Item.of('createoreexcavation:drill', 1), // arg 1: output
        [
          ' S ',
          'SCS', // arg 2: the shape (array of strings)
          '   '
        ], 
        {
          S: 'create:sturdy_sheet',
          C: 'kubejs:steel_ingot',
        }
    )
})
