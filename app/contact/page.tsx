"use client";

import React, { useEffect, useState } from 'react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {

  useEffect(() => {
    document.title = 'Contact Us - Pureways Logistics';
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    serviceInterest: 'logistics'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! We\'ll get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      serviceInterest: 'logistics'
    });
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Office Location",
      details: ["20 Wenlock Road, London N1 7GU, England"]
    },
    {
      icon: <Phone size={24} />,
      title: "Phone Numbers",
      details: ["+44 (0) 7770 590 955"]
    },
    {
      icon: <Mail size={24} />,
      title: "Email Addresses",
      details: ["info@pureway-logistics.co.uk"]
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: ["Monday-Sunday: 9:00 AM - 6:00 PM"]
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
      <section className="pt-56 pb-32 md:pt-72 md:pb-44 relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('images/newimg2.png')` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Contact Us
            </h1>
            <p className="text-xl text-white mb-8">
              Have questions about our courier services? Reach out to our team and we'll be happy to help.
            </p>
          </motion.div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-40 right-0 w-64 h-64 bg-primary-200 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary-200 rounded-full filter blur-3xl opacity-20"></div>
      </section>
      
      {/* Contact Form and Information */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle
              title="Get in Touch"
              subtitle="Fill out the form below, and we'll get back to you as soon as possible."
            />
            
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Your Company"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Please provide details about your courier service needs..."
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="btn-primary"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SectionTitle
              title="Contact Information"
              subtitle="Here's how you can reach us directly."
            />
            
            <div className="mt-8 space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start p-6 bg-secondary-50 rounded-lg hover:shadow-subtle transition-all duration-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-3 bg-primary-100 text-accent-500 rounded-full">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-secondary-700">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* <div className="mt-10">
              <div className="bg-secondary-900 rounded-xl overflow-hidden h-80">
                <div className="w-full h-full" id="map">
                  
                  <div className="w-full h-full bg-secondary-800 flex items-center justify-center">
                    <p className="text-white text-lg">Interactive Map Would Be Here</p>
                  </div>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </Section>
      
    </motion.div>
  );
};

export default Contact;