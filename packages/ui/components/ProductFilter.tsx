import React, { useState } from "react";

interface ProductFiltersProps {
  onFilter: (filters: ProductFilters) => void;
}

interface ProductFilters {
  minPrice: number;
  maxPrice: number;
  sortBy: "price" | "name" | "rating";
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ onFilter }) => {
  const [filters, setFilters] = useState<ProductFilters>({
    minPrice: 0,
    maxPrice: 1000,
    sortBy: "price",
  });

  const handleFilter = () => {
    onFilter(filters);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-2">Product Filters</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Price Range
        </label>
        <div className="flex space-x-4">
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice}
            onChange={(e) =>
              setFilters({ ...filters, minPrice: +e.target.value })
            }
            className="w-1/2 p-2 rounded-md border border-gray-300"
          />
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters({ ...filters, maxPrice: +e.target.value })
            }
            className="w-1/2 p-2 rounded-md border border-gray-300"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Sort By
        </label>
        <select
          value={filters.sortBy}
          onChange={(e) =>
            setFilters({
              ...filters,
              sortBy: e.target.value as ProductFilters["sortBy"],
            })
          }
          className="w-full p-2 rounded-md border border-gray-300"
        >
          <option value="price">Price</option>
          <option value="name">Name</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <button
        onClick={handleFilter}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default ProductFilters;

/* <ProductFilters onFilter={(filters) => handleFilter(filters)} /> */
