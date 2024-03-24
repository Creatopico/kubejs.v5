ServerEvents.recipes(event => {
    event.remove({ output: 'smallships:birch_brigg' })
    event.custom({
          type: "create:mechanical_crafting",
          acceptMirrored: false,
          key: {
            C: {
              "item": "smallships:birch_cog"
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
            item: "smallships:birch_brigg"
          }
        })
  })
  