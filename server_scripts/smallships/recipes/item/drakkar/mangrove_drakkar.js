ServerEvents.recipes(event => {
    event.remove({ output: 'smallships:mangrove_drakkar' })
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
            "HH HH",
            "  C  ",
            "HH HH",
          ],
          result: {
            count: 1,
            item: "smallships:mangrove_drakkar"
          }
        })
  })
  