"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SeparatorProps {
  className?: string;
  dark?: boolean;
}

const Separator: React.FC<SeparatorProps> = ({ 
  className = '',
  dark = false 
}) => {
  return (
    <div className={`w-full py-6 ${className}`}>
      <motion.div 
        className="max-w-4xl mx-auto flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={`h-[1px] w-16 ${dark ? 'bg-secondary-800' : 'bg-gray-700'}`}></div>
        <div className={`h-2 w-2 mx-3 rounded-full ${dark ? 'bg-primary-400' : 'bg-primary-500'}`}></div>
        <div className={`h-[1px] flex-grow ${dark ? 'bg-secondary-800' : 'bg-gray-700'}`}></div>
        <div className={`h-3 w-3 mx-3 rounded-full ${dark ? 'bg-primary-400' : 'bg-primary-500'}`}></div>
        <div className={`h-[1px] w-16 ${dark ? 'bg-secondary-800' : 'bg-gray-700'}`}></div>
      </motion.div>
    </div>
  );
};

export default Separator; 