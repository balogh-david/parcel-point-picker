import { create } from "zustand";

type PickupPointStore = {
  selectedPickupPointId: string | null;
  setSelectedPickupPoint: (id: string) => void;
}

export const usePickupPointStore = create<PickupPointStore>()((set) => ({
  selectedPickupPointId: null,
  setSelectedPickupPoint: (id) => set({ selectedPickupPointId: id }),
}));
