"use client";

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  isWhite?: boolean;
}

const Logo: React.FC<LogoProps> = () => {
  return (
    <div className="flex items-center">
      <Image 
        src="/logo.png" 
        alt="Pureway Logistics" 
        width="180" 
        height="140"
        className="object-contain"
      />
    </div>
  );
};

export default Logo;