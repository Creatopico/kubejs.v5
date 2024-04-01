ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:netherite_ingot' })

	event.custom({
		type: 'create:sequenced_assembly',
		ingredient: {
		  item: 'minecraft:gold_ingot'
		},
		loops: 4,
		results: [
		  {
			item: 'minecraft:netherite_ingot'
		  }
		],
		sequence: [
		  {
			type: 'create:filling',
			ingredients: [
			  {
				item: 'kubejs:unprocessed_netherite_ingot'
			  },
			  {
				amount: 40500,
				fluid: 'minecraft:lava',
				nbt: {}
			  }
			],
			results: [
			  {
				item: 'kubejs:unprocessed_netherite_ingot'
			  }
			]
		  },
		  {
			type: "create:deploying",
			ingredients: [
			  {
				item: "kubejs:unprocessed_netherite_ingot"
			  },
			  {
				item: "minecraft:netherite_scrap"
			  }
			],
			results: [
			  {
				item: "kubejs:unprocessed_netherite_ingot"
			  }
			]
		  },
		  {
			type: "create:deploying",
			ingredients: [
			  {
				item: "kubejs:unprocessed_netherite_ingot"
			  },
			  {
				item:  "kubejs:carbon_fiber"
			  }
			],
			results: [
			  {
				item: "kubejs:unprocessed_netherite_ingot"
			  }
			]
		  },
		  {
			type: "create:deploying",
			ingredients: [
			  {
				item: "kubejs:unprocessed_netherite_ingot"
			  },
			  {
				item: "kubejs:stainless_steel"
			  }
			],
			results: [
			  {
				item: "kubejs:unprocessed_netherite_ingot"
			  }
			]
		  },
		  {
			type: 'create:pressing',
			ingredients: [
			  {
				item: 'kubejs:unprocessed_netherite_ingot'
			  }
			],
			results: [
			  {
				item: 'kubejs:unprocessed_netherite_ingot'
			  }
			]
		  }
		],
		transitionalItem: {
		  item: 'kubejs:unprocessed_netherite_ingot'
		}
	  })
})
