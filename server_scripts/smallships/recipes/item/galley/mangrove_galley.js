ServerEvents.recipes(event => {
    event.remove({ output: 'smallships:mangrove_galley' })
    event.custom({
          type: "create:mechanical_crafting",
          acceptMirrored: false,
          key: {
            C: {
              "item": "smallships:mangrove_cog"
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
            item: "smallships:mangrove_galley"
          }
        })
  })
  