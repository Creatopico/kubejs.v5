ServerEvents.recipes(event => {
    event.remove({ output: 'smallships:oak_galley' })
    event.custom({
          type: "create:mechanical_crafting",
          acceptMirrored: false,
          key: {
            C: {
              "item": "smallships:oak_cog"
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
            item: "smallships:oak_galley"
          }
        })
  })
  