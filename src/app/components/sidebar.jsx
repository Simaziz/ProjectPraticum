"use client";
import React from 'react';

const Sidebar = () => {
  const categories = [
    "Phone",
    "Computers",
    "SmartWahch",
    "Camera",
    "Headphone",
    "Gaming",
    
  ];

  return (
    <div className="w-full sm:w-[250px] bg-white shadow-md p-4">
      {/* Heading */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">Categories</h2>

      {/* Category List */}
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li
            key={index}
            className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-md transition duration-200 cursor-pointer"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;