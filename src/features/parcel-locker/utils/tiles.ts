import type { Bbox, Viewport, Tile } from "../types";

/**
 * Maximum zoom level used by the tile grid.
 * Above this zoom the grid stays fixed, so zooming in does not invalidate the tile cache.
 * The deeper viewport remains a subset of already loaded tiles.
 */
const BASE_TILE_Z = 12;

const MAX_LATITUDE = 90;
const MAX_LONGITUDE = 180;

/**
 * Maps the map zoom level to the tile grid zoom.
 * The tile grid follows the map zoom until BASE_TILE_Z and then remains fixed to maximize cache reuse.
 */
const zoomToTileZ = (zoom: number): number =>
  Math.min(
    BASE_TILE_Z,
    Math.max(Math.round(zoom), 0)
  );

/** Restricts `value` to the `[-limit, limit]` range. */
const clamp = (value: number, limit: number): number =>
  Math.min(Math.max(value, -limit), limit);

/** Returns the width and height, in degrees, of a tile at the given grid zoom. */
const tileSizeFor = (z: number): number => 360 / 2 ** z;

/** Returns tile indices covering [from, to] along one axis. */
const indexRange = (from: number, to: number, step: number): number[] => {
  const first = Math.floor(from / step);
  // `ceil - 1` so a coordinate landing exactly on a tile border does not pull in
  // the next tile, which would be fetched without covering a single pixel.
  const last = Math.max(
    Math.ceil(to / step) - 1,
    first
  );

  const indices: number[] = [];

  for (let index = first; index <= last; index += 1) {
    indices.push(index);
  }

  return indices;
};

/**
 * The tile indices along the x-axis (longitude). Handles the antimeridian:
 * Leaflet reports a wrapped viewport as `west > east`, so in that case both
 * sides of the seam are covered instead of dropping the eastern half.
 */
const xIndexRange = (west: number, east: number, step: number): number[] =>
  west <= east
    ? indexRange(west, east, step)
    : [
      ...indexRange(west, MAX_LONGITUDE, step),
      ...indexRange(-MAX_LONGITUDE, east, step)
    ];

/** Returns the geographic bounding box covered by a tile. */
export const tileBbox = ({ x, y, z }: Tile): Bbox => {
  const step = tileSizeFor(z);

  return {
    south: clamp(y * step, MAX_LATITUDE),
    west: clamp(x * step, MAX_LONGITUDE),
    north: clamp((y + 1) * step, MAX_LATITUDE),
    east: clamp((x + 1) * step, MAX_LONGITUDE),
  };
};

/**
 * Squared distance from a tile's centre to a reference point. Only used to
 * rank tiles by proximity, so the square root is skipped as it's unneeded.
 */
const squaredDistanceToCenter = (tile: Tile, centerLatitude: number, centerLongitude: number): number => {
  const area = tileBbox(tile);
  return ((area.south + area.north) / 2 - centerLatitude) ** 2 + ((area.west + area.east) / 2 - centerLongitude) ** 2;
};

/**
 * The tiles overlapping the viewport. Tile coordinates — not the viewport — are
 * the cache key, so panning only requests the newly exposed tiles and everything
 * already visited is an immediate cache hit.
 *
 * Returned nearest-centre-first: all tiles fire at once, but the browser's own
 * connection limit still queues some of them, so the middle of the view — where
 * the user is looking — should fill in before the corners.
 */
export const coveringTiles = ({ bbox, zoom }: Viewport): Tile[] => {
  const tileZ = zoomToTileZ(zoom);
  const tileSize = tileSizeFor(tileZ);

  const south = clamp(bbox.south, MAX_LATITUDE);
  const north = clamp(bbox.north, MAX_LATITUDE);
  const west = clamp(bbox.west, MAX_LONGITUDE);
  const east = clamp(bbox.east, MAX_LONGITUDE);

  const xIndices = xIndexRange(west, east, tileSize);
  const yIndices = indexRange(south, north, tileSize);

  const centerLatitude = (south + north) / 2;
  const centerLongitude = west <= east ? (west + east) / 2 : west;

  return yIndices
    .flatMap((y) => xIndices.map((x) => ({ z: tileZ, x, y })))
    .sort((left, right) =>
      squaredDistanceToCenter(left, centerLatitude, centerLongitude) - squaredDistanceToCenter(right, centerLatitude, centerLongitude));
};
