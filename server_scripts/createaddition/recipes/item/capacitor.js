ServerEvents.recipes(event => {
    event.remove({ output: 'createaddition:capacitor' })
    event.shaped(
          Item.of('createaddition:capacitor', 1), // arg 1: output
          [ 
            'PEP', 
            'P P', // arg 2: the shape (array of strings)
            'PEP'  
          ],
          {
            P: 'kubejs:plastic', 
            E: 'minecraft:paper'
          }
      )
})
