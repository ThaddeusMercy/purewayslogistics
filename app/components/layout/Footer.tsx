"use client";

import React from 'react';
import Link from 'next/link';
import { Linkedin, Mail, MapPin, Phone, Facebook } from 'lucide-react';
import Logo from '../ui/Logo';
import Image from 'next/image';
import busImg from '@/public/images/brandedbus.jpg';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative overflow-hidden">
      <div className="bg-white relative">
        <div className="container-custom py-8 sm:py-12 md:pb-20 flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 relative flex items-center justify-center">
            <Image
              src={busImg}
              alt="Pureway Logistics Transportation"
              className="w-full h-full max-w-[80%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-lg mx-auto lg:mx-0 rounded-lg object-cover aspect-[4/3]"
            />
          </div>

          <div className="w-full lg:w-1/2 text-white z-10 text-center lg:text-left lg:ml-auto px-4 sm:px-0 lg:px-8 mt-6 lg:mt-0 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 text-black tracking-tighter">
              Timely and Reliable Delivery Services
            </h2>
            <p className="text-[#9b9b9b] tracking-[-0.02em] mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 text-sm sm:text-base">
              At Pureways Logistics, we understand that every parcel represents a commitment - and we make it our mission to deliver on time, every time.
               <br /> <br />
              When you choose Pureways, you're choosing a partner you can rely on — because at Pureways Logistics, achieving excellence every kilometre is not just our slogan, It's our standard.
            </p>
            <Link
              href="/contact"
              className="bg-[#FF6B00] text-white px-4 sm:px-6 py-2 lg:w-fit sm:py-3 rounded-md font-medium cursor-pointer transition hover:bg-[#E05E00] text-sm sm:text-base"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white">
        <div className="pt-8 sm:pt-12 md:pt-16 pb-6 md:pb-8">
          <div className="px-4 sm:px-8 md:pl-8 md:pr-8 lg:pl-24 lg:pr-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 sm:gap-x-12 lg:gap-x-20 gap-y-8 mb-8 sm:mb-10 md:mb-12">
            <div className="space-y-4 md:space-y-6 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <Logo isWhite />
              </div>
              <p className="text-secondary-200 text-xs sm:text-sm max-w-xs mx-auto lg:mx-0">
                Your trusted partner for reliable courier and logistics solutions, helping businesses operate efficiently and grow with confidence.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 text-white">Quick Links</h4>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link href="/" className="text-secondary-200 hover:text-[#FF6B00] transition-colors text-xs sm:text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services/logistics" className="text-secondary-200 hover:text-[#FF6B00] transition-colors text-xs sm:text-sm">
                    Logistics Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-secondary-200 hover:text-[#FF6B00] transition-colors text-xs sm:text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-secondary-200 hover:text-[#FF6B00] transition-colors text-xs sm:text-sm">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/join-us" className="text-secondary-200 hover:text-[#FF6B00] transition-colors text-xs sm:text-sm">
                    Jobs
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center lg:text-left">
              <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">Contact Us</h4>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start justify-center lg:justify-start">
                  <MapPin size={16} className="mr-2 md:mr-3 text-[#FF6B00] flex-shrink-0 mt-1" />
                  <span className="text-secondary-200 text-xs sm:text-sm md:text-base">
                    20 Wenlock Road,
                    London
                    N1 7GU,
                    England
                  </span>
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <Mail size={16} className="mr-2 md:mr-3 text-[#FF6B00] flex-shrink-0" />
                  <a href="mailto:office@purewayslogistics.co.uk" className="text-secondary-200 hover:text-[#FF6B00] transition-colors text-xs sm:text-sm md:text-base break-all">
                  office@purewayslogistics.co.uk
                  </a>
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <Phone size={16} className="mr-2 md:mr-3 text-[#FF6B00] flex-shrink-0" />
                  <a href="tel:+447544415535" className="text-secondary-200 hover:text-[#FF6B00] transition-colors text-xs sm:text-sm md:text-base">
                    +44 7544 415 535
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">Social Links</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/pureways-logistics-ltd/?viewAsMember=true" className="text-white hover:text-[#FF6B00] transition-colors">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="text-white hover:text-[#FF6B00] transition-colors">
                  <Facebook size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-8 md:pl-8 md:pr-8 lg:pl-24 lg:pr-4 pt-4 sm:pt-6 md:pt-8 border-t border-secondary-700 flex flex-col md:flex-row md:justify-between md:items-center">
            <p className="text-secondary-400 text-xs text-center md:text-left">
              &copy; {currentYear} Pureways Logistics. All rights reserved.
            </p>
            <div className="mt-3 sm:mt-4 md:mt-0 flex justify-center md:justify-end space-x-4 md:space-x-6">
              <Link href="/terms" className="text-secondary-400 hover:text-[#FF6B00] text-xs transition-colors">
                Terms and Conditions
              </Link>
              <Link href="/privacy-policy" className="text-secondary-400 hover:text-[#FF6B00] text-xs transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;