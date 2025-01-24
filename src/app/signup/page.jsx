import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function SignUpPage() {
  return (
    <header>
      {/* Fixed Navbar */}
      <div className="fixed w-full z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100 flex pt-20 pb-8 px-4 sm:px-6 lg:px-8 justify-center">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
          {/* Heading */}
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
            Create an account
          </h1>
          <p className="text-gray-600 mb-4 sm:mb-6">Enter your details below</p>

          {/* Form */}
          <form className="space-y-4 sm:space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

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

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4 sm:my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Sign up with Google */}
          <button className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50 transition duration-300">
            <img
            src="/images/google.webp"
                alt="Google"
                className="w-11 h-5 mr-2"
              />
              <span className="text-gray-700">Sign up with Google</span>
            </button>

            {/* Already have an account? Log in */}
            <p className="text-center mt-4 sm:mt-6 text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-blue-500 hover:underline">
                Log in
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </header>
    );
  }