"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";

const GiftBoxCarousel = () => {
  const paginationRef = useRef<HTMLDivElement | null>(null);

  const images = [
    "/dryfruits/gift/2.jpg",
    "/dryfruits/gift/3.jpg",
    "/dryfruits/gift/4.jpg",
    "/dryfruits/gift/5.jpg",
    "/dryfruits/gift/6.jpg",
    "/dryfruits/gift/1.jpg",
  ];

  return (
    <section className="w-full py-12 px-4 sm:px-6 md:px-10 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl text-black font-semibold mb-4">
            Latest Gift Boxes <br /> Collection
          </h2>
          <p className="text-gray-500 font-extralight mb-6">
            Celebrate all festivals in a healthy & delicious way with our exquisite range of dry fruit gift hampers.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-700 transition">
            View More
          </button>
        </div>

        {/* Right Image Slider */}
        <div className="flex-1 w-full md:w-[70%]">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1} // Mobile default
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 }, // Small devices
              768: { slidesPerView: 2, spaceBetween: 25 }, // Tablet
              1024: { slidesPerView: 3, spaceBetween: 30 }, // Desktop
            }}
            centeredSlides={true}
            loop={true}
            pagination={{
              el: ".custom-swiper-pagination",
              clickable: true,
            }}
            className="w-full h-[320px] sm:h-[320px] md:h-[320px] rounded overflow-hidden"
          >
            {images.map((src, index) => (
              <SwiperSlide
                key={index}
                className="flex w-auto h-full justify-center items-center"
              >
                <Link href="/collections/gift-box" className="relative block w-full h-full">
                  <Image
                    src={src}
                    alt={`Gift Box ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="rounded object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* External Pagination BELOW the image carousel */}
          <div
            ref={paginationRef}
            className="custom-swiper-pagination mt-6 flex justify-center gap-2"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default GiftBoxCarousel;
