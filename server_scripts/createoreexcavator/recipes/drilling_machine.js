ServerEvents.recipes(event => {
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: true,
        key: {
          B: {
            "tag": "c:brass_blocks"
          },
          C: {
            "item": "create:brass_casing"
          },
          D: {
            "item": "create:mechanical_drill"
          },
          F: {
            "item": "create:brass_tunnel"
          },
          S: {
            "item": "create:spout"
          },
          b: {
            "tag": "c:brass_plates"
          },
          e: {
            "item": "create:electron_tube"
          },
          m: {
            "item": "create:precision_mechanism"
          },
          s: {
            "item": "create:sturdy_sheet"
          },
          t: {
            item: "create:copper_casing"
          }
        },
        "pattern": [
          "BbtbB",
          "beSeb",
          "CmDmF",
          "bsssb",
          "BbbbB"
        ],
        result: {
          item: "createoreexcavation:drilling_machine"
        }
      })
  })
  

