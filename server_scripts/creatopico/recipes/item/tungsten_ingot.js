ServerEvents.recipes(event => {
	event.custom({
        type:"createaddition:charging",
        input: {
            item: "kubejs:tungsten_ore",
            count: 1
        },
        result: {
            "item": "kubejs:tungsten_ingot",
            "count": 1
        },
        energy: 4000,
        maxChargeRate: 200
    })
})


