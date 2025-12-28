import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import DrawControls from "./DrawControls";

const DEFAULT_CENTER = [20.5937, 78.9629];

const MapView = () => {
  return (
    <MapContainer
      center={DEFAULT_CENTER}
      zoom={5}
      className="h-full w-full"
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FeatureGroup>
        <DrawControls />
      </FeatureGroup>
    </MapContainer>
  );
};

export default MapView;
