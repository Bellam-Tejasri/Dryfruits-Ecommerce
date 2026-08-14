"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Customers from "../components/Customers";
import { CirclePlay } from "lucide-react";

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <Navbar />

      {/*Banner*/}
      <section className="relative w-full h-[180px] sm:h-[220px] md:h-80 overflow-hidden">
        <Image
          src="/about/banner.jpg"
          alt="About Us Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-40">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
            About Us
          </h1>
        </div>
      </section>

      {/* About Us */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-80 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Image */}
          <div>
            <Image
              src="/about/shop.jpeg"
              alt="TEJA Dryfruits Store"
              width={800}
              height={100}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full  rounded-lg"
            />
          </div>

          {/* All Text */}
          <div>
            <h2 className="text-3xl text-black font-bold mb-4">
              About Us
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold text-[#6D4C41]">
                TEJA Dryfruits is a local dry fruits, tea and coffee store
                serving customers in Inkollu, Bapatla District, Andhra Pradesh.
              </span>
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              We offer a carefully selected range of dry fruits, nuts, healthy
              snacks, beverages and herbal products, bringing quality and
              freshness closer to our customers.
            </p>

            <p className="text-gray-600 leading-relaxed mb-5">
              Our collection includes premium cashews, almonds, pistachios,
              walnuts, raisins, berries and healthy seeds, along with tea,
              coffee and herbal powders.
            </p>

            {/* Our Commitment */}
            <h6 className="text-[#6D4C41] font-bold mb-2 mt-5">
              Our Commitment
            </h6>

            <p className="text-gray-600 leading-relaxed mb-4">
              Our goal is to provide our customers with quality products,
              freshness and friendly service. We value the trust of our
              customers and continuously strive to maintain good quality while
              offering products at reasonable prices.
            </p>

            {/* Our Vision */}
            <h6 className="text-[#6D4C41] font-bold mb-2 mt-5">
              Our Vision
            </h6>

            <p className="text-gray-600 leading-relaxed mb-4">
              To become a trusted destination in Inkollu for quality dry fruits,
              healthy food products, tea and coffee, while building long-lasting
              relationships with our customers.
            </p>

            {/* Our Mission */}
            <h6 className="text-[#6D4C41] font-bold mb-2 mt-5">
              Our Mission
            </h6>

            <p className="text-gray-600 leading-relaxed">
              To provide fresh, quality and reasonably priced products with
              convenient and friendly service, making healthy and delicious
              choices easily accessible to our customers.
            </p>
          </div>

        </div>
      </section>

      <Customers />

      {/* Banner Image */}
      <div className="relative w-full px-4 sm:px-8 md:px-10 py-6 md:py-10">
        <Image
          src="/about/video.jpg"
          alt="Dry Fruits Banner"
          width={1600}
          height={600}
          sizes="100vw"
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
      <Footer />
    </div>
  );
}
