ServerEvents.recipes(event => {
    event.custom({
          type: "create:mechanical_crafting",
          acceptMirrored: false,
          key: {
            W: {
              "item": "create:iron_sheet"
            },
            S: {
              "item": "create:sturdy_sheet"
            }
          },
          pattern: [
            "WS",
            "SW",
          ],
          result: {
            count: 1,
            item: "kubejs:ship_hulk"
          }
        })
  })
  