"use client";

import React from 'react';

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="bg-black py-24 xl:py-36 text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-0 md:w-1/3">
            Solutions for Every<br />Logistics Challenge
          </h2>
          
          <div className="md:w-2/3 flex flex-col lg:flex-row gap-8">
            <div className="text-accent-500 text-2xl font-medium mb-8 md:mb-0 md:w-1/4">
              Big or small,<br />we handle it all
            </div>
            <div className="text-gray-300 md:w-3/4">
              <p className="text-base leading-relaxed mb-4">
                Our team develops customized solutions that address the unique logistics challenges of businesses across industries. Whether you're a small startup or a large enterprise, we have the expertise and resources to optimize your supply chain and deliver your goods safely and efficiently.
              </p>
              <p className="text-base leading-relaxed">
                With our comprehensive range of services, cutting-edge technology, and dedicated team of professionals, we can help you overcome any logistics challenge and achieve your business objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions; 