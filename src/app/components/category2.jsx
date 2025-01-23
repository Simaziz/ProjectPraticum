import React from 'react';
import Jbl from "../../../public/images/JBL.png"
import Image from "next/image"
export default function MusicExperience() {
  return (
    <div className="bg-black text-white py-20 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-center md:text-left mb-12 md:mb-0 md:w-1/2">
          <h2 className="text-5xl font-bold mb-6">Categories</h2>
          <p className="text-3xl mb-4">Enhance Your</p>
          <p className="text-3xl font-bold text-blue-500">Music Experience</p>
          <button className="mt-8 px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Explore Now
          </button>
        </div>

        {/* Image Placeholder */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <Image
            src={Jbl} // Replace with your image path
            alt="Music Experience"
            className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}