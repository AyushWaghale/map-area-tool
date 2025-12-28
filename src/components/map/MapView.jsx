import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { useRef } from "react";
import DrawControls from "./DrawControls";
import { calculateAreaByType } from "../../services/geometryService";

const DEFAULT_CENTER = [20.5937, 78.9629];

const MapView = ({ shapeStore }) => {
  const featureGroupRef = useRef(null);
  const { addShape } = shapeStore;

  const handleShapeCreated = (type, layer) => {
    const area = calculateAreaByType(type, layer);

    addShape({
      id: crypto.randomUUID(),
      type,
      layer,
      area, // 👈 stored here
    });
  };

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

      <FeatureGroup ref={featureGroupRef}>
        <DrawControls
          featureGroupRef={featureGroupRef}
          onShapeCreated={handleShapeCreated}
        />
      </FeatureGroup>
    </MapContainer>
  );
};

export default MapView;
