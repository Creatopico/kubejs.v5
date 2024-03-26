// Listen to item registry event
StartupEvents.registry('item', e => {
    e.create('unprocessed_netherite_ingot').displayName('Незаконченный незеритовый слиток')
})
  