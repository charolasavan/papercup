'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleWhatsAppClick = () => {
    const phoneNumber = '+919512121018';
    const message = encodeURIComponent('Hello! I would like to inquire about your eco-friendly products.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };


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
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '96px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}

              className="w-24 h-1 bg-white mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Get in touch with our team for quotes, inquiries, or partnerships
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div style={{ opacity: 1, transform: 'none' }}>
              <div className="mb-12" style={{ opacity: 1, transform: 'none' }}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">Contact Information</h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">Reach out to us directly using the information below.</p>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '96px' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="h-1 w-24 bg-green-600 mt-4" />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-6 w-6 text-green-600">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Our Location</h3>
                      <p className="text-gray-600">2<sup>nd</sup> Floor, Super Market 2, Shop 6 - Mahendranagar,  Morbi<br />Gujarat, India 363642</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-6 w-6 text-green-600">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone Number</h3>
                      <p className="text-gray-600">+91 95121 21018</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-6 w-6 text-green-600">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Email Address</h3>
                      <p className="text-gray-600">fortisinternational4@gmail.com<br /></p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-6 w-6 text-green-600">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Saturday: 10:00 AM - 6:00 PM<br />Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-5 w-5 text-green-600 mr-2">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  </svg>
                  Quick WhatsApp Contact
                </h3>
                <p className="text-gray-600 mb-4">Get instant response on WhatsApp with our complete product and service information.</p>
                <button
                  className="inline-flex items-center gap-2 bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-lg font-medium transition-colors"
                  onClick={handleWhatsAppClick}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-5 w-5">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  </svg>
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="h-full" style={{ opacity: 1, transform: 'none' }}>
              <div className="mb-12" style={{ opacity: 1, transform: 'none' }}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">Send Message</h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">Reach out to us directly using the information below.</p>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '96px' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="h-1 w-24 bg-green-600 mt-4" />
              </div>
              <div className="mt-8 rounded-lg overflow-hidden ">
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
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                        placeholder="johndoe@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="Your message here..."
                    />
                  </div>

                  <div className="flex justify-center mt-6">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-green-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Send Message'}
                    </button>
                  </div>

                  {submitStatus === 'success' && (
                    <p className="text-center text-green-600 mt-4">Thank you for your message!</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section >




    </main >
  );
}

export default Contact;