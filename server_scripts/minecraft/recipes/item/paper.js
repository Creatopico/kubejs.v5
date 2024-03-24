ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:paper' })
    event.shapeless('1x minecraft:paper', [ // arg 1: output
      '#c:planks',
      'kubejs:glycerin_bottle'
    ])
})
