"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  actionText: string;
  delay: number;
  link: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description, actionText, delay, link }) => {
  return (
    <motion.div
      className="feature-item border-l-2 border-gray-600 pl-4 sm:pl-6 py-5 sm:py-7 mb-2"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">{title}</h3>
      <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 pr-2 sm:pr-4">{description}</p>
      <a href={link} className="flex items-center hover:text-accent-400 transition-colors">
        <div className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent-500 text-white mr-2">
          <Check size={12} />
        </div>
        <span className="text-sm sm:text-base text-accent-500">{actionText}</span>
      </a>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      title: "100% Customer-Focused",
      description: "We prioritise the needs and expectations of our customer in everything we do.",
      actionText: "Learn more about our approach",
      link: "/contact"
    },
    {
      title: "Training and experience",
      description: "Our Delivery Associates receive thorough training and ongoing support to ensure they consistently deliver at the highest standard.",
      actionText: "Meet our team",
      link: "/careers"
    },
    {
      title: "Safe, Efficient, and Reliable Service",
      description: "We maintain the highest standards of safety and reliability in all our operations.",
      actionText: "See our safety measures",
      link: "/contact"
    },
    {
      title: "Community Engagement and Local Hiring",
      description: "We actively engage with and hire from the communities we serve",
      actionText: "Join our team",
      link: "/join-us"
    },
  ];

  return (
    <>
      {/* Features Section */}
      <section className="bg-black">
        <div className="container-custom px-4 sm:px-6 py-12 md:py-24">
        <div className="text-accent-500 text-center text-xl md:text-4xl font-medium mb-6 md:mb-20 tracking-tighter">
          Why Choose Us?
        </div>
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-10">
            <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
              <div className="relative h-56 sm:h-72 md:h-80 lg:h-full rounded-lg overflow-hidden shadow-md">
                <video
                  className="w-full h-full object-cover"
                  src="/video/whychoose.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>

            <div className="w-full lg:w-7/12">
              <div className="space-y-3 sm:space-y-4">
                {features.map((feature, index) => (
                  <Feature
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    actionText={feature.actionText}
                    delay={index * 0.1}
                    link={feature.link}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
