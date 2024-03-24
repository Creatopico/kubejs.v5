ServerEvents.recipes(event => {
    event.remove({ output: 'smallships:acacia_brigg' })
    event.custom({
          type: "create:mechanical_crafting",
          acceptMirrored: false,
          key: {
            C: {
              "item": "smallships:acacia_cog"
            },
            H: {
              "item": "minecraft:chest"
            }
          },
          pattern: [
            "HHCHH",
          ],
          result: {
            count: 1,
            item: "smallships:acacia_brigg"
          }
        })
  })
  