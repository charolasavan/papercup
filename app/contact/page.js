'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    productInterest: 'general',
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

    await new Promise((resolve) => setTimeout(resolve, 1500));

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
  const handleWhatsAppClick = () => {
    const phoneNumber = '7862030297';
    const message = encodeURIComponent('Hello! I would like to inquire about your eco-friendly products.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };


  const factoryLocation = {
    address: '123 Industrial Estate, Green Valley',
    city: 'Manufacturing District',
    state: 'State',
    zipCode: '12345',
    country: 'Country',
    lat: 40.7484,
    lng: -73.9857,
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
                      <p className="text-gray-600">103 Kunjal Complex Zadeshwar Road, Bharuch<br />Gujarat, India 392011</p>
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
                      <p className="text-gray-600">+91 94261 12506<br />+91 98250 32506</p>
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
                      <p className="text-gray-600">narmada_agro@yahoo.in<br /></p>
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
                      <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">Find Us</h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">Visit our office to discuss your agricultural needs in person.</p>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '96px' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="h-1 w-24 bg-green-600 mt-4" />
              </div>
              <div className="mt-8 h-[500px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29391.721596987987!2d70.83207042917917!3d22.951508720284174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598bbc441d6a3f%3A0xd8885524ca7a13ef!2sKerala%20haripar%20morbi!5e0!3m2!1sen!2sin!4v1760778195647!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: '0px' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Contact;



