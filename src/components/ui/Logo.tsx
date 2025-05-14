import React from 'react';
import Image from 'next/image'; // If you have a logo image

interface LogoProps {
  src?: string; // Optional: if you use an image
  text?: string; // Optional: if it's text-based
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ src, text = "PURE HOME REAL ESTATE", className = '' }) => {
  if (src) {
    return (
      <Image src={src} alt="Company Logo" width={150} height={40} className={`object-contain ${className}`} />
    );
  }
  return (
    <div className={`text-xl font-bold text-gray-800 ${className}`}>
      {text}
    </div>
  );
};
export default Logo;