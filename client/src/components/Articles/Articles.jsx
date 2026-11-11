import { useParams } from "react-router-dom";
import "./Articles.css";
import ArticleSuggestions from "../ArticleSuggestions/ArticleSuggestions.jsx";
import Map from "../Maps/Map.jsx";

import { IoLocationSharp } from "react-icons/io5";
import { GiVanillaFlower } from "react-icons/gi";
import { useData } from "../../context/DataContext.jsx";
import { useEffect } from "react";

export default function Article() {
  const { articleId } = useParams();

  const { articleDetails, fetchArticleDetails, placesForArticle, fetchArticlePlaces } = useData();

  useEffect(() => {
    if (!articleId) return;

    fetchArticleDetails(articleId);
    fetchArticlePlaces(articleId);
  }, []);

  const arContent = articleDetails.article;

  const sectionOrder = ["one", "two", "three", "four", "five"];

  const sortedSections = sectionOrder
    .filter((section) => arContent?.[section])
    .map((section) => [section, arContent[section]]);

  return (
    <div className="article-section">
      <div className="article-heading">
        <div className="article-heading-container">
          <span className="article-header-category">
            {articleDetails.category}
          </span>
          <h1 className="article-header-title">{articleDetails.title}</h1>
          <p className="article-header-para">{articleDetails.motto}</p>
        </div>
      </div>
      <div className="article-body">
        <div className="article-body-text">
          <div className="article-intro-container">
            <p className="article-intro-para">{articleDetails.intro}</p>
          </div>
          <div className="article-text">
            <div>
              <h3 className="article-text-header" id="one">{arContent?.one.header}</h3>
              {arContent?.one.content.map((text, index) => (
                <p className="article-text-para" key={`one-${index}`}>
                  {text}
                </p>
              ))}
            </div>
            <div className="article-image-container">
              {articleDetails["content_img"] &&
                articleDetails["content_img"].length > 1 && (
                  <img
                    className="article-image"
                    src={articleDetails["content_img"][0]}
                    alt={articleDetails.title}
                  />
                )}
            </div>
          </div>
          <div className="article-text reverced">
            <div className="article-image-container">
              {articleDetails["content_img"] &&
                articleDetails["content_img"].length > 1 && (
                  <img
                    className="article-image"
                    src={articleDetails["content_img"][1]}
                    alt={articleDetails.title}
                  />
                )}
            </div>
            <div>
              <h3 className="article-text-header" id="two">{arContent?.two.header}</h3>
              {arContent?.two.content.map((text, index) => (
                <p className="article-text-para" key={`two-${index}`}>
                  {text}
                </p>
              ))}
            </div>
          </div>
          <div className="article-text">
            <div>
              <h3 className="article-text-header" id="three">{arContent?.three.header}</h3>
              {arContent?.three.content.map((text, index) => (
                <p className="article-text-para" key={`three-${index}`}>
                  {text}
                </p>
              ))}
            </div>
            <div className="article-image-container">
              {articleDetails["content_img"] &&
                articleDetails["content_img"].length > 1 && (
                  <img
                    className="article-image"
                    src={articleDetails["content_img"][2]}
                    alt={articleDetails.title}
                  />
                )}
            </div>
          </div>
        </div>
        <div className="article-body-map">
          <div className="article-content">
            <h2 className="article-map-header">
              <GiVanillaFlower />
              Съдържание
            </h2>
            <ol className="article-content-list" start={1} type="1">
              {sortedSections ? (
                sortedSections.map(([section, content]) => (
                  <li className="article-content-li" key={`content-${section}`}>
                    <a className="article-content-link" href={`#${section}`}>{content.header}</a>
                  </li>
                ))
              ) : (
                <li>Зареждане на съдържанието...</li>
              )}
            </ol>
          </div>
          <div className="article-map">
            <h2 className="article-map-header">
              <IoLocationSharp />
              Къде се намират тези места?
            </h2>
            <div className="map-holder">
              {placesForArticle && placesForArticle.length > 0 ? (
                <Map placesData={placesForArticle} />
              ) : (
                <p>Зареждане на картата...</p>
              )}
            </div>
            <div>
              <ul className="article-map-places">
                {placesForArticle && placesForArticle.length > 0 ? (
                  placesForArticle.map((place) => (
                    <li className="map-places-list" key={place["place_id"]}>
                      <IoLocationSharp />
                      {place["place_name"]}
                    </li>
                  ))
                ) : (
                  <li>Loading names...</li>
                )}
              </ul>
            </div>
          </div>
          <div className="article-body-suggestions">
            <ArticleSuggestions />
          </div>
        </div>
      </div>
      <div className="article-info">
        <h3 className="article-text-header" id="four">{arContent?.four.header}</h3>
        <div className="article-practicle-container">
          {Object.entries(arContent?.four?.content ?? {}).map(
            ([title, text]) => (
              <div className="article-practicle-info" key={`four-${title}`}>
                <h4 className="article-practicle-header">{title}</h4>
                <p className="article-practicle-para">{text}</p>
              </div>
            ),
          )}
        </div>
      </div>
      <div className="article-text">
        <div>
          <h3 className="article-text-header" id="five">{arContent?.five.header}</h3>
          {arContent?.five.content.map((text, index) => (
            <p className="article-text-para" key={`five-${index}`}>
              {text}
            </p>
          ))}
        </div>
        <div className="article-image-container">
          {articleDetails["content_img"] &&
            articleDetails["content_img"].length > 1 && (
              <img
                className="article-image"
                src={articleDetails["content_img"][3]}
                alt={articleDetails.title}
              />
            )}
        </div>
      </div>
    </div>
  );
}
