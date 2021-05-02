// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

// onEvent('item.toss', event => {
//   // Loads Java class field
//   var PECore = java('al132.alchemistry.utils.IngredientStack')
//   // Changes public static boolean DEV_ENVIRONMENT of PECore class to false
//   console.info(PECore.toString())
// })