ServerEvents.recipes(event => {
    event.custom({
        type: "farmersdelight:cooking",
        cookingtime: 200,
        experience: 0.1,
        ingredients: [
          {
            item: "minecraft:water_bucket"
          }
        ],
        recipe_book_tab: "drinks",
        result: {
          item: "kubejs:salt"
        }
      })
})

