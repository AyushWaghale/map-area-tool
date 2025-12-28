import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { useRef , useEffect } from "react";
import DrawControls from "./DrawControls";

const DEFAULT_CENTER = [20.5937, 78.9629];

const MapView = ({ shapeStore }) => {
  const featureGroupRef = useRef(null);
  const { addShape } = shapeStore;
  const { shapes } = shapeStore;

  const handleShapeCreated = (type, layer) => {
  addShape({
    id: crypto.randomUUID(),
    type, // polygon | polyline
    layer,
  });
};

     useEffect(() => {
    if (!featureGroupRef.current) return;

    // Clear all layers
    featureGroupRef.current.clearLayers();

    // Re-add layers from state
    shapes.forEach((shape) => {
      featureGroupRef.current.addLayer(shape.layer);
    });
  }, [shapes]);


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
