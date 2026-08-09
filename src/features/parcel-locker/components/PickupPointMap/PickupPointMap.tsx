import { useRef, type ReactNode } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import type { GeocodingResult, Viewport } from "../../types";
import { ResultNavigator } from "./ResultNavigator";
import { ViewportWatcher } from "./ViewportWatcher";

import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

const DEFAULT_CENTER: [number, number] = [47.4979, 19.0402];

type PickupPointMapProps = {
  onViewportChange: (viewport: Viewport) => void
  flyToResult: GeocodingResult | null
  children?: ReactNode
}

export function PickupPointMap({ onViewportChange, flyToResult, children }: PickupPointMapProps) {
  const isFlyingRef = useRef(false);

  return (
    <MapContainer
      center={DEFAULT_CENTER}
      zoom={14}
      scrollWheelZoom
      className="size-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={18}
        minZoom={5}
      />
      <ViewportWatcher onViewportChange={onViewportChange} isFlyingRef={isFlyingRef}/>
      <ResultNavigator result={flyToResult} isFlyingRef={isFlyingRef} onArrive={onViewportChange}/>
      {children}
    </MapContainer>
  );
}


