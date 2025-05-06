"use client";

import React from 'react';

interface SectionBreakProps {
  className?: string;
}

const SectionBreak: React.FC<SectionBreakProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-16 ${className}`}>
      <div className="h-full bg-gradient-to-b from-black via-gray-900 to-black"></div>
    </div>
  );
};

export default SectionBreak; 