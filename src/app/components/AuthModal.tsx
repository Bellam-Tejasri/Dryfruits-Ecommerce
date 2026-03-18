'use client'

import { useState } from 'react';
import { LogIn, UserPlus, X } from 'lucide-react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState<'menu' | 'login' | 'signup'>('menu');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menu View */}
        {mode === 'menu' && (
          <div className="p-8 text-center">
            <button 
              onClick={() => setMode('login')}
              className="flex items-center justify-center gap-3 w-full mb-6 py-4 text-xl font-serif text-gray-800 hover:text-[#a12424] transition"
            >
              <LogIn className="w-6 h-6" />
              Login
            </button>
            <button 
              onClick={() => setMode('signup')}
              className="flex items-center justify-center gap-3 w-full py-4 text-xl font-serif text-gray-800 hover:text-[#a12424] transition"
            >
              <UserPlus className="w-6 h-6" />
              Sign Up
            </button>
          </div>
        )}

        {/* Login Form */}
        {mode === 'login' && (
          <LoginForm onBack={() => setMode('menu')} onSuccess={onClose} />
        )}

        {/* Signup Form */}
        {mode === 'signup' && (
          <SignupForm onBack={() => setMode('menu')} onSuccess={onClose} />
        )}
      </div>
    </div>
  );
};

export default AuthModal;
