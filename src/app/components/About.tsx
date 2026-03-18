"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Customers from "../components/Customers";
import FeaturedBox from "../components/FeaturedBox";
import{CirclePlay } from "lucide-react";

export default function AboutPage() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <Navbar />

      {/*Banner*/}
      <section className="relative w-full h-[180px] sm:h-[220px] md:h-80 overflow-hidden">
        <img
          src="/about/banner.jpg"
          alt="About Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-40">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
            About Us
          </h1>
          <p className="mt-2 text-gray-200 text-sm md:text-base">
            Home <span className="mx-2">-</span> Company
          </p>
        </div>
      </section>

      {/* About Us*/}
      <section className="px-4 sm:px-8 md:px-16 lg:px-40 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start">
          {/*Image */}
          <div>
            <img
              src="/about/shop.jpg"
              alt="Dry Fruit House Store"
              className="w-full max-w-md h-auto rounded-lg"
            />
          </div>

          {/* Text beside image */}
          <div>
            <h2 className="text-3xl text-black font-bold mb-4">About Us</h2>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold text-[#6D4C41]">
                Dry Fruit House brings you a collection of carefully selected foods
                from India and across the world.
              </span>
            </p>
            <p className="text-gray-600 leading-relaxed">
              In our passionate search to offer food that is unique and full of
              health, we have ensured you get only the best products. Our products
              are well-loved for their quality and taste. We have gained expertise
              in fine Indian food products and food ingredients across categories –
              Dry Fruits, Chocolates, Gift Boxes, and Spices. We are importing fine
              quality Nuts, dry fruits, and drinks from the source from which they
              are available at their best. We are sure you will find our quality
              products appetizing.
            </p>
          </div>
        </div>

        {/*text below */}
        <div className="mt-5">
          <p className="text-gray-600 leading-relaxed mb-4">
            We started our first outlet at HSR layout, Bangalore in 2016. We focus
            on stringent quality control and prompt service in order to ensure
            market standards. Our focus on quality is evident in our product range.
            We do not compromise on quality and there is very high level of customer
            appreciation resulting in long-lasting relations.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our goal is to nourish people's lives by offering a wide variety of
            convenient, delicious, and hygienic food choices that can help everyone
            enjoy a balanced, healthful diet. We provide gifting varieties such as
            chocolate bouquets, dryfruit packs, fancy dry fruit baskets and plenty
            of other varieties.
          </p>

          <h6 className="text-[#6D4C41] font-bold mb-1 mt-5">Vision</h6>
          <p className="text-gray-600 leading-relaxed">To be India's most customer centric company, where customers can buy high quality dry fruits at their convenience and enjoy a balanced, healthful diet.</p>
          <h6 className="text-[#6D4C41] font-bold mb-1 mt-5">Mision</h6>
          <p className="text-gray-600 leading-relaxed">We strive to offer our customers the top quality dry fruits at reasonable rates and at the utmost convenience.</p>
        </div>
      </section>

      {/*Banner2*/}
      <section className="relative w-full h-[200px] sm:h-[250px] md:h-80 overflow-hidden">
        <img
          src="/about/banner2.jpg"
          alt="About Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center px-4 sm:px-8 md:px-16">
          <h1 className="text-lg sm:text-2xl md:text-3xl text-white text-center leading-relaxed">
            Dry Fruit House brings you a collection of carefully selected foods from India and across the world.
          </h1>
        </div>
      </section>
      
      <Customers/>

      {/* Banner Image */}
      <div className="relative w-full px-4 sm:px-8 md:px-10 py-6 md:py-10">
        <img
          src="/about/video.jpg"
          alt="Dry Fruits Banner"
          className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover rounded shadow-lg"
        />

        {/* Play Button*/}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-white/80 p-6 rounded-full shadow-lg hover:bg-[#6D4C41] hover:scale-110 transition"
          >
            <CirclePlay className="text-[#6D4C41] w-10 h-10 hover:text-white animate-pulse" />
          </button>
        </div>
        </div>

        {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg w-[80%] h-[70%] overflow-hidden">


            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-red-500 z-50 focus:outline-none"
            >
              ✕
            </button>

            {/* Video */}
            <video
              src="/video.mp4"
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      )}

      <FeaturedBox/>
      <Footer />
    </div>
  );
}
