import React from 'react';

export default function Navbar() {
  return (
    <header className="w-screen">
      <div className="bg-gray-100">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              {/* Logo or Brand Name */}
              <div className="text-xl font-bold text-gray-800">Exclusive</div>

              {/* Navigation Links (Hidden on Mobile) */}
              <div className="hidden md:flex space-x-4 lg:space-x-6">
                <a
                  href="/"
                  className="text-gray-700 hover:text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-lg transition duration-300"
                >
                  Home
                </a>
                <a
                  href="/contact"
                  className="text-gray-700 hover:text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-lg transition duration-300"
                >
                  Contact
                </a>
                <a
                  href="/aboutUs"
                  className="text-gray-700 hover:text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-lg transition duration-300"
                >
                  About Us
                </a>
                <a
                  href="/signup"
                  className="text-gray-700 hover:text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-lg transition duration-300"
                >
                  Sign Up
                </a>
              </div>

              {/* Search Bar (Hidden on Mobile) */}
              <div className="hidden md:flex items-center">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 lg:w-64"
                />
                <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
                  Search
                </button>
              </div>

              {/* Mobile Menu Button (Visible on Mobile) */}
              <div className="md:hidden">
                <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu (Visible on Mobile) */}
            <div className="md:hidden mt-2">
              <div className="flex flex-col space-y-2">
                <a
                  href="/"
                  className="text-gray-700 hover:text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-lg transition duration-300"
                >
                  Home
                </a>
                <a
                  href="/contact"
                  className="text-gray-700 hover:text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-lg transition duration-300"
                >
                  Contact
                </a>
                <a
                  href="/aboutUs"
                  className="text-gray-700 hover:text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-lg transition duration-300"
                >
                  About Us
                </a>
                <a
                  href="/signup"
                  className="text-gray-700 hover:text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-lg transition duration-300"
                >
                  Sign Up
                </a>
              </div>
              {/* Mobile Search Bar */}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-full mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
                  Search
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}