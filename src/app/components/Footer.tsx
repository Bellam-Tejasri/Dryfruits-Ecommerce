'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Landmark, PhoneForwarded, Mail, ChevronDown, ChevronUp } from "lucide-react";

const Footer: React.FC = () => {
  const [aboutOpen, setAboutOpen] = useState(false)
  const [quickOpen, setQuickOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <footer
      className="relative px-4 sm:px-6 md:px-10 lg:px-20 py-10 bg-cover bg-center text-black"
      style={{ backgroundImage: "url('/bg/footer.jpg')" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* About */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-between md:block cursor-pointer md:cursor-default" onClick={() => setAboutOpen(!aboutOpen)}>
            <a href="#" className="hover:text-gray-300 inline-block mb-4">
              <Image src="/logo/dryfruit.png" alt="Dry Fruits House" width={180} height={40} className="w-auto h-auto" />
            </a>
            <span className="md:hidden">
              {aboutOpen ? <ChevronUp className="w-5 h-5 text-black" /> : <ChevronDown className="w-5 h-5 text-black" />}
            </span>
          </div>
          <div className={`${aboutOpen ? 'block' : 'hidden'} md:block`}>
            <p className="text-gray-600 mb-4">
              Teja Dry Fruits brings you a collection of carefully selected foods from India and across the world.
              <Link href="/about" className="text-[#6D4C41]"> [Explore More] </Link>
            </p>
            <div className="flex gap-3 mt-4 justify-center md:justify-start">
              <a
                href="#"
                className="text-[#6D4C41] hover:text-black transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 fill-[#6D4C41]" />
              </a>

              <a
                href="#"
                className="text-[#6D4C41] hover:text-black transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6 fill-[#6D4C41]" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/teja_dryfruits/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6D4C41] hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>

              <a
                href="#"
                className="text-[#6D4C41] hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 fill-[#6D4C41]" />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 text-left">
          <div className="flex items-center justify-between cursor-pointer md:cursor-default md:block" onClick={() => setQuickOpen(!quickOpen)}>
            <h3 className="text-black text-bold mb-4">Quick Links</h3>
            <span className="md:hidden">
              {quickOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </span>
          </div>
          <ul className={`${quickOpen ? 'flex' : 'hidden'} md:flex space-y-3 sm:space-y-4 text-gray-600 flex-col items-start`}>
            <li><Link href="/about" className="hover:text-[#6D4C41]">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-[#6D4C41]">Contact Us</Link></li>
            <li><Link href="/bulk-order" className="hover:text-[#6D4C41]">Bulk Ordering</Link></li>
            <li><Link href="/collections/nuts-dryfruits" className="hover:text-[#6D4C41]">Shopping</Link></li>
          </ul>
        </div>

        {/* Account Info */}
        <div className="flex-1 text-left">
          <div className="flex items-center justify-between cursor-pointer md:cursor-default md:block" onClick={() => setAccountOpen(!accountOpen)}>
            <h3 className="text-black text-bold mb-4">Account Info</h3>
            <span className="md:hidden">
              {accountOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </span>
          </div>
          <ul className={`${accountOpen ? 'flex' : 'hidden'} md:flex space-y-3 sm:space-y-4 text-gray-600 flex-col items-start`}>
            <li><Link href="/account" className="hover:text-[#6D4C41]">My Account</Link></li>
            <li><Link href="/privacy" className="hover:text-[#6D4C41]">Privacy Policy</Link></li>
            <li><Link href="/return" className="hover:text-[#6D4C41]">Return Policy</Link></li>
            <li><Link href="/terms" className="hover:text-[#6D4C41]">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1 text-left">
          <div className="flex items-center justify-between cursor-pointer md:cursor-default md:block" onClick={() => setContactOpen(!contactOpen)}>
            <h3 className="text-black text-bold mb-4">Contact Details</h3>
            <span className="md:hidden">
              {contactOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </span>
          </div>
          <ul className={`${contactOpen ? 'flex' : 'hidden'} md:flex space-y-3 sm:space-y-4 text-gray-600 flex-col items-start`}>
            <li className="flex flex-col sm:flex-row items-start gap-2">
              <Landmark className="w-8 h-8 text-black mt-1 sm:mt-0 flex-shrink-0" />
              <span className='text-sm'>
                Beside Sangam Dairy,<br />
                Opp SBI Bank, Parchur road,<br />
                Inkollu, Andhra Pradesh 523167
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-black flex-shrink-0" />
              <a href="mailto:tejadryfruits@gmail.com" className='text-sm'>
                tejadryfruits@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <PhoneForwarded className="w-5 h-5 text-black flex-shrink-0" />
              <a href="tel:+91-9948025904">
                +91-9948025904
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-400 mt-8 pt-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row text-sm text-gray-400 px-4 sm:px-6 md:px-0">
          <p className="text-center md:text-left">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/" className="font-bold hover:underline text-black">
              Teja Dry Fruits.
            </Link>{" "}
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
