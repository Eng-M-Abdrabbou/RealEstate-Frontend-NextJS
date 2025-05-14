import React from 'react';
import Image from 'next/image';

export interface LogoItemProps {
  src: string;
  alt: string;
  name: string; // Used for alt if alt is not specific enough or for a tooltip
}

const LogoItem: React.FC<LogoItemProps> = ({ src, alt, name }) => {
  return (
    <div className="p-4 flex justify-center items-center">
      <Image
        src={src}
        alt={alt || name}
        width={120} // Adjust as needed
        height={60} // Adjust as needed
        className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
        title={name}
      />
    </div>
  );
};
export default LogoItem;