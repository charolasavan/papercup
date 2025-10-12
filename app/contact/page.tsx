'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    productInterest: 'general',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      productInterest: 'general',
    });

    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      details: ['info@ecocupsglobal.com', 'sales@ecocupsglobal.com'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Address',
      details: ['123 Business Park, Industrial Area', 'City, State 12345, Country'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM'],
    },
  ];

  return (
    <main className="min-h-screen pt-24">
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-500 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.pexels.com/photos/6348128/pexels-photo-6348128.jpeg?auto=compress&cs=tinysrgb&w=1920)',
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
              Contact Us
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Get in touch with our team for quotes, inquiries, or partnerships
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="text-green-600 mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mb-6" />
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours. For urgent inquiries, please call us directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="productInterest" className="block text-sm font-semibold text-gray-700 mb-2">
                    Product Interest
                  </label>
                  <select
                    id="productInterest"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="single">Single Wall Cups</option>
                    <option value="double">Double Wall Cups</option>
                    <option value="ripple">Ripple Wall Cups</option>
                    <option value="custom">Custom Printing</option>
                    <option value="bulk">Bulk Orders</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 border-2 border-green-500 rounded-lg text-green-700 text-center font-semibold"
                  >
                    Thank you! Your message has been sent successfully. We will contact you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-600 to-emerald-500 rounded-2xl overflow-hidden shadow-2xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-6">Why Partner With Us?</h3>

                <div className="space-y-6">
                  {[
                    {
                      title: 'Global Reach',
                      description: 'Export to 50+ countries with reliable shipping',
                    },
                    {
                      title: 'Quality Assurance',
                      description: 'ISO certified with rigorous quality control',
                    },
                    {
                      title: 'Competitive Pricing',
                      description: 'Best rates for bulk and long-term orders',
                    },
                    {
                      title: 'Fast Turnaround',
                      description: 'Quick production and delivery times',
                    },
                    {
                      title: 'Custom Solutions',
                      description: 'Tailored products to match your brand',
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6"
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
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                        <p className="text-green-100">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-lg font-semibold mb-4">Ready to get started?</p>
                  <p className="text-green-100">
                    Our team is standing by to help you find the perfect paper cup solution for your business.
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8"
              >
                <img
                  src="https://images.pexels.com/photos/4483942/pexels-photo-4483942.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Our facility"
                  className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                />
              </motion.div>
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
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Visit Our Facility
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto mb-8" />
            <div className="bg-gray-300 rounded-2xl overflow-hidden shadow-lg h-96 flex items-center justify-center">
              <p className="text-gray-600 text-lg">Map Location Placeholder</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
