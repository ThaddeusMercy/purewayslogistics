"use client";

import React, { useEffect } from 'react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import { motion } from 'framer-motion';
import Image from 'next/image';

import brandedDeliveryMan from '@/public/images/brandeddeliveryman.png';
import brandedsora from '@/public/images/landscape4.png';
import landscape1 from '@/public/images/landscape1.png';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - Pureways Logistics';
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and respect — in every parcel, every commitment, every time."
    },
    {
      title: "Safety",
      description: "We prioritise the safety and well-being of our drivers and customers above all else."
    },
    {
      title: "Community",
      description: "Our strength comes from the diverse local teams that power our deliveries and represent the neighbourhoods we serve."
    },
    {
      title: "Customers Commitment",
      description: "We go the extra kilometre to ensure satisfaction — not just delivering parcels, but delivering peace of mind."
    },
    {
      title: "Teamwork",
      description: "Every delivery is a team effort, and we thrive by supporting and uplifting each other."
    }
  ];



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero */}
      <section 
        className="pt-40 pb-40 md:pt-48 md:pb-48 relative overflow-hidden flex items-center justify-center min-h-[70vh]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/landscape6.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="w-full flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold  mb-4 text-white drop-shadow-lg"
            style={{textShadow: '0 2px 16px rgba(0,0,0,0.45)'}}
          > Beyond Logistics <br /> Powered by People, Driven by Purpose
         
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl mb-8 text-white max-w-2xl mx-auto drop-shadow"
            style={{textShadow: '0 2px 12px rgba(0,0,0,0.35)'}}
          >
              Delivering trust, speed, and reliability to every doorstep.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              title="Who We Are"
              subtitle="Your trusted partner in logistics."
              subtitleColor="text-orange-500"
            />

            <div className="space-y-4 text-secondary-700">
              At Pureways Logistics, we don't just deliver parcels — we deliver trust, speed, and reliability to every doorstep. As a specialist courier firm operating within the logistics network of one of the world's largest online retailers, our mission is clear: ensure that every delivery is timely, safe, and handled with care. <br /> <br />
              Rooted in our local communities, Pureways Logistics is proud to be more than a logistics company. We are a people-led business — one that values diversity, inclusivity, and the strength of local engagement. By recruiting local drivers and investing in local talent, we've built an agile team that reflects the neighbourhoods we serve and drives our commitment to excellence. <br /> <br /> 
              Our workforce is at the heart of our success. From dedicated drivers to the support staff behind the scenes, each team member plays a crucial role in upholding our Principles. We are unwavering in our commitment to creating a safe, supportive, and fulfilling workspace for every employee — because when our team flourishes, so do our customers. <br /> <br /> 
              At Pureways, customers' satisfaction isn't an objective — it's a commitment. Every engagement, every delivery, and every kilometre we cover is designed to create a smooth and positive experience for our customers. <br /> <br />    
              With Pureways Logistics, you're not just choosing a courier firm. You're choosing a committed, community-focused, and principles-driven partner in logistics. Together let's shape the future of delivery.

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
                src={brandedDeliveryMan}
                alt="Our Story"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section bgColor="bg-secondary-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="h-48 bg-primary-600 flex items-center justify-center">
              <div className="h-20 w-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-white text-3xl">🎯</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary-600">Our Mission</h3>
              <p className="text-secondary-700 leading-relaxed">
              To transform final-mile delivery by combining innovation, collaboration, and trust. We aim to provide quick, reliable, and client-focused courier firm while empowering local communities through employment opportunities and inclusivity.

              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="h-48 bg-accent-500 flex items-center justify-center">
              <div className="h-20 w-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-white text-3xl">👁️</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent-500">Our Vision</h3>
              <p className="text-secondary-700 leading-relaxed">
              To be the most respected and community-embedded courier firm in the sector — known for our reliability, our people, and our unwavering commitment to achieving excellence every day.

              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Our Workforce */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="aspect-square rounded-xl overflow-hidden">
              <Image
                src={brandedsora}
                alt="Our Workforce"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <SectionTitle
              title="Our Workforce"
              subtitle="At the heart of our success."
            />

            <div className="space-y-4 text-secondary-700">
              <p>
                Our workforce is at the heart of our success. From dedicated drivers to the support staff behind the scenes, each team member plays a crucial role in upholding our principles. We are unwavering in our commitment to creating a safe, supportive, and fulfilling workspace for every employee — because when our team flourishes, so do our customers.
              </p>
              <p>
                At Pureways, customer satisfaction isn't an objective — it's a commitment. Every engagement, every delivery, and every kilometre we cover is designed to create a smooth and positive experience for our customers.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Our Principles */}
      <Section bgColor="bg-secondary-50">
        <SectionTitle
          title="Our Core Principles"
          subtitle="The principles that guide all that we do at Pureways."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary-500 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-600">{value.title}</h3>
              <p className="text-secondary-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Diversity & Inclusivity */}
      <Section bgColor="bg-white">
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="p-10 lg:p-16 flex flex-col justify-center"
            >
              <h3 className="text-3xl font-bold mb-5 text-primary-700">Diversity | Equity | Inclusivity</h3>
              <p className="text-secondary-700 text-lg">
              At Pureways Logistics, our team reflects the communities we serve. We celebrate diversity and champion inclusivity by recruiting from all walks of life and offering equal opportunities for growth, development, and success.

              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center p-8"
            >
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={landscape1}
                  alt="Diverse team members"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Leadership Team */}
      
    </motion.div>
  );
};

export default About;