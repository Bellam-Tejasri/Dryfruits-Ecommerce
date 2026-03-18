"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CartItem } from "./CartContext";

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  date: string;
  status: "Processing" | "Shipped" | "Delivered" | "Cancelled";
  paymentMethod: string;
  shippingAddress: {
    name: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
}

interface OrderContextType {
  orders: Order[];
  placeOrder: (order: Omit<Order, "id" | "date" | "status">) => string;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

const ORDERS_KEY = "dfh_orders";

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(ORDERS_KEY);
      if (stored) setOrders(JSON.parse(stored));
    } catch {
      localStorage.removeItem(ORDERS_KEY);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
    }
  }, [orders, loaded]);

  const placeOrder = (orderData: Omit<Order, "id" | "date" | "status">) => {
    const id = "DFH-" + Date.now().toString(36).toUpperCase();
    const newOrder: Order = {
      ...orderData,
      id,
      date: new Date().toISOString(),
      status: "Processing",
    };
    setOrders((prev) => [newOrder, ...prev]);
    return id;
  };

  return (
    <OrderContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) throw new Error("useOrders must be used within OrderProvider");
  return context;
}
