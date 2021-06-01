/*
  Silver Unification
*/

onEvent("recipes", (event) => {
    //replace all input/output of old ingots to new ingots
    event.replaceInput({}, `mekanism:ingot_silver`, "iceandfire:silver_ingot");
    event.replaceInput({}, `chemlib:ingot_silver`, "iceandfire:silver_ingot");

    event.replaceOutput({}, `mekanism:ingot_silver`, "iceandfire:silver_ingot");
    event.replaceOutput({}, `chemlib:ingot_silver`, "iceandfire:silver_ingot");

    //remove any recipes still lingering around
    event.remove({ id: "mekanism:ingot_silver" });
    event.remove({ id: "chemlib:ingot_silver" });
});

onEvent("item.tags", (event) => {
    //add all the existing tags to the replacement ingot
    event.add("forge:beacon_payment", "iceandfire:silver_ingot");
    event.add("forge:beacon_payment_items", "iceandfire:silver_ingot");
    event.add("forge:ingots", "iceandfire:silver_ingot");
});
