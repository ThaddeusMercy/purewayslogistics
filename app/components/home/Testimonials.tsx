"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Operations Director",
    company: "Global Retail Inc.",
    quote: "Pureway has revolutionized our logistics operations while simultaneously strengthening our cybersecurity posture. The integrated approach has reduced our vendor management overhead and improved our overall efficiency.",
    rating: 5,
    image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO",
    company: "TechSolutions Co.",
    quote: "As a technology company, we needed a partner who understood both the physical and digital aspects of our business. Pureway delivers on both fronts with exceptional service and expertise.",
    rating: 5,
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Jennifer Williams",
    position: "Supply Chain Manager",
    company: "Healthcare Distributors",
    quote: "In the healthcare industry, security and reliability are non-negotiable. Pureway has helped us maintain compliance while optimizing our distribution network, resulting in cost savings and improved patient care.",
    rating: 5,
    image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container-custom">
        <SectionTitle 
          title="What Our Clients Say" 
          subtitle="Don't just take our word for it. Here's what our clients have to say about their experience with Pureway."
          centered
        />
        
        <div className="m relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 rounded-xl shadow-subtle p-6 md:p-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <Image 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h4 className="font-semibold text-lg text-white">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-400 text-sm">{testimonials[activeIndex].position}</p>
                  <p className="text-accent-500 font-medium text-sm">{testimonials[activeIndex].company}</p>
                </div>
              </div>
              
              <div className="md:w-2/3 flex flex-col justify-center">
                <div className="mb-6">
                  <svg className="h-10 w-10 text-primary-200 mb-2" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-300 text-lg italic">
                    {testimonials[activeIndex].quote}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === activeIndex ? 'w-8 bg-primary-500' : 'w-2 bg-gray-600'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 rounded-full border border-gray-600 hover:bg-gray-800 transition-colors text-white"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 rounded-full border border-gray-600 hover:bg-gray-800 transition-colors text-white"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;