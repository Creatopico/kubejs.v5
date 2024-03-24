ServerEvents.recipes(event => {
    event.remove({ output: 'smallships:dark_oak_brigg' })
    event.custom({
          type: "create:mechanical_crafting",
          acceptMirrored: false,
          key: {
            C: {
              "item": "smallships:dark_oak_cog"
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
            item: "smallships:dark_oak_brigg"
          }
        })
  })
  