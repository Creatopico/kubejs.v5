ServerEvents.recipes(event => {
    event.remove({ output: 'computercraft:computercraft:disk_drive' })
    event.shaped(
          Item.of('create:computercraft:disk_drive', 1), // arg 1: output
          [ 
            'PPP', 
            'PMP', // arg 2: the shape (array of strings)
            'P P'  
          ],
          {
            P: 'kubejs:plastic', 
            M: 'kubejs:microcircuit'
          }
      )
})
