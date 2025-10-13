'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'single', name: 'Single Wall' },
    { id: 'double', name: 'Double Wall' },
    { id: 'ripple', name: 'Ripple Wall' },
    { id: 'custom', name: 'Custom Printed' },
  ];

  const products = [
    {
      id: 1,
      name: 'Single Wall Paper Cup - 4oz',
      category: 'single',
      description: 'Perfect for espresso and small beverages',
      features: ['Food grade paper', 'Leak-proof', 'Microwave safe'],
      image: 'https://images.pexels.com/photos/6347720/pexels-photo-6347720.jpeg?auto=compress&cs=tinysrgb&w=800',
      sizes: ['4oz', '6oz', '8oz'],
    },
    {
      id: 2,
      name: 'Single Wall Paper Cup - 12oz',
      category: 'single',
      description: 'Standard size for coffee and tea',
      features: ['Eco-friendly', 'Biodegradable', 'Cost-effective'],
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
      sizes: ['10oz', '12oz', '16oz'],
    },
    {
      id: 3,
      name: 'Double Wall Paper Cup - 8oz',
      category: 'double',
      description: 'Extra insulation for hot beverages',
      features: ['Heat resistant', 'No sleeve needed', 'Premium quality'],
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
      sizes: ['8oz', '12oz', '16oz', '20oz'],
    },
    {
      id: 4,
      name: 'Double Wall Paper Cup - 16oz',
      category: 'double',
      description: 'Large capacity with superior insulation',
      features: ['Double layer protection', 'Comfortable grip', 'Professional look'],
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
      sizes: ['12oz', '16oz', '20oz'],
    },
    {
      id: 5,
      name: 'Ripple Wall Paper Cup - 8oz',
      category: 'ripple',
      description: 'Textured design for better grip',
      features: ['Ergonomic design', 'Heat protection', 'Stylish appearance'],
      image: 'https://images.pexels.com/photos/6348128/pexels-photo-6348128.jpeg?auto=compress&cs=tinysrgb&w=800',
      sizes: ['8oz', '12oz', '16oz'],
    },
    {
      id: 6,
      name: 'Ripple Wall Paper Cup - 12oz',
      category: 'ripple',
      description: 'Premium ripple design for comfort',
      features: ['Triple layer', 'Enhanced insulation', 'Modern design'],
      image: 'https://images.pexels.com/photos/7262942/pexels-photo-7262942.jpeg?auto=compress&cs=tinysrgb&w=800',
      sizes: ['8oz', '12oz', '16oz'],
    },
    {
      id: 7,
      name: 'Custom Printed Cup - All Sizes',
      category: 'custom',
      description: 'Your brand on premium quality cups',
      features: ['Full color printing', 'Logo placement', 'Brand customization'],
      image: 'https://images.pexels.com/photos/6347720/pexels-photo-6347720.jpeg?auto=compress&cs=tinysrgb&w=800',
      sizes: ['All sizes available'],
    },
    {
      id: 8,
      name: 'Custom Design Service',
      category: 'custom',
      description: 'Unique designs tailored to your needs',
      features: ['Design consultation', 'Mock-ups provided', 'Fast turnaround'],
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
      sizes: ['Custom sizes available'],
    },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-500 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1920)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our Products
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Premium quality paper cups for every business need
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Selection */}
      <section className="py-12 bg-white sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                      {product.sizes.join(', ')}
                    </span>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <svg
                          className="w-5 h-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 11l3 3L22 4" />
                        </svg>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
