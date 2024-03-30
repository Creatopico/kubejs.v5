ServerEvents.recipes(event => {
	event.remove({ output: 'createaddition:diamond_grit' })
    event.custom({
        type: "create:crushing",
        ingredients: [
          {
            "item": "minecraft:diamond"
          }
        ],
        results: [
          {
            item: "createaddition:diamond_grit"
          },
          {
            item: "createaddition:diamond_grit"
          },
          {
            chance: 0.5,
            item: "createaddition:diamond_grit"
          },
          {
            chance: 0.25,
            item: "createaddition:diamond_grit"
          },
          
        ],
        processingTime: 300,
        conditions: [
          {
            value: {
              "tag": "c:gems/diamond",
              type: "c:tag_empty"
            },
            type: "c:not"
          }
        ]
      })
})
