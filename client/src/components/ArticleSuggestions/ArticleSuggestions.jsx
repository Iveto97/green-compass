import { useEffect, useRef } from "react";
import { getAllArticles } from "../../api/useArticles";
import "./ArticleSuggestions.css";
import { Link } from "react-router-dom";

export default function ArticleSuggestions() {
  const allArticles = getAllArticles();
  const lastArticlesId = Object.keys(allArticles).reverse().slice(0, 3);

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
              src={allArticles[articleId]?.image}
              alt={allArticles[articleId]?.title}
            />
            <div className="article-suggestions-text">
              <Link
                to={`/blog/${allArticles[articleId]?.id}/details`}
                className="article-suggestions-name"
              >
                {allArticles[articleId]?.title}
              </Link>
              <span className="article-suggestions-date">
                {allArticles[articleId]?.created_at
                  ? createDate(allArticles[articleId]?.created_at)
                  : ""}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
