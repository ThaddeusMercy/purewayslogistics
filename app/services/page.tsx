"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import { Box, LineChart, Car, Truck, Route, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import brandedsorabus from '@/public/images/brandedsorabus.png';
import verticalmanbw from '@/public/images/brandeddeliveryman.png';

const CourierServices: React.FC = () => {
  useEffect(() => {
    document.title = 'Services - Pureway Logistics';
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Truck size={24} />,
      title: "Last-Mile Delivery",
      description: "We deliver packages safely and efficiently to our partner's customers' doorsteps. Our trained and professional Delivery Associates ensure that every parcel reaches its destination on time, every time — with care and precision."
    },
    {
      icon: <Route size={24} />,
      title: "Route Management & Optimization",
      description: "We expertly manage and optimize delivery routes, ensuring maximum efficiency while meeting our clients service and timing expectations."
    },
    {
      icon: <Shield size={24} />,
      title: "Safety-First Operations",
      description: "Safety is at the heart of what we do. We provide extensive training to all Delivery Associates, promoting safe driving practices and secure handling of packages."
    },
    {
      icon: <Users size={24} />,
      title: "Recruitment & Training",
      description: "We actively recruit from local communities and deliver comprehensive onboarding and continuous training to ensure excellence in service."
    },
    {
      icon: <Box size={24} />,
      title: "Parcel Handling and Customer Service",
      description: "Our team not only ensures fast delivery but also takes pride in providing exceptional customer service. Every package is treated with respect and care, and every interaction is conducted professionally to enhance customer satisfaction."
    },
    {
      icon: <LineChart size={24} />,
      title: "Performance Monitoring & Continuous Improvement",
      description: "We track our performance and always look for ways to improve. Through ongoing coaching and feedback, we consistently raise the bar on quality, speed, and reliability."
    },
    {
      icon: <Car size={24} />,
      title: "Vehicle Fleet Management",
      description: "We manage and maintain a fleet of high-quality delivery vehicles to support our operations. Vehicles are routinely serviced to ensure they are roadworthy, reliable, and meet our partners strict delivery standards."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className="pt-36 pb-10 sm:pt-48 sm:pb-16 md:pt-68 md:pb-28 bg-gradient-to-br from-secondary-100 to-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={brandedsorabus} 
            alt="Courier Service Background" 
            className="w-full h-full object-cover object-[center_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/80 to-secondary-900/60"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center px-2 sm:px-0"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Courier Excellence
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 px-2 sm:px-0">
              At Pureways Logistics, we specialise in providing high-quality delivery services that keep our clients/partners promises to its customers. As a trusted Delivery Service Partner (DSP), we deliver more than just parcels — we deliver speed, safety, and satisfaction.
            </p>
            <div className="flex justify-center">
              <Link href="/contact" className="btn-primary bg-orange-500 hover:bg-orange-600 w-full max-w-[180px] px-4 py-2 text-base rounded-md">
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute top-40 right-0 w-64 h-64 bg-primary-200 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary-200 rounded-full filter blur-3xl opacity-20"></div>
      </section>
      
      <Section bgColor="bg-white">
        <SectionTitle
          title="Last-Mile Delivery Services"
          subtitle="Tailored delivery solutions for businesses of all sizes."
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="feature-card p-4 sm:p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center p-2 sm:p-3 rounded-lg bg-primary-50 text-accent-500 mb-3 sm:mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-secondary-600 text-base md:text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>
      
      <Section bgColor="bg-secondary-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              title="Why Choose Our Last-Mile Services?"
              subtitle="Experience the difference with our customer-focused approach."
            />
            
            <div className="space-y-6 mt-8">
              {[
                {
                  number: "01",
                  title: "100% Customer-Focused",
                  description: "We prioritize your needs and satisfaction in everything we do."
                },
                {
                  number: "02",
                  title: "Trained and Certified Drivers",
                  description: "Our delivery associates undergo rigorous training and certification."
                },
                {
                  number: "03",
                  title: "Safe, Efficient, and Reliable Service",
                  description: "We maintain the highest standards of safety and reliability in all operations."
                },
                {
                  number: "04",
                  title: "Community Engagement and Local Hiring",
                  description: "We actively engage with and hire from the communities we serve."
                },
                {
                  number: "05",
                  title: "Commitment to Continuous Improvement",
                  description: "We constantly evaluate and enhance our services to better meet your needs."
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="flex"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-500 text-white font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                    <p className="text-secondary-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src={verticalmanbw} 
                alt="Courier Service" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </Section>
    </motion.div>
  );
};

export default CourierServices;