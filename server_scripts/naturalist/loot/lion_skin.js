LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("naturalist:lion")
        .addLoot("kubejs:lion_skin");

    event
        .addEntityLootModifier("naturalist:lion")
        .addLoot("minecraft:bone");
});