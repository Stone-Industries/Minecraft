/*
  Tin Unification
*/

onEvent("recipes", (event) => {
    //replace all input/output of old ingots to new ingots
    event.replaceInput({}, `mekanism:ingot_tin`, "chemlib:ingot_tin");
    event.replaceOutput({}, `mekanism:ingot_tin`, "chemlib:ingot_tin");

    //remove any recipes still lingering around
    event.remove({ id: "mekanism:ingot_tin" });
});

onEvent("item.tags", (event) => {
    //add all the existing tags to the replacement ingot
    event.add("forge:beacon_payment", "chemlib:ingot_tin");
    event.add("forge:beacon_payment_items", "chemlib:ingot_tin");
    event.add("forge:ingots", "chemlib:ingot_tin");
    event.add("forge:ingots/tin", "chemlib:ingot_tin");
    event.add("forge:ingots_tin", "chemlib:ingot_tin");
});
