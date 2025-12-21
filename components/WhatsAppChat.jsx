'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link, MessageCircle, X } from 'lucide-react';

export default function WhatsAppChat() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [hovered, setHovered] = useState(false);
  const number = '+919512121018'
  // 9512121018
  const message = "Hi! I'm interested in your paper cups"

  return (
    <div className="fixed bottom-20 right-2 z-50">
      <AnimatePresence>
        {showWhatsApp && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl p-6 w-80"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Chat with us</h3>
                  <p className="text-xs text-green-600 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Online now
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowWhatsApp(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-600 mb-4">
              Hi there! Have questions about our products? We're here to help!
            </p>

            <Link
              href={`https://wa.me/${number}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl text-center hover:shadow-lg transition-shadow"
            >
              Start Chat on WhatsApp
            </Link>

            <p className="text-xs text-slate-500 mt-3 text-center">
              Usually replies within minutes
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="relative"
        onHoverStart={() => setHovered(true)}  // Show tooltip on hover
        onHoverEnd={() => setHovered(false)}   // Hide tooltip when hover ends
      >
        {/* Tooltip */}
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: -10 }} // Start from the left of the button
            animate={{ opacity: 1, x: 0 }}  // Position next to the button
            exit={{ opacity: 0, x: -10 }}    // Exit towards the left
            className="absolute right-full mr-3 text-sm bg-white text-black py-2 px-4 rounded-md shadow-md w-max max-w-xs md:max-w-sm"
          >

            Chat with us on WhatsApp
          </motion.div>
        )}

        <motion.button
          onClick={() => setShowWhatsApp(!showWhatsApp)}
          className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center group hover:shadow-green-300 transition-shadow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <AnimatePresence mode="wait">
            {showWhatsApp ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-7 h-7 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-7 h-7 text-white" />
              </motion.div>
            )}
          </AnimatePresence>


          <motion.div
            className="absolute inset-0 rounded-full bg-green-500"
            animate={{
              scale: [1, 1.4, 1.4],
              opacity: [0.5, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        </motion.button>
      </motion.div>
    </div>
  );
}
