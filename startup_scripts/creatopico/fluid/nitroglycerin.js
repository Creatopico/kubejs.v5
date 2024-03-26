// Listen to item registry event
StartupEvents.registry('fluid', e => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    e.create('nitroglycerin')
    .tag('minecraft:water')
    .stillTexture('kubejs:fluid/nitroglycerin')
    .flowingTexture('kubejs:fluid/flowing_nitroglycerin')
    .bucketColor(0x6F6A1D)
    .displayName('Нитроглицерин')
})
