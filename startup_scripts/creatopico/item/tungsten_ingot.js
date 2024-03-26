// Listen to item registry event
StartupEvents.registry('item', e => {
    e.create('tungsten_ingot').displayName('Слиток вольфрама')
})
  