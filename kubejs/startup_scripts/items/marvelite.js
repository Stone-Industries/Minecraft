onEvent("item.registry", (event) => {
    event.create("marvelite_ingot").displayName("Marvelite Ingot");
});

onEvent("block.registry", (event) => {
    event
        .create("marvelite_block")
        .material("rock")
        .hardness(50.0)
        .displayName("Marvelite Block");
    event
        .create("marvelite_ore")
        .material("rock")
        .hardness(50.0)
        .displayName("Marvelite Ore");
});
