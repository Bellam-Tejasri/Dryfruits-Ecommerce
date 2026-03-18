"use client";

import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "Nuts & Dry Fruits",
      img: "/icons/nuts.jpg",
      slug: "nuts-dryfruits",
    },
    {
      id: 2,
      name: "Dates",
      img: "/icons/dates.jpg",
      slug: "dates",
    },
    {
      id: 3,
      name: "DFH Exclusives",
      img: "/icons/exclusive.jpg",
      slug: "dfh-exclusives",
    },
    {
      id: 4,
      name: "Berries",
      img: "/icons/berries.jpg",
      slug: "berries",
    },
    {
      id: 5,
      name: "Seeds & More",
      img: "/icons/seed.jpg",
      slug: "seeds-more",
    },
    {
      id: 6,
      name: "Gift Boxes",
      img: "/icons/giftbox1.jpg",
      slug: "gift-box",
    },
  ];

  return (
    <section className="bg-white mt-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-30">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-black mb-6">
          Our Categories
        </h2>

        {/* Grid */}
        <div
          className="
            grid
            grid-cols-2 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-3 
            xl:grid-cols-3 
            gap-3 sm:gap-4 md:gap-6
          "
        >
          {categories.map((cat) => (
            <Link
              key={`${cat.id}-${cat.slug}`}
              href={`/collections/${cat.slug}`}
              className="
                bg-white border border-gray-200 rounded-md shadow-sm
                hover:shadow-lg transition duration-300 flex flex-col
              "
            >
              {/* Image Section */}
              <div className="p-2 sm:p-3 md:p-4">
                <div className="relative w-full aspect-[1/1] overflow-hidden rounded-md">
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Category Name */}
              <div className="pb-4 text-center">
                <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-800">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
