import { useState } from "react";
import "./Search.css";

import { FaSearch } from "react-icons/fa";
import { useData } from "../../context/DataContext";

export default function Search() {
  const { articles } = useData();
  
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchQuery.trim().toLocaleLowerCase();

    articles.filter((article) => {
      const title = article.title.toLocaleLowerCase();
      if (title.includes(query)) {
        console.log(article);
      }
    });
  }
    return (
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Търси..."
        />
        <button className="search-button" onClick={(e) => handleSearch(e)}>
          <FaSearch />
        </button>
      </div>
    );
  };

