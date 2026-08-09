import * as L from "leaflet";
import { PICKUP_POINT_TYPES, type PickupPointType } from "../types";

type IconKey = PickupPointType | "UNKNOWN";

const TYPES: IconKey[] = [...PICKUP_POINT_TYPES, "UNKNOWN"];

const STYLES: Record<IconKey, { glyph: string; colorClassName: string }> = {
  LOCKER: { glyph: "L", colorClassName: "bg-blue-600" },
  POST_OFFICE: { glyph: "P", colorClassName: "bg-orange-700" },
  SHOP: { glyph: "S", colorClassName: "bg-green-700" },
  UNKNOWN: { glyph: "-", colorClassName: "bg-neutral-600" },
};

function createIcon(key: IconKey, selected: boolean): L.DivIcon {
  const size = selected ? 40 : 30;
  const iconCenter = size / 2;
  const { glyph, colorClassName } = STYLES[key];

  const classes = [
    "flex items-center justify-center box-border rounded-full border-2 border-white text-white",
    colorClassName,
    selected
      ? "size-10 ring-4 ring-blue-600/35"
      : "size-[30px]"
  ].join(" ");

  return L.divIcon({
    className: "",
    html: `<div class="${classes}">${glyph}</div>`,
    iconSize: [size, size],
    iconAnchor: [iconCenter, iconCenter],
    popupAnchor: [0, -iconCenter],
  });
}

const createIcons = (selected: boolean): Record<IconKey, L.DivIcon> => {
  return Object.fromEntries(
    TYPES.map((key) => [key, createIcon(key, selected)])
  ) as Record<IconKey, L.DivIcon>;
};

const ICONS = {
  default: createIcons(false),
  selected: createIcons(true),
};

export function markerIcon(type: PickupPointType | null, selected: boolean): L.DivIcon {
  const key: IconKey = type && type in STYLES ? type : "UNKNOWN";
  return selected ? ICONS.selected[key] : ICONS.default[key];
}
