ServerEvents.recipes(event => {
  event.remove({ output: 'smallships:acacia_cog' })
  event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
          W: {
            "item": "minecraft:acacia_planks"
          },
          L: {
            "item": "minecraft:lead"
          },
          H: {
            "item": "kubejs:ship_frame"
          },
          S: {
            "item": "smallships:sail"
          },
          U: {
            "item": "kubejs:lube"
          },
          D: {
            "item": "kubejs:ship_hulk"
          }
        },
        pattern: [
          " ULSLU ",
          "WDLHLDW",
          "UWDDDWU",
        ],
        result: {
          count: 1,
          item: "smallships:acacia_cog"
        }
      })
})
