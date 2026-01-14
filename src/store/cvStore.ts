import { create, type StateCreator } from "zustand";
import type { CVData } from "../types/cv";

export interface Store {
  step: number;
  data: CVData;
  next: () => void;
  prev: () => void;
  update: (data: Partial<CVData>) => void;
  toggleATS: () => void;
}

const initialData: CVData = {
  personal: { name: "", title: "", email: "", phone: "", location: "" },
  summary: "",
  education: [],
  experience: [],
  skills: [],
  template: "classic",
  atsMode: false
};

const storeCreator: StateCreator<Store> = (set) => ({
  step: 1,
  data: initialData,

  next: () => set((s) => ({ step: s.step + 1 })),
  prev: () => set((s) => ({ step: s.step - 1 })),

  update: (data) => set((s) => ({ data: { ...s.data, ...data } })),

  toggleATS: () =>
    set((s) => ({
      data: { ...s.data, atsMode: !s.data.atsMode }
    }))
});

export const useCVStore = create<Store>(storeCreator);
