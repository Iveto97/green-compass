import L from "leaflet";

 export const createMarker = (iconUrl) => {
    return L.divIcon({
        className: "custom-marker",
        html: `
            <div class="marker-pin">
                <img src="${iconUrl}" alt="marker icon" />
            </div>
        `,
              iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50]
    });
 };