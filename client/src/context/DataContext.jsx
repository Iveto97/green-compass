import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

import { getDetails, getPlaces, getMapData } from "../api/places";
import {
  getArticles,
  getArticleDetails,
  getPlacesForArticle,
} from "../api/articles";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [places, setPlaces] = useState([]);
  const [placeDetails, setPlaceDetails] = useState([]);
  const [mapPlaces, setMapPlaces] = useState([]);

  const [articles, setArticles] = useState([]);
  const [articleDetails, setArticleDetails] = useState([]);
  const [placesForArticle, setPlacesForArticle] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const placesInfo = await getPlaces();
        setPlaces(placesInfo);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  const fetchPlaceDetails = useCallback(async (placeId) => {
    if (!placeId) return;

    try {
      const response = await getDetails(placeId);
      setPlaceDetails(response);
    } catch (error) {
      setError(error);
    }
  });

  const fetchPlacesForMap = useCallback(async () => {
    try {
      const response = await getMapData();
      setMapPlaces(response);
    } catch (error) {
      setError(error);
    }
  });

  const fetchArticles = useCallback(async () => {
    try {
      const response = await getArticles();
      setArticles(response);
    } catch (error) {
      setError(error);
    }
  });

  const fetchArticleDetails = useCallback(async (articleId) => {
    if (!articleId) return;

    try {
      const response = await getArticleDetails(articleId);
      setArticleDetails(response);
    } catch (error) {
      setError(error);
    }
  });

  const fetchArticlePlaces = useCallback(async (articleId) => {
    if (!articleId) return;

    try {
      const response = await getPlacesForArticle(articleId);
      setPlacesForArticle(response);
    } catch (error) {
      setError(error);
    }
  });

  const value = {
    places,
    placeDetails,
    fetchPlaceDetails,
    mapPlaces,
    fetchPlacesForMap,
    articles,
    fetchArticles,
    articleDetails,
    fetchArticleDetails,
    placesForArticle,
    fetchArticlePlaces,
    error,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a PlacesProvider");
  }
  return context;
};
