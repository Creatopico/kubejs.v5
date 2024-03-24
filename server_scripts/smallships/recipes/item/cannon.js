ServerEvents.recipes(event => {
  event.remove({ output: 'smallships:cannon' })
	event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
          A: {
            "item": "kubejs:muzzle"
          },
          C: {
            "item": "create:cogwheel"
          },
          D: {
            "item": "create:chute"
          },
          W: {
            "tag": "minecraft:planks"
          }
        },
        pattern: [
          " A ",
          "CDC",
          "WDW",
          "CDC",
        ],
        result: {
          count: 1,
          item: "smallships:cannon"
        }
      })
})
