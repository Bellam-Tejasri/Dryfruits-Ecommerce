"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface CartItem {
  id: number;
  category: string;
  name: string;
  img: string;
  price: number;
  weight: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number, category: string, weight: string) => void;
  updateQuantity: (id: number, category: string, weight: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_KEY = "dfh_cart";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_KEY);
      if (stored) setCart(JSON.parse(stored));
    } catch {
      localStorage.removeItem(CART_KEY);
    }
    setLoaded(true);
  }, []);

  // Persist cart to localStorage
  useEffect(() => {
    if (loaded) {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }
  }, [cart, loaded]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find(
        (c) => c.id === item.id && c.category === item.category && c.weight === item.weight
      );
      if (existing) {
        return prev.map((c) =>
          c.id === item.id && c.category === item.category && c.weight === item.weight
            ? { ...c, quantity: c.quantity + item.quantity }
            : c
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: number, category: string, weight: string) => {
    setCart((prev) => prev.filter((c) => !(c.id === id && c.category === category && c.weight === weight)));
  };

  const updateQuantity = (id: number, category: string, weight: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, category, weight);
      return;
    }
    setCart((prev) =>
      prev.map((c) =>
        c.id === id && c.category === category && c.weight === weight
          ? { ...c, quantity }
          : c
      )
    );
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
