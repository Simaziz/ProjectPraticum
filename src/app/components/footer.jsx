import React from 'react';

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white pt-5 pb-2">
      <div className="max-w-6xl mx-auto px-9">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Subscribe Section */}
          <div className="">
            <h2 className="text-2xl font-bold text-white">Exclusive</h2>
            <h3 className="text-lg font-semibold text-white">Subscribe</h3>
            <p className="text-gray-400">Get 10% off your first order</p>
            <div className="flex mt-[7rem]">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <p className="text-gray-400">
              I'll enjoy sarami, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-gray-400">exclusive@gmail.com</p>
            <p className="text-gray-400">+88015-88888-9999</p>
          </div>

          {/* Account Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Account</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 no-underline">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 no-underline">
                  Login / Register
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 no-underline">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 no-underline">
                  Wishlist
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Link</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 no-underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 no-underline">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 no-underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 no-underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Download App Section */}
          {/* <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Download App</h3>
            <p className="text-gray-400">Save $3 with App New User Only</p>
            <div className="flex space-x-3">
              <img
                src="/images/app-store.png" // Replace with your image path
                alt="App Store"
                className="w-28 h-auto hover:opacity-80 transition duration-300"
              />
              <img
                src="/images/google-play.png" // Replace with your image path
                alt="Google Play"
                className="w-28 h-auto hover:opacity-80 transition duration-300"
              />
            </div>
          </div> */}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Exclusive. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}