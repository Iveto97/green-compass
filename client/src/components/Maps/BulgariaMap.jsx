import L, { Marker, Popup, TileLayer, MapContainer, marker } from "leaflet";

import "leaflet/dist/leaflet.css";
import "./Maps.css";
import { getPlacesForMap } from "../../api/usePlaces";
import { useEffect, useRef } from "react";
import { createMarker } from "../../utils/createMarker";
import waterfallPin from "../../assets/markers/waterfallPin.svg";
import archPin from "../../assets/markers/archPin.svg";
import monumentPin from "../../assets/markers/monumentPin.svg";
import churchPin from "../../assets/markers/churchPin.svg";
import fossil from "../../assets/markers/fossil.svg";

export default function BulgariaMap() {
  const markerIcon = {
    водопад: createMarker(waterfallPin),
    арка: createMarker(archPin),
    паметник: createMarker(monumentPin),
    манастир: createMarker(churchPin),
    археология: createMarker(fossil),
  };

  const placesData = getPlacesForMap();

  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current || !placesData.length) return;

    map.current = L.map(mapContainer.current, {
      center: [42.766, 25.238],
      zoom: 7,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(map.current);

    placesData.forEach((place) => {
      const category = place.category.toLowerCase();
      L.marker(place.coordinates, { icon: markerIcon[category] })
        .bindPopup(place.name)
        .addTo(map.current);
    });
  }, [placesData]);

  return (
    <section id="bg-map" className="bg-map-section">
      <h1>KАРТА НА БЪЛГАРИЯ</h1>
      <p>
        Открий най-красивите природни и исторически забележителности из цяла
        България.
      </p>
      <div className="map-container">
        <div className="info-map">
          <div className="info-header-map">
            <h2>
              Легенда <hr className="gold-line" />
            </h2>
            <span className="eyebrow">ИЗБЕРИ МЯСТО И ТРЪГНИ НА ПРИКЛЮЧЕНИЕ</span>
          </div>
          <div className="legend">
            <div className="legend-item">
              <div className="marker-legend">
                <img
                  src={waterfallPin}
                  alt="waterfall icon"
                  className="waterfall-icon"
                />
              </div>

              <span>Водопад</span>
            </div>
            <div className="legend-item">
              <div className="marker-legend">
                <img
                  src={archPin}
                  alt="waterfall icon"
                  className="waterfall-icon"
                />
              </div>
              <span>Арка</span>
            </div>
            <div className="legend-item">
              <div className="marker-legend">
                <img
                  src={monumentPin}
                  alt="waterfall icon"
                  className="waterfall-icon"
                />
              </div>
              <span>Паметник</span>
            </div>
            <div className="legend-item">
              <div className="marker-legend">
                <img
                  src={fossil}
                  alt="fossil icon"
                  className="waterfall-icon"
                />
              </div>
              <span>Археология</span>
            </div>
            <div className="legend-item">
              <div className="marker-legend">
                <img
                  src={churchPin}
                  alt="waterfall icon"
                  className="waterfall-icon"
                />
              </div>
              <span>Манастир</span>
            </div>
          </div>
        </div>

        <div className="bg-map-wrap">
          <div ref={mapContainer} className="bg-map" />
        </div>
      </div>
    </section>
  );
}
