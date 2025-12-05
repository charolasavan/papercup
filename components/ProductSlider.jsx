import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

// import { Draggable } from 'gsap/Draggable';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// gsap.registerPlugin(Draggable);

const products = [
  {
    id: 1,
    name: 'Single Wall Paper Cups',
    description: 'Perfect for hot and cold beverages',
    sizes: '4oz - 12oz',
    image: "/images/productImages/singleWall/4oz/cup_1.png",
  },
  {
    id: 2,
    name: 'Double Wall Paper Cups',
    description: 'Extra insulation for hot drinks',
    sizes: '7oz - 12oz',
    image: "/images/productImages/doubleWall/8oz/cup_3.jpg",
  },
  {
    id: 3,
    name: 'Ripple Wall Paper Cups',
    description: 'Premium textured grip design',
    sizes: '4oz - 12oz',
    image: "/images/productImages/rippleWall/12oz/cup_11.jpg",
  },
  {
    id: 4,
    name: 'Custom Printed Cups',
    description: 'Your brand, our quality',
    sizes: 'All sizes available',
    image: "/images/productImages/rippleWall/8oz/cup_8.jpg",
  },
  {
    id: 5,
    name: 'Eco-Friendly Cups',
    description: 'Biodegradable and compostable',
    sizes: '4oz - 16oz',
    image: "/images/productImages/rippleWall/6oz/cup_3.jpg",
  },
  {
    id: 6,
    name: 'Plane Cups',
    description: 'Compatible with all cup sizes',
    sizes: 'Universal fit',
    image: "/images/productImages/singleWall/7oz/cup_8.png",
  },
];

const ProductSlider = () => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const autoScrollRef = useRef(null);
  // const [isDragging, setIsDragging] = useState(false);
  const scrollSpeed = 30;

  const startAutoScroll = (speed) => {
    const slider = sliderRef.current;
    if (!slider) return;

    if (autoScrollRef.current) {
      autoScrollRef.current.kill();
    }

    const sliderWidth = slider.scrollWidth / 3;
    const currentX = gsap.getProperty(slider, 'x');

    autoScrollRef.current = gsap.to(slider, {
      x: currentX - sliderWidth,
      duration: speed,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: (x) => {
          const parsedX = parseFloat(x);
          if (parsedX < -sliderWidth * 2) {
            return `${parsedX + sliderWidth}`;
          }
          return x;
        },
      },
    });
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      autoScrollRef.current.pause();
    }
  };

  const resumeAutoScroll = () => {
    if (autoScrollRef.current) {
      autoScrollRef.current.resume();
    }
  };

  const handleManualScroll = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    stopAutoScroll();
    const currentX = gsap.getProperty(slider, 'x');
    const cardWidth = 320;
    const newX = direction === 'left' ? currentX + cardWidth : currentX - cardWidth;

    gsap.to(slider, {
      x: newX,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        setTimeout(() => startAutoScroll(scrollSpeed), 500);
      },
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;
    const container = containerRef.current;
    if (!slider || !container) return;

    const calculateBounds = () => {
      const sliderWidth = slider.scrollWidth;
      const containerWidth = container.offsetWidth;
      return -(sliderWidth / 2 - containerWidth);
    };

    // const draggable = Draggable.create(slider, {
    //   type: 'x',
    //   bounds: {
    //     minX: calculateBounds(),
    //     maxX: 0,
    //   },
    //   inertia: true,
    //   snap: {
    //     x: (endValue) => {
    //       return Math.round(endValue / 20) * 20;
    //     },
    //   },
    //   onDragStart: () => {
    //     setIsDragging(true);
    //     stopAutoScroll();
    //   },
    //   onDragEnd: () => {
    //     setIsDragging(false);

    //     const currentX = gsap.getProperty(slider, 'x');
    //     const sliderWidth = slider.scrollWidth / 3;

    //     if (currentX < -sliderWidth * 2 + 100) {
    //       gsap.set(slider, { x: currentX + sliderWidth });
    //     } else if (currentX > -100) {
    //       gsap.set(slider, { x: currentX - sliderWidth });
    //     }

    //     setTimeout(() => startAutoScroll(scrollSpeed), 500);
    //   },
    // });

    // const handleResize = () => {
    //   draggable[0].applyBounds({
    //     minX: calculateBounds(),
    //     maxX: 0,
    //   });
    // };

    // window.addEventListener('resize', handleResize);

    startAutoScroll(scrollSpeed);

    // return () => {
    //   draggable[0].kill();
    //   if (autoScrollRef.current) {
    //     autoScrollRef.current.kill();
    //   }
    //   // window.removeEventListener('resize', handleResize);
    // };
  }, []);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-8 md:mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Our Premium Products
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '96px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-16 md:w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto mb-4 md:mb-6" />
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            High-quality paper cups designed for every need
          </p>
        </div>
      </div>

      <div className="relative" ref={containerRef}>
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <button
          onClick={() => handleManualScroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
        </button>

        <button
          onClick={() => handleManualScroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
        </button>

        <div
          ref={sliderRef}
          className={`flex space-x-4 md:space-x-8 px-4 `}
          onMouseEnter={stopAutoScroll}
          onMouseLeave={resumeAutoScroll}
        >
          {[...products, ...products, ...products].map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden group transition-transform hover:scale-105 select-none"
            >
              <div className="relative h-60 md:h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                  <span className="inline-block px-2 md:px-3 py-1 bg-green-500 text-white text-xs md:text-sm font-semibold rounded-full">
                    {product.sizes}
                  </span>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                  {product.name}
                </h3>
                <p className="text-sm md:text-base text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8 md:mt-12 px-4">
        <a
          href="/products"
          // className="inline-block px-5 md:px-8 py-3 md:py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-full font-semibold text-base md:text-lg hover:shadow-lg transition-all hover:scale-105"
          className='inline-block h-full px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-full font-semibold text-[18px] md:text-lg shadow-lg hover:shadow-xl transition-all '

        >
          View All Products
        </a>
      </div>
    </section>
  );
};

export default ProductSlider;
