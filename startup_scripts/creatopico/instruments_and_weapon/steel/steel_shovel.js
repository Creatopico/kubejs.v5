StartupEvents.registry('item', e => {
    e.create('steel_shovel', 'shovel').displayName('Стальная лопата').unstackable().modifyTier(tier => 
        {
          tier.uses = 1561
          tier.speed = 12.0
          tier.attackDamageBonus = 2.0
          tier.level = 2
          tier.enchantmentValue = 14
        }
    )
})