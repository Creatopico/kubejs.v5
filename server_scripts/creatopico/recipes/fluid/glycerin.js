ServerEvents.recipes(event => {
    event.custom({
      type: 'create:mixing',
      ingredients: [
          Ingredient.of('createdeco:zinc_sheet').toJson(),
          {"amount":81000,"fluid":"kubejs:nitric_acid","nbt":{}}
      ],
      results: [
        {"amount":81000,"fluid":"kubejs:glycerin","nbt":{}}
      ]
    })
})