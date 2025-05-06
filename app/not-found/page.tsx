"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Page Not Found - Pureway Logistics';
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-[80vh] flex items-center justify-center px-4"
    >
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center p-4 bg-primary-100 text-accent-500 rounded-full mb-6">
            <span className="text-6xl font-bold">404</span>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold mb-4"
        >
          Page Not Found
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-secondary-600 mb-8"
        >
          The page you are looking for doesn't exist or has been moved. Please check the URL or navigate back to the homepage.
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/" className="btn-primary inline-flex items-center">
            <ArrowLeft size={18} className="mr-2" />
            Back to Homepage
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;