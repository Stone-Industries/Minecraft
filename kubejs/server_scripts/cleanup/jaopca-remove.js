onEvent('recipes', event => {
  event.remove({output: 'jaopca:storage_blocks.sulfur'}) // this is redundant since crushed obsidian shouldnt go back to a block
  event.remove({output: 'jaopca:storage_blocks.obsidian'}) // this is redundant since crushed obsidian shouldnt go back to a block and a block of obsidian is obsidian
  event.remove({output: 'jaopca:storage_blocks.wood'}) // sawdust shouldn't go back to a block of wood
})