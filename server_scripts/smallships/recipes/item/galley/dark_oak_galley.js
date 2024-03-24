ServerEvents.recipes(event => {
    event.remove({ output: 'smallships:dark_oak_galley' })
    event.custom({
          type: "create:mechanical_crafting",
          acceptMirrored: false,
          key: {
            C: {
              "item": "smallships:dark_oak_cog"
            },
            H: {
              "item": "minecraft:wooden_shovel"
            }
          },
          pattern: [
            "HHCHH",
          ],
          result: {
            count: 1,
            item: "smallships:dark_oak_galley"
          }
        })
  })
  