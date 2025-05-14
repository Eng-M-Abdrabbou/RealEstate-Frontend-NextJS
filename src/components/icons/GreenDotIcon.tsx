import React from 'react';

const GreenDotIcon = ({ className = "w-2 h-2" }: { className?: string }) => (
  <svg viewBox="0 0 8 8" fill="currentColor" className={`${className} text-green-500`}>
    <circle cx="4" cy="4" r="4" />
  </svg>
);
export default GreenDotIcon;