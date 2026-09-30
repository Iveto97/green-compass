import { get } from "./requester.js";

const places_URL = "https://green-compass.onrender.com/places";

export const getPlaces = async () => {
    const response = await get(places_URL);
    return response;
}

export const getDetails = async (placeId) => {
    const response = await get(`${places_URL}/${placeId}`);
    return response;
}

export const getMapData = async () => {
    const response = await get(`${places_URL}/map`);
    return response;
}