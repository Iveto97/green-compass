import BlogCards from "../BlogCards/BlogCards";

import { GiMonsteraLeaf, GiMountainRoad } from "react-icons/gi";
import { FaArchway } from "react-icons/fa6";
import { PiBinoculars } from "react-icons/pi";

import "./Blog.css";
import { useEffect, useMemo, useState } from "react";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import { useData } from "../../context/DataContext";

const Blog = () => {
  const [sortedArticles, setSortedArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Всички");
  const [searchQuery, setSearchQuery] = useState("");

  const { articles, fetchArticles } = useData();

  useEffect(() => {
    fetchArticles();
  }, []);

  const lastArticle = articles.slice(-1);

  useEffect(() => {
    if (selectedCategory === "Всички") {
      setSortedArticles(articles);
    } else {
      const filteredArticles = articles.filter(
        (article) => article.category === selectedCategory,
      );
      setSortedArticles(filteredArticles);
    }
  }, [selectedCategory, articles]);

  const handleSearch = useMemo(() => {
    const sortedAr = articles.filter((article) => {
      return article.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setSortedArticles(sortedAr)
  }, [searchQuery]);

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
          <CategoryDropdown
            value={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>
      </div>
      <div className="blog-content-container">
        {articles.length > 0 ? (
          <div className="blog-articles">
            <div className="">
              <h2 className="last-added-header">Последно добавена</h2>
            </div>
            <div className="last-article-container">
              <div className="last-article-image-container">
                <img
                  src={lastArticle[0].image}
                  alt={lastArticle[0].title}
                  className="last-article-image"
                />
              </div>
              <div className="last-article-content-container">
                <h3 className="last-article-header">{lastArticle[0].title}</h3>
                <p className="last-article-para">{lastArticle[0].excerpt}</p>
                <Link
                  to={`/blog/${lastArticle[0].id}/details`}
                  className="last-article-button"
                >
                  Прочети повече
                </Link>
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
        ) : (
          <p className="no-articles">Няма намерени статии</p>
        )}
        <div className="blog-additions">
          <div className="blog-addition">
            <h2 className="blog-addition-header">Търси в блога</h2>
            <Search onSearch={setSearchQuery} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
