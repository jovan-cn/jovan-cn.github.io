import { create } from "zustand";

interface LanguageStore {
  language: string,
  setLanguage: (s: string) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: "",
  setLanguage: (l: string) => set((state) => ({ language: l })),
}))