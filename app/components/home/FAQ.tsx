"use client";

import React, { useState } from 'react';
import Image from 'next/image';
// import bgAbout from '@/public/images/logisticsservice.webp';

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'What shipping services does Pureways Logistics provide?',
            answer: 'We offer comprehensive shipping solutions including international freight forwarding, domestic shipping, express delivery, warehousing, and specialist cargo handling. Our services cover air, sea, and land transportation to meet all your logistics needs.',
        },
        {
            question: 'How can I track my shipment status?',
            answer: 'You can easily track your shipment 24/7 through our online tracking portal. Simply enter your tracking number on our website or use our mobile app. We provide real-time updates, estimated delivery times, and detailed shipment milestones.',
        },
        {
            question: 'What are your delivery timeframes and coverage areas?',
            answer: 'We offer flexible delivery options ranging from same-day delivery to standard shipping across global destinations. Our network covers major cities worldwide, with express services available in select locations. Contact us for specific route information.',
        },
        {
            question: 'How do you handle customs clearance for international shipments?',
            answer: 'Our customs clearance experts handle all documentation, duties, and regulations for international shipments. We ensure compliance with local customs requirements and provide guidance on necessary paperwork to prevent delays.',
        },
        {
            question: 'What insurance options are available for my shipments?',
            answer: 'We offer comprehensive Parcel insurance options to protect your shipments against loss or damage. Coverage can be customized based on shipment value and type. Basic coverage is included in our standard rates, with premium options available.',
        },
    ];

    return (
        <section className="bg-[#fafafa] py-40 mt-20 lg:h-[1000px] md:mt-40">
            <div className="w-full md:w-11/12 lg:w-10/12 mx-auto py-8 md:py-12 px-12 bg-white rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
                <div className="space-y-4 order-2 lg:order-1">
                    <div className="text-accent-500 text-xl md:text-4xl font-medium mb-6 relative z-20">
                        Frequently Asked Questions
                    </div>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-200 last:border-0"
                            onClick={() => toggleAccordion(index)}
                        >
                            <button
                                className="flex justify-between items-center w-full py-4 text-left"
                                aria-expanded={activeIndex === index}
                            >
                                <h3 className="text-base md:text-xl font-semibold text-black pr-4">
                                    {faq.question}
                                </h3>
                                <span className="ml-2 md:ml-6 flex-shrink-0">
                                    {activeIndex === index ? (
                                        <svg className="h-5 w-5 md:h-6 md:w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                        </svg>
                                    ) : (
                                        <svg className="h-5 w-5 md:h-6 md:w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                } pr-4 md:pr-12`}
                            >
                                <div className="py-2">
                                    <p className="text-sm md:text-base text-gray-600">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="relative h-[250px] md:h-[400px] lg:h-[500px] rounded-xl md:rounded-2xl overflow-hidden order-1 lg:order-2 mb-8 lg:mb-0">
                    <Image
                        src="/images/logisticsservice.webp"
                        alt="Pureways Logistics Air Freight"
                        className="w-full h-full object-cover"
                        width={800}
                        height={500}
                    />
                </div>
            </div>
        </div>
        </section>
    );
};

export default FAQ; 