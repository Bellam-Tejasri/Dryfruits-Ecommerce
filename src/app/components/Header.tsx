'use client'

import { Smartphone, Mail, Facebook, Twitter, Instagram, Linkedin, User } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ProfileModal from "./ProfileModal";
import { useAuth } from "../context/AuthContext";

const Header: React.FC = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  const handleProfileClick = () => {
    if (isLoggedIn) {
      setShowProfileModal(!showProfileModal);
    } else {
      router.push('/account');
    }
  };

  return (
    <>
      <div className="flex justify-between items-center px-4 md:px-10 py-3 text-sm bg-[#6D4C41] text-white">

        {/* Desktop / Laptop Content */}
        <div className="hidden md:flex w-full justify-between items-center">
          {/* Contact Info */}
          <div className="flex items-center gap-5 text-gray-300 font-extralight">
            <span className="flex items-center gap-1">
              <Smartphone className="w-5 h-5 text-white" />
              +91-9948025904
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-5 h-5 text-white" />
              tejadryfruits@gmail.com
            </span>
          </div>

          {/* Social Media & Profile */}
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-gray-300"><Facebook className="w-5 h-5 text-white fill-white" /></a>
            <a href="#" className="hover:text-gray-300"><Twitter className="w-5 h-5 text-white fill-white" /></a>
            <a href="#" className="hover:text-gray-300"><Instagram className="w-5 h-5 text-white" /></a>
            <a href="#" className="hover:text-gray-300"><Linkedin className="w-5 h-5 text-white fill-white" /></a>
            <div className="relative">
              <button 
                data-profile-button
                onClick={handleProfileClick}
                className="hover:text-gray-300 ml-3 pl-3 border-l border-gray-400 cursor-pointer transition"
              >
                <User className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="block md:hidden w-full flex justify-between items-center">
          <span className="text-xs text-gray-200 font-light">Teja Dry Fruits</span>
          <button 
            onClick={handleProfileClick}
            className="hover:text-gray-300 cursor-pointer transition"
          >
            <User className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <ProfileModal isOpen={showProfileModal} onClose={() => setShowProfileModal(false)} />
    </>
  )
}

export default Header;
