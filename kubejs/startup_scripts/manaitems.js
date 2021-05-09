// priority: 0

// Worldgen //
onEvent('worldgen.add', event => {
	event.addOre(ore => {
	  ore.block = 'kubejs:mana_ore' // Block ID (Use [] syntax for properties)
	  ore.spawnsIn.blacklist = false // Inverts spawn whitelist
	  ore.spawnsIn.values = [ // List of valid block IDs or tags that the ore can spawn in
		'#minecraft:base_stone_overworld' // Default behavior - ores spawn in all stone types
	  ]
	  
	  ore.biomes.blacklist = false // Inverts biome whitelist
	  ore.biomes.values = [ // Biomes this ore can spawn in
		'minecraft:desert',
		'minecraft:plains' // Biome ID
	  ]
	  
	  ore.clusterMinSize = 1 // Min blocks per cluster (currently ignored, will be implemented later, it's always 1)
	  ore.clusterMaxSize = 3 // Max blocks per cluster
	  ore.clusterCount = 1 // Clusters per chunk
	  ore.minHeight = 16 // Min Y ore spawns in
	  ore.maxHeight = 24 // Max Y ore spawns in
	  ore.squared = true // Adds random value to X and Z between 0 and 16. Recommended to be true
	  ore.chance = 2
	  // ore.chance = 4 // Spawns the ore every ~4 chunks. You usually combine this with clusterCount = 1 for rare ores
	}) 


  onEvent('item.registry', event => {
	event.create('rough_mana_crystal').displayName('Rough Mana Crystal')
	event.create('pure_mana_crystal').displayName('Pure Mana Crystal').glow(true)
	event.create('manadust').displayName('Mana Dust')
	event.create('synthesis_dust').displayName('Synthesis Dust').glow(true)
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	event.create('mana_ore').material('rock').hardness(50.0).displayName('Mana Ore')
	event.create('activated_mana_ore').material('rock').hardness(25.0).displayName('Activated Mana Ore')
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})
