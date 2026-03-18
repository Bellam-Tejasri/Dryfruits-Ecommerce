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
      <section className="relative w-auto h-auto">
        <img
          src="/banner/contact.jpg"
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute px-40 inset-0">
          <h1 className="text-3xl md:text-5xl mt-25 font-bold text-white items-center justify-center">
            Contact Us
          </h1>
          <p className="mt-2 text-gray-200 text-sm md:text-base">
            Home <span className="mx-2">-</span> Contact Us
          </p>
        </div>
      </section>

      {/* Text */}
      <div className="px-40">
        <h1 className="text-black text-4xl mt-10">Get In Touch</h1>
        <p className="text-gray-500 mt-3">We are here to help our customers all over world. We would be happy to assist you.<br/>
            So let us know what are your queries or what you are looking for, we will get back to you shortly</p>
      </div>

      {/* Contact Section */}
      <section className="container px-40 mt-10 w-[1400px] h-[550px] grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Box - Contact Info */}
        <div className="bg-[#6D4C41] text-white rounded-xl p-8 shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-2xl px-5 mt-4 font-bold mb-6">Contact Us</h2>

            <div className="flex px-5 mt-4 items-start">
              <Phone className="w-8 h-8 mt-1 mr-4 text-white" />
              <div>
                <p className="font-semibold">Reach us on call/whatsapp</p>
                <p className="mt-1 text-gray-200 hover:text-black">+91-7483600212</p>
              </div>
            </div>

            <div className="flex px-5 mt-5 items-start">
              <Mail className="w-6 h-6 mt-12 mr-4 text-white" />
              <div>
                <p className="font-semibold text-xl">Email Address</p>
                <p className="mt-5 text-gray-200 hover:text-black">info@dryfruithouse.com</p>
              </div>
            </div>

            <div className="flex px-5 items-start ">
              <MapPin className="w-6 h-6 mt-15 mr-4 text-white" />
              <div>
                <p className="font-semibold mt-4 text-xl">Office Location</p>
                <p className="text-gray-200 mt-4">
                  NR Tower, 17th Cross, Sector 4,<br />
                  19th Main Road, HSR Layout,<br />
                  Bengaluru, Karnataka 560102
                </p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-1 px-5">
            <p className="font-semibold text-xl mb-2">Follow Us</p>
            <div className="flex gap-4 mb-4">
              <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-300" />
              <Twitter className="w-6 h-6 cursor-pointer hover:text-gray-300" />
              <Linkedin className="w-6 h-6 cursor-pointer hover:text-gray-300" />
              <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-300" />
            </div>
          </div>
        </div>

        {/* Right Box - Form */}
        <div className="bg-white border-2 rounded-xl h-auto w-[700px] p-8 shadow-lg">
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
