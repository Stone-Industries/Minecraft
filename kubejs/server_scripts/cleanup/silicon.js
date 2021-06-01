/*
  Silicon Unification
*/

onEvent("recipes", (event) => {
    //replace recipes
    event.replaceInput({}, `chemlib:ingot_silicon`, `refinedstorage:silicon`);
    event.replaceOutput({}, `chemlib:ingot_silicon`, `refinedstorage:silicon`);

});

onEvent("item.tags", (event) => {
    //add all the existing tags to the replacement ingot
    event.add("forge:ingots/silicon", "refinedstorage:silicon");
    event.add("forge:ingots_silicon", "refinedstorage:silicon");
});
