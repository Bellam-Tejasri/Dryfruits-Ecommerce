"use client";

import Image from "next/image";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FeaturedBox from "./FeaturedBox";

export default function ReturnPage() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Header />
            <Navbar />

            {/* Banner */}
      <section className="relative w-full h-[180px] sm:h-[220px] md:h-80 overflow-hidden">
        <Image
          src="/banner/return.jpg"
          alt="Returns Policy Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-40">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
            Return Policy
          </h1>
          <p className="mt-2 text-gray-200 text-sm md:text-base">
            Home <span className="mx-2">-</span> Return Policy
          </p>
        </div>
      </section>

      <div className="px-4 sm:px-8 md:px-16 lg:px-40 mt-3 mb-4">


      <h1 className="text-black font-semibold text-xl">Returns Policy</h1>
      <p className="text-gray-500 font-extralight mt-3">Got a question about our returns policy? Find the ins and outs detailed here. If you still have questions give our helpful team a ring.
        We hope you&apos;re happy with your our purchase, if you decide it isn&apos;t right for you, you can return or exchange unwanted items within 10 days of purchase. Please note that all refunds will be made back to the original tender type. For in-store purchases where mixed payment methods have been used, we will need to process the refund in order of Gift Cards, then Credit/Debit Card and cash will be the last amount to be refunded.</p>


      <h1  className="text-gray-500 font-extralight underline text-l mt-3">Please note, items must:</h1>
      <p className="text-gray-500 font-extralight mt-3">Be unused and in their original condition (including all packaging and tags intact)<br/>
          Have proof of purchase such as receipt or order confirmation. Without proof of purchase, we are unable to provide a refund or exchange<br className="mt-3"></br>
          The item must be returned within 10 days</p>
          <p className="text-gray-500 font-extralight mt-3">Customers must return the product(s) for which they are seeking a refund at their own cost. The customer must comply with the directions of Dry Fruit House staff in order to facilitate a refund or exchange.</p>


          <h1 className="mt-3">
            <span className="text-black font-semibold text-l">NOTE:</span>{" "}
            <span className="text-gray-500 text-sm">
              Items cannot be returned or exchanged for change of mind, incorrect product,
              incorrect colour choice, unless they are faulty, damaged or missing.
              </span>
              </h1>

          <p className="text-gray-500 font-extralight mt-3">After receiving the returned Dry Fruit House product(s), Dry Fruit House will issue a refund as soon as is reasonably practicable, and the customer will be provided with e-mail acknowledgement. Where possible, refunds will be processed by reversing the initial customer transaction. Dry Fruit House accepts no responsibility for any delays that may occur in receiving the refund as a result of any third-party payment gateway.</p>
          </div>

            <FeaturedBox />
            <Footer />
        </div>
    )
}