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
              "item": "kubejs:sulfuric_acid_bucket"
            },
            P: {
              "item": "kubejs:plastic"
            },
            C: {
              "item": "createaddition:capacitor"
            }
          },
          pattern: [
            "NPPPN",
            "CHNIC",
            "NPPPN",
          ],
          result: {
            count: 1,
            item: "createaddition:modular_accumulator"
          }
        })
  })
  