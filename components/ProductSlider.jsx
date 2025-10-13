'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const products = [
  {
    id: 1,
    name: 'Single Wall Paper Cups',
    description: 'Perfect for hot and cold beverages',
    sizes: '4oz - 22oz',
    image: 'https://images.pexels.com/photos/6347720/pexels-photo-6347720.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    name: 'Double Wall Paper Cups',
    description: 'Extra insulation for hot drinks',
    sizes: '8oz - 20oz',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    name: 'Ripple Wall Paper Cups',
    description: 'Premium textured grip design',
    sizes: '8oz - 16oz',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    name: 'Custom Printed Cups',
    description: 'Your brand, our quality',
    sizes: 'All sizes available',
    image: 'https://images.pexels.com/photos/6348128/pexels-photo-6348128.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    name: 'Eco-Friendly Cups',
    description: 'Biodegradable and compostable',
    sizes: '4oz - 16oz',
    image: 'https://images.pexels.com/photos/7262942/pexels-photo-7262942.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    name: 'Coffee Cup Lids',
    description: 'Compatible with all cup sizes',
    sizes: 'Universal fit',
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const ProductSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollWidth = slider.scrollWidth;
    const animationDuration = 15;

    gsap.to(slider, {
      x: -scrollWidth / 2,
      duration: animationDuration,
      ease: 'none',
      repeat: -1,
    });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Products
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            High-quality paper cups designed for every need
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 sm:hidden  md:block" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 sm:hidden  md:block" /> */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 hidden md:block" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 hidden md:block" />



        <div ref={sliderRef} className="flex space-x-8">
          {[...products, ...products].map((product, index) => (
            <motion.div
              key={`${product.id}-${index}`}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 w-80 sm:w-72 md:w-80 lg:w-96 bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                    {product.sizes}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mt-12"
      >
        <a
          href="/products"
          className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-full font-semibold text-lg hover:shadow-lg transition-all hover:scale-105"
        >
          View All Products
        </a>
      </motion.div>
    </section>
  );
};

export default ProductSlider;
