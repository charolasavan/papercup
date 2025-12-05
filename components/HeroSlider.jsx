'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Banner_1 from '../public/images/BannerSliderImages/Banner_1.png';
import Banner_2 from '../public/images/BannerSliderImages/Banner_2.png';
import Banner_3 from '../public/images/BannerSliderImages/Banner_3.png';
import gsap from 'gsap';

const slides = [
  {
    id: 1,
    title: 'Premium Paper Cups',
    subtitle: 'Eco-Friendly Solutions for Your Business',
    description: 'Leading manufacturer and exporter of high-quality paper cups worldwide',
    image: Banner_3.src
  },
  {
    id: 2,
    title: 'Global Export Excellence',
    subtitle: 'Serving 5+ Countries Worldwide',
    description: 'Trusted partner for businesses seeking sustainable packaging solutions',
    image: Banner_2.src
  },
  {
    id: 3,
    title: 'Custom Printing Available',
    subtitle: 'Your Brand, Our Quality',
    description: 'Premium custom-printed paper cups to elevate your brand presence',
    image: Banner_1.src
  },
];

const HeroSlider = ({ scrollToNextSection }) => {
  const [currentSlide, setCurrentSlide] = useState(0);  // State to track the current slide
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);

  // Automatically switch slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);  // Cleanup interval on component unmount
  }, []);

  // GSAP animations for text elements on slide change
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        descriptionRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      );
  }, [currentSlide]);  // Trigger animation on slide change

  return (
    <div className="relative h-screen w-full overflow-hidden" >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
          >

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>

          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-3xl">
                {/* Animated Line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '80px' }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-1 bg-gradient-to-r from-green-500 to-emerald-400 mb-6"
                />

                {/* Slide Title */}
                <motion.h1
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  ref={titleRef}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                {/* Slide Subtitle */}
                <p
                  ref={subtitleRef}
                  className="text-2xl md:text-3xl text-green-400 mb-6 font-semibold"
                >
                  {slides[currentSlide].subtitle}
                </p>

                {/* Slide Description */}
                <p
                  ref={descriptionRef}
                  className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed"
                >
                  {slides[currentSlide].description}
                </p>

                {/* Buttons for navigating to products or contact page */}
                <div className="flex flex-wrap gap-4">
                  <motion.a

                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/products"
                    className="h-full px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-full font-semibold text-[18px] md:text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                  >
                    View Products
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/contact"
                    // className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
                    className="px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-[18px] md:text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
                  >
                    Contact Us
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide navigation dots */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
              ? 'w-12 bg-green-500'
              : 'w-2 bg-white/50 hover:bg-white/70'
              }`}
          />
        ))}
      </div> */}

      {/* Scroll down icon */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={scrollToNextSection}
          className="bg-green-600 p-2 rounded-full cursor-pointer animate-bounce"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>



    </div>
  );
};

export default HeroSlider;
