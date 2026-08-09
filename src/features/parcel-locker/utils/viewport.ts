import type { Map as LeafletMap } from "leaflet";
import type { Viewport } from "../types";

export const readViewport = (map: LeafletMap): Viewport => {
  const bounds = map.getBounds();
  return {
    bbox: {
      south: bounds.getSouth(),
      west: bounds.getWest(),
      north: bounds.getNorth(),
      east: bounds.getEast(),
    },
    zoom: map.getZoom(),
  };
};
