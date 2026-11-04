import { useEffect, useRef } from "react";

import L, { Marker, Popup, TileLayer, MapContainer, marker } from "leaflet";

import "leaflet/dist/leaflet.css";

export default function Map({ placesData }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  console.log(placesData);
  
  useEffect(() => {
    if (map.current) {
      map.current.remove();
    }

    map.current = L.map(mapContainer.current, {
      center: [42.766, 25.5],
      zoom: 6.5,
      zoomSnap: 0.25,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(map.current);

    if (placesData && placesData.length > 1) {
      placesData.forEach((place) => {
        L.marker(place.coordinates)
          .bindPopup(place["place_name"])
          .addTo(map.current);
      });
    } else if (placesData && placesData.length === 1) {
      L.marker(placesData[0].coordinates)
        .bindPopup(placesData[0]["place_name"])
        .addTo(map.current);
    }
  }, [placesData]);

  return (
    //   <div className="bg-map-wrap">
    <div ref={mapContainer} className="bg-map" />
    //   </div>
  );
}
