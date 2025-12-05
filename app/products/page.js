'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import Image from 'next/image';
import products from '../../public/assets/productDetail';


function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'single', name: 'Single Wall' },
    { id: 'double', name: 'Double Wall' },
    { id: 'ripple', name: 'Ripple Wall' },
  ];



  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className='min-h-screen pt-24'>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-500 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/images/About/image1.png)',
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
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '80px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-24 h-1 bg-white mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Premium quality paper cups for every business need
            </p>
          </motion.div>
        </div>
      </section>

      <section className='py-20 bg-gradient-to-br from-gray-50 to-white'>
        <div className="container mx-auto px-4 lg:px-8">

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition-colors bg-white shadow-sm"
              />
            </div>
          </motion.div>
          {/* <img src="/images/productImages/singleWall/cup_1.png" width="200" /> */}
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="container flex items-center justify-center gap-2 mb-10"
          >
            <Filter className="w-5 h-5 text-slate-600 hidden sm:block" />
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all whitespace-nowrap ${selectedCategory === category.id
                    ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white '
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                    }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {filteredProducts.length > 0 ? (
              <motion.div
                key="products"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={`${selectedCategory}-${product.id}`}
                    initial={{ x: 0, opacity: 0, y: 100 }}
                    whileInView={{ x: 0, y: 0, opacity: 1, }}
                    viewport={{ once: true }}
                    // animate={{ x: 0, opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1, }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl  overflow-hidden group"
                  >
                    {/* Product Image */}
                    <div className="group relative w-full aspect-square overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill={true}
                        loading="lazy"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent 
                  opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>


                    {/* Product Details */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 min-h-[3.5rem]">
                        <span class="px-2 py-0.5 bg-green-100 text-green-700 text-sm font-bold rounded">
                          {product.size}
                        </span> - {product.name}

                      </h3>

                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      {/* Features */}
                      <div className="space-y-1.5 mb-4">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <svg
                              className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5"
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
                            <span className="text-xs text-slate-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-slate-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">No products found</h3>
                <p className="text-slate-600 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg transition-shadow"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

export default Products;
