import React from 'react';

export default function OurProducts() {
  const products = [
    {
      id: 1,
      name: 'Canon Sony',
      price: '$150',
      rating: '★★★★',
      reviews: '(35)',
      image: '/images/camera.png', // Replace with your image path
    },
    {
      id: 2,
      name: 'Asus ROG',
      price: '$3600',
      rating: '★★★★',
      reviews: '(95)',
      image: '/images/asus.png', // Replace with your image path
    },
    {
      id: 3,
      name: 'PS5 pro',
      price: '$700',
      rating: '★★★★',
      reviews: '(325)',
      image: '/images/ps5.png', // Replace with your image path
    },
    {
      id: 4,
      name: 'Macbook pro M3',
      price: '$1400',
      rating: '★★★★',
      reviews: '(145)',
      image: '/images/macbook.png', // Replace with your image path
    },
    // Add more products as needed
  ];

  return (
    <div className="p-4 sm:p-8 bg-gray-100">
      {/* Heading and View All Button */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Our Products</h2>
          <p className="text-gray-600">Explore Our Products</p>
        </div>
        <button className="px-4 sm:px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
          View All Products
        </button>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            {/* Product Image */}
            <div className="h-40 sm:h-48 rounded-lg mb-4 overflow-hidden">
              <img
                src={product.image} // Use the image path
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-blue-500 font-bold">{product.price}</span>
                <div className="flex items-center">
                  <span className="text-yellow-400">{product.rating}</span>
                  <span className="text-gray-500 ml-1">{product.reviews}</span>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 mt-auto">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}