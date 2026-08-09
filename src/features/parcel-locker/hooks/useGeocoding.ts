import { useQuery } from "@tanstack/react-query";
import type { UseQueryResult } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import { searchLocation } from "../api";
import { DEBOUNCE_TIME_MS, MIN_SEARCH_LENGTH, STALE_TIME_MS } from "../constants";
import type { GeocodingResult } from "../types";

export function useGeocoding(term: string): UseQueryResult<GeocodingResult[]> {
  const [debouncedTerm] = useDebounce(term.trim(), DEBOUNCE_TIME_MS);

  return useQuery({
    queryKey: ["geocode", debouncedTerm],
    queryFn: ({ signal }) => searchLocation(debouncedTerm, signal),
    enabled: debouncedTerm.length >= MIN_SEARCH_LENGTH,
    staleTime: STALE_TIME_MS,
    retry: 0,
  });
}
