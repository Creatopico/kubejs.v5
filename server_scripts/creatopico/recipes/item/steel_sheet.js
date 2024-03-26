ServerEvents.recipes(event => {
	event.custom({
        type: 'create:pressing',
        ingredients: [
          {
            item: 'kubejs:steel_ingot'
          }
        ],
        results: [
          {
            item: 'kubejs:steel_sheet'
          }
        ]
    })
})


