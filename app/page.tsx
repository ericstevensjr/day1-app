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
    <main 
      className="max-w-3xl mx-auto px-4 py-8 space-y-6" 
    >
    <h1 className="text-2xl font-bold">Collectibles Inventory</h1>
      <div>
        {(["all", "card", "coin", "militaria"] as const).map((cat) => (
          <button 
            key={cat} 
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? "px-3 py-1 rounded bg-blue-600 text-white" : "px-3 py-1 rounded border"}
          >
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
