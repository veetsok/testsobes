"use client";

import { create } from "zustand";
import { Products } from "../types";

interface CartStore {
  items: Products[];
  addToCart: (product: Products) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addToCart: (product) => set((state) => ({ items: [...state.items, product] })),
  removeFromCart: (productId) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== productId) })),
  clearCart: () => set({ items: [] }),
}));
