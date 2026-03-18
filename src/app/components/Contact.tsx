"use client";

import FeaturedBox from "../components/FeaturedBox";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import {Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram,} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <Navbar />

      {/* Banner */}
      <section className="relative w-full h-[180px] sm:h-[220px] md:h-80 overflow-hidden">
        <img
          src="/banner/contact.jpg"
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-40">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>
          <p className="mt-2 text-gray-200 text-sm md:text-base">
            Home <span className="mx-2">-</span> Contact Us
          </p>
        </div>
      </section>

      {/* Text */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-40">
        <h1 className="text-black text-2xl sm:text-3xl md:text-4xl mt-6 md:mt-10">Get In Touch</h1>
        <p className="text-gray-500 mt-3 text-sm md:text-base">We are here to help our customers all over world. We would be happy to assist you.<br/>
            So let us know what are your queries or what you are looking for, we will get back to you shortly</p>
      </div>

      {/* Contact Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-40 mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Box - Contact Info */}
        <div className="bg-[#6D4C41] text-white rounded-xl p-6 md:p-8 shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-xl md:text-2xl mt-2 md:mt-4 font-bold mb-4 md:mb-6">Contact Us</h2>

            <div className="flex mt-4 items-start">
              <Phone className="w-6 h-6 mt-1 mr-4 text-white flex-shrink-0" />
              <div>
                <p className="font-semibold">Reach us on call/whatsapp</p>
                <p className="mt-1 text-gray-200 hover:text-black">+91-7483600212</p>
              </div>
            </div>

            <div className="flex mt-5 items-start">
              <Mail className="w-6 h-6 mt-1 mr-4 text-white flex-shrink-0" />
              <div>
                <p className="font-semibold text-lg md:text-xl">Email Address</p>
                <p className="mt-1 text-gray-200 hover:text-black">info@dryfruithouse.com</p>
              </div>
            </div>

            <div className="flex mt-5 items-start">
              <MapPin className="w-6 h-6 mt-1 mr-4 text-white flex-shrink-0" />
              <div>
                <p className="font-semibold text-lg md:text-xl">Office Location</p>
                <p className="text-gray-200 mt-2">
                  NR Tower, 17th Cross, Sector 4,<br />
                  19th Main Road, HSR Layout,<br />
                  Bengaluru, Karnataka 560102
                </p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-6">
            <p className="font-semibold text-lg md:text-xl mb-2">Follow Us</p>
            <div className="flex gap-4 mb-4">
              <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-300" />
              <Twitter className="w-6 h-6 cursor-pointer hover:text-gray-300" />
              <Linkedin className="w-6 h-6 cursor-pointer hover:text-gray-300" />
              <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-300" />
            </div>
          </div>
        </div>

        {/* Right Box - Form */}
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

            <div>
              <label className="block text-black text-sm mb-2">Write Your Message *</label>
              <textarea
                rows={5}
                placeholder="Write Your Message"
                className="w-full text-black border border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-black outline-none placeholder-gray-400 placeholder:font-extralight"
              ></textarea>
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

      <FeaturedBox />
      <Footer />
    </div>
  );
}
