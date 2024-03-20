// Listen to item registry event
StartupEvents.registry('fluid', e => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    e.create('oil')
    .stillTexture('kubejs:block/oil')
    .flowingTexture('kubejs:block/oil_flowing')
    .bucketColor(0x1c1c1c)
    .displayName('Нефть')
    .density(5000)
    .viscosity(5000)
})
