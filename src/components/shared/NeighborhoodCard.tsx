import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface NeighborhoodCardProps {
  name: string;
  imageSrc: string;
  propertyCount: number;
  link: string;
}

const ArrowRightIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const NeighborhoodCard: React.FC<NeighborhoodCardProps> = ({ name, imageSrc, propertyCount, link }) => {
  return (
    <Link href={link} legacyBehavior>
      <a className="block relative rounded-lg overflow-hidden shadow-lg group aspect-[4/3] md:aspect-[3/4]"> {/* Adjust aspect ratio as needed */}
        <Image
          src={imageSrc}
          alt={`Image of ${name}`}
          layout="fill"
          objectFit="cover"
          className="transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full text-white">
          <p className="text-xs md:text-sm opacity-80">{propertyCount} Properties</p>
          <h3 className="text-lg md:text-xl font-semibold mt-1">{name}</h3>
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white text-green-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        </div>
      </a>
    </Link>
  );
};
export default NeighborhoodCard;