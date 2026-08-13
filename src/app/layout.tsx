import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WishlistProvider } from "@/app/context/WishlistContext";
import { AuthProvider } from "@/app/context/AuthContext";
import { OrderProvider } from "@/app/context/OrderContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dry Fruit House",
  description: "Premium Dry Fruits & Dates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* inside AuthProvider and WishlistProvider */}
        <AuthProvider>
          <WishlistProvider>
              <OrderProvider>
                {children}
              </OrderProvider>
          </WishlistProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
