/*
  Lead Unification
*/

onEvent("recipes", (event) => {
    //replace all input/output of old ingots to new ingots
    event.replaceInput({}, `mekanism:ingot_lead`, "chemlib:ingot_lead");
    event.replaceOutput({}, `mekanism:ingot_lead`, "chemlib:ingot_lead");

    //remove any recipes still lingering around
    event.remove({ id: "mekanism:ingot_lead" });
});

onEvent("item.tags", (event) => {
    //add all the existing tags to the replacement ingot
    event.add("forge:beacon_payment", "chemlib:ingot_lead");
    event.add("forge:beacon_payment_items", "chemlib:ingot_lead");
    event.add("forge:ingots", "chemlib:ingot_lead");
    event.add("forge:ingots/lead", "chemlib:ingot_lead");
    event.add("forge:ingots_lead", "chemlib:ingot_lead");
});
