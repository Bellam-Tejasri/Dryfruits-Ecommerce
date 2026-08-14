'use client'

import { LogOut, ShoppingBag } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useRef, useEffect, useState } from 'react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();
  const modalRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, right: 0 });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      const profileButton = document.querySelector('[data-profile-button]');
      if (profileButton) {
        const rect = profileButton.getBoundingClientRect();
        setPosition({
          top: rect.bottom + 10,
          right: window.innerWidth - rect.right,
        });
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <div 
      ref={modalRef}
      className="fixed bg-white rounded-lg shadow-xl border border-gray-200 z-999"
      style={{
        top: `${position.top}px`,
        right: `${position.right}px`,
        width: '220px',
        maxHeight: 'calc(100vh - 100px)',
        overflow: 'auto'
      }}
    >
      <div className="p-4">
        {/* User Info */}
        <div className="mb-4 pb-4 border-b border-gray-200">
          <p className="text-sm text-gray-600">Welcome,</p>
          <p className="font-semibold text-gray-800 truncate">{user?.name}</p>
          <p className="text-xs text-gray-500 truncate">{user?.email}</p>
        </div>


        {/* Logout */}
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-gray-100 rounded transition w-full text-left cursor-pointer"
        >
          <LogOut className="w-5 h-5 text-[#a12424] flex-shrink-0" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
