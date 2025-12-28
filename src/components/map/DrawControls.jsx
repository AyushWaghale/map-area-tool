import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-draw";

const DrawControls = ({ featureGroupRef, onShapeCreated }) => {
    const map = useMap();

    useEffect(() => {
        if (!featureGroupRef.current) return;

        const drawControl = new L.Control.Draw({
            position: "topright",

            edit: {
                featureGroup: featureGroupRef.current,
                remove: true,
                edit: false,
            },

            draw: {
                polygon: {
                    allowIntersection: false,
                    showArea: true,
                    shapeOptions: {
                        color: "#2563eb",
                        weight: 3,
                        fillOpacity: 0.2,
                    },
                },

                polyline: {
                    shapeOptions: {
                        color: "#0f172a",
                        weight: 3,
                    },
                },

                rectangle: false,
                circle: false,
                marker: false,
                circlemarker: false,
            },

        });

        map.addControl(drawControl);

        map.on(L.Draw.Event.CREATED, (event) => {
            const { layer, layerType } = event;
            featureGroupRef.current.addLayer(layer);
            onShapeCreated(layerType, layer);
        });

        return () => {
            map.removeControl(drawControl);
        };
    }, [map, featureGroupRef, onShapeCreated]);

    return null;
};

export default DrawControls;
