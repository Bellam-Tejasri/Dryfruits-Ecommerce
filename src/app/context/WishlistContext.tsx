"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface WishlistItem {
  id: number;
  slug: string;
  name: string;
  img: string;
  price: number;
}

// Optional: define Product type for addToWishlist param
interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
  type?: string;
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (item: Product, slug: string) => void;
  removeFromWishlist: (id: number, slug: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const addToWishlist = (item: Product, slug: string) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === item.id && p.slug === slug);
      if (exists) return prev;
      return [...prev, { ...item, slug }];
    });
  };

  const removeFromWishlist = (id: number, slug: string) => {
    setWishlist((prev) => prev.filter((p) => !(p.id === id && p.slug === slug)));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used within WishlistProvider");
  return context;
}
