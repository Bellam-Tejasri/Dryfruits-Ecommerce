"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heart, Menu, X, ShoppingCart } from "lucide-react";
import { useWishlist } from "@/app/context/WishlistContext";
import { useCart } from "@/app/context/CartContext";

const Navbar: React.FC = () => {
  const [showShopMenu, setShowShopMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false); 
  const { wishlist } = useWishlist();
  const wishlistCount = wishlist.length;
  const { cartCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-4 md:px-10 py-2 bg-white shadow-md">
      {/* Mobile Menu Button (Left Side) */}
      <div className="flex items-center gap-4">
        <button
          className="md:hidden flex items-center"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-7 h-7 text-[#476504]" />
        </button>

        {/* Logo beside menu button */}
        <Link href="/"className="flex flex-2 items-center gap-2">
          <Image
            src="/logo/logo main.png"
            alt="Teja Dryfruits"
            width={500}
            height={500}
            priority
            className="h-15 w-auto"
          />
            <p className="text-sm font-bold text-xl text-[#476504]">TEJA DRYFRUITS</p>
        </Link>
      </div>

      {/* Mobile Icons (Wishlist + Cart) */}
      <div className="flex md:hidden items-center gap-4">
        <Link href="/wishlist" className="relative">
          <Heart className="w-6 h-6 text-[#6D4C41]" />
          {wishlistCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#6D4C41] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
        </Link>
        <Link href="/cart" className="relative">
          <ShoppingCart className="w-6 h-6 text-[#6D4C41]" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#6D4C41] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-10 text-gray-600 font-medium">
        <li><Link href="/" className="hover:text-[#476504]">Home</Link></li>
        <li><Link href="/about" className="hover:text-[#476504]">About Us</Link></li>
        <li className="relative">
          <button
            onClick={() => setShowShopMenu(!showShopMenu)}
            className="flex items-center gap-1 hover:text-[#476504]"
          >
            Shop +
          </button>
          {showShopMenu && (
            <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg border rounded w-48 z-10">
              <li className="px-4 py-2 hover:text-[#476504]"><Link href="/collections/nuts-dryfruits">Nuts & Dry Fruits</Link></li>
              <li className="px-4 py-2 hover:text-[#476504]"><Link href="/collections/dates">Dates</Link></li>
              <li className="px-4 py-2 hover:text-[#476504]"><Link href="/collections/dfh-exclusives">DFH Exclusives</Link></li>
              <li className="px-4 py-2 hover:text-[#476504]"><Link href="/collections/berries">Berries</Link></li>
              <li className="px-4 py-2 hover:text-[#476504]"><Link href="/collections/seeds-more">Seeds & More</Link></li>
              <li className="px-4 py-2 hover:text-[#476504]"><Link href="/collections/gift-box">Gift Boxes</Link></li>
            </ul>
          )}
        </li>
        <li><Link href="/bulk-order" className="hover:text-[#476504]">Bulk Order</Link></li>
        <li><Link href="/contact" className="hover:text-[#476504]">Contact Us</Link></li>

        {/* Wishlist */}
        <li className="relative">
          <Link href="/wishlist" className="hover:text-[#476504] flex items-center">
            <Heart className="w-6 h-6 hover:fill-[#476504]" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#476504] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>
        </li>

        {/* Cart */}
        <li className="relative">
          <Link href="/cart" className="hover:text-[#6D4C41] flex items-center">
            <ShoppingCart className="w-6 h-6 hover:text-[#6D4C41]" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#6D4C41] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </li>
      </ul>

      {/* Mobile Side Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Slide-in menu */}
          <div className="relative bg-white w-3/4 sm:w-1/2 h-full shadow-lg animate-slideIn">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-7 h-7 text-[#476504]" />
            </button>

            {/* Links */}
            <ul className="flex flex-col gap-4 mt-16 px-6 text-gray-800 font-medium text-lg">
              <li><Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
              <li><Link href="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>

              {/* Shop with expandable submenu */}
              <li>
                <button
                  onClick={() => setMobileShopOpen(!mobileShopOpen)}
                  className="flex items-center justify-between w-full"
                >
                  Shop +
                </button>
                {mobileShopOpen && (
                  <ul className="mt-2 flex flex-col gap-2 pl-4 text-gray-700">
                    <li><Link href="/collections/nuts-dryfruits" onClick={() => setMobileMenuOpen(false)}>Nuts & Dry Fruits</Link></li>
                    <li><Link href="/collections/dates" onClick={() => setMobileMenuOpen(false)}>Dates</Link></li>
                    <li><Link href="/collections/dfh-exclusives" onClick={() => setMobileMenuOpen(false)}>DFH Exclusives</Link></li>
                    <li><Link href="/collections/berries" onClick={() => setMobileMenuOpen(false)}>Berries</Link></li>
                    <li><Link href="/collections/seeds-more" onClick={() => setMobileMenuOpen(false)}>Seeds & More</Link></li>
                    <li><Link href="/collections/gift-box" onClick={() => setMobileMenuOpen(false)}>Gift Boxes</Link></li>
                  </ul>
                )}
              </li>

              <li><Link href="/bulk-order" onClick={() => setMobileMenuOpen(false)}>Bulk Order</Link></li>
              <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link></li>
              <li>
                <Link href="/wishlist" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[#476504]" />
                  Wishlist {wishlistCount > 0 && `(${wishlistCount})`}
                </Link>
              </li>
              <li>
                <Link href="/cart" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-[#6D4C41]" />
                  Cart {cartCount > 0 && `(${cartCount})`}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;