ServerEvents.recipes(event => {
    event.remove({ output: 'smallships:sail' })
    event.custom({
          type: "create:mechanical_crafting",
          acceptMirrored: false,
          key: {
            W: {
              "tag": "minecraft:planks"
            },
            S: {
              "item": "create:white_sail"
            }
          },
          pattern: [
            "SSWSS",
            "SWWWS",
            "SSWSS",
            "SWWWS",
            "SSWSS",
            "  W  ",
          ],
          result: {
            count: 1,
            item: "smallships:sail"
          }
        })
  })
  