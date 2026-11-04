import { useEffect, useState } from "react";
import { getArticles, getDetails, getPlacesForArticle } from "./articles.js";

export function getAllArticles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
       (async () => {
            const response = await getArticles();
            setArticles(response);
        })();
    }, []);
    
    return articles;
};

export function getArticleDetails(articleId) {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await getDetails(articleId);
            setDetails(response);
        })()
    }, [articleId]);

    return details;
}

export function  getArticlePlaces(articleId) {
    const [ places , setPlaces] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await getPlacesForArticle(articleId);
            setPlaces(response);
        })()
    }, [articleId]);

    return places;
}