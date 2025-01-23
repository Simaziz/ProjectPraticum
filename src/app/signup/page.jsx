import React from 'react';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Create an account</h1>
        <p className="text-gray-600 mb-6">Enter your details below</p>

        {/* Form */}
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Sign up with Google */}
        <button className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50 transition duration-300">
          <img
            src="data:image/jpeg;base64,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" // Replace with your Google icon path
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          <span className="text-gray-700">Sign up with Google</span>
        </button>

        {/* Already have an account? Log in */}
        <p className="text-center mt-6 text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}