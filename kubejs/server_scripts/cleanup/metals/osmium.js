/*
  Osmium Unification
*/

onEvent("recipes", (event) => {
    //replace all input/output of old ingots to new ingots
    event.replaceInput({}, `mekanism:ingot_osmium`, "chemlib:ingot_osmium");
    event.replaceOutput({}, `mekanism:ingot_osmium`, "chemlib:ingot_osmium");

    //remove any recipes still lingering around
    event.remove({ id: "mekanism:ingot_osmium" });
});

onEvent("item.tags", (event) => {
    //add all the exisosmiumg tags to the replacement ingot
    event.add("forge:beacon_payment", "chemlib:ingot_osmium");
    event.add("forge:beacon_payment_items", "chemlib:ingot_osmium");
    event.add("forge:ingots", "chemlib:ingot_osmium");
    event.add("forge:ingots/osmium", "chemlib:ingot_osmium");
    event.add("forge:ingots_osmium", "chemlib:ingot_osmium");
});
