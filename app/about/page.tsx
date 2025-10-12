'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function About() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
  }, []);

  const values = [
    {
      title: 'Quality First',
      description: 'We maintain the highest standards in every cup we produce, ensuring consistency and excellence.',
      icon: '🏆',
    },
    {
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices and reducing environmental impact through biodegradable materials.',
      icon: '🌱',
    },
    {
      title: 'Innovation',
      description: 'Constantly advancing our manufacturing processes and product designs to meet evolving needs.',
      icon: '💡',
    },
    {
      title: 'Customer Focus',
      description: 'Dedicated to understanding and exceeding customer expectations with personalized service.',
      icon: '🤝',
    },
  ];

  const timeline = [
    { year: '2008', event: 'Company founded with a vision to revolutionize paper cup manufacturing' },
    { year: '2012', event: 'Expanded operations to international markets, serving 10+ countries' },
    { year: '2016', event: 'Achieved ISO certification and doubled production capacity' },
    { year: '2020', event: 'Launched eco-friendly biodegradable cup line' },
    { year: '2024', event: 'Serving 50+ countries with 500M+ cups produced annually' },
  ];

  return (
    <main className="min-h-screen pt-24">
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-500 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.pexels.com/photos/6347720/pexels-photo-6347720.jpeg?auto=compress&cs=tinysrgb&w=1920)',
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
            <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              About EcoCups Global
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Leading the future of sustainable packaging with premium paper cup solutions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mb-6" />
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2008, EcoCups Global began with a simple mission: to provide businesses worldwide with high-quality, sustainable paper cup solutions. What started as a small manufacturing facility has grown into a global leader in the paper cup industry.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Today, we operate state-of-the-art facilities equipped with advanced machinery and employ cutting-edge manufacturing processes. Our commitment to quality, innovation, and sustainability has earned us the trust of over 1,000 businesses across 50+ countries.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We specialize in both import and export services, offering flexible solutions for businesses of all sizes. From small cafes to large multinational corporations, we deliver excellence in every cup.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Paper cups"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Coffee cup"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
                />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://images.pexels.com/photos/6348128/pexels-photo-6348128.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Manufacturing"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover -mt-8"
                />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://images.pexels.com/photos/7262942/pexels-photo-7262942.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Eco-friendly"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that shaped our success
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 pb-12 border-l-4 border-green-500 last:pb-0"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg" />
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    {item.year}
                  </div>
                  <p className="text-lg text-gray-700">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-500">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: '15+', label: 'Years of Excellence' },
              { number: '50+', label: 'Countries Worldwide' },
              { number: '1000+', label: 'Satisfied Clients' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-6xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-xl text-green-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Partner With Us
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses worldwide who trust EcoCups Global for their paper cup needs
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
