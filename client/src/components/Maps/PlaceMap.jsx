import { useEffect, useRef } from "react";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

import './Maps.css'

export default function Map(coordinates) {

   const mapContainer = useRef(null);

   const map = useRef(null);

   useEffect(() => {

      if (map.current) return;

      map.current = L.map(mapContainer.current, {

         center: coordinates.coordinates,

         zoom: 13,

      });

     L.tileLayer(
   "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
   {
      attribution:
         '&copy; OpenStreetMap contributors',
      maxZoom: 19,
   }
).addTo(map.current);

      L.marker(coordinates.coordinates)
         .addTo(map.current);

   }, []);

   return (
      <div className="map-wrap">
         <div
            ref={mapContainer}
            className="map"
         />
      </div>
   );
}