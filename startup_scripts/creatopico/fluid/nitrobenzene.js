// Listen to item registry event
StartupEvents.registry('fluid', e => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    e.create('nitrobenzene')
    .stillTexture('kubejs:fluid/nitric_acid')
    .flowingTexture('kubejs:fluid/flowing_nitric_acid')
    .bucketColor(0xb46400)
    .displayName('Нитробензол')
})
