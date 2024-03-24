ServerEvents.recipes(event => {
  event.remove({ output: 'create:potato_cannon' })
  event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
          A: {
            "item": "kubejs:muzzle"
          },
          F: {
            "item": "create:fluid_pipe"
          },
          P: {
            "item": "create:precision_mechanism"
          },
          L: {
            "item": "create:andesite_alloy"
          },
          C: {
            "item": "minecraft:copper_ingot"
          }
        },
        pattern: [
          "LLPFFFA",
          "CC     ",
        ],
        result: {
          count: 1,
          item: "create:potato_cannon"
        }
      })
})
