"use client";

import { useState } from "react";
import ItemCard from "@/src/components/ItemCard";
import { inventory, filterByCategory, type Category } from "@/src/lib/inventory";
import CategoryFilter from "@/src/components/CategoryFilter";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const categoryFiltered =
    selectedCategory === "all"
      ? inventory
      : filterByCategory(inventory, selectedCategory);
  const visibleItems = categoryFiltered.filter((item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  ));

  return (
    <main 
      className="max-w-3xl mx-auto px-4 py-8 space-y-6" 
    >
    <h1 className="text-2xl font-bold">Collectibles Inventory</h1>
      <input
        type="text"
        placeholder="Search inventory..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-3 py-2 rounded border"
      />
      <CategoryFilter
        categories={["all", "card", "coin", "militaria"]}
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
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
