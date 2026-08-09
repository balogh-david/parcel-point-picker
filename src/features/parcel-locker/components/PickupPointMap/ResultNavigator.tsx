import { useEffect } from "react";
import type { RefObject } from "react";
import { useMap } from "react-leaflet";
import type { GeocodingResult, Viewport } from "../../types";
import { readViewport } from "../../utils";

type ResultNavigatorProps = {
  result: GeocodingResult | null;
  isFlyingRef: RefObject<boolean>;
  onArrive: (viewport: Viewport) => void;
}

export function ResultNavigator({ result, isFlyingRef, onArrive }: ResultNavigatorProps) {
  const map = useMap();

  useEffect(() => {
    if (!result) {
      return;
    }

    isFlyingRef.current = true;

    const handleArrival = () => {
      isFlyingRef.current = false;
      onArrive(readViewport(map));
    };

    // Registered before triggering the jump: fitBounds/flyTo can resolve synchronously
    // (e.g. when the animation is skipped)
    map.once("moveend", handleArrival);

    if (result.bbox) {
      map.fitBounds(
        [
          [result.bbox.south, result.bbox.west],
          [result.bbox.north, result.bbox.east],
        ],
        { animate: true, maxZoom: 16 },
      );
    } else {
      map.flyTo([result.latitude, result.longitude], 15, { animate: true });
    }

    return () => {
      map.off("moveend", handleArrival);
      isFlyingRef.current = false;
    };
  }, [map, result, isFlyingRef, onArrive]);

  return null;
}