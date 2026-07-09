// Concept 1 --- Inference vs. Annotation
// let price = 4.99; // inferred: number
// let nameT = "Charizard"; // inferred: string
// price = "five"; // X error - and that's the point

// Good: boundary annotated, internal inferred
// function applyDiscount(price: number, percent: number): number {
//    const multiplier = 1 - percent / 100; // inferred
//    return price * multiplier;
//}

// Concept 2 --- Modeling a real shape
type Category = "card" | "coin" | "militaria";

interface BaseItem {
    id: string;
    name: string;
    category: Category;
    purchasePrice: number;
    askingPrice: number;
}

interface UnsoldItem extends BaseItem {
    sold: false;
}

interface SoldItem extends BaseItem {
    sold: true;
    soldPrice: number; // required - no more ?
}

type InventoryItem = UnsoldItem | SoldItem;

const inventory: InventoryItem[] = [
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

function totalProfit(items: InventoryItem[]): number {
    let total = 0;
    for (const item of items) {
        if (item.sold) {
            total += item.soldPrice - item.purchasePrice;
        }
    }
    return total;
}

function first<T>(items: T[]): T {
    return items[0];
}

function filterByCategory(items: InventoryItem[], cat: Category): InventoryItem[] {
    return items.filter((item) => item.category === cat);
}

const firstItem = first(inventory);
const firstNum = first([10, 20, 30]);

console.log(totalProfit(inventory));
console.log(filterByCategory(inventory, "card"));