ServerEvents.recipes(event => {
    event.remove({ output: 'computercraft:pocket_computer_normal' })
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
            C: {
              "item": "createaddition:capacitor"
            },
            G: {
              "tag": "c:glass_panes"
            }
          },
          pattern: [
            "PMACG"
          ],
          result: {
            count: 1,
            item: "computercraft:pocket_computer_normal"
          }
        })
  })
  