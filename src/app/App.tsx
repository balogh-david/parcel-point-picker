import { ParcelLockerWidget } from "@/features/parcel-locker/ParcelLockerWidget";

export function App() {
  return (
    <main className="mx-auto flex h-full max-w-400 flex-col gap-3 py-4 justify-center">
      <h1 className="text-center text-2xl font-semibold">
        Package Locker Finder &amp; Selector
      </h1>
      <ParcelLockerWidget/>
    </main>
  );
}
