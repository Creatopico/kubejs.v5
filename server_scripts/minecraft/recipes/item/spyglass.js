ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:spyglass' })
    event.shapeless('1x minecraft:spyglass', [ // arg 1: output
      'create:fluid_pipe',
      'kubejs:lens'
    ])
})
