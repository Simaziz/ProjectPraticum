import React, { useState } from 'react';

export default function BestSellingProducts() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Sony',
      originalPrice: '$360',
      discountedPrice: '$260',
      isLoved: false,
      img: '/images/camera.png', // Path relative to the public folder
    },
    {
      id: 2,
      name: 'Asus ROG',
      originalPrice: '$3600',
      discountedPrice: '$2000',
      isLoved: false,
      img: '/images/asus.png', // Path relative to the public folder
    },
    {
      id: 3,
      name: 'Controller ',
      originalPrice: '$120',
      discountedPrice: '$100',
      isLoved: false,
      img: '/images/controller.png', // Path relative to the public folder
    },
    {
      id: 4,
      name: 'PS5',
      originalPrice: '$600',
      discountedPrice: '$560',
      isLoved: false,
      img: '/images/ps5.png', // Path relative to the public folder
    },
    // Add more products as needed
  ]);

  const toggleLove = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, isLoved: !product.isLoved } : product
      )
    );
  };

  return (
    <div className="p-4 sm:p-8 bg-gray-100">
      {/* Heading and View All Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">This Month</h2>
          <p className="text-gray-600">Best Selling Products</p>
        </div>
        <button className="px-4 sm:px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
          View All
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6  ">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative"
          >
            {/* Product Image */}
            <div className="h-50 sm:h-48 rounded-lg mb-4 overflow-hidden">
              <img
                src={product.img} // Use the imported image
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Love Button */}
            <button
              onClick={() => toggleLove(product.id)}
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition duration-300"
            >
              {product.isLoved ? (
                <span className="text-red-500">❤️</span>
              ) : (
                <span className="text-gray-500">🤍</span>
              )}
            </button>

            {/* Product Details */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
            <div className="flex space-x-2 mb-4">
              <span className="text-gray-600 line-through">{product.originalPrice}</span>
              <span className="text-blue-500 font-bold">{product.discountedPrice}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button className="flex-1 px-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                View
              </button>
              <button className="flex-1 px-2 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}