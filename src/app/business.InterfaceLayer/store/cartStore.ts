"use client";

import { useState, useEffect } from "react";
import { create } from "zustand";
import { Products } from "../types";

interface CartStore {
  items: Products[];
  addToCart: (product: Products) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => {
  // Получаем данные из localStorage при инициализации состояния
  const initialItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

  return {
    items: initialItems,
    addToCart: (product) =>
      set((state) => {
        const updatedItems = [...state.items, product];
        localStorage.setItem("cartItems", JSON.stringify(updatedItems)); // Обновляем localStorage
        return { items: updatedItems };
      }),
    removeFromCart: (productId) =>
      set((state) => {
        const updatedItems = state.items.filter((item) => item.id !== productId);
        localStorage.setItem("cartItems", JSON.stringify(updatedItems)); // Обновляем localStorage
        return { items: updatedItems };
      }),
    clearCart: () => set({ items: [] }),
  };
});
