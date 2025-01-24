import React from 'react';

export default function FeaturedSection() {
  return (
    <div className="p-4 sm:p-8 bg-gray-100">
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Featured</h2>
        <p className="text-gray-600">New Arrival</p>
      </div>

      {/* Featured Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* PlayStation 5 */}
        <div className="bg-black  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="w-full h-[500px]  overflow-hidden">
            <img
              src="/images/ps5.png" // Replace with your image path
              alt="PlayStation 5"
              className="w-full h-full object-cover p-4"
            />
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">PlayStation 5</h3>
            <p className="text-white mb-4 text-sm sm:text-base">
              Black and White version of the PS5 coming out on sale.
            </p>
            <a className="text-white text-base sm:text-lg font-bold hover:underline">
              Shop Now
            </a>
          </div>
        </div>

        {/* Women’s Collections */}
        <div className="bg-black rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="w-full h-[500px]  overflow-hidden">
            <img
              src="/images/pc.webp" // Replace with your image path
              alt="Women’s Collections"
              className="w-full h-full object-cover p-4"
            />
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">The king of PC Gamming</h3>
            <p className="text-white mb-4 text-sm sm:text-base">
              This pc is available play game in the world.
            </p>
            <a className="text-white text-base sm:text-lg font-bold hover:underline">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}