"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, User, Calendar } from "lucide-react"; 

interface Product {
  id: number;
  name: string;
  img: string;
  brand: string;
  slug: string;
}

const products: Product[] = [
  { id: 1, name: "Gift Box Collection", img: "/dryfruits/giftbox/6.jpg", brand: "Dry Fruit House", slug: "gift-box" },
  { id: 2, name: "Gift Box Collection", img: "/dryfruits/giftbox/22.jpg", brand: "Dry Fruit House", slug: "gift-box" },
  { id: 3, name: "Gift Box Collection", img: "/dryfruits/giftbox/24.jpg", brand: "Dry Fruit House", slug: "gift-box" },
  { id: 4, name: "Gift Box Collection", img: "/dryfruits/giftbox/11.jpg", brand: "Dry Fruit House", slug: "gift-box" },
  { id: 5, name: "Gift Box Collection", img: "/dryfruits/giftbox/26.jpg", brand: "Dry Fruit House", slug: "gift-box" },
];

const Signature: React.FC = () => {
  const slider = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="relative w-full px-6 py-12 group">
      <h1 className="text-4xl text-black font-extralight text-center mb-6">
        Gift Boxes - Signature Collection
      </h1>

      {/* Slider */}
      <Slider ref={slider} {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-3">
            <div className="rounded-lg w-auto h-auto shadow-md overflow-hidden">

              {/* Product Image */}
              <Link href={`/collections/${product.slug}`}>
                <div className="flex items-center justify-center p-6 w-[100%] h-auto cursor-pointer hover:scale-105 transition">
                  <Image
                    src={product.img}
                    alt={product.name}
                    width={1080}
                    height={1080}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-auto rounded-lg object-contain"
                  />
                </div>
              </Link>

              {/* Product Info */}
              <div className="p-4 flex flex-col text-black">
                <div className="flex justify-between items-center">
                  {/* Profile Icon */}
                  <p className="flex items-center text-xs gap-2">
                    <span className="bg-[#6D4C41] p-1 rounded-full flex items-center justify-center">
                      <User size={10} className="text-white fill-white" />
                    </span>
                    {product.brand}
                  </p>

                  {/* Calendar Icon */}
                  <p className="flex items-center text-xs gap-2">
                    <span className=" p-1 flex items-center justify-center">
                      <Calendar size={16} className="text-[#6D4C41]" />
                    </span>
                    {product.name}
                  </p>
                </div>

                {/* View More button */}
                <Link href={`/collections/${product.slug}`}>
                  <button className="mt-3 border border-[#6D4C41] text-[#6D4C41] px-4 py-1 rounded-full hover:bg-[#6D4C41] hover:text-white transition">
                    View more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>

            {/* Left Arrow */}
            <button
              onClick={() => slider.current?.slickPrev()}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#6D4C41] text-white p-2 rounded-full shadow 
                     hover:bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-100"
            >
              <ChevronLeft size={24} />
            </button>
      
            {/* Right Arrow */}
            <button
              onClick={() => slider.current?.slickNext()}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#6D4C41] text-white p-2 rounded-full shadow 
                     hover:bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-100"
            >
              <ChevronRight size={24} />
            </button>
    </div>
  );
};

export default Signature;
