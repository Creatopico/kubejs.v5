ServerEvents.recipes(event => {
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: true,
        key: {
          B: {
            tag: "c:brass_blocks"
          },
          C: {
            item: "create:brass_casing"
          },
          D: {
            item: "create:mechanical_drill"
          },
          H: {
            item: "create:hose_pulley"
          },
          P: {
            item: "create:mechanical_pump"
          },
          b: {
            tag: "c:brass_plates"
          },
          e: {
            item: "create:electron_tube"
          },
          m: {
            item: "create:precision_mechanism"
          },
          s: {
            item: "create:sturdy_sheet"
          }
        },
        pattern: [
          "BbPbB",
          "beHeb",
          "CmDmb",
          "bsssb",
          "BbbbB"
        ],
        result: {
          item: "createoreexcavation:extractor"
        }
      })
  })
  



