// Listen to item registry event
StartupEvents.registry('fluid', e => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    e.create('sulfuric_acid')
    .tag('minecraft:water')
    .stillTexture('kubejs:fluid/sulfuric_acid')
    .flowingTexture('kubejs:fluid/flowing_sulfuric_acid')
    .bucketColor(0xc4fffc)
    .displayName('Серная кислота')
})
