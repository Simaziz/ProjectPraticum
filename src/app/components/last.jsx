import React from 'react';

export default function ServicesSection() {
  const services = [
    {
      icon: '🚚', // Replace with an icon or image
      title: 'FREE AND FAST DELIVERY',
      description: 'Free delivery for all orders over $140',
    },
    {
      icon: '📞', // Replace with an icon or image
      title: '24/7 CUSTOMER SERVICE',
      description: 'Friendly 24/7 customer support',
    },
    {
      icon: '💸', // Replace with an icon or image
      title: 'MONEY BACK GUARANTEE',
      description: 'We return money within 30 days',
    },
  ];

  return (
    <div className="p-4 sm:p-8 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
          >
            {/* Icon */}
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{service.icon}</div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}