"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import FeaturedBox from "@/app/components/FeaturedBox";
import Footer from "@/app/components/Footer";
import { Handbag, Heart } from "lucide-react";
import { useWishlist } from "@/app/context/WishlistContext";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToWishlist } = useWishlist();
  const [selectedWeights, setSelectedWeights] = useState<Record<number, string>>({});
  const [globalMessage, setGlobalMessage] = useState<string>("");


  const handleWeightChange = (productId: number, weight: string) => {
    setSelectedWeights((prev) => ({ ...prev, [productId]: weight }));
  };

  const calculatePrice = (basePrice: number, weight: string) => {
    switch (weight) {
      case "100 gram": return basePrice;
      case "250 gram": return basePrice * 2.5;
      case "500 gram": return basePrice * 5;
      case "1 Kg": return basePrice * 10;
      case "2 Kg": return basePrice * 20;
      case "5 Kg": return basePrice * 50;
      default: return basePrice;
    }
  };

  const handleWishlistClick = (product: any) => {
    const exists = wishlist.some((item) => item.id === product.id && item.slug === product.slug);

    if (exists) {
      removeFromWishlist(product.id, product.slug);
      setGlobalMessage("✅Removed from your Wishlist");
    } else {
      addToWishlist(product, product.slug);
      setGlobalMessage("✅Added to your Wishlist");
    }

    setTimeout(() => setGlobalMessage(""), 2000);
  };

  {/* Clear all items */ }
  const handleClearAll = () => {
    if (wishlist.length === 0) return;
    wishlist.forEach(item => removeFromWishlist(item.id, item.slug));
    setGlobalMessage("✅ All items are cleared from your wishlist");
    setTimeout(() => setGlobalMessage(""), 3000);
  };



  {/* Empty WishList */ }
  if (wishlist.length === 0) {
    return (
      <div className="bg-white">
        <Header />
        <Navbar />
        <div className="relative w-full h-10 md:h-16 bg-[#6D4C41] flex items-center justify-center">
          <h1 className="text-white text-xl md:text-3xl font-bold">Wishlist</h1>
        </div>
        {/* Banner */}
        <div className="text-center py-20">
          <Heart className="w-20 h-20 text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">Browse our collection and add your favorite dry fruits!</p>
          <Link
            href="/collections/nuts-dryfruits"
            className="px-6 py-3 bg-[#6D4C41] text-white rounded-lg hover:bg-black transition font-semibold inline-block"
          >
            Continue Shopping
          </Link>
        </div>
        <FeaturedBox />
        <Footer />
      </div>
    );
  }


  {/* Wishlist */ }
  return (
    <div className="bg-white mx-auto w-full">
      <Header />
      <Navbar />

      {/* Banner */}
      <section className="relative w-auto h-auto md:h-80">
        <div className="relative w-full h-10 md:h-16 bg-[#6D4C41] flex items-center justify-center">
          <h1 className="text-white text-xl md:text-3xl font-bold">Wishlist</h1>
        </div>
      </section>

      <div className="px-10">
        <h1 className="text-black font-bold text-center text-3xl">Welcome To Your Wishlist</h1>
        {wishlist.length > 0 && (
          <button
            onClick={handleClearAll}
            className="bg-[#6D4C41] text-white px-4 py-2 round hover:bg-black hover:underline transition text-right ml-325"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Wishlist Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 mt-8 mb-10">
        {wishlist.map((product) => (
          <div key={`${product.slug}-${product.id}`} className="border shadow-md overflow-hidden text-black flex flex-col relative">

            {/* Product Image */}
            <div className="relative w-full h-auto bg-white flex items-center justify-center">
              {product.slug !== "gift-box" ? (
                <Link href={`/product/${product.slug}/${product.id}`}>
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-auto object-cover hover:scale-105 transition cursor-pointer"
                  />
                </Link>
              ) : (
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              )}

              {/* Heart Icon + Message */}
              <div className="absolute top-2 right-2 flex flex-col items-center w-10">
                <button
                  onClick={() => handleWishlistClick(product)}
                  className="bg-white rounded-full p-2 shadow hover:bg-red-100 transition w-10 h-10 flex items-center justify-center"
                >
                  <Heart size={18} className="text-[#6D4C41] fill-[#6D4C41]" />
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-semibold text-lg mb-1 text-center">{product.name}</h3>

              {/* Weights + Price */}
              {product.slug !== "gift-box" && (
                <>
                  <div className="flex items-center justify-center gap-3">
                    <select
                      className="border rounded-b-none text-sm text-black px-2 py-1 mb-2 mt-2 w-28"
                      value={selectedWeights[product.id] || "100 gram"}
                      onChange={(e) => handleWeightChange(product.id, e.target.value)}
                    >
                      <option>100 gram</option>
                      <option>250 gram</option>
                      <option>500 gram</option>
                      <option>1 Kg</option>
                      <option>2 Kg</option>
                      <option>5 Kg</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-[#6D4C41] font-bold text-lg mb-2 h-5">
                      ₹{calculatePrice(product.price, selectedWeights[product.id] || "100 gram").toFixed(2)}
                    </p>
                  </div>
                </>
              )}

              {/* Buttons */}
              <div className="flex justify-center gap-2">
                {product.slug !== "gift-box" ? (
                  <Link href={`/product/${product.slug}/${product.id}`}>
                    <button className="bg-[#6D4C41] text-white mt-2 h-8 text-sm py-1 px-2 rounded hover:bg-black transition flex items-center gap-2">
                      <Handbag size={16} /> View Details
                    </button>
                  </Link>
                ) : (
                  <a
                    href="https://wa.me/9948025904"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#6D4C41] text-white mt-2 text-sm py-1 px-3 w-45 h-8 rounded hover:bg-black transition flex items-center gap-2"
                  >
                    <Handbag size={16} className="text-white" />
                    WhatsApp / Call Us
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {globalMessage && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded-md shadow-md z-50">
          {globalMessage}
        </div>
      )}

      <FeaturedBox />
      <Footer />
    </div>
  );
}
