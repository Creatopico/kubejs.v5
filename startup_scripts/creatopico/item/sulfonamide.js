StartupEvents.registry('item', event => {
    event.create("sulfonamide", "basic")
        .displayName('Сульфаниламид')
            /**
             * The use animation of the item, can be  "spear" (trident),
             * "crossbow", "eat" (food), "spyglass", "block", "none", "bow", "drink"
             * When using certain animations, corresponding sound will be played.
             */
        .useAnimation("eat")
            /**
             * The duration before the item finishs its using,
             * if you need something like hold-and-charge time (like bow),
             * consider set this to 72000 (1h) or more.
             * A returned value of 0 or lower will render the item not usable.
             */
        .useDuration((itemstack) => 8)
            /**
             * When item is about to be used.
             * If true, item will starts it use animation if duration > 0.
             */
        .use((level, player, hand) => true)
            /**
             * When the item use duration expires.
             */
        .finishUsing((itemstack, level, entity) => {
            let effects = entity.potionEffects;
            effects.add("regeneration", 20 * 20)
            itemstack.decrement(1)
            return itemstack;
        })
            /**
             * When the duration is not expired yet, but
             * players release their right button.
             * Tick is how many ticks remained for player to finish using the item.
             */
})