import BlogCards from "../BlogCards/BlogCards";

import "./Blog.css";
import { useEffect, useMemo, useState } from "react";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import { useData } from "../../context/DataContext";
import ButtonFilter from "../ButtonFilter/ButtonFilter";
import filterData from "../../utils/filterData";

import { BsFillTreeFill, BsBank } from "react-icons/bs";
import { GiWhiteTower, GiWaterfall, GiMountainCave  } from "react-icons/gi";
import { FaChurch, FaMonument } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

import { GiMonsteraLeaf, GiMountainRoad } from "react-icons/gi";
import { FaArchway } from "react-icons/fa6";
import { PiBinoculars } from "react-icons/pi";

const Blog = () => {
  const [sortedArticles, setSortedArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState({
    searchTerm: "",
    category: ["Всички"],
    region: "Всички"
  });

  const { articles, fetchArticles } = useData();

  useEffect(() => {
    fetchArticles();
  }, []);

  const categoryIcons = {
    "Всички": <IoIosMenu className="filter-icon" />,
    "Природа": <BsFillTreeFill className="filter-icon" />,
    "История": <GiWhiteTower className="filter-icon"/>,
    "Манастир": <FaChurch className="filter-icon"/>,
    "Култура": <BsBank className="filter-icon"/>,
    "Паметник": <FaMonument className="filter-icon"/>,
    "Водопад": <GiWaterfall className="filter-icon"/>,
    "Пещера": <GiMountainCave className="filter-icon"/>,
  };

  const buttonIcons = {
    "Всички": <IoIosMenu className="filter-icon" />,
    "Природа": <GiMonsteraLeaf className="filter-icon" />,
    "История": <FaArchway className="filter-icon"/>,
    "Маршрути": <GiMountainRoad className="filter-icon"/>,
    "Скрити места": <PiBinoculars className="filter-icon"/>,
  }

  const lastArticle = articles.slice(-1);

  useEffect(() => {
    const filteredArticles = filterData(articles, searchQuery);
    console.log(filteredArticles);
    
    setSortedArticles(filteredArticles);
  }, [searchQuery, articles]);

  // const searchArticles = filterData(articles, searchQuery);

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
      <div className="blog-filter">
        <ButtonFilter value={searchQuery} onClick={setSearchQuery} options={buttonIcons} />
        <div className="option-category-container">
          <CategoryDropdown
            value={searchQuery}
            onChange={setSearchQuery}
            options={categoryIcons}
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
            <Search value={searchQuery} onSearch={setSearchQuery} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
