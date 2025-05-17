import { create } from "zustand";

interface NavSidebarStore {
  showNavSidebar: boolean,
  setShowNavSidebar: (s: boolean) => void;
}

export const useNavSidebarStore = create<NavSidebarStore>((set) => ({
  showNavSidebar: false,
  setShowNavSidebar: (s: boolean) => set((state) => ({ showNavSidebar: s })),
}))