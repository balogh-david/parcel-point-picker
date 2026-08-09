import type { PickupPointsInAreaQuery } from "./graphql";

type PickupPointsData = NonNullable<PickupPointsInAreaQuery["session"]>["pickupPoint"]["pickupPoints"]["points"]["data"];

export type PickupPoint = PickupPointsData[number];
export type PickupPointType = NonNullable<PickupPoint["type"]>;
export type OpeningHour = PickupPoint["openingHours"][number];

export const PICKUP_POINT_TYPES = [
  "LOCKER", "POST_OFFICE", "SHOP"
] as const satisfies readonly PickupPointType[];

export type Bbox = {
  south: number;
  west: number;
  north: number;
  east: number;
}

export type Viewport = {
  bbox: Bbox;
  zoom: number;
}

export type GeocodingResult = {
  id: string;
  label: string;
  latitude: number;
  longitude: number;
  bbox: Bbox | null;
}

export type Tile = {
  z: number;
  x: number;
  y: number;
}