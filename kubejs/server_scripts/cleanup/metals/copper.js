/*
  Copper Unification
*/

onEvent("recipes", (event) => {
    //replace all output of old ingots to new ingots
    event.replaceInput({}, `mekanism:ingot_copper`, "chemlib:ingot_copper");
    event.replaceOutput({}, `mekanism:ingot_copper`, "chemlib:ingot_copper");
    event.replaceInput({}, `create:copper_ingot`, "chemlib:ingot_copper");
    event.replaceOutput({}, `create:copper_ingot`, "chemlib:ingot_copper");
    event.replaceInput({}, `iceandfire:copper_ingot`, "chemlib:ingot_copper");
    event.replaceOutput({}, `iceandfire:copper_ingot`, "chemlib:ingot_copper");

    //remove any recipes still lingering around
    event.remove({ id: `mekanism:ingot_copper` });
    event.remove({ id: `create:copper_ingot` });
    event.remove({ id: `iceandfire:copper_ingot` });

    //combine the nugget
    event.replaceInput({}, `mekanism:nugget_copper`, "create:copper_nugget");
    event.replaceOutput({}, `mekanism:nugget_copper`, "create:copper_nugget");
    event.replaceInput({}, `iceandfire:copper_nugget`, "create:copper_nugget");
    event.replaceOutput({}, `iceandfire:copper_nugget`, "create:copper_nugget");

    event.remove({ id: `mekanism:nugget_copper` });
    event.remove({ id: `iceandfire:copper_nugget` });

    //combine the dust and the crushed ore
    event.replaceOutput(
        {},
        `create:crushed_copper_ore`,
        `mekanism:dust_copper`
    );
    event.remove({ id: `create:crushed_copper_ore` });

    //remove extra copper block
    event.replaceOutput({}, `mekanism:block_copper`, "iceandfire:copper_block");
    event.remove({ id: `mekanism:block_copper` });
});

onEvent("item.tags", (event) => {
    //add all the existing tags to the replacement ingot
    //from create
    event.add("forge:beacon_payment", "chemlib:ingot_copper");
    event.add("create:create_ingots", "chemlib:ingot_copper");
    //from mekanism
    event.add("forge:beacon_payment_items", "chemlib:ingot_copper"); //also ice and fire
    event.add("forge:ingots/copper", "chemlib:ingot_copper");

    event.add("create:crushed_ores", "mekanism:dust_copper");
});
