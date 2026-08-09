import { useEffect } from "react";
import type { RefObject } from "react";
import { useMapEvents } from "react-leaflet";
import { useDebouncedCallback } from "use-debounce";
import type { Viewport } from "../../types";
import { readViewport } from "../../utils";

const VIEWPORT_DEBOUNCE_MS = 700;

type ViewportWatcherProps = {
  onViewportChange: (viewport: Viewport) => void;
  isFlyingRef: RefObject<boolean>;
}

export function ViewportWatcher({ onViewportChange, isFlyingRef }: ViewportWatcherProps) {
  const emit = useDebouncedCallback((viewport: Viewport) => {
    if (!isFlyingRef.current) {
      onViewportChange(viewport);
    }
  }, VIEWPORT_DEBOUNCE_MS);

  const map = useMapEvents({
    moveend: () => {
      if (!isFlyingRef.current) {
        emit(readViewport(map));
      }
    },
    zoomend: () => {
      if (!isFlyingRef.current) {
        emit(readViewport(map));
      }
    },
  });

  useEffect(() => {
    onViewportChange(readViewport(map));
  }, [map, onViewportChange]);

  return null;
}
