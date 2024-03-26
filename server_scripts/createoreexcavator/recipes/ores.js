
ServerEvents.recipes(event => {
	event.remove({ mod: 'createoreexcavation' })
	
  event.recipes.createoreexcavation
  .vein('{"text": "Gold vein"}', 'minecraft:raw_gold')
  .placement(16, 8, 6894685)
  .veinSize(3, 8.5)
  .alwaysInfinite()
  .biomeWhitelist('minecraft:gold_excavator_filter')
  .id("minecraft:gold_ore")
  
  event.recipes.createoreexcavation.drilling('minecraft:raw_gold', 'minecraft:gold_ore', 700).id("kubejs:gold_vein");

  
  event.recipes.createoreexcavation
  .vein('{"text": "Iron vein"}', 'minecraft:raw_iron')
  .placement(16, 8, 6894685)
  .veinSize(3, 8.5)
  .alwaysInfinite()
  .biomeWhitelist('minecraft:is_overworld')
  .id("minecraft:iron_ore")
  
  event.recipes.createoreexcavation.drilling([Item.of('minecraft:raw_iron'), Item.of('minecraft:lapis_lazuli').withChance(0.05)], 'minecraft:iron_ore', 300).id("kubejs:iron_vein");
	
	event.recipes.createoreexcavation
  .vein('{"text": "Oil well"}', 'kubejs:oil_bucket')
  .placement(1024, 128, 64630185)
  .alwaysInfinite()
  .id("kubejs:oil_well")
	event.recipes.createoreexcavation.extracting('kubejs:oil 800', 'kubejs:oil_well', 10).fluid('minecraft:water 2000').id("kubejs:oil_well_recipe");
 
  event.recipes.createoreexcavation
  .vein('{"text": "Zinc vein"}', 'create:raw_zinc')
  .placement(16, 8, 6894685)
  .veinSize(3, 8.5)
  .alwaysInfinite()
  .biomeWhitelist('minecraft:is_overworld')
  .id("create:zinc_ore")
  
  event.recipes.createoreexcavation.drilling('minecraft:raw_zinc', 'minecraft:zinc_ore', 2000).drill('createoreexcavation:diamond_drill').id("kubejs:zinc_vein");
  
  event.recipes.createoreexcavation
  .vein('{"text": "Copper vein"}', 'minecraft:raw_copper')
  .placement(16, 8, 6894685)
  .veinSize(3, 8.5)
  .alwaysInfinite()
  .biomeWhitelist('minecraft:is_overworld')
  .id("minecraft:copper_ore")
  
  event.recipes.createoreexcavation.drilling('minecraft:copper_ore', 'minecraft:copper_ore', 1000).drill('createoreexcavation:diamond_drill').id("kubejs:copper_vein");
});