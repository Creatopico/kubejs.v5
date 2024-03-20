// Listen to item registry event
StartupEvents.registry('item', e => {
    e.create('sulfur').displayName('Сера')
  })
  