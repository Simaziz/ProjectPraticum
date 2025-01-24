import React from 'react';
import Navbar from "../components/navbar"
import Footer from "../components/footer"
export default function AboutUsPage() {
  return (
   <header>
    <div className='fixed'>
        <Navbar/>
    </div>
     <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6">
          <span>Home</span> / <span className="font-semibold">About</span>
        </div>

        {/* Our Story Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h1>
          <p className="text-gray-600 mb-4">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a wide
            range of tailored marketing, data, and service solutions, Exclusive has
            10,500 sellers and 300 brands and serves 3 million customers across the
            region.
          </p>
          <p className="text-gray-600">
            Exclusive has more than 1 Million products to offer, growing at a very
            fast pace. Exclusive offers a diverse assortment in categories ranging
            from consumer.
          </p>
        </div>

        {/* Key Statistics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-4xl font-bold text-blue-500 mb-2">10.5k</h2>
            <p className="text-gray-600">Sellers active on our site</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-4xl font-bold text-blue-500 mb-2">33k</h2>
            <p className="text-gray-600">Monthly product sale</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-4xl font-bold text-blue-500 mb-2">45.5k</h2>
            <p className="text-gray-600">Customer active in our site</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-4xl font-bold text-blue-500 mb-2">25k</h2>
            <p className="text-gray-600">Annual gross sale in our site</p>
          </div>
        </div>

        {/* Team Members Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Team</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Tom Cruise */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Sim Aziz</h2>
              <p className="text-gray-600">Founder & Chairman</p>
            </div>

            {/* Emma Watson */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Sreng Leapheng</h2>
              <p className="text-gray-600">Managing Director</p>
            </div>

            {/* Will Smith */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Hem Rattanak</h2>
              <p className="text-gray-600">Product Designer</p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Free and Fast Delivery */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">FREE AND FAST DELIVERY</h2>
            <p className="text-gray-600">Free delivery for all orders over $140</p>
          </div>

          {/* 24/7 Customer Service */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">24/7 CUSTOMER SERVICE</h2>
            <p className="text-gray-600">Friendly 24/7 customer support</p>
          </div>

          {/* Money Back Guarantee */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">MONEY BACK GUARANTEE</h2>
            <p className="text-gray-600">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
   </header>
  );
}