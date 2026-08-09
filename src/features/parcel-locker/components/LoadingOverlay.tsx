import { Loader2 } from "lucide-react";

export function LoadingOverlay() {
  return (
    <div
      className="bg-background flex items-center justify-center gap-3 rounded-lg border px-4 py-3 text-sm font-medium shadow-lg">
      <Loader2 className="text-primary size-5 shrink-0 animate-spin"/>
      Loading pickup points…
    </div>
  );
}
