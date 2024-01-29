"use client";

import { create } from "zustand";
import { Items, Products } from "../types";

interface CartStore {
  items: Items[];
  addToCart: (product: Products) => void;
  removeFromCart: (productId: number) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCartStore = create<CartStore>((set) => {
  const initialItems: Items[] = JSON.parse(localStorage.getItem("cartItems") || "[]");

  const calculateTotal = (items: Items[]): number => {
    return items.reduce((acc, item) => acc + item.sumProduct, 0);
  };

  return {
    items: initialItems,
    total: calculateTotal(initialItems),
    addToCart: (product) =>
      set((state: any) => {
        const existingItemIndex = state.items.findIndex(
          (item: any) => item.id === product.id
        );
        if (existingItemIndex !== -1) {
          const updatedItems = [...state.items];
          updatedItems[existingItemIndex].quantity += 1;
          updatedItems[existingItemIndex].sumProduct += product.actualPrice;
          const total = calculateTotal(updatedItems);
          localStorage.setItem("cartItems", JSON.stringify(updatedItems));
          return { items: updatedItems, total };
        } else {
          const newItems = [
            ...state.items,
            { ...product, quantity: 1, sumProduct: product.actualPrice },
          ];
          const total = calculateTotal(newItems);
          localStorage.setItem("cartItems", JSON.stringify(newItems));
          return { items: newItems, total };
        }
      }),
    removeItem: (productId) =>
      set((state) => {
        const existingItemIndex = state.items.findIndex((item) => item.id === productId);
        if (existingItemIndex !== -1) {
          const updatedItems = [...state.items];
          if (updatedItems[existingItemIndex].quantity > 1) {
            updatedItems[existingItemIndex].quantity -= 1;
            updatedItems[existingItemIndex].sumProduct -=
              updatedItems[existingItemIndex].actualPrice;
          } else {
            updatedItems.splice(existingItemIndex, 1);
          }
          const total = calculateTotal(updatedItems);
          localStorage.setItem("cartItems", JSON.stringify(updatedItems));
          return { items: updatedItems, total };
        } else {
          return { items: state.items, total: state.total };
        }
      }),
    removeFromCart: (productId) =>
      set((state) => {
        const updatedItems = state.items.filter((item) => item.id !== productId);
        const total = calculateTotal(updatedItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
        return { items: updatedItems, total };
      }),
    clearCart: () =>
      set(() => {
        localStorage.removeItem("cartItems");
        return { items: [], total: 0 };
      }),
  };
});
