import { useEffect, useState } from "react";
import { getDetails, getMapData, getPlaces } from "./places";


export function getAllPlaces() {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
       (async () => {
            const response = await getPlaces();
            setPlaces(response);
        })();
    }, []);

    return places;
}

export function getPlaceDetails(placeId) {
    const [details, setDetails] = useState([]);
    
    useEffect(() => {
        (async () => {
            const response = await getDetails(placeId);
            setDetails(response);
        })()
    }, []);

    return details;
}

export function getPlacesForMap() {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await getMapData();
            setPlaces(response);
        })()
    }, []);

    return places;
}