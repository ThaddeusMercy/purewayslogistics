"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
// import { ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <>
      <section className="py-12 sm:py-16 md:py-8 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary-500/5 rounded-lg filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-primary-500/5 rounded-lg filter blur-3xl"></div>
        
        <div className="container-custom relative z-10 px-4 sm:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 mt-2"
            >
              <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-4 sm:mb-6 text-white tracking-tighter">
               Your One Stop Solution for Logistics
              </h2>
              
              <div className="space-y-3 sm:space-y-4 text-gray-100/90  mb-6 sm:mb-8 text-sm sm:text-base">
                <p>
                Pureways Logistics is specialized courier service operating within the logistics network of one of the world's largest e-commerce giants, our mission is clear: ensure that every delivery is timely, safe, and handled with care.
                </p>
                <p>
                With Pureways Logistics, you're not just choosing a courier service. You're choosing a committed, community-focused, and values-driven partner in logistics. Let's deliver the future — together.
                </p>
              </div>
              
              <Link href="/about">
                <button className="bg-[#FF6600] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium cursor-pointer transition hover:bg-[#D35400] text-sm sm:text-base">
                  Learn More
                </button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-1 lg:order-2 mb-8 lg:mb-0"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/brandedbus.jpg" 
                  alt="About Pureways Logistics" 
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[600px] object-cover"
                  width={1000}
                  height={600}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Curved edge - arch shape */}
      <div className="bg-white overflow-hidden">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#000000"
            d="M0,0 C300,40 900,140 1440,0 L1440,0 L0,0 Z"
          />
        </svg>
      </div>
    </>
  );
};

export default AboutSection;