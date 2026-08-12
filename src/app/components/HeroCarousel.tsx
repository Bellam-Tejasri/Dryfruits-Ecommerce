// "use client";

// import "keen-slider/keen-slider.min.css";
// import { useKeenSlider } from "keen-slider/react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function HeroCarousel() {
//   const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
//     {
//       loop: true,
//       renderMode: "custom",
//       slides: { perView: 1 },
//       created(s) {
//         s.slides.forEach((slide, idx) => {
//           slide.style.position = "absolute";
//           slide.style.top = "0";
//           slide.style.left = "0";
//           slide.style.width = "100%";
//           slide.style.opacity = idx === s.track.details.rel ? "1" : "0";
//           slide.style.transition = "opacity 1s ease";
//         });
//       },
//       detailsChanged(s) {
//         s.slides.forEach((slide, idx) => {
//           slide.style.opacity = idx === s.track.details.rel ? "1" : "0";
//         });
//       },
//     },
//     [
//       (slider) => {
//         let timeout: ReturnType<typeof setTimeout>;
//         let mouseOver = false;

//         function clearNextTimeout() {
//           clearTimeout(timeout);
//         }

//         function nextTimeout() {
//           clearTimeout(timeout);
//           if (mouseOver) return;
//           timeout = setTimeout(() => {
//             slider.next();
//           }, 3000);
//         }

//         slider.on("created", () => {
//           slider.container.addEventListener("mouseover", () => {
//             mouseOver = true;
//             clearNextTimeout();
//           });
//           slider.container.addEventListener("mouseout", () => {
//             mouseOver = false;
//             nextTimeout();
//           });
//           nextTimeout();
//         });
//         slider.on("dragStarted", clearNextTimeout);
//         slider.on("animationEnded", nextTimeout);
//         slider.on("updated", nextTimeout);
//       },
//     ]
//   );

//   return (
//     <div className="relative overflow-hidden group">
//       {/* Slider */}
//       <div
//         ref={sliderRef}
//         className="keen-slider relative h-[500px] md:h-[500px] sm:h-[350px] xs:h-[250px]"
//       >
//         <div className="keen-slider__slide">
//           <img src="/banner/banner.jpg" className="w-full h-full object-cover" />
//         </div>
//         <div className="keen-slider__slide">
//           <img src="/banner/banner1.jpg" className="w-full h-full object-cover" />
//         </div>
//         <div className="keen-slider__slide">
//           <img src="/banner/banner2.jpg" className="w-full h-full object-cover" />
//         </div>
//         <div className="keen-slider__slide">
//           <img src="/banner/banner3.jpg" className="w-full h-full object-cover" />
//         </div>
//         <div className="keen-slider__slide">
//           <img src="/banner/banner4.jpg" className="w-full h-full object-cover" />
//         </div>
//       </div>

//       {/* Left Arrow */}
//       <button
//         onClick={() => slider.current?.prev()}
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#6D4C41] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 shadow hover:bg-black sm:p-2 xs:p-1"
//       >
//         <ChevronLeft size={28} className="sm:w-6 sm:h-6 xs:w-5 xs:h-5" />
//       </button>

//       {/* Right Arrow */}
//       <button
//         onClick={() => slider.current?.next()}
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#6D4C41] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 shadow hover:bg-black sm:p-2 xs:p-1"
//       >
//         <ChevronRight size={28} className="sm:w-6 sm:h-6 xs:w-5 xs:h-5" />
//       </button>
//     </div>
//   );
// }


"use client";

import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroCarousel() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: "custom",
      slides: { perView: 1 },
      created(s) {
        s.slides.forEach((slide, idx) => {
          slide.style.position = "absolute";
          slide.style.top = "0";
          slide.style.left = "0";
          slide.style.width = "100%";
          slide.style.height = "100%";
          slide.style.opacity = idx === s.track.details.rel ? "1" : "0";
          slide.style.transition = "opacity 1s ease";
        });
      },
      detailsChanged(s) {
        s.slides.forEach((slide, idx) => {
          slide.style.opacity = idx === s.track.details.rel ? "1" : "0";
        });
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 8000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="relative overflow-hidden group">
      {/* Slider Container - Modified for Aspect Ratio */}
      <div
        ref={sliderRef}
        className="keen-slider relative aspect-square sm:aspect-video md:aspect-[16/6] lg:aspect-[16/5]"
      >
        <div className="keen-slider__slide">
          <Image src="/banner/Banner.png" width={1536} height={1024} priority sizes="100vw" className="w-full h-auto object-cover" alt="Banner 1" />
        </div>
        <div className="keen-slider__slide">
          <Image src="/banner/Banner1.png" width={1536} height={1024} sizes="100vw" className="w-full h-auto object-cover" alt="Banner 2" />
        </div>
        <div className="keen-slider__slide">
          <Image src="/banner/Banner2.png" width={1536} height={1024} sizes="100vw" className="w-full h-auto object-cover" alt="Banner 3" />
        </div>
        <div className="keen-slider__slide">
          <Image src="/banner/Banner3.png" width={1536} height={1024} sizes="100vw" className="w-full h-full object-cover" alt="Banner 4" />
        </div>
        <div className="keen-slider__slide">
          <Image src="/banner/Banner4.png" width={1536} height={1024} sizes="100vw" className="w-full h-auto object-cover" alt="Banner 5" />
        </div>
        <div className="keen-slider__slide">
          <Image src="/banner/Banner5.png" width={1536} height={1024} sizes="100vw" className="w-full h-full object-cover" alt="Banner 6" />
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => slider.current?.prev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#6D4C41] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 shadow hover:bg-black sm:p-2 xs:p-1"
      >
        <ChevronLeft size={28} className="sm:w-6 sm:h-6 xs:w-5 xs:h-5" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => slider.current?.next()}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#6D4C41] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 shadow hover:bg-black sm:p-2 xs:p-1"
      >
        <ChevronRight size={28} className="sm:w-6 sm:h-6 xs:w-5 xs:h-5" />
      </button>
    </div>
  );
}