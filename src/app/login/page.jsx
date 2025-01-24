import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function LoginPage() {
  return (
    <header>
      {/* Fixed Navbar */}
      <div className="fixed w-full z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
          {/* Heading */}
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
            Log in to Exclusive
          </h1>
          <p className="text-gray-600 mb-4 sm:mb-6">Enter your details below</p>

          {/* Form */}
          <form className="space-y-4 sm:space-y-6">
            {/* Email or Phone Number Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email or Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter your email or phone number"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Log In Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Log In
            </button>
          </form>

          {/* Forgot Password Link */}
          <p className="text-center mt-4 sm:mt-6 text-gray-600">
            <a href="#" className="text-blue-500 hover:underline">
              Forget Password?
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </header>
  );
}