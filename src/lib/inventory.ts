export type Category = "card" | "coin" | "militaria";

export type InventoryItem = UnsoldItem | SoldItem;

export const inventory: InventoryItem[] = [
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

export function filterByCategory(
    items: InventoryItem[],
    category: Category
): InventoryItem[] {
    return items.filter((item) => item.category === category);
}