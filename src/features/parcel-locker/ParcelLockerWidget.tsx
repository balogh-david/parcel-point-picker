import { useCallback, useState } from "react";
import {
  ErrorState,
  LoadingOverlay,
  MapErrorBoundary,
  PickupPointMap,
  PickupPointMarkers,
  PickupPointSearch
} from "./components";
import { usePickupPoints } from "./hooks";
import { usePickupPointsDataStore, usePickupPointStore } from "./store";
import type { GeocodingResult, Viewport } from "./types";

export function ParcelLockerWidget() {
  const [viewport, setViewport] = useState<Viewport | null>(null);
  const [searchResult, setSearchResult] = useState<GeocodingResult | null>(null);

  const handleSelectResult = useCallback((result: GeocodingResult) => setSearchResult({ ...result }), []);

  const selectedId = usePickupPointStore((state) => state.selectedPickupPointId);
  const points = usePickupPointsDataStore((state) => state.points);
  const query = usePickupPoints(viewport);

  return (
    <div className="flex h-full max-h-240 flex-col p-3">
      <div className="border-b pb-3">
        <PickupPointSearch onSelectResult={handleSelectResult}/>
      </div>

      <div className="relative min-h-0 flex-1">
        <MapErrorBoundary>
          <PickupPointMap onViewportChange={setViewport} flyToResult={searchResult}>
            <PickupPointMarkers points={points} selectedId={selectedId}/>
          </PickupPointMap>
        </MapErrorBoundary>

        {(query.isFetching || query.isError) && (
          <div
            className="pointer-events-none absolute w-[90%] justify-center bottom-5 left-1/2 -translate-x-1/2 z-1000 flex">
            <div className="pointer-events-auto max-w-sm">
              {query.isError ? (
                <ErrorState
                  message={
                    query.error instanceof Error ? query.error.message : "An unknown error occurred while fetching data."
                  }
                  onRetry={() => query.refetch()}
                />
              ) : (
                query.isFetching && <LoadingOverlay/>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
