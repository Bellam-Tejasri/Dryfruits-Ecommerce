"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Customers {
  name: string;
  text: string;
  rating: number;
}

const testimonials: Customers[] = [
  {
    name: "Roshan Prajwal",
    text: " Excellent quality dry fruits and delicious chocolates! Fresh, flavorful, and perfect for gifting.",
    rating: 5,
  },
  {
    name: "Bilal Abdullah",
    text: "A delightful mix of premium dry fruits and irresistible chocolates. Great quality and taste!",
    rating: 5,
  },
  {
    name: "Prashanth Kumar",
    text: "Top-notch quality with amazing flavor combinations. A must-visit for dry fruit and chocolate lovers!",
    rating: 5,
  },
  {
    name: "Lucent Yt",
    text: " ''Good quality of dryfruits. I used to take dry fruits from this shop from last 1 year no quality issue.,,",
    rating: 5,
  },
  {
    name: "Devaraj Talwar",
    text: " ''A shop dedicated to dry fruits and chocolates. Wonderfully maintained and kept store.,, ",
    rating: 5,
  },
  {
    name: "Rajkumar Visvalingam",
    text: " ''Wow! Very nice collection of nuts and dry fruits of various kind, be it Indian or Foreign.,,",
    rating: 5,
  },
];

const Customers: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative py-16 bg-gray-100 overflow-hidden mt-27">
      {/* Left decorative image */}
      <Image
        src="/logo/testimonial-shape.png"
        alt=""
        aria-hidden="true"
        width={366}
        height={367}
        className="absolute top-0 left-0 h-full w-auto object-contain pointer-events-none"
      />

      {/* Right decorative image */}
      <Image
        src="/logo/testimonial-shape2.png"
        alt=""
        aria-hidden="true"
        width={382}
        height={381}
        className="absolute top-0 right-0 h-full w-auto object-contain pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-black mb-12">
          Words From Our Delighted Customers
        </h2>

        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="px-4">
              <div className="bg-white px-4 sm:px-6 md:px-10 w-full h-auto shadow-md rounded p-6 relative">
                {/* Quote mark at top-left */}
                <div className="absolute top-2 left-4 text-8xl text-gray-100">“</div>

                {/* Avatar + text section */}
                <div className="flex items-start top-14 -left-4 mt-6 justifty-center">
                 {/* Avatar */}
                    <Image
                    src="/logo/testimonialImg.png"
                    alt="Customer avatar"
                    width={56}
                    height={56}
                    className="w-auto h-auto left-0 object-cover"/>
                </div>

                  {/* Name, text, stars */}
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-gray-700 text-sm mt-1">{t.text}</p>
                    <div className="flex mt-2">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <span key={i} className="text-yellow-500 text-lg">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Customers;
