// Concept 1 --- Inference vs. Annotation
// let price = 4.99; // inferred: number
// let nameT = "Charizard"; // inferred: string
// price = "five"; // X error - and that's the point
var inventory = [
    {
        id: "c-001",
        name: "Charizard Base Set",
        category: "card",
        purchasePrice: 80,
        askingPrice: 250,
        sold: true,
        soldPrice: 230,
    },
    {
        id: "n-001",
        name: "1921 Morgan Dollar",
        category: "coin",
        purchasePrice: 25,
        askingPrice: 45,
        sold: false,
        // no soldPrice - it's optional, so we just omit it
    },
    {
        id: "m-001",
        name: "Vietnam-era Jungle Boots",
        category: "militaria",
        purchasePrice: 0,
        askingPrice: 120,
        sold: true,
        soldPrice: 110,
    },
];
function totalProfit(items) {
    var total = 0;
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        if (item.sold && item.soldPrice !== undefined) {
            total += item.soldPrice - item.purchasePrice;
        }
    }
    return total;
}
console.log(totalProfit(inventory));
