const getIsFluid = (fluid, flowing) => block => block.id == fluid || block.id == flowing
const isWater = getIsFluid('minecraft:water', 'minecraft:flowing_water')
const isOil = getIsFluid('kubejs:oil', 'kubejs:flowing_oil')

PlayerEvents.tick(event => {
    let standing = event.player.block
    if (isOil(standing) || isOil(standing.up)) {
        event.player.potionEffects.add("minecraft:poison", 11, 4, false, true)
    }
})