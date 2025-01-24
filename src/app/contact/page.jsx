import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function MyAccountPage() {
  return (
    <header>
      {/* Fixed Navbar */}
      <div className="fixed w-full z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="min-h-screen  bg-gray-100 pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          {/* <div className="text-sm text-gray-600 mb-6">
            <span>Home</span> / <span className="font-semibold">My Account</span>
          </div> */}
{/* 
          Welcome Message
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Welcome! Md Rime!
          </h1> */}

          {/* Main Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar */}
            {/* <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                Manage My Account
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition duration-300"
                  >
                    My Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition duration-300"
                  >
                    Address Book
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition duration-300"
                  >
                    My Payment Options
                  </a>
                </li>
              </ul>

              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mt-6 mb-4">
                My Orders
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition duration-300"
                  >
                    My Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition duration-300"
                  >
                    My Cancellations
                  </a>
                </li>
              </ul>

              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mt-6 mb-4">
                My Wishlist
              </h2>
            </div> */}

            {/* Main Content */}
            <div className="md:col-span-3 bg-white p-4 sm:p-6 rounded-lg shadow-md">
              {/* My Profile Section */}
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-6">
                Contact
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    value="Md"
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value="Rime!"
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value="rime!!!!l@gmail.com"
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    value="Kingston, 5236, United State"
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Password Changes Section */}
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mt-8 mb-6">
                Comments
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {/* <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your current password"
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div> */}
                {/* <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your new password"
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div> */}
                <div>
                  {/* <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm New Password
                  </label> */}
                  <input
                    type="password"
                    placeholder="Feedback"
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                <button className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300">
                  Cancel
                </button>
                <button className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </header>
  );
}