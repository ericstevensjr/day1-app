import { type Category } from "@/src/lib/inventory"

type FilterValue = Category | "all";

interface CategoryFilterProps {
    categories: FilterValue[];
    activeCategory: FilterValue;
    onCategoryChange: (category: FilterValue) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={
            activeCategory === cat
              ? "px-3 py-1 rounded bg-blue-600 text-white"
              : "px-3 py-1 rounded border"
          }
        >
          {cat}
        </button>
      ))}
    </div>
  );
}