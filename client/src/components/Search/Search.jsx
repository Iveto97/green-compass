import { useState } from "react";
import "./Search.css";

import { FaSearch } from "react-icons/fa";
import { useData } from "../../context/DataContext";

export default function Search({ onSearch }) {
  const { articles } = useData();
  
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchValue);
  }
  
    return (
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Търси..."
        />
        <button className="search-button" onClick={(e) => handleSearch(e)}>
          <FaSearch />
        </button>
      </div>
    );
  };

