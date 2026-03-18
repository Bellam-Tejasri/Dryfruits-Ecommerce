'use client'

import { useRouter } from 'next/navigation';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      {/* 404 Content */}
      <div className="text-center">
        {/* Large 404 */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#6D4C41] mb-4">404</h1>
          <p className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
            Page Not Found
          </p>
          <p className="text-gray-600 text-lg md:text-xl max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
          <button
            onClick={() => router.push('/')}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#a12424] text-white rounded-lg hover:bg-[#8b1f1f] transition font-semibold"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>

      {/* Decorative Footer */}
      <div className="mt-16 text-center text-gray-500 text-sm">
        <p>Teja Dry Fruits – Premium Quality Dry Fruits & Dates</p>
      </div>
    </div>
  );
}
