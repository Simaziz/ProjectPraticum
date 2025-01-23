import React from 'react';

export default function OurProducts() {
  const products = [
    {
      id: 1,
      name: 'Breed Dry Dog Food',
      price: '$100',
      rating: '★★★★',
      reviews: '(35)',
      image: '/images/camera.png', // Replace with your image path
    },
    {
      id: 2,
      name: 'CANON EOS DSLR Camera',
      price: '$360',
      rating: '★★★★',
      reviews: '(95)',
      image: '/images/asus.png', // Replace with your image path
    },
    {
      id: 3,
      name: 'ASUS FHD Gaming Laptop',
      price: '$700',
      rating: '★★★★',
      reviews: '(325)',
      image: '/images/ps5.png', // Replace with your image path
    },
    {
      id: 4,
      name: 'Curology Product Set',
      price: '$500',
      rating: '★★★★',
      reviews: '(145)',
      image: '/images/asus.png', // Replace with your image path
    },
    // {
    //   id: 5,
    //   name: 'Kids Electric Car',
    //   price: '$960',
    //   rating: '★★★★',
    //   reviews: '(65)',
    //   image: '/images/electric-car.jpg', // Replace with your image path
    // },
    // {
    //   id: 6,
    //   name: 'Jr. Zoom Soccer Cleats',
    //   price: '$160',
    //   rating: '★★★★',
    //   reviews: '(35)',
    //   image: '/images/soccer-cleats.jpg', // Replace with your image path
    // },
    // {
    //   id: 7,
    //   name: 'GPII Shooter USB Gamepod',
    //   price: '$660',
    //   rating: '★★★★',
    //   reviews: '(55)',
    //   image: '/images/gamepod.jpg', // Replace with your image path
    // },
    // {
    //   id: 8,
    //   name: 'Quilted Satin Jacket',
    //   price: '$660',
    //   rating: '★★★★',
    //   reviews: '(55)',
    //   image: '/images/jacket.jpg', // Replace with your image path
    // },
  ];

  return (
    <div className="p-8 bg-gray-100">
      {/* Heading and View All Button */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Our Products</h2>
          <p className="text-gray-600">Explore Our Products</p>
        </div>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
          View All Products
        </button>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            {/* Product Image */}
            <div className="h-48 rounded-lg mb-4 overflow-hidden">
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