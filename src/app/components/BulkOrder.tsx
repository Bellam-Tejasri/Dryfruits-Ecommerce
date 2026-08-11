"use client"

import {useState} from "react"
import FeaturedBox from "../components/FeaturedBox"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import {Facebook, Twitter, Linkedin, Instagram, CircleChevronDown,} from "lucide-react";


export default function BulkOrderPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Where can I buy bulk dry fruits in India?",
      answer:
        "Dry Fruit House brings you a collection of carefully selected foods from India and across the world. Our products are well-loved for their quality and taste across categories - Dry Fruits, Chocolates, Gift Boxes and Spices. We are sure you will find our quality products appetizing.",
    },
    {
      question: "Does Dry Fruit House offer fair wholesale rates?",
      answer: 
      "Dry Fruit Offers good collection of gifting options for festivals, wedding and personal needs.",
    },
    {
      question: "Can I get dry fruits for cheap in bulk?",
      answer:
        "At Dry Fruit House, we regret to inform you that partial payments and installment plans are not currently available. As part of our standard payment policy, we kindly request full payment at the time of purchase. We appreciate your understanding and cooperation in adhering to our payment terms. Should you have any further inquiries, please don't hesitate to reach out to our dedicated customer support team.",
    },
    {
      question: "Do you have an offline store?",
      answer:
        "Yes, we have offline stores available at different locations. Please check our store location page",
    },
    {
      question: "Are bulk orders delivered safely?",
      answer:
        "Certainly! We provide a convenient tracking feature that allows you to monitor the status of your order during the delivery process. Once your order is dispatched, you can access tracking information directly on our website.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }




  return (
    <div>
      <div className="bg-white">
        <Header/>
        <Navbar/>

      {/*Banner*/}
      <div className="relative w-full h-10 md:h-16 bg-[#6D4C41] flex items-center justify-center">
        <h1 className="text-white text-xl md:text-3xl font-bold">Bulk Order</h1>
      </div>

      {/* Text */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-40">
        <h1 className="text-black text-2xl sm:text-3xl md:text-4xl mt-6 md:mt-10">Wholesale Dry Fruits</h1>
        <p className="text-gray-500 mt-3 text-sm md:text-base">Dry Fruit House provides options to buy in bulk quantities. Our company is very popular in premium quality and best price products. We provide the best bulk/wholesale prices for dry fruits, nuts, seeds and alike products.<br/>
            Dry Fruit House is a platform where you get to choose from the best in market and offers you the finest variety of dry fruits. We offer dry fruits such as almonds, cashews, raisins, walnuts, dates and Pistachio. Exotic nuts such as Hazelnuts etc. We also offer a variety of berries such as cranberries, blueberries and seed mixes all of which are sourced and packed hygienically</p>
      </div>

      {/* Order Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-40 mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Box*/}
        <div className="bg-[#6D4C41] text-white rounded-xl p-6 md:p-8 shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl mt-2 md:mt-4 font-bold">Let us get the<br/> business started!</h2>
             <h3 className="text-2xl md:text-3xl mt-6 md:mt-8 font-bold"> Reach out us today.</h3>
            </div>

        {/* Social Icons */}
          <div className="mt-4">
            <p className="font-semibold text-lg md:text-xl mb-4">Follow Us</p>
            <div className="flex gap-4 mb-4">
              <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-300" />
              <Twitter className="w-6 h-6 cursor-pointer hover:text-gray-300" />
              <Linkedin className="w-6 h-6 cursor-pointer hover:text-gray-300" />

              <a
                href="https://www.instagram.com/teja_dryfruits/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-300" />
              </a>
            </div>
          </div>
          </div>

          {/* Right*/}
        <div className="bg-white border-2 rounded-xl h-auto w-full p-5 sm:p-8 shadow-lg">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-black text-sm mb-2">Name *</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border text-black border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-black outline-none placeholder-gray-400 placeholder:font-extralight"
                />
              </div>
              <div>
                <label className="block text-black text-sm mb-2">Mobile No. *</label>
                <input
                  type="text"
                  placeholder="Mobile No."
                  className="w-full border border-gray-300 text-black rounded-lg px-4 py-2 focus:ring-1 focus:ring-black outline-none placeholder-gray-400 placeholder:font-extralight"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-black text-sm mb-2">Email Id *</label>
                <input
                  type="email"
                  placeholder="Email Id"
                  className="w-full text-black border border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-black outline-none placeholder-gray-400 placeholder:font-extralight"
                />
              </div>
              <div>
                <label className="block text-black text-sm mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full text-black border border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-black outline-none placeholder-gray-400 placeholder:font-extralight"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#6D4C41] text-white py-3 rounded shadow-lg hover:bg-black transition"
            >
              Send Now
            </button>
          </form>
        </div>
        </section>


        {/*FAQ Section */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-2xl text-black font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow-sm rounded-lg border overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-4 text-left font-medium text-black"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <CircleChevronDown
                    className={`w-6 h-6 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180 text-[#6D4C41]" : "text-[#6D4C41]"
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="p-4 pt-0 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </section>



        <FeaturedBox/>
        <Footer/>
      </div>
      </div>
  )
}