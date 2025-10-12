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
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-500 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
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
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-full font-semibold hover:shadow-lg transition-all"
                  >
                    Request Quote
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Products?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto mb-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Food Grade Quality',
                description: 'All products meet international food safety standards',
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                ),
                title: 'Eco-Friendly',
                description: 'Biodegradable materials for sustainable business',
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
                title: 'Custom Branding',
                description: 'Full-color printing to showcase your brand',
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Competitive Pricing',
                description: 'Best value for bulk orders and long-term contracts',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-green-600 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-500">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Order?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a custom quote tailored to your business needs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-8 py-4 bg-white text-green-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Get Custom Quote
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/about"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
              >
                Learn More About Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
