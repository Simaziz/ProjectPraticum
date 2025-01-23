import Image from "next/image"
import Control from "../../../public/images/controller.png"
import Key from "../../../public/images/keyboard.png"
export default function FlashSales() {
    return (
      <section className="p-6 bg-white">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Today’s Flash Sales</h2>
          <div className="flex space-x-2 text-center">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-red-500">03</span>
              <span className="text-sm text-gray-600">Days</span>
            </div>
            <span className="text-2xl text-gray-500">:</span>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-red-500">23</span>
              <span className="text-sm text-gray-600">Hours</span>
            </div>
            <span className="text-2xl text-gray-500">:</span>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-red-500">19</span>
              <span className="text-sm text-gray-600">Minutes</span>
            </div>
            <span className="text-2xl text-gray-500">:</span>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-red-500">56</span>
              <span className="text-sm text-gray-600">Seconds</span>
            </div>
          </div>
        </div>
        <div className="flex gap-[2rem]">
                    {/* Product Cards */}
        <div className="">
          {/* Product Card Example */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="relative">
              <Image
                src={Control}
                alt="Gamepad"
                className="w-full h-40 object-contain"
              />
              <span className="absolute top-0 left-2 px-2 py-1 text-xs text-white bg-red-500 rounded">
                -40%
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              HAVIT HV-G92 Gamepad
            </h3>
            <p className="text-red-500 font-bold">$120 <span className="text-sm text-gray-500 line-through">$160</span></p>
            <div className="flex items-center mt-2">
              <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
              <p className="ml-2 text-sm text-gray-600">(88)</p>
            </div>
          </div>
          {/* Product Card Example */}
       
  
          {/* Add more product cards following the same pattern */}
        </div>
        {/* Product Cards */}
        <div className="">
          {/* Product Card Example */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="relative">
              <Image
                src={Control}
                alt="Gamepad"
                className="w-full h-40 object-contain"
              />
              <span className="absolute top-0 left-2 px-2 py-1 text-xs text-white bg-red-500 rounded">
                -40%
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              HAVIT HV-G92 Gamepad
            </h3>
            <p className="text-red-500 font-bold">$120 <span className="text-sm text-gray-500 line-through">$160</span></p>
            <div className="flex items-center mt-2">
              <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
              <p className="ml-2 text-sm text-gray-600">(88)</p>
            </div>
          </div>
  
          {/* Add more product cards following the same pattern */}
        </div>
        {/* Product Cards */}
        <div className="">
          {/* Product Card Example */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="relative">
              <Image
                src={Key}
                alt="Gamepad"
                className="w-full h-40 object-contain"
              />
              <span className="absolute top-0 left-2 px-2 py-1 text-xs text-white bg-red-500 rounded">
                -40%
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              HAVIT HV-G92 Gamepad
            </h3>
            <p className="text-red-500 font-bold">$120 <span className="text-sm text-gray-500 line-through">$160</span></p>
            <div className="flex items-center mt-2">
              <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
              <p className="ml-2 text-sm text-gray-600">(88)</p>
            </div>
          </div>
          
  
          {/* Add more product cards following the same pattern */}
        </div>
        {/* Product Cards */}
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="relative">
              <Image
                src={Control}
                alt="Gamepad"
                className="w-full h-40 object-contain"
              />
              <span className="absolute top-0 left-2 px-2 py-1 text-xs text-white bg-red-500 rounded">
                -40%
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              HAVIT HV-G92 Gamepad
            </h3>
            <p className="text-red-500 font-bold">$120 <span className="text-sm text-gray-500 line-through">$160</span></p>
            <div className="flex items-center mt-2">
              <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
              <p className="ml-2 text-sm text-gray-600">(88)</p>
            </div>
          </div>

        </div>
  

    
  
        {/* View All Button */}
        <div className="flex justify-center mt-6">
          <button className="px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600">
            View All Products
          </button>
        </div>
      </section>
    );
  }
  