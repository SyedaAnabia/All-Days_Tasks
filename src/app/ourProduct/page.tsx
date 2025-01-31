import React from 'react';

const OurProducts = () => {
  const products = [
    { id: 1, name: 'Syltherine', description: 'Stylish cafe chair', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000', discount: '-30%', new: false, image: '/p1.png' },
    { id: 2, name: 'Leviosa', description: 'Stylish cafe chair', price: 'Rp 2.500.000', oldPrice: null, discount: null, new: false, image: '/p2.png' },
    { id: 3, name: 'Lolito', description: 'Luxury big sofa', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000', discount: '-50%', new: false, image: '/p3.png' },
    { id: 4, name: 'Respira', description: 'Outdoor bar table and stool', price: 'Rp 500.000', oldPrice: null, discount: null, new: true, image: '/p4.png' },
    { id: 5, name: 'Grifo', description: 'Night lamp', price: 'Rp 1.500.000', oldPrice: null, discount: null, new: false, image: '/p5.png' },
    { id: 6, name: 'Muggo', description: 'Small mug', price: 'Rp 150.000', oldPrice: null, discount: null, new: true, image: '/p6.png' },
    { id: 7, name: 'Pingky', description: 'Cute bed set', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000', discount: '-50%', new: false, image: '/p7.png' },
    { id: 8, name: 'Potty', description: 'Minimalist flower pot', price: 'Rp 500.000', oldPrice: null, discount: null, new: true, image: '/p8.png' },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              {product.discount && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discount}
                </div>
              )}
              {product.new && (
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  New
                </div>
              )}
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <button className="bg-white text-black px-4 py-2 text-sm font-bold rounded">
                  Add to cart
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <div className="mt-2">
                <span className="font-bold">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through ml-2">
                    {product.oldPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center mt-8">
      <button className="border-2 border-yellow-500 text-black px-6 py-2 font-bold rounded hover:bg-yellow-600 transition">
  Show More
</button>

      </div>
    </div>
  );
};

export default OurProducts;