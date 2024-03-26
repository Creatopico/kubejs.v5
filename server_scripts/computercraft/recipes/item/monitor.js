ServerEvents.recipes(event => {
    event.remove({ output: 'computercraft:monitor_normal' })
    event.shaped(
          Item.of('computercraft:monitor_normal', 1), // arg 1: output
          [ 
            'PPP', 
            'PMP', // arg 2: the shape (array of strings)
            'PGP'  
          ],
          {
            P: 'kubejs:plastic', 
            M: 'kubejs:microcircuit', 
            G: '#c:glass_panes'
          }
      )
})
