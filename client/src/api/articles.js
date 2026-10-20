import { get } from "./requester.js";

const ARTICLES_API_URL = 'https://green-compass.onrender.com/articles';
/*'http://localhost:3000/articles'*/ 
export const getArticles = async () => {
    const response = await get(ARTICLES_API_URL);
    return response;
};

export const getDetails = async (articleId) => {
    const response = await get(`${ARTICLES_API_URL}/${articleId}`);
    return response;
}