"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaTruck, FaBoxes, FaExchangeAlt, FaAward, FaHeadset, FaRocket, FaClock, FaRoute, FaShieldAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Services: React.FC = () => {
  return (
    <section className="py-12 md:py-8 lg:py-8 bg-white">
      <div className="container-custom">
        <div className="text-accent-500 text-center text-xl md:text-4xl font-medium mb-6 md:mb-12 tracking-tighter">
          Our Services
        </div>

        <div className="space-y-16 md:space-y-24 lg:space-y-40">
          {/* Last-Mile Delivery */}
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-4">
            <motion.div
              className="w-full md:w-[90%] lg:w-[550px] z-10 lg:-mr-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white p-6 md:p-8 lg:p-12 rounded-lg shadow-2xl border border-transparent h-auto lg:h-[550px] flex flex-col"> 
                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Last-Mile Delivery</h3>
                  <p className="text-sm md:text-base text-gray-700">We deliver packages safely and efficiently to our partner's customers' doorsteps. Our trained and professional Delivery Associates ensure that every parcel reaches its destination on time, every time — with care and precision.</p>
                  <div className="">
                    <div className="grid grid-cols-1 gap-4 md:gap-6 mt-6 md:mt-12">
                      <div className="flex items-center gap-3">
                        <FaTruck className="text-gray-700 text-lg md:text-xl" />
                        <span className="text-gray-500 text-sm md:text-base">Professional Delivery Associates</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaBoxes className="text-gray-700 text-lg md:text-xl" />
                        <span className="text-gray-500 text-sm md:text-base">Safe Package Handling</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaExchangeAlt className="text-gray-700 text-lg md:text-xl" />
                        <span className="text-gray-500 text-sm md:text-base">Timely Deliveries</span>
                      </div> 
                    </div>
                  </div>
                </div>
                <div className="mt-6 md:mt-auto">
                  <Link href="/services" className="bg-[#FF6B00] text-white px-4 md:px-6 py-2 md:py-3 rounded-md font-medium cursor-pointer transition hover:bg-[#E05E00] inline-block">
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-full md:w-[90%] lg:w-[550px] mt-0 lg:mt-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image 
                src="/images/landscapepureway.png" 
                alt="Last-Mile Delivery" 
                className="w-full h-[300px] md:h-[450px] lg:h-[600px] object-cover rounded-lg" 
                width={800}
                height={600}
              />
            </motion.div>
          </div>

          {/* Route Management & Optimization */}
          <div className="relative flex flex-col-reverse lg:flex-row items-center justify-center gap-0 lg:gap-4">
            <motion.div
              className="w-full md:w-[90%] lg:w-[550px] mt-0 lg:mt-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image 
                src="/images/newimg1.png" 
                alt="Route Management" 
                className="w-full h-[300px] md:h-[450px] lg:h-[600px] object-cover rounded-lg" 
                width={800}
                height={600}
              />
            </motion.div>
            <motion.div
              className="w-full md:w-[90%] lg:w-[550px] z-10 lg:-ml-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white p-6 md:p-8 lg:p-12 rounded-lg shadow-2xl border border-transparent h-auto lg:h-[550px] flex flex-col">
                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Route Management & Optimization</h3>
                  <p className="text-sm md:text-base text-gray-700">We expertly manage and optimize delivery routes, ensuring maximum efficiency while meeting our clients service and timing expectations.</p>
                  <div className="">
                    <div className="grid grid-cols-1 gap-4 md:gap-6 mt-6 md:mt-12">
                      <div className="flex items-center gap-3">
                        <FaRoute className="text-gray-700 text-lg md:text-xl" />
                        <span className="text-gray-500 text-sm md:text-base">Optimized Delivery Routes</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaClock className="text-gray-700 text-lg md:text-xl" />
                        <span className="text-gray-500 text-sm md:text-base">Real-time Updates</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaRocket className="text-gray-700 text-lg md:text-xl" />
                        <span className="text-gray-500 text-sm md:text-base">Efficient Navigation</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 md:mt-auto">
                  <Link href="/services" className="bg-[#FF6B00] text-white px-4 md:px-6 py-2 md:py-3 rounded-md font-medium cursor-pointer transition hover:bg-[#E05E00] inline-block">
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Safety-First Operations */}
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-4">
            <motion.div
              className="w-full md:w-[90%] lg:w-[550px] z-10 lg:-mr-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white p-6 md:p-8 lg:p-12 rounded-lg shadow-2xl border border-transparent h-auto lg:h-[550px] flex flex-col"> 
                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Safety-First Operations</h3>
                  <p className="text-sm md:text-base text-gray-700">Safety is at the heart of what we do. We provide extensive training to all Delivery Associates, promoting safe driving practices and secure handling of packages.</p>
                  <div className="">
                    <div className="grid grid-cols-1 gap-4 md:gap-6 mt-6 md:mt-12">
                      <div className="flex items-center gap-3">
                        <FaShieldAlt className="text-gray-700 text-lg md:text-xl" />
                        <span className="text-gray-500 text-sm md:text-base">Extensive Training</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaAward className="text-gray-700 text-lg md:text-xl" />
                        <span className="text-gray-500 text-sm md:text-base">Safe Driving Practices</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaHeadset className="text-gray-700 text-lg md:text-xl" />
                        <span className="text-gray-500 text-sm md:text-base">Regular Vehicle Inspections</span>
                      </div> 
                    </div>
                  </div>
                </div>
                <div className="mt-6 md:mt-auto">
                  <Link href="/services" className="bg-[#FF6B00] text-white px-4 md:px-6 py-2 md:py-3 rounded-md font-medium cursor-pointer transition hover:bg-[#E05E00] inline-block">
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-full md:w-[90%] lg:w-[550px] mt-0 lg:mt-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image 
                src="/images/landscape4.png" 
                alt="Safety-First Operations" 
                className="w-full h-[300px] md:h-[450px] lg:h-[600px] object-cover rounded-lg" 
                width={800}
                height={600}
              />
            </motion.div>
          </div>

          
          {/* <div className="relative flex flex-col-reverse lg:flex-row items-center justify-center gap-0 lg:gap-4">
            <motion.div
              className="w-full md:w-[90%] lg:w-[550px] mt-0 lg:mt-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src={FineContainer} alt="Recruitment & Training" className="w-full h-[300px] md:h-[450px] lg:h-[600px] object-cover rounded-lg" />
            </motion.div>
            <motion.div
              className="w-full md:w-[90%] lg:w-[550px] z-10 lg:-ml-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white p-6 md:p-8 lg:p-12 rounded-lg shadow-2xl border border-transparent h-auto lg:h-[550px] flex flex-col">
                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Recruitment & Training</h3>
                  <p className="text-sm md:text-base text-gray-700">We actively recruit from local communities and deliver comprehensive onboarding and continuous training to ensure excellence in service.</p>
                  <div className="">
                    <div className="grid grid-cols-1 gap-4 md:gap-6 mt-6 md:mt-12">
                      <div className="flex items-center gap-3">
                        <FaAward className="text-gray-700 text-lg md:text-xl" />
                        <span className="text-gray-500 text-sm md:text-base">Local Community Recruitment</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaHeadset className="text-gray-700 text-lg md:text-xl" />
                        <span className="text-gray-500 text-sm md:text-base">Comprehensive Training</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaShieldAlt className="text-gray-700 text-lg md:text-xl" />
                        <span className="text-gray-500 text-sm md:text-base">Continuous Development</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 md:mt-auto">
                  <Link href="/services" className="bg-[#FF6B00] text-white px-4 md:px-6 py-2 md:py-3 rounded-md font-medium cursor-pointer transition hover:bg-[#E05E00] inline-block">
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          </div> */}

          {/* Parcel Handling and Customer Service */}
         
        </div>
      </div>
    </section>
  );
};

export default Services;