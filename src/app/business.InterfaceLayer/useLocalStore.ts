import { create } from "zustand";

const useLocalStore = create((set) => ({
  selectedProduct: null,
  selectProduct: (product) => set({ selectedProduct: product }),
}));

export default useLocalStore;
