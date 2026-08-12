"use client";

import Image from "next/image";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FeaturedBox from "../components/FeaturedBox";

export default function PrivacyPage() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Header />
            <Navbar />

            {/* Banner */}
      <section className="relative w-full h-[180px] sm:h-[220px] md:h-80 overflow-hidden">
        <Image
          src="/banner/privacy.jpg"
          alt="Privacy Policy Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-40">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="mt-2 text-gray-200 text-sm md:text-base">
            Home <span className="mx-2">-</span> Privacy Policy
          </p>
        </div>
      </section>

     {/* Text */}
     <div className="px-4 sm:px-8 md:px-16 lg:px-40 mt-3 mb-4">
        <h1 className="text-black font-semibold text-xl">Who we are</h1>
        <p className="text-gray-500 font-extralight mt-3">
          Our website address is:{" "}
          <a 
          href="https://dryfruithouse.com" 
          className="text-yellow-800/60">
            dryfruithouse.com
            </a>
            </p>
            
            
            <h1 className="text-black font-semibold text-xl mt-5">What personal data we collect and why we collect it</h1>
            <h2 className="text-black font-semibold text-xl mt-2">Comments</h2>
            <p className="text-gray-500 font-extralight mt-3">When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</p>
            <p className="text-gray-500 font-extralight mt-3">An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>

            <h1 className="text-black font-semibold text-xl mt-3">Media</h1>
            <p className="text-gray-500 font-extralight mt-3">If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>


            <h1 className="text-black font-semibold text-xl mt-3">Cookies</h1>
            <p className="text-gray-500 font-extralight mt-3">If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>
            <p className="text-gray-500 font-extralight mt-3">If you have an account and you log in to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>
            <p className="text-gray-500 font-extralight mt-3">When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p>
            <p className="text-gray-500 font-extralight mt-3">If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>


            <h1 className="text-black font-semibold text-xl mt-3">Embedded content from other websites</h1>
            <p className="text-gray-500 font-extralight mt-3">Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>
            <p className="text-gray-500 font-extralight mt-3">These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>

            
            <h1 className="text-black font-semibold text-xl mt-3">How long we retain your data</h1>
            <p className="text-gray-500 font-extralight mt-3">If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</p>
            <p className="text-gray-500 font-extralight mt-3">For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p>


            <h1 className="text-black font-semibold text-xl mt-3">What rights you have over your data</h1>
            <p className="text-gray-500 font-extralight mt-3">If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>


            <h1 className="text-black font-semibold text-xl mt-3">Where we send your data</h1>
            <p className="text-gray-500 font-extralight mt-3">Visitor comments may be checked through an automated spam detection service.</p>

      </div>  


            <FeaturedBox />
            <Footer />
        </div>
    )
}