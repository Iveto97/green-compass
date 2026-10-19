import BlogCards from "../BlogCards/BlogCards";
import { getAllArticles } from "../../api/useArticles";

import { GiMonsteraLeaf, GiMountainRoad } from "react-icons/gi";
import { FaArchway } from "react-icons/fa6";
import { PiBinoculars } from "react-icons/pi";
import { IoMenuOutline } from "react-icons/io5";

import "./Blog.css";
import { useEffect, useState } from "react";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";

const Blog = () => {
  const [sortedArticles, setSortedArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Всички");

  const articles = getAllArticles();

  useEffect(() => {
    if(selectedCategory === "Всички") {
      setSortedArticles(articles);
    } else {
      const filteredArticles = articles.filter((article) => article.category === selectedCategory);
      setSortedArticles(filteredArticles);
    }
  }, [selectedCategory, articles]);

  return (
    <div className="blog">
      <div className="blog-heading">
        <div className="blog-heading-text">
          <h1 className="blog-header">БЛОГ &nbsp; • &nbsp; ЗЕЛЕНИЯ КОМПАС</h1>
          <h2 className="blog-subheader">Истории от България</h2>
          <p className="blog-description">
            Вдъхновяващи разкази, полезни съвети и любопитни факти за природните
            и историческите забележителности на страната.
          </p>
        </div>
      </div>
      <div className="blog-categories">
        <div className="blog-category">
          <button
            className="blog-btn"
            onClick={() => setSelectedCategory("Всички")}
          >
            Всички
          </button>
        </div>
        <div className="blog-category">
          <button
            className="blog-btn"
            onClick={() => setSelectedCategory("Природа")}
          >
            <GiMonsteraLeaf />
            Природа
          </button>
        </div>
        <div className="blog-category">
          <button
            className="blog-btn"
            onClick={() => setSelectedCategory("История")}
          >
            <FaArchway />
            История
          </button>
        </div>
        <div className="blog-category">
          <button
            className="blog-btn"
            onClick={() => setSelectedCategory("Маршрути")}
          >
            <GiMountainRoad />
            Маршрути
          </button>
        </div>
        <div className="blog-category">
          <button
            className="blog-btn"
            onClick={() => setSelectedCategory("Скрити места")}
          >
            <PiBinoculars />
            Скрити места
          </button>
        </div>
        <div className="option-category-container">
          <CategoryDropdown value={selectedCategory} onChange={setSelectedCategory}/>
        </div>
      </div>
      <div className="blog-cards">
        {sortedArticles.length > 0 ? (
          sortedArticles.map((article) => (
            <BlogCards key={article.id} {...article} />
          ))
        ) : (
          <p className="no-articles">Няма намерени статии</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
