import { memo, useCallback, useState } from "react";
import type { LatLngTuple } from "leaflet";
import { Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { PickupPointMarker } from "./PickupPointMarker";
import { PickupPointDetails } from "../PickupPointDetails";
import type { PickupPoint } from "../../types";

type ActivePoint = {
  id: string;
  position: LatLngTuple;
}

type PickupPointMarkersProps = {
  points: PickupPoint[];
  selectedId: string | null;
}

function PickupPointMarkersComponent({ points, selectedId }: PickupPointMarkersProps) {
  const [active, setActive] = useState<ActivePoint | null>(null);

  const activate = useCallback((point: PickupPoint) => {
    setActive({ id: point.id, position: [point.location.latitude, point.location.longitude] });
  }, []);

  const deactivate = useCallback(() => setActive(null), []);

  const activePoint = active ? points.find((point) => point.id === active.id) ?? null : null;

  return (
    <>
      <MarkerClusterGroup
        removeOutsideVisibleBounds
        maxClusterRadius={60}
        disableClusteringAtZoom={18}
        showCoverageOnHover={false}
        zoomToBoundsOnClick={true}
        animateAddingMarkers={false}>
        {points.map((point) => (
          <PickupPointMarker
            key={point.id}
            point={point}
            isSelected={point.id === selectedId}
            onActivate={activate}
          />
        ))}
      </MarkerClusterGroup>

      {active && activePoint && (
        <Popup
          position={active.position}
          minWidth={260}
          maxWidth={320}
          eventHandlers={{ remove: deactivate }}>
          <PickupPointDetails point={activePoint}/>
        </Popup>
      )}
    </>
  );
}

export const PickupPointMarkers = memo(PickupPointMarkersComponent);

