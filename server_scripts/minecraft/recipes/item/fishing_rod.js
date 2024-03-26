ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:fishing_rod' })

	event.shaped(
        Item.of('minecraft:fishing_rod', 1), // arg 1: output
        [
          '  C',
          ' CS', // arg 2: the shape (array of strings)
          'C S'
        ], 
        {
          C: 'kubejs:carbon_fiber',
          S: 'minecraft:string'
        }
    )
})
