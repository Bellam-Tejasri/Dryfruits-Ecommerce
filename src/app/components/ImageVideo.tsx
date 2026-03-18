"use client";

import React, { useState } from "react";
import { Headset, ShieldCheck, Truck, RotateCcw, CirclePlay } from "lucide-react";

const ImageVideo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto px-4 sm:px-6 md:px-10 py-10 bg-white">
      {/* Banner Image */}
      <div className="relative w-full">
        <img
          src="/bg/showroom-dryfruit.jpg"
          alt="Dry Fruits Banner"
          className="w-full h-[400px] sm:h-[350px] xs:h-[250px] md:h-[400px] object-cover rounded-lg shadow-lg"
        />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-white/80 p-6 rounded-full shadow-lg hover:bg-[#6D4C41] hover:scale-110 transition"
          >
            <CirclePlay className="text-[#6D4C41] w-10 h-10 hover:text-white animate-pulse" />
          </button>
        </div>

        {/* White Info Box */}
        <div className="absolute left-1/2 -bottom-5 transform -translate-x-1/2 translate-y-1/2 w-full max-w-3xl bg-white rounded-xl shadow-lg p-4 sm:p-6 z-10">
          <div className="grid grid-cols-2 sm:grid-cols-7 gap-2 sm:gap-0 text-center items-center">
            {/* 1 - Customer Support */}
            <div className="flex flex-col items-center mb-2 sm:mb-0">
              <Headset className="w-10 sm:w-12 h-10 sm:h-12 text-black" strokeWidth={1} />
              <p className="font-semibold text-black text-sm sm:text-base mt-1">CustomerSupport</p>
            </div>

            {/* Dots */}
            <span className="hidden sm:block text-red-800">----------</span>

            {/* 2 - Secure Shopping */}
            <div className="flex flex-col items-center mb-2 sm:mb-0">
              <ShieldCheck className="w-10 sm:w-12 h-10 sm:h-12 text-black" strokeWidth={1} />
              <p className="font-semibold text-black text-sm sm:text-base mt-1">SecureShopping</p>
            </div>

            {/* Dots */}
            <span className="hidden sm:block text-red-800">----------</span>

            {/* 3 - Swift Shipping */}
            <div className="flex flex-col items-center mb-2 sm:mb-0">
              <Truck className="w-10 sm:w-12 h-10 sm:h-12 text-black" strokeWidth={1} />
              <p className="font-semibold text-black text-sm sm:text-base mt-1">SwiftShipping</p>
            </div>

            {/* Dots */}
            <span className="hidden sm:block text-red-800">----------</span>

            {/* 4 - Money Return */}
            <div className="flex flex-col items-center">
              <RotateCcw className="w-10 sm:w-12 h-10 sm:h-12 text-black" strokeWidth={1} />
              <p className="font-semibold text-black text-sm sm:text-base mt-1">MoneyReturn</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="relative bg-white rounded-lg w-full max-w-4xl h-[70vh] sm:h-[60vh] overflow-hidden">
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
    </div>
  );
};

export default ImageVideo;
