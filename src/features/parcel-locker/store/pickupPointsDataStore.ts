import { create } from "zustand";
import type { PickupPoint } from "../types";

const byId = new Map<string, PickupPoint>();

type PickupPointsDataStore = {
  points: PickupPoint[];
  mergePoints: (incoming: PickupPoint[]) => void;
}

export const usePickupPointsDataStore = create<PickupPointsDataStore>()((set) => ({
  points: [],
  mergePoints: (incoming) => {
    let changed = false;

    for (const point of incoming) {
      if (!byId.has(point.id)) {
        changed = true;
      }
      byId.set(point.id, point);
    }

    if (changed) {
      set({ points: Array.from(byId.values()) });
    }
  },
}));
