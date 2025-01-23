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
    <div className="p-8 bg-gray-100">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Categories</h2>
      <p className="text-gray-600 mb-8">Browse By Category</p>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{category.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}