import { useState } from "react";
import { Loader2, Search, X } from "lucide-react";
import { Input, Popover, PopoverAnchor, PopoverContent } from "@/components";
import { useGeocoding } from "../hooks";
import type { GeocodingResult } from "../types";
import { MIN_SEARCH_LENGTH } from "../constants";

type PickupPointSearchProps = {
  onSelectResult: (result: GeocodingResult) => void;
}

export function PickupPointSearch({ onSelectResult }: PickupPointSearchProps) {
  const [term, setTerm] = useState("");
  const [committed, setCommitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const queryTerm = committed ? "" : term;
  const { data, isFetching, error } = useGeocoding(queryTerm);

  const showPanel = isOpen && queryTerm.trim().length >= MIN_SEARCH_LENGTH;

  const handleChange = (value: string): void => {
    setTerm(value);
    setCommitted(false);
    setIsOpen(true);
  };

  const handleChoose = (result: GeocodingResult): void => {
    onSelectResult(result);
    setIsOpen(false);
    setTerm(result.label);
    setCommitted(true);
  };

  const handleClear = (): void => {
    setTerm("");
    setCommitted(false);
    setIsOpen(false);
  };

  return (
    <Popover open={showPanel} onOpenChange={setIsOpen}>
      <PopoverAnchor asChild>
        <div className="relative">
          <Search
            className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"/>
          <Input
            aria-label="Search city or address"
            placeholder="Search city or address…"
            className="pl-9"
            value={term}
            onChange={(event) => handleChange(event.target.value)}
            onFocus={() => setIsOpen(true)}
          />
          {isFetching
            ? (
              <Loader2 className="text-muted-foreground absolute top-1/2 right-3 size-4 -translate-y-1/2 animate-spin"/>
            )
            : (
              !!term.length && (
                <button
                  type="button"
                  aria-label="Clear search"
                  className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
                  onClick={handleClear}>
                  <X className="size-4"/>
                </button>
              )
            )}
        </div>
      </PopoverAnchor>

      <PopoverContent
        align="start"
        className="z-1100 w-(--radix-popper-anchor-width) overflow-hidden p-0"
        onOpenAutoFocus={(event) => event.preventDefault()}>
        {error ? (
          <p className="text-destructive p-3 text-sm">
            {error instanceof Error ? error.message : "The location search service is unavailable."}
          </p>
        ) : data?.length ? (
          <div className="max-h-64 overflow-auto">
            {data.map((result) => (
              <button
                key={result.id}
                type="button"
                className="hover:bg-accent block w-full px-3 py-2 text-left text-sm"
                onClick={() => handleChoose(result)}>
                {result.label}
              </button>
            ))}
          </div>
        ) : isFetching ? (
          <p className="text-muted-foreground p-3 text-sm">Searching…</p>
        ) : (
          <p className="text-muted-foreground p-3 text-sm">No results found.</p>
        )}
      </PopoverContent>
    </Popover>
  );
}
