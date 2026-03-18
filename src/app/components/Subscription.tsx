'use client';

import React from 'react';

const Subscription = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 bg-white mb-16">
      <div className="mx-auto w-full max-w-[95%] sm:max-w-[90%] md:max-w-full">
        <div
          className="relative w-full h-[320px] sm:h-[380px] md:h-[500px] bg-cover bg-center rounded-lg overflow-hidden"
          style={{ backgroundImage: "url('/bg/subscribe-bg.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/5 flex items-center justify-center md:justify-start">
            <div className="bg-white/25 p-4 sm:p-5 w-full max-w-[90%] sm:max-w-[85%] md:max-w-[35%] h-auto text-white rounded-md
                            flex flex-col justify-center md:justify-start mx-4 sm:mx-0">
              <p className="text-sm font-thin mt-2 text-center md:text-left">Want to offer regularly?</p>
              <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mt-2 sm:mt-3 leading-snug text-center md:text-left">
                Subscribe Our Newsletter <br /> for Get Daily Update
              </h2>

              {/* Input & Button */}
              <div className="flex flex-col sm:flex-row mt-4 sm:mt-6 gap-3 sm:gap-0">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-2 py-2 bg-white h-10 text-black outline-none rounded sm:rounded-none sm:rounded-l text-sm"
                />
                <button className="bg-[#6D4C41] px-3 py-2 rounded sm:rounded-r text-white font-semibold hover:bg-black text-sm">
                  Subscribe &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
