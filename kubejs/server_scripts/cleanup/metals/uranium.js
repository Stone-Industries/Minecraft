/*
	Uranium/Ura-nin-ite Unification
*/

onEvent("recipes", (event) => {
    //replace all output of old ingots to new ingots
    event.replaceInput(`mekanism:ingot_uranium`, "powah:uraninite");
    event.replaceOutput({}, `mekanism:ingot_uranium`, "powah:uraninite");
    event.replaceInput(`chemlib:ingot_uranium`, "powah:uraninite");
    event.replaceOutput({}, `chemlib:ingot_uranium`, "powah:uraninite");

    //this would use the chemlab ingot instead of the uraninite, but the powah reactor wont accept it
    //   event.replaceOutput({}, `mekanism:ingot_uranium`, "chemlib:ingot_uranium");  
    //   event.replaceInput(`powah:uraninite`,`chemlib:ingot_uranium`);
    //   event.replaceOutput({}, `powah:uraninite`,`chemlib:ingot_uranium`);

    event.replaceOutput({}, `mekanism:block_uranium`, "powah:uraninite_block");

    //remove any recipes still lingering around
    event.remove({ input: `mekanism:ingot_uranium` });
    event.remove({ output: `mekanism:ingot_uranium` });

    //chemlab ingot instead of the uraninite
    //   event.remove({ input: `powah:uraninite` });
    //   event.remove({ output: `powah:uraninite` });

    event.shapeless("9x mekanism:nugget_uranium", "powah:uraninite");

    event.recipes.mekanism.dissolution({
        itemInput: `powah:uraninite_raw_poor`,
        gasInput: { amount: 1, gas: `mekanism:sulfuric_acid` },
        output: {
            slurry: `mekanism:dirty_uranium`,
            amount: 500,
            chemicalType: `slurry`,
        },
    });

    event.recipes.mekanism.dissolution({
        itemInput: `powah:uraninite_raw`,
        gasInput: { amount: 1, gas: `mekanism:sulfuric_acid` },
        output: {
            slurry: `mekanism:dirty_uranium`,
            amount: 1000,
            chemicalType: `slurry`,
        },
    });

    event.recipes.mekanism.dissolution({
        itemInput: `powah:uraninite_raw_dense`,
        gasInput: { amount: 1, gas: `mekanism:sulfuric_acid` },
        output: {
            slurry: `mekanism:dirty_uranium`,
            amount: 1500,
            chemicalType: `slurry`,
        },
    });
});

onEvent("item.tags", (event) => {
    event.add('forge:beacon_payment', 'powah:uraninite')
    event.add('forge:ingots', 'powah:uraninite')
    event.add('forge:ingots/uranium', 'powah:uraninite')
    event.add('forge:ingots_uranium', 'powah:uraninite')

    event.add('forge:storage_blocks/uranium', 'powah:uraninite_block')
});
