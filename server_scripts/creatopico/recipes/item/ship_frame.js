ServerEvents.recipes(event => {
    event.custom({
          type: "create:mechanical_crafting",
          acceptMirrored: false,
          key: {
            W: {
              "tag": "minecraft:planks"
            },
            S: {
              "item": "create:sturdy_sheet"
            }
          },
          pattern: [
            "WSWSWSWSW",
            "  WSWSW  ",
          ],
          result: {
            count: 1,
            item: "kubejs:ship_frame"
          }
        })
  })
  