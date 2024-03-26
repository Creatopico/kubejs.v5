ServerEvents.recipes(event => {
    event.remove({ output: 'createaddition:alternator' })
    event.custom({
          type: "create:mechanical_crafting",
          acceptMirrored: false,
          key: {
            E: {
              "item": "kubejs:electro_magnet"
            },
            C: {
              "item": "kubejs:cast_iron_ingot"
            },
            P: {
              "item": "kubejs:plastic"
            }
          },
          pattern: [
            "PPPPP",
            "PCECP",
            "PPPPP",
          ],
          result: {
            count: 1,
            item: "createaddition:alternator"
          }
        })
  })
  