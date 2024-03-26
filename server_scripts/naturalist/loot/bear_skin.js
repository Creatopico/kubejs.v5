LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("naturalist:bear")
        .addLoot("kubejs:bear_skin");

    event
        .addEntityLootModifier("naturalist:bear")
        .addLoot("minecraft:bone");
});