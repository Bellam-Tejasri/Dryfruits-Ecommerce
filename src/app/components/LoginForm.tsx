'use client'

import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface LoginFormProps {
  onBack?: () => void;
  onSuccess?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onBack, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }

    setLoading(true);
    try {
      // TODO: Add your login API call here
      // Example:
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password }),
      // });
      // const data = await response.json();
      
      // For now, simulating successful login
      const user = {
        id: '1',
        name: email.split('@')[0], // Using email prefix as name for demo
        email: email,
      };
      
      login(user);
      onSuccess?.();
    } catch (err) {
      setError('Login failed. Please try again.');
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

      <h2 className="text-2xl font-serif text-gray-800 mb-6 text-center">Login Page</h2>

      <form onSubmit={handleLogin}>
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm">
            {error}
          </div>
        )}

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
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-2 focus:outline-none focus:border-[#a12424] text-gray-800 placeholder-gray-500 disabled:bg-gray-100"
        />

        <a href="/forgot-password" className="text-sm text-[#a12424] hover:text-[#8b1f1f] mb-6 block text-right transition">
          Forgot Password?
        </a>

        <button 
          type="submit"
          disabled={loading}
          className="w-full bg-[#a12424] text-white py-3 rounded-lg font-semibold hover:bg-[#8b1f1f] transition mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <p className="text-center text-gray-600">
        Don&apos;t have an account? <a href="#" onClick={(e) => { e.preventDefault(); onBack?.(); }} className="text-[#a12424] hover:text-[#8b1f1f] font-semibold transition">Sign up</a>
      </p>
    </div>
  );
};

export default LoginForm;
