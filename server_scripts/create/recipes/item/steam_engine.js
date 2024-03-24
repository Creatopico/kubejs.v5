ServerEvents.recipes(event => {
    event.remove({ output: 'create:steam_engine' })

	event.shaped(
        Item.of('create:steam_engine', 1), // arg 1: output
        [
          ' L ',
          'BWB', // arg 2: the shape (array of strings)
          'SCS'
        ], 
        {
          L: 'create:brass_sheet',
          B: 'createaddition:brass_rod',
          W: 'create:cogwheel',
          S: 'create:sturdy_sheet',
          C: 'minecraft:copper_block'
        }
    )
})
