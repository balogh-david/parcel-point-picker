import { queryOptions, useQueries } from "@tanstack/react-query";
import type { UseQueryResult } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { fetchPickupPoints } from "../api";
import { coveringTiles, tileBbox } from "../utils";
import { usePickupPointsDataStore } from "../store";
import type { PickupPoint, Viewport, Tile } from "../types";
import { STALE_TIME_MS } from "../constants";

export type PickupPointsStatus = {
  isFetching: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
}

export function usePickupPoints(viewport: Viewport | null): PickupPointsStatus {
  const tiles = useMemo(() => (viewport ? coveringTiles(viewport) : []), [viewport]);

  const tileResults = useQueries({
    queries: tiles.map(tileQuery),
    combine: combineTiles,
  });

  const mergePoints = usePickupPointsDataStore((state) => state.mergePoints);

  useEffect(() => {
    mergePoints(tileResults.points);
  }, [tileResults.points, mergePoints]);

  return {
    isFetching: tileResults.isFetching,
    isError: tileResults.error !== null,
    error: tileResults.error,
    refetch: tileResults.refetch,
  };
}

const tileQuery = (tile: Tile) =>
  queryOptions({
    queryKey: ["pickupPoints", tile.z, tile.x, tile.y],
    queryFn: () => fetchPickupPoints(tileBbox(tile)),
    staleTime: STALE_TIME_MS,
  });

const combineTiles = (results: UseQueryResult<PickupPoint[], Error>[]) => {
  const points = results.flatMap((result) => result.data ?? []);
  const failed = results.find((result) => result.isError);

  return {
    points,
    isFetching: results.some((result) => result.isFetching),
    error: failed?.error ?? null,
    refetch: () => results.forEach((result) => void result.refetch()),
  };
};