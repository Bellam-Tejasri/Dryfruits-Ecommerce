"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import productsData from "@/app/app.json";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import FeaturedBox from "@/app/components/FeaturedBox";
import Footer from "@/app/components/Footer";
import { useWishlist } from "@/app/context/WishlistContext";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  type?: string;
  images?: string[];
  shortDescription?: string;
  description?: string;
  benefits?: string;
  sku?: string;
}

// Price
const priceMap = { "100 gram": 1, "250 gram": 2.5, "500 gram": 5, "1 Kg": 10, "2 Kg": 20, "5 Kg": 50 } as const;
const calculatePrice = (basePrice: number, weight: string) =>
  basePrice * (priceMap[weight as keyof typeof priceMap] || 1);

export default function ProductPage() {
  const params = useParams();
  const category = params.category as string;
  const productId = Number(params.id);

  const categoryKey = category as keyof typeof productsData;
  const categoryData = productsData[categoryKey] as Product[] | undefined;
  const product = categoryData?.find((p) => p.id === productId);

  // All hooks must be called before any conditional return
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedWeight, setSelectedWeight] = useState<string>("100 gram");
  const [thumbStartIndex, setThumbStartIndex] = useState(0);
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [globalMessage, setGlobalMessage] = useState<string | null>(null);

  // Now we can safely do conditional returns
  if (!categoryData || !product) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#2E2E2E] mb-4">Product Not Found</h1>
            <Link href="/" className="text-[#A67C52] underline">Go back home</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const currentImage = selectedImage || product.img;
  const images = product.images || [product.img];
  const visibleThumbs = 5;

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleWishlistClick = () => {
    const isInWishlist = wishlist.some(
      (item) => item.id === product.id && item.slug === category
    );

    if (isInWishlist) {
      removeFromWishlist(product.id, category);
      setGlobalMessage("Removed from your Wishlist");
    } else {
      addToWishlist(product, category);
      setGlobalMessage("Added to your Wishlist");
    }
    setTimeout(() => setGlobalMessage(null), 2000);
  };

  function handleWhatsAppOrder(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    // Replace this with your TEJA Dryfruits WhatsApp number (country code, no + or dashes)
    const whatsappNumber = "919948025904";

    const price = calculatePrice(product!.price, selectedWeight).toFixed(2);
    const productUrl = `https://dryfruits-ecommerce-nhs9q2o5i-tejasri4.vercel.app/product/${category}/${product!.id}`;
    const message = `Hi TEJA Dryfruits! \n\nI would like to order:\n\nProduct: ${product!.name}\nWeight: ${selectedWeight}\nPrice: ₹${price}\nQuantity: 1\n\nProduct Details:\n${productUrl}\n\nPlease confirm my order.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  }

  return (
    <div className="bg-white">
      <Header />
      <Navbar />

      {/* Navigation */}
      <nav className="px-4 md:px-10 lg:px-20 py-2 text-gray-700 text-base md:text-lg flex flex-wrap gap-2 md:gap-6 mt-4">
        <Link href="/" className="text-black font-medium">
          Home
        </Link>
        <Link href="/collections/nuts-dryfruits" className="text-black font-medium">
          Collections
        </Link>
        <span className="text-black font-medium">DryFruits</span>
      </nav>

      {/* Main Product Section */}
      <div className="px-4 md:px-10 mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

        {/* Left: Image */}
        <div className="flex flex-col items-center w-full">
          <div className="relative w-full max-w-md">
            <Image
              src={currentImage}
              alt={product.name}
              width={800}
              height={800}
              priority
              sizes="(max-width: 768px) 100vw, 448px"
              className="w-full max-w-md h-auto rounded"
            />

            {/* Wishlist */}
            <div className="absolute top-2 right-2 flex flex-col items-center w-10">
              <button
                onClick={handleWishlistClick}
                className="bg-white rounded-full p-2 shadow hover:bg-red-100 transition w-10 h-10 flex items-center justify-center"
              >
                <Heart
                  size={20}
                  className={`${wishlist.some((item) => item.id === product.id && item.slug === category)
                      ? "text-[#2E2E2E] fill-[#2E2E2E]"
                      : "text-[#2E2E2E]"
                    }`}
                />
              </button>
            </div>
          </div>


          {/* Thumbnail Carousel */}
          <div className="relative w-full max-w-md mt-4 group">
            <div className="flex items-center">
              {/* Left Arrow */}
              <button
                onClick={() => {
                  setThumbStartIndex((prev) => {
                    const newIndex = prev - 1;
                    return newIndex < 0 ? images.length - visibleThumbs : newIndex;
                  });
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#6D4C41] text-white w-8 h-8 items-center justify-center rounded-full hover:bg-black z-10
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Thumbnails */}
              <div className="flex space-x-3 overflow-hidden">
                {images
                  .slice(thumbStartIndex, thumbStartIndex + visibleThumbs)
                  .map((img, i) => (
                    <div
                      key={i + thumbStartIndex}
                      className="p-1 rounded border border-gray-200 flex-shrink-0 cursor-pointer"
                      onClick={() => setSelectedImage(img)}
                    >
                      <Image src={img}
                        alt={product.name}
                        width={80}
                        height={80}
                        sizes="80px"
                        className="h-16 sm:h-20 w-auto rounded"
                        loading="lazy" />
                    </div>
                  ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => {
                  setThumbStartIndex((prev) => {
                    const newIndex = prev + 1;
                    return newIndex > images.length - visibleThumbs ? 0 : newIndex;
                  });
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#6D4C41] text-white w-8 h-8 items-center justify-center rounded-full hover:bg-black z-10
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="border border-gray-100 rounded p-4 md:p-6 shadow w-full">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-black">{product.name}</h1>

          {/* Weight Selection */}
          <div className="mb-5">

            <div className="flex items-center justify-between mb-3">
              <p className="text-lg font-semibold text-[#2E2E2E]">
                Weight:
                <span className="font-bold ml-2 text-[#6D4C41]">
                  {selectedWeight}
                </span>
              </p>

              <p className="text-xl font-bold text-[#6D4C41]">
                ₹{calculatePrice(product.price, selectedWeight).toFixed(2)}
              </p>
            </div>

            {/* Weight Options */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

              {[
                "100 gram",
                "250 gram",
                "500 gram",
                "1 Kg",
                "2 Kg",
              ].map((weight) => {

                const isSelected = selectedWeight === weight;
                const weightPrice = calculatePrice(product.price, weight);

                return (
                  <button
                    key={weight}
                    type="button"
                    onClick={() => setSelectedWeight(weight)}
                    className={`
            relative
            border
            rounded-lg
            px-3
            py-3
            text-center
            transition-all
            duration-200
            ${isSelected
                        ? "border-[#6D4C41] bg-[#FFF8F0] shadow-md"
                        : "border-gray-300 bg-white hover:border-[#A67C52] hover:bg-[#FFFCF7]"
                      }
          `}
                  >

                    {/* Selected Tick */}
                    {isSelected && (
                      <span className="absolute top-1 right-2 text-[#6D4C41] font-bold">
                        ✓
                      </span>
                    )}

                    <p
                      className={`font-semibold ${isSelected
                          ? "text-[#6D4C41]"
                          : "text-[#2E2E2E]"
                        }`}
                    >
                      {weight}
                    </p>

                    <p className="text-sm text-gray-600 mt-1">
                      ₹{weightPrice.toFixed(2)}
                    </p>

                  </button>
                );
              })}

            </div>
          </div>

          {/* Delivery Info */}
          <p className="text-sm text-[#6D4C41] mb-4">
            <span className="font-semibold text-[#6D4C41]">Swift Delivery</span> - Shipping
            Across India. Bringing the goodness of dry fruits to your doorstep.
          </p>

          {/* Icons */}
          {/* <div className="border rounded p-3 shadow-sm mb-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center">
                <Image src="/icons/healthy-heart.png" alt="Healthy Heart" width={74} height={74} className="w-12 h-12 mb-2" />
                <p className="text-sm text-black font-medium">Healthy Heart</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icons/high-protein.png" alt="High Nutrition" width={74} height={74} className="w-12 h-12 mb-2" />
                <p className="text-sm text-black font-medium">High Nutrition</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icons/gulten-free.png" alt="Gluten Free" width={74} height={74} className="w-12 h-12 mb-2" />
                <p className="text-sm text-black font-medium">Gluten Free</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icons/calestrol-free.png" alt="Cholesterol Free" width={74} height={74} className="w-12 h-12 mb-2" />
                <p className="text-sm text-black font-medium">Cholesterol Free</p>
              </div>
            </div>
          </div> */}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-5">
            <button
              onClick={handleWhatsAppOrder}
              className="bg-[#A67C52] text-white px-6 py-2 rounded hover:bg-[#8B5E34] text-center flex items-center justify-center gap-2"
            >
              Order on WhatsApp
            </button>
          </div>

          {/* <p className="font-extralight text-[#2E2E2E] mb-2">
            <strong className="font-bold text-[#2E2E2E]">SKU:</strong> {product.sku || "DRYF" + productId}
          </p> */}

          <h2 className="font-bold text-[#2E2E2E] mb-2">Description:</h2>
          <p className="text-[#2E2E2E]">{product.shortDescription}</p>
        </div>
      </div>

      {/* Tabs Section */}
      {/* <div className="bg-gray-100 py-10 mt-8 mb-4">
        <div className="w-full md:w-4/5 mx-auto h-auto px-4 md:px-0">
          <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6 pb-2 mb-6">
            <button
              onClick={() => { setActiveTab("description"); scrollToSection(descriptionRef); }}
              className={`font-semibold ${activeTab === "description" ? "text-[#6D4C41] border-b-2 border-[#6D4C41]" : "text-black hover:text-[#6D4C41]"}`}
            >
              Description
            </button>
            <button
              onClick={() => { setActiveTab("benefits"); scrollToSection(benefitsRef); }}
              className={`font-semibold ${activeTab === "benefits" ? "text-[#6D4C41] border-b-2 border-[#6D4C41]" : "text-black hover:text-[#6D4C41]"}`}
            >
              Benefits
            </button>
          </div>

          <div>
            {activeTab === "description" && (
              <div ref={descriptionRef} className="bg-white w-full rounded p-4 md:p-6 mb-3">
                <h2 className="text-xl font-normal text-black mb-2">{product.name}</h2>
                <p className="text-gray-500 font-light leading-relaxed whitespace-pre-line mb-10">{product.description}</p>
              </div>
            )}
            {activeTab === "benefits" && (
              <div ref={benefitsRef} className="bg-white w-full rounded p-4 md:p-6 mb-3">
                <h2 className="text-xl font-normal text-black mb-4">Health Benefits</h2>
                <p className="text-gray-500 font-light leading-relaxed whitespace-pre-line mb-10">{product.benefits}</p>
              </div>
            )}
          </div>
        </div>
      </div> */}


      {/* Message */}
      {globalMessage && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm md:text-base px-4 py-2 rounded shadow-lg z-50 animate-fadeIn">
          {globalMessage}
        </div>
      )}

      <Footer />
    </div>
  );
}