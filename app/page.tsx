"use client";

import { useState } from "react";
import ItemCard from "@/src/components/ItemCard";
import { inventory, filterByCategory, type Category } from "@/src/lib/inventory";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
  const visibleItems = 
    selectedCategory === "all"
      ? inventory
      : filterByCategory(inventory, selectedCategory);

  return (
   <main style={{ padding: "4rem", fontFamily: "sans-serif"}}>
    <h1>This is my own headline for day 1 to show that I know what the hell I'm doing in live development.</h1>
    <p>Shipped July 7, 2026. Everything starts here.</p>
    <div>
      {(["all", "card", "coin", "militaria"] as const).map((cat) => (
        <button key={cat} onClick={() => setSelectedCategory(cat)}>
          {cat}
        </button>
      ))}
    </div>
    {visibleItems.map((item) => (
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
