"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  subtitleColor?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = false, 
  className = '',
  subtitleColor = 'text-gray-500'
}) => {
  const alignment = centered ? 'text-center mx-auto' : '';
  
  return (
    <div className={`max-w-3xl mb-12 ${alignment} ${className}`}>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4 text-black"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          className={`text-lg ${subtitleColor}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;