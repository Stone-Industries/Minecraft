/*
  zinc Unification
*/

onEvent("recipes", (event) => {
    //replace all input/output of old ingots to new ingots
    event.replaceInput({}, `mekanism:ingot_zinc`, "chemlib:ingot_zinc");
    event.replaceOutput({}, `mekanism:ingot_zinc`, "chemlib:ingot_zinc");

    //remove any recipes still lingering around
    event.remove({ id: "mekanism:ingot_zinc" });
});

onEvent("item.tags", (event) => {
    //add all the existing tags to the replacement ingot
    event.add("forge:beacon_payment", "chemlib:ingot_zinc");
    event.add("forge:beacon_payment_items", "chemlib:ingot_zinc");
    event.add("forge:ingots", "chemlib:ingot_zinc");
    event.add("forge:ingots/zinc", "chemlib:ingot_zinc");
    event.add("forge:ingots_zinc", "chemlib:ingot_zinc");
});
