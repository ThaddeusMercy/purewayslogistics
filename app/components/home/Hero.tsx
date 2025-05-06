"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselData = [
    {
      image: '/images/landscape1.png',
      title: "We Offer Trust, Speed and Reliability To Every Doorstep"
    },
    {
      image: '/images/landscapepureway.png',
      title: "Your Parcel. Our Responsibility. Delivered On Time, Every Time"
    },
    {
      image: '/images/newimg2.png',
      title: "Connecting Businesses to their Customers"
    }
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselData.length]);

  // Smooth fade animation variants
  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 1.05,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        opacity: { duration: 1.2, ease: "easeInOut" },
        scale: { duration: 1.5, ease: "easeOut" }
      }
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: {
        opacity: { duration: 1, ease: "easeInOut" },
        scale: { duration: 1, ease: "easeIn" }
      }
    }
  };

  const textVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeIn"
      }
    }
  };

  return (
    <section className="relative">
      <div className="h-[85vh] sm:h-screen relative overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          src="/video/bg2.mp4"
        />

        <div className="absolute inset-0 bg-black/70 z-10"></div>

        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 text-center -mt-16 sm:-mt-24 md:-mt-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold  text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We Make Every Delivery Count.
              </motion.h1>
              <p className="text-white/80 text-sm md:text-lg lg:text-lg w-full sm:w-4/5 md:w-2/4 mx-auto py-2 sm:py-4">
               We deliver trust, speed, and reliability. As a Delivery Service Partner (DSP), we specialise in providing safe, efficient, and customer-focused last-mile delivery solutions.

               
              </p>

              <motion.div
                className="mt-4 sm:mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <button className="bg-[#FF6600] text-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-md font-medium cursor-pointer transition hover:bg-[#D35400]">
               Join Us
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mx-auto relative z-30 -mt-16 sm:-mt-24 md:-mt-40 lg:-mt-64">
        <div className="w-11/12 mx-auto relative overflow-hidden">
          {/* Carousel section */}
          <div className="w-full h-[250px] sm:h-[400px] md:h-[600px] lg:h-[800px] relative">
            <AnimatePresence mode="sync">
              <motion.div
                key={currentIndex}
                className="absolute inset-0 w-full h-full"
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <motion.img
                  src={carouselData[currentIndex].image}
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                  alt={`Slide ${currentIndex + 1}`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-slate-800/60 rounded-lg"></div>

                <motion.div
                  className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 md:bottom-16 md:left-16 max-w-[180px] sm:max-w-xs md:max-w-[680px] text-left"
                  variants={textVariants}
                >
                  <h3 className="text-lg sm:text-xl md:text-5xl font-bold text-white ">
                    {carouselData[currentIndex].title}
                  </h3>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;