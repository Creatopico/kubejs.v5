ServerEvents.recipes(event => {
	event.custom({
		type: 'create:sequenced_assembly',
		ingredient: {
		  item: 'kubejs:cast_iron_ingot'
		},
		loops: 1,
		results: [
		  {
			item: 'kubejs:muzzle'
		  }
		],
		sequence: [
		  {
			type: "create:deploying",
			ingredients: [
			  {
				item: "kubejs:raw_muzzle"
			  },
			  {
				item:  "kubejs:cast_iron_ingot"
			  }
			],
			results: [
			  {
				item: "kubejs:raw_muzzle"
			  }
			]
		  },
		  {
			type: "create:deploying",
			ingredients: [
			  {
				item: "kubejs:raw_muzzle"
			  },
			  {
				item: "kubejs:cast_iron_ingot"
			  }
			],
			results: [
			  {
				item: "kubejs:raw_muzzle"
			  }
			]
		  },
		  {
			type: "create:filling",
			ingredients: [
			  {
				item: "kubejs:raw_muzzle"
			  },
			  {
				amount: 40500,
				fluid: "minecraft:lava",
				nbt: {}
			  }
			],
			results: [
			  {
				item: "kubejs:raw_muzzle"
			  }
			]
		  },
		  {
			type: 'create:pressing',
			ingredients: [
			  {
				item: 'kubejs:raw_muzzle'
			  }
			],
			results: [
			  {
				item: 'kubejs:raw_muzzle'
			  }
			]
		  },
		  {
			type: 'create:pressing',
			ingredients: [
			  {
				item: 'kubejs:raw_muzzle'
			  }
			],
			results: [
			  {
				item: 'kubejs:raw_muzzle'
			  }
			]
		  }
		],
		transitionalItem: {
		  item: 'kubejs:raw_muzzle'
		}
	  })


})
