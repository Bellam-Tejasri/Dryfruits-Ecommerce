"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FeaturedBox from "../components/FeaturedBox";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const [loginData, setLoginData] = useState({ emailOrPhone: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    if (!loginData.emailOrPhone || !loginData.password) {
      setLoginError("Please enter both email/phone and password");
      return;
    }

    // Simulate login - replace with actual API call
    try {
      login({
        id: "1",
        name: loginData.emailOrPhone.split("@")[0],
        email: loginData.emailOrPhone,
      });
      router.push("/");
    } catch (error) {
      setLoginError("Login failed. Please try again.");
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegisterError("");

    if (
      !registerData.name ||
      !registerData.mobile ||
      !registerData.email ||
      !registerData.password
    ) {
      setRegisterError("Please fill all required fields");
      return;
    }

    // Simulate registration - replace with actual API call
    try {
      login({
        id: "1",
        name: registerData.name,
        email: registerData.email,
      });
      router.push("/");
    } catch (error) {
      setRegisterError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <Navbar />

      {/* Banner */}
      {/*Banner*/}
      <div className="relative w-full h-10 md:h-16 bg-[#6D4C41] flex items-center justify-center">
        <h1 className="text-white text-xl md:text-3xl font-bold">My Account</h1>
      </div>

      {/* Login & Register Boxes */}
      <section className="flex justify-center items-start py-8 md:py-12 px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl">
          {/* Login Form */}
          <div className="bg-white p-5 sm:p-8 rounded-xl shadow-lg">
            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-2">Login</h2>
            <p className="text-gray-500 mb-6">
              Login if you are an existing customer.
            </p>
            {loginError && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm">
                {loginError}
              </div>
            )}
            <form onSubmit={handleLogin} className="space-y-4 text-gray-500">
              <input
                type="text"
                placeholder="Mobile No. Or Email Id"
                value={loginData.emailOrPhone}
                onChange={(e) =>
                  setLoginData({ ...loginData, emailOrPhone: e.target.value })
                }
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:ring-[#6D4C41]/40"
              />
              <input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:ring-[#6D4C41]/40"
              />
              <button
                type="submit"
                className="w-full bg-[#6D4C41] text-white py-2 rounded hover:bg-black transition"
              >
                Login
              </button>
            </form>
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-2 text-gray-500">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <p className="text-gray-600 text-sm text-center mb-1 mt-1">
              Don’t have an account?{" "}
              <span className="text-[#6D4C41] font-medium cursor-pointer">
                Sign up now
              </span>
            </p>
          </div>

          {/* Register Form */}
        <div className="bg-white p-5 sm:p-8 rounded-xl shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-black mb-2">
            Create an Account
          </h2>

          <p className="text-gray-500 mb-6">
            Register here if you are a new customer
          </p>

          {registerError && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm">
              {registerError}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-[#1f2937] mb-2">
                Full name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="Arjun Mehta"
                value={registerData.name}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    name: e.target.value,
                  })
                }
                className="w-full h-13 px-4 border border-[#cbd5e1] rounded-xl text-gray-700 placeholder:text-[#94a3b8] focus:outline-none focus:border-[#6D4C41] focus:ring-1 focus:ring-[#6D4C41]/30"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#1f2937] mb-2">
                Email address <span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    email: e.target.value,
                  })
                }
                className="w-full h-13 px-4 border border-[#cbd5e1] rounded-xl text-gray-700 placeholder:text-[#94a3b8] focus:outline-none focus:border-[#6D4C41] focus:ring-1 focus:ring-[#6D4C41]/30"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-[#1f2937] mb-2">
                Mobile number <span className="text-red-500">*</span>
              </label>

              <div className="flex w-full h-13 border border-[#cbd5e1] rounded-xl overflow-hidden focus-within:border-[#6D4C41] focus-within:ring-1 focus-within:ring-[#6D4C41]/30">

                {/* Country Code */}
                <div className="flex items-center px-4 text-gray-600 border-r border-[#cbd5e1] bg-white">
                  +91
                </div>

                {/* Mobile Input */}
                <input
                  type="tel"
                  placeholder="9876543210"
                  maxLength={10}
                  value={registerData.mobile}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      mobile: e.target.value.replace(/\D/g, ""),
                    })
                  }
                  className="flex-1 px-3 text-gray-700 placeholder:text-[#94a3b8] focus:outline-none"
                />
              </div>

              <p className="mt-1.5 text-xs text-[#64748b]">
                10 digit mobile number
              </p>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[#1f2937] mb-2">
                Password <span className="text-red-500">*</span>
              </label>

              <input
                type="password"
                placeholder="Min. 8 characters"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    password: e.target.value,
                  })
                }
                className="w-full h-13 px-4 border border-[#cbd5e1] rounded-xl text-gray-700 placeholder:text-[#94a3b8] focus:outline-none focus:border-[#6D4C41] focus:ring-1 focus:ring-[#6D4C41]/30"
              />
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-2 pt-1">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 accent-[#6D4C41]"
              />

              <label
                htmlFor="terms"
                className="text-sm text-gray-700 leading-5"
              >
                I agree to the{" "}
                <span className="text-indigo-600 cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-indigo-600 cursor-pointer">
                  Privacy Policy
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#6D4C41] text-white py-3 rounded-xl hover:bg-black transition mt-2"
            >
              Submit & Register
            </button>

          </form>
        </div>
        </div>
      </section>

      <FeaturedBox />
      <Footer />
    </div>
  );
}
