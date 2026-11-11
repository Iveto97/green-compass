import { useEffect, useRef } from "react";
import "./ArticleSuggestions.css";
import { Link } from "react-router-dom";
import { useData } from "../../context/DataContext";

export default function ArticleSuggestions() {
  const { articles, fetchArticles } = useData();

  useEffect(() => {
    fetchArticles();
  }, []);

  const lastArticlesId = Object.keys(articles).reverse().slice(0, 3);

  const createDate = (createdDate) => {
    const months = [
      "януари",
      "февруари",
      "март",
      "април",
      "май",
      "юни",
      "юли",
      "август",
      "септември",
      "октомври",
      "ноември",
      "декември",
    ];
    const date = new Date(createdDate);
    const [month, day, year] = [
      date.getMonth(),
      date.getDay(),
      date.getFullYear(),
    ];

    return `${day} ${months[month]} ${year}`;
  };

  return (
    <div className="article-suggestions-container">
      <div className="article-suggestions-header-container">
        <h1 className="article-suggestions-header">Още от блога</h1>
        <Link to="/blog" className="article-suggestions-link">
          Виж всички
        </Link>
      </div>
      <div>
        {lastArticlesId.map((articleId) => (
          <div className="article-suggestion" key={articleId}>
            <img
              className="article-suggestions-image"
              src={articles[articleId]?.image}
              alt={articles[articleId]?.title}
            />
            <div className="article-suggestions-text">
              <Link
                to={`/blog/${articles[articleId]?.id}/details`}
                className="article-suggestions-name"
              >
                {articles[articleId]?.title}
              </Link>
              <span className="article-suggestions-date">
                {articles[articleId]?.created_at
                  ? createDate(articles[articleId]?.created_at)
                  : ""}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
