onEvent("recipes", (event) => {
    //there is an angry bug between IF and something (probably fastworkbenches) that is preventing registration of plastic recipes.
    //this reimplements them.
    event.shapeless(`industrialforegoing:dryrubber`, [Item.of(`industrialforegoing:tinydryrubber`, 9)])

    event.smelting(`industrialforegoing:plastic`, `industrialforegoing:dryrubber`)
})