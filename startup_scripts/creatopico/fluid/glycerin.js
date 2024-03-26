// Listen to item registry event
StartupEvents.registry('fluid', e => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    e.create('glycerin')
    .tag('minecraft:water')
    .stillTexture('kubejs:fluid/glycerin')
    .flowingTexture('kubejs:fluid/flowing_glycerin')
    .bucketColor(0xededed)
    .displayName('Глицерин')
})
