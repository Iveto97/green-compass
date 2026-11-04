import { useEffect, useRef } from "react";

import L, { Marker, Popup, TileLayer, MapContainer, marker } from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

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

    const defaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

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
