events.listen('recipes', function(e) {
	
	function energize(ingredient, result, power) {
        e.recipes.powah.energizing({
            ingredients: ingredient.map(i => Ingredient.of(i).toJson()),
            energy: power,
            result: Item.of(result).toResultJson()
        })
	}
	energize(['kubejs:mana_ore'], 'kubejs:activated_mana_ore', 100000)

	// Mana ore manipulation //

	e.recipes.mekanism.purifying({
		itemInput: {
		  ingredient: {
			item: "kubejs:rough_mana_crystal"
		  }
		},
		gasInput: {
		  amount: 200,
		  gas: "mekanism:oxygen"
		},
		output: {
		  item: "kubejs:pure_mana_crystal"
		}
	})

	e.recipes.mekanism.combining({
		mainInput: {
		  	ingredient: {
				item: "kubejs:activated_mana_ore"
		  }
		},
		extraInput: {
			ingredient: {
				item: "mekanism:lithium_bucket"
			}
			
		},
		output: {
		  item: "kubejs:rough_mana_crystal"
		}
	})

	e.recipes.mekanism.crushing({
		input: {
		  	ingredient: {
				item: "kubejs:pure_mana_crystal"
		  }
		},
		output: {
		  item: "kubejs:manadust"
		}
	})

	e.shaped('kubejs:synthesis_dust', [
		'GSG',
		'SXS',
		'GSG'
	], {
		G: 'minecraft:gravel',
		S: 'minecraft:sand',
		X: 'kubejs:manadust',
	  })
	
	// Synthesis recipes //

	e.shaped('minecraft:redstone', [
		'S  ',
		'   ',
		'   '
	], {
		S: 'kubejs:synthesis_dust'
	})

	e.shaped('minecraft:gold_ingot', [
		' S ',
		'   ',
		'   '
	], {
		S: 'kubejs:synthesis_dust'
	})

	e.shaped('minecraft:iron_ingot', [
		'  S',
		'   ',
		'   '
	], {
		S: 'kubejs:synthesis_dust'
	})

	e.shaped('minecraft:diamond', [
		' S ',
		'   ',
		' S '
	], {
		S: 'kubejs:synthesis_dust'
	})

	e.shaped('minecraft:lapis_lazuli', [
		'   ',
		'S  ',
		'   '
	], {
		S: 'kubejs:synthesis_dust'
	})

	e.shaped('mekanism:ingot_osmium', [
		'   ',
		' S ',
		'   '
	], {
		S: 'kubejs:synthesis_dust'
	})

	e.shaped('mekanism:ingot_steel', [
		'   ',
		'  S',
		'   '
	], {
		S: 'kubejs:synthesis_dust'
	})

	e.shaped('minecraft:netherite_ingot', [
		' S ',
		'S S',
		' S '
	], {
		S: 'kubejs:synthesis_dust'
	})

	e.shaped('mekanism:ingot_refined_obsidian', [
		'  S',
		' S ',
		'S  '
	], {
		S: 'kubejs:synthesis_dust'
	})

	e.shaped('mekanism:alloy_infused', [
		'   ',
		'   ',
		'S  '
	], {
		S: 'kubejs:synthesis_dust'
	})

	e.shaped('mekanism:alloy_reinforced', [
		'   ',
		'S S',
		'   '
	], {
		S: 'kubejs:synthesis_dust'
	})

	e.shaped('mekanism:alloy_atomic', [
		' S ',
		'S S',
		'   '
	], {
		S: 'kubejs:synthesis_dust'
	})



	

})