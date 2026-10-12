import { useEffect, useState } from "react";
import { getArticles } from "./articles.js";

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