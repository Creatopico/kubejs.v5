ServerEvents.recipes(event => {
    event.remove({ output: 'exposure:black_and_white_film' })
    event.shapeless('1x exposure:black_and_white_film', [ // arg 1: output
      'minecraft:paper',
      'kubejs:nitric_acid_bottle'
    ])
})
