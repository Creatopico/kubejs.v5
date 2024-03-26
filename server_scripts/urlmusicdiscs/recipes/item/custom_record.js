ServerEvents.recipes(event => {
    let music_disc = (disc) => {
        event.shapeless('1x urlmusicdiscs:custom_record', [ disc ])
    }
  
    //Now we can make many 'potting' recipes without typing that huge block over and over!
    music_disc('minecraft:music_disc_11')
    music_disc('minecraft:music_disc_13')
    music_disc('minecraft:music_disc_5')
    music_disc('minecraft:music_disc_blocks')
    music_disc('minecraft:music_disc_cat')
    music_disc('minecraft:music_disc_chirp')
    music_disc('minecraft:music_disc_far')
    music_disc('minecraft:music_disc_mall')
    music_disc('minecraft:music_disc_mellohi')
    music_disc('minecraft:music_disc_otherside')
    music_disc('minecraft:music_disc_pigstep')
    music_disc('minecraft:music_disc_relic')
    music_disc('minecraft:music_disc_stal')
    music_disc('minecraft:music_disc_strad')
    music_disc('minecraft:music_disc_wait')
    music_disc('minecraft:music_disc_ward')
  })