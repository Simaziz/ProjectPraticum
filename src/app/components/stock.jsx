import Image from "next/image";
import Control from "../../../public/images/controller.png";
import Key from "../../../public/images/keyboard.png";
import Mac from "../../../public/images/macbook.png"
import Rtx from "../../../public/images/rtx4090.jpg"

export default function FlashSales() {
  return (
    <section className="p-4 sm:p-6 bg-white">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-0">
          Today’s Flash Sales
        </h2>
        <div className="flex space-x-2 text-center">
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-red-500">03</span>
            <span className="text-xs sm:text-sm text-gray-600">Days</span>
          </div>
          <span className="text-xl sm:text-2xl text-gray-500">:</span>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-red-500">23</span>
            <span className="text-xs sm:text-sm text-gray-600">Hours</span>
          </div>
          <span className="text-xl sm:text-2xl text-gray-500">:</span>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-red-500">19</span>
            <span className="text-xs sm:text-sm text-gray-600">Minutes</span>
          </div>
          <span className="text-xl sm:text-2xl text-gray-500">:</span>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-red-500">56</span>
            <span className="text-xs sm:text-sm text-gray-600">Seconds</span>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
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
          <p className="text-red-500 font-bold">
            $120 <span className="text-sm text-gray-500 line-through">$160</span>
          </p>
          <div className="flex items-center mt-2">
            <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
            <p className="ml-2 text-sm text-gray-600">(88)</p>
          </div>
        </div>

        {/* Product Card Example */}
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <div className="relative">
            <Image
              src={Mac}
              alt="Gamepad"
              className="w-full h-40 object-contain"
            />
            <span className="absolute top-0 left-2 px-2 py-1 text-xs text-white bg-red-500 rounded">
              -40%
            </span>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-800">
            Macbook Pro M3
          </h3>
          <p className="text-red-500 font-bold">
            $1200 <span className="text-sm text-gray-500 line-through">$1900</span>
          </p>
          <div className="flex items-center mt-2">
            <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
            <p className="ml-2 text-sm text-gray-600">(88)</p>
          </div>
        </div>

        {/* Product Card Example */}
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <div className="relative">
            <Image
              src={Key}
              alt="Keyboard"
              className="w-full h-40 object-contain"
            />
            <span className="absolute top-0 left-2 px-2 py-1 text-xs text-white bg-red-500 rounded">
              -40%
            </span>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-800">
            RGB Mechanical Keyboard
          </h3>
          <p className="text-red-500 font-bold">
            $60 <span className="text-sm text-gray-500 line-through">$80</span>
          </p>
          <div className="flex items-center mt-2">
            <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
            <p className="ml-2 text-sm text-gray-600">(88)</p>
          </div>
        </div>

        {/* Product Card Example */}
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <div className="relative">
            <Image
              src={Rtx}
              alt="Gamepad"
              className="w-full h-40 object-contain"
            />
            <span className="absolute top-0 left-2 px-2 py-1 text-xs text-white bg-red-500 rounded">
              -40%
            </span>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-800">
            RTX 4090
          </h3>
          <p className="text-red-500 font-bold">
            $2000 <span className="text-sm text-gray-500 line-through">$3060</span>
          </p>
          <div className="flex items-center mt-2">
            <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
            <p className="ml-2 text-sm text-gray-600">(88)</p>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-6">
        <button className="px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-300">
          View All Products
        </button>
      </div>
    </section>
  );
}