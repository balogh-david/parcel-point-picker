import { memo, useMemo } from "react";
import type { LatLngTuple } from "leaflet";
import { Marker } from "react-leaflet";
import { markerIcon } from "../../utils";
import type { PickupPoint } from "../../types";

type PickupPointMarkerProps = {
  point: PickupPoint;
  isSelected: boolean;
  onActivate: (point: PickupPoint) => void;
}

export function PickupPointMarkerComponent({ point, isSelected, onActivate }: PickupPointMarkerProps) {
  const position = useMemo<LatLngTuple>(
    () => [point.location.latitude, point.location.longitude],
    [point.location.latitude, point.location.longitude],
  );
  const eventHandlers = useMemo(() => ({ click: () => onActivate(point) }), [onActivate, point]);

  return (
    <Marker
      position={position}
      icon={markerIcon(point.type, isSelected)}
      title={point.name}
      keyboard={false}
      eventHandlers={eventHandlers}
    />
  );
}

export const PickupPointMarker = memo(PickupPointMarkerComponent);