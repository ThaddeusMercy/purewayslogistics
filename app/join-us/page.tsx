"use client";

import React, {useEffect} from 'react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import {  Users, Clock, Shield, DollarSign, Home, PoundSterling } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';


import landscape1 from '@/public/images/carrrer.jpg';
import landscape4 from '@/public/images/landscape4.png';
import carrrer from '@/public/images/carrrer.jpg';
 
const Careers: React.FC = () => {

  useEffect(() => {
    document.title = 'Join Us - Pureways Logistics';
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <DollarSign size={24} />,
      title: "Competitive Pay",
      description: "Attractive compensation packages for all our drivers."
    },
    {
      icon: <Home size={24} />,
      title: "Local Routes",
      description: "Work close to home with routes in familiar neighbourhoods."
    },
    {
      icon: <Clock size={24} />,
      title: "Flexible Scheduling",
      description: "Shifts that accommodate different lifestyles and work-life balance."
    },
    {
      icon: <Users size={24} />,
      title: "Supportive Team Culture",
      description: "Join a diverse, inclusive team that has your back — on and off the road."
    },
    {
      icon: <Shield size={24} />,
      title: "Safety First",
      description: "Tools, training, and environment to help you stay safe and succeed."
    }
  ];

  const requirements = [
    "Motivated and reliable drivers with a passion for service",
    "Valid driver's licence (UK or EU issued)",
    "Community-minded individuals ready to represent Pureways with pride"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero */}
      <section className="pt-60 pb-40 md:pt-72 md:pb-56 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={landscape1}
            alt="Delivery Background"
            className="w-full h-[120vh] object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              We Are Recruiting Now!
            </h1>
            <p className="text-xl text-white/90 mb-4">
              At Pureways Logistics, we're growing — and we're looking for motivated, reliable individuals to join our team of Delivery Associates!
            </p>
          
            <a href="/application-form" className="bg-[#FF6B00] px-8 py-3 rounded-lg text-white font-bold hover:bg-[#e05e00] transition-colors">
              Apply Now
            </a>
          </motion.div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-40 right-0 w-64 h-64 bg-primary-200 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary-200 rounded-full filter blur-3xl opacity-20"></div>
      </section>

      {/* Self-Employment Section */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-secondary-900">Be Your Own Boss</h2>
            <p className="text-lg text-secondary-700">
              Our Delivery Associates are self-employed, giving you the freedom to manage your own schedule, enjoy greater flexibility, and take control of your earnings. As part of our trusted delivery network, you'll play a key role in ensuring parcels reach our customers safely and on time, while working independently with the full support of our experienced team.
            </p>
            <p className="text-lg text-secondary-700">
              If you're hardworking, customer-focused, and ready to hit the road, we want to hear from you. Join Pureways Logistics today and drive your future forward!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={landscape4}
                alt="Delivery Driver"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section bgColor="bg-secondary-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
            >
              <Clock size={24} className="text-accent-500" />
              <span className="text-lg font-medium text-gray-800">Flexible working hours</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
            >
              <PoundSterling size={24} className="text-accent-500" />
              <span className="text-lg font-medium text-gray-800">Opportunity to maximise earnings</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
            >
              <Users size={24} className="text-accent-500" />
              <span className="text-lg font-medium text-gray-800">Be your own boss</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
            >
              <Home size={24} className="text-accent-500" />
              <span className="text-lg font-medium text-gray-800">Work close to home</span>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a 
              href="/application-form" 
              className="inline-block bg-[#FF6B00] px-8 py-3 rounded-lg text-white font-bold hover:bg-[#e05e00] transition-colors"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </Section>

      {/* Why Work With Us */}
      <Section bgColor="bg-white">
        <SectionTitle
          title="Why Work With Us"
          subtitle="Join a team that delivers more than parcels — we deliver opportunity."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start p-6 bg-secondary-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
            >
              <div className="flex-shrink-0 mr-4">
                <div className="p-3 bg-primary-100 text-accent-500 rounded-full">
                  {benefit.icon}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-secondary-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Who We're Looking For */}
      <Section bgColor="bg-secondary-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              title="Who We're Looking For"
              subtitle="Take the wheel of your future with Pureways Logistics"
            />

            <div className="space-y-6 mt-8">
              <p className="text-secondary-700">
                As a trusted courier partner in the e-commerce space, we are constantly growing and looking for dedicated individuals to join our team of local heroes.
              </p>

              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                  >
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                    </div>
                    <p className="text-secondary-700">{req}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={carrrer}
                alt="Delivery Driver"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Our Principles */}
      <Section bgColor="bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="What Sets Us Apart"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">100% Customer-Focused</h3>
              <p className="text-secondary-700">
                We prioritise the needs and expectations of our customers in everything we do.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-secondary-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Training and Experience</h3>
              <p className="text-secondary-700">
                Our Delivery Associates receive thorough training and ongoing support to ensure they consistently deliver at the highest standard.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-secondary-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Safe, Efficient, and Reliable Service</h3>
              <p className="text-secondary-700">
                We maintain the highest standards of safety and reliability in all our operations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-secondary-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Community Engagement and Local Hiring</h3>
              <p className="text-secondary-700">
                We actively engage with and hire from the communities we serve.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Ready to Apply */}
      <Section bgColor="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle
            title="Ready to Apply?"
            subtitle="Whether you're looking for a full-time opportunity or part-time flexibility, Pureways Logistics has a place for you."
            centered
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <a 
              href="/application-form" 
              className="inline-block bg-[#FF6B00] px-8 py-3 rounded-lg text-white font-bold hover:bg-[#e05e00] transition-colors"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </Section>
    </motion.div>
  );
};

export default Careers;