ServerEvents.recipes(event => {
    event.custom({
          type: "create:mechanical_crafting",
          acceptMirrored: false,
          key: {
            P: {
              "item": "kubejs:plastic"
            },
            S: {
              "item": "kubejs:processed_silicon"
            }
          },
          pattern: [
            "P",
            "S",
            "P"
          ],
          result: {
            count: 1,
            item: "kubejs:microcircuit"
          }
        })
  })
  