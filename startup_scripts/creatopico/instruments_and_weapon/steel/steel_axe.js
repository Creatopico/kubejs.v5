StartupEvents.registry('item', e => {
    e.create('steel_axe', 'axe').displayName('Стальной топор').unstackable().modifyTier(tier => 
        {
          tier.uses = 1561
          tier.speed = 12.0
          tier.attackDamageBonus = 5.0
          tier.level = 2
          tier.enchantmentValue = 14
        }
    )
})