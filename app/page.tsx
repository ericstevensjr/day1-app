import ItemCard from "@/src/components/ItemCard";
import { inventory } from "@/src/lib/inventory";

export default function Home() {
  return (
   <main style={{ padding: "4rem", fontFamily: "sans-serif"}}>
    <h1>This is my own headline for day 1 to show that I know what the hell I'm doing in live development.</h1>
    <p>Shipped July 7, 2026. Everything starts here.</p>
    {inventory.map((item) => (
      <ItemCard
        key={item.id}
        name={item.name}
        category={item.category}
        askingPrice={item.askingPrice}
      />
      ))}
   </main>
  );
}
