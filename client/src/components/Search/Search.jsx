import { useState } from "react";
import "./Search.css";

import { FaSearch } from "react-icons/fa";

export default function Search({ value, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Търси..."
      />
      <button
        className="search-button"
        onClick={() => {
          onSearch({
            ...value,
            searchTerm,
          });
        }}
      >
        <FaSearch />
      </button>
    </div>
  );
}
