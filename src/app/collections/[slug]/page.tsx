"use client";

import Link from "next/link";
import { use, useState } from "react";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import productsData from "@/app/app.json";
import FeaturedBox from "@/app/components/FeaturedBox";
import Footer from "@/app/components/Footer";
import { ShoppingCart, Heart } from "lucide-react";
import { useWishlist } from "@/app/context/WishlistContext";
import { useCart } from "@/app/context/CartContext";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Types
interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  type?: string;
}

// Category data (titles, banners, labels)
const categoryBanners: Record<string, string> = {
  "nuts-dryfruits": "/banner/dryfruitbanner.jpg",
  "dates": "/banner/dates.jpg",
  "berries": "/banner/berries.jpg",
  "gift-box": "/banner/gift.jpg",
  "seeds-more": "/banner/seeds.jpg",
  "dfh-exclusives": "/banner/dfh.jpg"
};

const categoryTitles: Record<string, string> = {
  "nuts-dryfruits": "Dry Fruits",
  "dates": "Dates",
  "berries": "Berries",
  "gift-box": "Gift Boxes",
  "seeds-more": "Seeds & More",
  "dfh-exclusives": "DFH Exclusives"
};

const categoryLabels: Record<string, string> = {
  "nuts-dryfruits": "Product Type",
  "dates": "Premium Dates",
  "berries": "Delicious Berries",
  "gift-box": "Exclusive Gift Boxes",
  "seeds-more": "Seeds & More",
  "dfh-exclusives": "Exclusive Collection"
};

export default function CategoryPage({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  const params = use(paramsPromise);
  // All hooks must be called before any conditional return
  const [filterType, setFilterType] = useState("");
  const [selectedWeights, setSelectedWeights] = useState<Record<number, string>>({});
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [globalMessage, setGlobalMessage] = useState<string | null>(null);

  const products = (productsData as unknown as Record<string, Product[]>)[params.slug];

  if (!products) return notFound();

  const filteredProducts =
    filterType && params.slug === "nuts-dryfruits"
      ? products.filter((p) =>
        p.type?.toLowerCase().includes(filterType.toLowerCase())
      )
      : products;

  const bannerImage = categoryBanners[params.slug] || "/banner/defaultbanner.jpg";
  const bannerTitle = categoryTitles[params.slug] || params.slug.replace("-", " ");
  const labelText = categoryLabels[params.slug] || params.slug;

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

  const handleWishlistClick = (product: Product) => {
    const exists = wishlist.some(
      (item) => item.id === product.id && item.slug === params.slug
    );

    if (exists) {
      removeFromWishlist(product.id, params.slug);
      setGlobalMessage("✅Removed from your Wishlist");
    } else {
      addToWishlist(product, params.slug);
      setGlobalMessage("✅Added to your Wishlist");
    }

    setTimeout(() => setGlobalMessage(null), 2000);
  };


  return (
    <div className="bg-white mx-auto w-full">
      <Header />
      <Navbar />

      {/* Banner */}
      <div
        className="relative w-full h-[180px] sm:h-[220px] md:h-[270px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-start px-4 sm:px-8 md:px-16 lg:px-30">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-2 capitalize">{bannerTitle}</h1>
          <p className="text-white text-sm md:text-lg">Home -- {bannerTitle}</p>
        </div>
      </div>

      {/* Category Header */}
      {params.slug === "nuts-dryfruits" ? (
        <div className="px-4 md:px-10 flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center bg-gray-50 p-4 rounded-md mt-6">
          <label htmlFor="productType" className="font-semibold text-black whitespace-nowrap">
            {labelText} :
          </label>
          <Select
            value={filterType}
            onValueChange={(value) => setFilterType(value)}
          >
            <SelectTrigger className="w-full sm:w-[200px] text-black">
              <SelectValue placeholder="Select Product Type" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="almonds">Almonds</SelectItem>
              <SelectItem value="cashew">Cashews</SelectItem>
              <SelectItem value="walnut">Walnut</SelectItem>
              <SelectItem value="raisins">Raisins</SelectItem>
              <SelectItem value="pista">Pistachio</SelectItem>
              <SelectItem value="mixed">Mixed Fruits</SelectItem>
              <SelectItem value="prunes">Prunes</SelectItem>
              <SelectItem value="mango">Dried Mango</SelectItem>
              <SelectItem value="pine">Pine Nuts Without Shell</SelectItem>
              <SelectItem value="dry apricot">Dry Apricot</SelectItem>
              <SelectItem value="apricot">Apricot Turkel</SelectItem>
              <SelectItem value="makhana">Makhana</SelectItem>
              <SelectItem value="hazelnut">Hazelnuts</SelectItem>
              <SelectItem value="brazil">Brazil Nuts</SelectItem>
              <SelectItem value="pecan">Pecan Nuts</SelectItem>
              <SelectItem value="anjeer">Anjeer</SelectItem>
              <SelectItem value="macadamia">Macadamia Nuts</SelectItem>
            </SelectContent>
          </Select>
          <span className="hidden lg:block text-gray-500 font-light ml-auto">
            [Premium Quality Dry Fruits]
          </span>
        </div>
      ) : (
        <div className="flex px-4 md:px-10 items-center bg-gray-50 p-4 rounded-md mt-6">
          <label className="font-semibold text-black text-lg">{labelText}</label>
        </div>
      )}

      {/*Products*/}
      <div className="grid grid-cols-1 bg-white px-4 md:px-10 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-b-none shadow-md text-black flex flex-col h-auto w-auto">
            {/* Product Image */}
            <div className="relative w-full h-auto bg-white flex items-center justify-center over overflow-hidden">
              {["nuts-dryfruits", "berries", "seeds-more", "dfh-exclusives", "dates"].includes(params.slug) ? (
                <Link href={`/product/${params.slug}/${product.id}`}>
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-auto object-cover hover:scale-105 transition cursor-pointer"
                  />
                </Link>
              ) : (
                <img src={product.img} alt={product.name} className="w-full h-auto object-cover" />
              )}

              {/* Wishlist Button with Message */}
              <div className="absolute top-2 right-2 flex flex-col items-center z-10">
                <button
                  onClick={() => handleWishlistClick(product)}
                  className="bg-white rounded-full p-2 shadow hover:bg-red-100 transition w-10 h-10 flex items-center justify-center"
                >
                  <Heart
                    size={18}
                    className={wishlist.some((item) => item.id === product.id && item.slug === params.slug)
                      ? "text-[#6D4C41] fill-[#6D4C41]"
                      : "text-[#6D4C41]"
                    }
                  />
                </button>
              </div>
            </div>

            {/*Product Info */}
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-semibold text-lg mb-2 text-center">{product.name}</h3>

              {/* Weight dropdown */}
              {["nuts-dryfruits", "dates", "berries", "seeds-more", "dfh-exclusives"].includes(params.slug) && (
                <div className="flex items-center justify-center gap-3">
                  <Select
                    value={selectedWeights[product.id] || "100 gram"}
                    onValueChange={(value) => handleWeightChange(product.id, value)}
                  >
                    <SelectTrigger className="w-28 text-black">
                      <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="100 gram">100 gram</SelectItem>
                      <SelectItem value="250 gram">250 gram</SelectItem>
                      <SelectItem value="500 gram">500 gram</SelectItem>
                      <SelectItem value="1 Kg">1 Kg</SelectItem>
                      <SelectItem value="2 Kg">2 Kg</SelectItem>
                      <SelectItem value="5 Kg">5 Kg</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Price */}
              {params.slug !== "gift-box" && (
                <div className="flex items-center justify-center">
                  <p className="text-[[#6D4C41]] font-bold text-lg mb-2 h-5">
                    ₹{calculatePrice(product.price, selectedWeights[product.id] || "100 gram").toFixed(2)}
                  </p>
                </div>
              )}

              {/* Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
                {params.slug !== "gift-box" ? (
                  <>
                    <Link href={`/product/${params.slug}/${product.id}`}>
                      <button className="bg-[#6D4C41] text-white text-sm py-1.5 px-3 rounded hover:bg-black transition flex items-center justify-center gap-1">
                        View Details
                      </button>
                    </Link>
                    <button
                      onClick={() => {
                        const weight = selectedWeights[product.id] || "100 gram";
                        addToCart({
                          id: product.id,
                          category: params.slug,
                          name: product.name,
                          img: product.img,
                          price: calculatePrice(product.price, weight),
                          weight,
                          quantity: 1,
                        });
                        setGlobalMessage("Added to your Cart");
                        setTimeout(() => setGlobalMessage(null), 2000);
                      }}
                      className="bg-[#6D4C41] text-white text-sm py-1.5 px-3 rounded hover:bg-black transition flex items-center justify-center gap-1"
                    >
                      <ShoppingCart size={14} />
                      Add to Cart
                    </button>
                  </>
                ) : (
                  <a
                    href="https://wa.me/9948025904"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#6D4C41] text-white text-sm py-1.5 px-3 rounded hover:bg-black transition flex items-center gap-2"
                  >
                    WhatsApp / Call Us
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom-Center Toast Message */}
      {globalMessage && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded shadow-lg z-50 animate-fadeIn">
          {globalMessage}
        </div>
      )}

      <FeaturedBox />
      <Footer />
    </div>
  );
}