ServerEvents.recipes(event => {
    event.remove({ output: 'createaddition:modular_accumulator' })
    event.custom({
          type: "create:mechanical_crafting",
          acceptMirrored: false,
          key: {
            N: {
              "item": "kubejs:nickel_ingot"
            },
            H: {
              "item": "kubejs:hydrochloric_acid_bucket"
            },
            I: {
              "item": "kubejs:sulfur_acid_bucket"
            },
            P: {
              "item": "kubejs:plastic"
            }
          },
          pattern: [
            "PPPPPPP",
            "PNHNINP",
            "PPPPPPP",
          ],
          result: {
            count: 1,
            item: "createaddition:modular_accumulator"
          }
        })
  })
  