"use client";

import React from 'react';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/About';
import Features from '../components/home/Features';
import Services from '../components/home/Services';
import Hiring from '../components/home/Hiring';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <motion.div
      className="bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <AboutSection />
      <Services />
      <Hiring />
      <Features />
    </motion.div>
  );
};

export default Home;