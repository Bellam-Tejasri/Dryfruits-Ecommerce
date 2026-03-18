"use client";

import { ShieldCheck, Truck, RotateCcw, Headset } from "lucide-react";

const FeaturedBox = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "PREMIUM QUALITY",
      desc: "100% Quality Guarantee",
    },
    {
      icon: Truck,
      title: "SWIFT SHIPPING",
      desc: "Delivering across India",
    },
    {
      icon: RotateCcw,
      title: "EASY RETURN",
      desc: "Refer return policy",
    },
    {
      icon: Headset,
      title: "24/7 SUPPORT",
      desc: "Support every time",
    },
  ];

  return (
    <div className="w-full px-10 py-10 -mt-6">
      <div className="bg-white shadow-md border-2 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-4 p-6"
            >
              {/*Icon on left */}
              <Icon className="w-10 h-10 text-[#6D4C41]" strokeWidth={1.2} />

              {/*Text on right */}
              <div>
                <h3 className="font-extralight text-black text-base">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {feature.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedBox;
