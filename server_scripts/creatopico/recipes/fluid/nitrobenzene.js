ServerEvents.recipes(event => {
    event.custom({
      type: 'create:mixing',
      ingredients: [
          {"amount":40500,"fluid":"kubejs:nitric_acid","nbt":{}},
          {"amount":40500,"fluid":"kubejs:sulfuric_acid","nbt":{}}
      ],
      results: [
        {"amount":81000,"fluid":"kubejs:nitrobenzene","nbt":{}}
      ]
    })
})