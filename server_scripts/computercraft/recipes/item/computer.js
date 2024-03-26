ServerEvents.recipes(event => {
    event.remove({ output: 'computercraft:computer_normal' })
    event.custom({
          type: "create:mechanical_crafting",
          acceptMirrored: false,
          key: {
            P: {
              "item": "kubejs:plastic"
            },
            M: {
              "item": "kubejs:microcircuit"
            },
            A: {
              "item": "createaddition:modular_accumulator"
            },
            A: {
              "item": "createaddition:capacitor"
            }
          },
          pattern: [
            "PPP",
            "CMC",
            "PAP"
          ],
          result: {
            count: 1,
            item: "computercraft:computer_normal"
          }
        })
  })
  