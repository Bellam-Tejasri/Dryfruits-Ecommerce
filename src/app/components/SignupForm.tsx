'use client'

import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface SignupFormProps {
  onBack?: () => void;
  onSuccess?: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onBack, onSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    try {
      // TODO: Add your signup API call here
      // Example:
      // const response = await fetch('/api/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name, email, password }),
      // });
      // const data = await response.json();
      
      // For now, simulating successful signup
      login({
        id: '1',
        name: name,
        email: email,
      });
      
      onSuccess?.();
    } catch (err) {
      setError('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      {/* Back Button */}
      {onBack && (
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#a12424] mb-6 hover:text-[#8b1f1f] transition"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>
      )}

      <h2 className="text-2xl font-serif text-gray-800 mb-6 text-center">Sign Up</h2>

      <form onSubmit={handleSignup}>
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm">
            {error}
          </div>
        )}

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:border-[#a12424] text-gray-800 placeholder-gray-500 disabled:bg-gray-100"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:border-[#a12424] text-gray-800 placeholder-gray-500 disabled:bg-gray-100"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:border-[#a12424] text-gray-800 placeholder-gray-500 disabled:bg-gray-100"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          disabled={loading}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 focus:outline-none focus:border-[#a12424] text-gray-800 placeholder-gray-500 disabled:bg-gray-100"
        />

        <button 
          type="submit"
          disabled={loading}
          className="w-full bg-[#a12424] text-white py-3 rounded-lg font-semibold hover:bg-[#8b1f1f] transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Creating account...' : 'Sign Up'}
        </button>
      </form>

      <p className="text-center text-gray-600 mt-4">
        Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); onBack?.(); }} className="text-[#a12424] hover:text-[#8b1f1f] font-semibold transition">Login</a>
      </p>
    </div>
  );
};

export default SignupForm;
