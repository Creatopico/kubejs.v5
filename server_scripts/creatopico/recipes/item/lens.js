
  ServerEvents.recipes(event => {
    event.custom({
        type: "create:sandpaper_polishing",
        ingredients: [
          {
            tag: "c:glass"
          }
        ],
        results: [
          {
            item: "kubejs:lens"
          }
        ]
      })
})
