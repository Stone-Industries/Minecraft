onEvent('jei.hide.items', event => {
  //hide jaopca blocks
  event.hide('jaopca:storage_blocks.sulfur')
  event.hide('jaopca:storage_blocks.obsidian')
  event.hide('jaopca:storage_blocks.wood')
  
  //hide copper blocks/items
  event.hide('mekanism:ingot_copper')
  event.hide('create:copper_ingot')
  event.hide('iceandfire:copper_ingot')
  event.hide('mekanism:nugget_copper')
  event.hide('create:crushed_copper_ore')
  event.hide('mekanism:block_copper')
  event.hide('iceandfire:copper_nugget')

  //hide lead
  event.hide('mekanism:ingot_lead')

  //hide osmium
  event.hide('mekanism:ingot_osmium')
  
  //hide silver
  event.hide('chemlib:ingot_silver')

  //hide silicon
  event.hide('chemlib:ingot_silicon')
})