import React from "react";
import { FiSearch } from "react-icons/fi";
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-4 relative">
      <input
        type="text"
        className="border border-gray-300 rounded-full py-2 px-10 w-80"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <FiSearch className="absolute left-3 top-3 text-gray-400" />
    </div>
  );
};

export default SearchBar;
