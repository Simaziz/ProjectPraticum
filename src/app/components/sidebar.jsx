"use client"
import React from 'react';

const Sidebar = () => {
  const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];


  return (
    <div className="w-[250px] bg-white shadow-md   p-2">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Categories</h2>
      <ul className="space-y-[2px]">
        {categories.map((category, index) => (
          <li key={index} className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-md transition duration-200">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;