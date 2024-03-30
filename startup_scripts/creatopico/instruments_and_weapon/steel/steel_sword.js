StartupEvents.registry('item', e => {
    e.create('steel_sword', 'sword').displayName('Стальной меч').unstackable().modifyTier(tier => 
        {
          tier.uses = 1561
          tier.speed = 12.0
          tier.attackDamageBonus = 3.0
          tier.level = 2
          tier.enchantmentValue = 14
        }
    )
})