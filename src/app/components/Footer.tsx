'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Instagram,
  Landmark,
  PhoneForwarded,
  Mail,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const Footer: React.FC = () => {
  const [aboutOpen, setAboutOpen] = useState(false)
  const [quickOpen, setQuickOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <footer className="relative px-4 sm:px-6 md:px-10 lg:px-20 py-10 bg-[#4E342E] text-white">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* About */}
        <div className="flex-1 text-center md:text-left">

          <div
            className="flex items-center justify-between md:block cursor-pointer md:cursor-default"
            onClick={() => setAboutOpen(!aboutOpen)}
          >
            <a href="#" className="hover:opacity-80 inline-block mb-4">
              <Image
                src="/logo/dryfruit.png"
                alt="Teja Dry Fruits"
                width={180}
                height={40}
                className="w-auto h-auto"
              />
            </a>

            <span className="md:hidden">
              {aboutOpen
                ? <ChevronUp className="w-5 h-5 text-white" />
                : <ChevronDown className="w-5 h-5 text-white" />
              }
            </span>
          </div>

          <div className={`${aboutOpen ? 'block' : 'hidden'} md:block`}>

            <p className="text-white mb-4">
              Teja Dry Fruits brings you quality dry fruits, healthy
              snacks, tea, coffee and herbal products in Inkollu.

              <Link
                href="/about"
                className="text-white font-semibold hover:underline"
              >
                {" "} [Explore More]
              </Link>
            </p>

            <div className="flex gap-3 mt-4 justify-center md:justify-start">

             <a
                href="https://www.instagram.com/teja_dryfruits/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>

            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 text-left">

          <div
            className="flex items-center justify-between cursor-pointer md:cursor-default md:block"
            onClick={() => setQuickOpen(!quickOpen)}
          >
            <h3 className="text-white font-bold mb-4">
              Quick Links
            </h3>

            <span className="md:hidden">
              {quickOpen
                ? <ChevronUp className="w-5 h-5 text-white" />
                : <ChevronDown className="w-5 h-5 text-white" />
              }
            </span>
          </div>

          <ul
            className={`${quickOpen ? 'flex' : 'hidden'} md:flex space-y-3 sm:space-y-4 flex-col items-start text-white`}
          >
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                href="/collections/nuts-dryfruits"
                className="hover:text-gray-300"
              >
                Shopping
              </Link>
            </li>
          </ul>
        </div>

        {/* Account Info */}
        <div className="flex-1 text-left">

          <div
            className="flex items-center justify-between cursor-pointer md:cursor-default md:block"
            onClick={() => setAccountOpen(!accountOpen)}
          >
            <h3 className="text-white font-bold mb-4">
              Account Info
            </h3>

            <span className="md:hidden">
              {accountOpen
                ? <ChevronUp className="w-5 h-5 text-white" />
                : <ChevronDown className="w-5 h-5 text-white" />
              }
            </span>
          </div>

          <ul
            className={`${accountOpen ? 'flex' : 'hidden'} md:flex space-y-3 sm:space-y-4 flex-col items-start text-white`}
          >
            <li>
              <Link href="/account" className="hover:text-gray-300">
                My Account
              </Link>
            </li>

            <li>
              <Link href="/privacy" className="hover:text-gray-300">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link href="/return" className="hover:text-gray-300">
                Return Policy
              </Link>
            </li>

            <li>
              <Link href="/terms" className="hover:text-gray-300">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        {/* Contact */}
        <div className="flex-1 text-left">

          <div
            className="flex items-center justify-between cursor-pointer md:cursor-default md:block"
            onClick={() => setContactOpen(!contactOpen)}
          >
            <h3 className="text-white font-bold mb-4">
              Contact Details
            </h3>

            <span className="md:hidden">
              {contactOpen
                ? <ChevronUp className="w-5 h-5 text-white" />
                : <ChevronDown className="w-5 h-5 text-white" />
              }
            </span>
          </div>

          <ul
            className={`${contactOpen ? "flex" : "hidden"
              } md:flex flex-col gap-4 text-white`}
          >

            {/* Store Location */}
            <li className="flex items-start gap-3">

              <div className="w-6 flex-shrink-0 flex justify-center">
                <Landmark className="w-6 h-6 text-white mt-0.5" />
              </div>

              <span className="text-sm text-white leading-relaxed">
                Beside Sangam Dairy,<br />
                Opp SBI Bank, Parchur Road,<br />
                Inkollu, Andhra Pradesh 523167
              </span>

            </li>

            {/* Email */}
            <li className="flex items-center gap-3">

              <div className="w-6 flex-shrink-0 flex justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>

              <a
                href="mailto:tejadryfruits@gmail.com"
                className="text-sm text-white hover:text-gray-300"
              >
                tejadryfruits@gmail.com
              </a>

            </li>

            {/* Phone */}
            <li className="flex items-center gap-3">

              <div className="w-6 flex-shrink-0 flex justify-center">
                <PhoneForwarded className="w-5 h-5 text-white" />
              </div>

              <a
                href="tel:+91-9948025904"
                className="text-sm text-white hover:text-gray-300"
              >
                +91-9948025904
              </a>

            </li>

          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/40 mt-8 pt-4">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row text-sm text-white px-4 sm:px-6 md:px-0">

          <p className="text-center md:text-left">
            Copyright © {new Date().getFullYear()}{" "}

            <Link
              href="/"
              className="font-bold hover:underline text-white"
            >
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