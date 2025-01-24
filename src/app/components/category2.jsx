import React from 'react';
import Jbl from "../../../public/images/JBL.png";
import Image from "next/image";

export default function MusicExperience() {
  return (
    <div className="bg-black text-white py-12 sm:py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2 lg:w-2/5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Categories</h2>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-4">Enhance Your</p>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-500 mb-6 sm:mb-8">
            Music Experience
          </p>
          <button className="px-6 py-2 sm:px-8 sm:py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Explore Now
          </button>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 lg:w-2/5 mt-8 md:mt-0">
          <Image
            src={Jbl} // Replace with your image path
            alt="Music Experience"
            className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            priority // Optional: Prioritize loading for better performance
          />
        </div>
      </div>
    </div>
  );
}