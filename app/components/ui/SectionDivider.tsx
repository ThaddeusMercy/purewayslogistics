"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ className = '' }) => {
  return (
    <div className={`w-full py-10 ${className}`}>
      <motion.div 
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative flex justify-center">
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-500/70 to-transparent"></div>
          
          <div className="relative z-10 flex items-center space-x-4">
            <div className="w-16 h-[1px] bg-gradient-to-r from-gray-800 to-primary-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-primary-500 animate-pulse"></div>
            <div className="w-6 h-6 rounded-full border-2 border-primary-500/50 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary-500"></div>
            </div>
            <div className="w-3 h-3 rounded-full bg-primary-500 animate-pulse"></div>
            <div className="w-16 h-[1px] bg-gradient-to-l from-gray-800 to-primary-500/50"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionDivider; 