import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="relative flex items-center ">
      <input
        type="text"
        placeholder="Search for Products, Brands and More"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-96 p-2 pl-16 rounded-full border border-gray-300 focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="absolute left-3 pl-2 pt-1 top-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-5-5m-9-1a7 7 0 110-14 7 7 0 010 14z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
