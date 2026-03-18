"use client";

import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FeaturedBox from "./FeaturedBox";

export default function TermsPage() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Header />
            <Navbar />

            {/* Banner */}
      <section className="relative w-full h-[180px] sm:h-[220px] md:h-80 overflow-hidden">
        <img
          src="/banner/terms.jpg"
          alt="About Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-40">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-gray-200 text-sm md:text-base">
            Home <span className="mx-2">-</span> Terms & Conditions
          </p>
        </div>
      </section>

      <div className="px-4 sm:px-8 md:px-16 lg:px-40 mt-3 mb-4">
        <h1 className="text-black font-semibold text-xl">Terms & Conditions</h1>
        <p className="text-gray-500 font-extralight mt-3">This website is owned and managed by Dry Fruit House. By accessing and using the www.dryfruithouse.com web site, (the "Web Site"), you are agreeing to be legally bound by these Terms & Conditions. The terms "You" and "User" refer to anyone who accesses the Web Site.</p>
        <p className="text-gray-500 font-extralight mt-4">Dry Fruit House may change these Terms & Conditions at any time without notice. Changes will be posted on the website under "Terms & Conditions". Your use of the Web Site after any changes have been posted will constitute your agreement to the modified Terms & Conditions and all of the changes. Therefore, you should read these Terms & Conditions from time to time for changes.</p>

        <h1 className="text-black font-semibold text-xl mt-4">Use of the Website</h1>
        <p className="text-gray-500 font-extralight mt-3">Dry Fruit House hereby grants you a non-exclusive, non-transferable, limited license to access and use the Web Site for the fees, if applicable, and under the terms set forth below.</p>
        <p className="text-gray-500 font-extralight mt-4">The Web Site and the content, including, but not limited to, text, data, reports, opinions, images, photos, graphics, graphs, charts, animations and video (the “Content”), displayed on the Web Site, may be used only for your personal and non-commercial use. Except as otherwise permitted under these Terms & Conditions, you agree not to copy, reproduce, modify, create derivative works from, or store any Content, in whole or in part, from the Web Site or to display, perform, publish, distribute, transmit, broadcast or circulate any Content to anyone, or for any commercial purpose, without the express prior written consent of Dry Fruit House</p>
        <p className="text-gray-500 font-extralight mt-4">Any unauthorized uses of the Marks or any other Content are strictly prohibited. To request permission to use any Content or other Dry Fruit House material, please contact Dry Fruit House at www.dryfruithouse.com</p>

        <h1 className="text-black font-semibold text-xl mt-4">Registration</h1>
        <p className="text-gray-500 font-extralight mt-3">As part of the registration process, you must select a username and password and provide the website with accurate, complete, and updated information. Failure to do so constitutes a breach of this Agreement, which may result in immediate termination of your access.</p>
        
        <h1 className="text-black font-semibold text-xl mt-4">Pricing</h1>
        <p className="text-gray-500 font-extralight mt-3">All prices displayed on the Website are subject to change at any time without notice.</p>

        <h1 className="text-black font-semibold text-xl mt-4">Product Specifications</h1>
        <p className="text-gray-500 font-extralight mt-3">Features and specifications of Products described or depicted on the Website are subject to change without notice.</p>

        <h1 className="text-black font-semibold text-xl mt-4">Payment</h1>
        <p className="text-gray-500 font-extralight mt-3">You can use credit card / debit card / net banking / UPI payments during the purchase process described on the Website.</p>

        <h1 className="text-black font-semibold text-xl mt-4">Delivery and ownership of the goods</h1>
        <p className="text-gray-500 font-extralight mt-3">We try to ensure that all products are delivered in a prompt and timely manner. However, from time to time, it is possible that shipping and other factors outside of Our control may result in delays. Dry Fruit House does not accept any liability for loss or damage suffered by anyone as a result of any such delays.</p>

        <h1 className="text-black font-semibold text-xl mt-4">Faulty or damaged goods</h1>
        <p className="text-gray-500 font-extralight mt-3">Dry Fruit House will replace faulty or damaged Products in accordance with the Warranty Terms and Conditions.</p>

        <h1 className="text-black font-semibold text-xl mt-4">Limitation of Liability</h1>
        <p className="text-gray-500 font-extralight mt-3">You are entirely liable for activities conducted by you in connection with your browsing and use of the Web Site. If you are dissatisfied with the Content or the Web Site or with these Terms of Use, your sole and exclusive remedy is to stop using the Content and the Web Site. The website will not pay you any damages in connection with your browsing or use of the Web.
        The website assumes no responsibility for the use of third party software on the website and shall have no liability whatsoever to any person or entity for the accuracy or completeness of any outcome generated by such software.</p>

        <h1 className="text-black font-semibold text-xl mt-4">The Users Content</h1>
        <p className="text-gray-500 font-extralight mt-3">The User grants to Dry Fruit House the non-exclusive right to use all material entered into the Web site by the User (other than third-party material transmitted through private electronic mail) in any of The Dry Fruit House's print or electronic publications ("Other Content"). You may not input or distribute any material through the Web Site that is promotional in nature, including solicitations for funds or business, without the prior written authorization of the website.</p>
        <p className="text-gray-500 font-extralight mt-4">The User agrees to indemnify the website and Dry Fruit House from all damages, liabilities, costs, charges and expenses, including reasonable attorneys fees, that the website, Dry Fruit House, their affiliates, employees, and authorized representatives may incur as a result of either: (i) the User’s breach of this Agreement; or (ii) material entered into the Web site with the use of the User's screen name or password.</p>

        <h1 className="text-black font-semibold text-xl mt-4">Fraudulent/Declined Transactions</h1>
        <p className="text-gray-500 font-extralight mt-3">Dry Fruit House reserves the right to recover costs, collection charges, and legal fees from persons engaging in fraudulent activities on the website.</p>

        <h1 className="text-black font-semibold text-xl mt-4">Non-Transferability</h1>
        <p className="text-gray-500 font-extralight mt-3">Your account on the website is non-transferable, and any rights to your Account ID or contents within your account terminate upon your death.</p>

        <h1 className="text-black font-semibold text-xl mt-4">Governing Law and Jurisdiction</h1>
        <p className="text-gray-500 font-extralight mt-3">The laws of the Republic of India govern these Terms and Conditions, and the Courts at Bangalore, India, shall have exclusive jurisdiction in any proceedings arising from them.</p>

        <h1 className="text-black font-semibold text-xl mt-4">Miscellaneous</h1>
        <p className="text-gray-500 font-extralight mt-3">Dry Fruit House may discontinue or change the Web Site or its availability to you, at any time. No Dry Fruit House employee or agent has the authority to vary any of the Terms and Conditions governing any sale.</p>
        </div>

            <FeaturedBox />
            <Footer />
        </div>
    )
}