// Listen to item registry event
StartupEvents.registry('item', e => {
    e.create('tungsten_ore').displayName('Рудный вольфрам')
})
  