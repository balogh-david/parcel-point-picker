import { requireEnv } from "@/lib";
import type { Bbox, GeocodingResult } from "../types";

type NominatimRow = {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
  /** [south, north, west, east]. */
  boundingbox?: [string, string, string, string];
}

const NOMINATIM_URL = requireEnv("VITE_PICKUP_NOMINATIM_URL");

export async function searchLocation(query: string, signal?: AbortSignal): Promise<GeocodingResult[]> {
  const url = new URL(NOMINATIM_URL);

  url.searchParams.set("q", query);
  url.searchParams.set("format", "json");
  url.searchParams.set("limit", "20");

  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error("Unable to complete the search. Please try again later.");
  }

  const payload: NominatimRow[] = await response.json();

  if (!Array.isArray(payload)) {
    throw new Error("Unable to complete the search. Please try again later.");
  }

  return payload
    .map(mapRow)
    .filter((result): result is GeocodingResult => result !== null);
}

const mapBbox = (boundingbox: NominatimRow["boundingbox"]): Bbox | null => {
  if (!boundingbox) {
    return null;
  }
  const coordinates = boundingbox.map(Number);
  if (coordinates.some(Number.isNaN)) {
    return null;
  }
  const [south, north, west, east] = coordinates;
  return { south, north, west, east };
};

const mapRow = (row: NominatimRow): GeocodingResult | null => {
  const latitude = Number(row.lat);
  const longitude = Number(row.lon);

  if (Number.isNaN(latitude) || Number.isNaN(longitude)) {
    return null;
  }

  return {
    id: String(row.place_id),
    label: row.display_name,
    latitude,
    longitude,
    bbox: mapBbox(row.boundingbox)
  };
};
