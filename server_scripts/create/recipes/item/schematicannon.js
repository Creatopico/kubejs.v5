ServerEvents.recipes(event => {
    event.remove({ output: 'create:schematicannon' })
    event.shaped(
          Item.of('create:schematicannon', 1), // arg 1: output
          [ 
            ' M ', 
            'WTW', // arg 2: the shape (array of strings)
            'IAI'  
          ],
          {
            M: 'kubejs:muzzle', 
            W: 'createaddition:cooper_wire',  //arg 3: the mapping object
            T: 'create:turntable',
            A: 'kubejs:advanced_microcircuit',
            I: 'createdeco:industrial_iron_sheet'
          }
      )
})
