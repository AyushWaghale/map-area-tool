import { MapContainer, TileLayer } from "react-leaflet";

const DEFAULT_CENTER = [20.5937, 78.9629]; // India

const MapView = () => {
  return (
    <MapContainer
      center={DEFAULT_CENTER}
      zoom={5}
      className="h-full w-full text-red"
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default MapView;
