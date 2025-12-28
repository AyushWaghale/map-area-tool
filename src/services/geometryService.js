import * as turf from "@turf/turf";

/**
 * Convert Leaflet layer to GeoJSON
 */
export const layerToGeoJSON = (layer) => {
  return layer.toGeoJSON();
};

/**
 * Calculate area in square meters
 * Only valid for Polygon
 */
export const calculatePolygonArea = (geoJson) => {
  return turf.area(geoJson);
};

/**
 * Safe area calculator
 */
export const calculateAreaByType = (type, layer) => {
  if (type !== "polygon") {
    return 0;
  }

  const geoJson = layerToGeoJSON(layer);
  return calculatePolygonArea(geoJson);
};
