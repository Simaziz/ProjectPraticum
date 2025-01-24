import React from 'react';

export default function Categories() {
  const categories = [
    { name: 'Phones', icon: '📱' },
    { name: 'Computers', icon: '💻' },
    { name: 'SmartWatch', icon: '⌚' },
    { name: 'Camera', icon: '📷' },
    { name: 'Headphones', icon: '🎧' },
    { name: 'Gaming', icon: '🎮' },
  ];

  return (
    <div className="p-4 sm:p-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Categories</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Browse By Category</p>

        {/* Category Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{category.icon}</div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-800">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}