import { create } from "zustand";

interface SearchBarStore {
  searchContent: string,
  searchPath: string,
  setSearchContent: (s: string) => void;
  setSearchPath: (p: string) => void;
}

export const useSearchBarStore = create<SearchBarStore>((set) => ({
  searchContent: "",
  setSearchContent: (s: string) => set((state) => ({ searchContent: s })),
  searchPath: "",
  setSearchPath: (p: string) => set((state) => ({ searchPath: p })),
}))