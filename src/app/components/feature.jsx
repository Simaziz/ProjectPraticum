import React from 'react';

export default function FeaturedSection() {
  return (
    <div className="p-8 bg-gray-100">
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Featured</h2>
        <p className="text-gray-600">New Arrival</p>
      </div>

      {/* Featured Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-6">
        {/* Women's Collections */}
        {/* <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow d">
          <div className="h-64 rounded-lg mb-4 overflow-hidden">
            <img
              src="/images/ps5.png" // Replace with your image path
              alt="Women's Collections"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Women's Collections</h3>
          <p className="text-gray-600 mb-4">
            Featured women collections that give you another vibe.
          </p>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
            Shop Now
          </button>
        </div> */}

        {/* PlayStation 5 and Amazon Wireless Speakers */}
        <div className="space-y-6 flex gap-[5rem]">
          {/* PlayStation 5 */}
          <div className="bg-black rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col ">
            <div className="flex-1 overflow-hidden w-[400px]">
              <img
                src="/images/ps5.png" // Replace with your image path
                alt="PlayStation 5"
                className="w-full h-full object-cover p-4"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">PlayStation 5</h3>
              <p className="text-white mb-4">
                Black and White version of the PS5 coming out on sale.
              </p>
              <a className="text-white text-[1.5rem] font-extrabold">
                Shop Now
              </a>
            </div>
          </div>

          {/* Amazon Wireless Speakers */}
          <div className="bg-black p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ">
            <div className=" rounded-lg mb-4 overflow-hidden w-[600px] ">
              <img
                src="/images/women.png" // Replace with your image path
                alt="Amazon Wireless Speakers"
                className="  object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Women’s Collections</h3>
            <p className="text-white mb-4">
            Featured woman collections that give you another vibe.
            </p>
            <a className="text-white text-[1.5rem] font-extrabold">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}