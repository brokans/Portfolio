import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import ChangeView from "./ChangeView";
import config from "../data/config.json";
import { useEffect, useState } from "react";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map({ mapCoordinaates, shops: shopsProp }) {
  const [shops, setShops] = useState(shopsProp || []);

  useEffect(() => {
    if (shopsProp) {
      setShops(shopsProp);
      return;
    }

    fetch(config.shops)
      .then((res) => res.json())
      .then((json) => setShops(json || []));
  }, [shopsProp]);

  return (
    <div className="map-wrapper">
      <MapContainer
        className="map"
        center={mapCoordinaates.lngLat}
        zoom={mapCoordinaates.zoom}
        scrollWheelZoom={false}
      >
        <ChangeView
          center={mapCoordinaates.lngLat}
          zoom={mapCoordinaates.zoom}
        />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {shops.map((shop) => (
          <Marker key={shop.name} position={[shop.lati, shop.long]}>
            <Popup>
              {shop.name}
              <br />
              {"Avatud: "}
              {shop.open}
              <br />
              {shop.address}
              <br />
              {shop.url && (
                <a href={shop.url} target="_blank" rel="noreferrer">
                  Juhised
                </a>
              )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
