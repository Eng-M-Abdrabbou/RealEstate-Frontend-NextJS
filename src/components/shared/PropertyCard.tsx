import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/button';
import Tag from '../ui/Tag';
import FilterButton from './FilterButton';

export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  status: 'sale' | 'rent' | 'buy';
  bedrooms: number;
  bathrooms: number;
  area: number; // in square feet/meters
  imageSrc: string;
  featured?: boolean;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { id, title, price, location, status, bedrooms, bathrooms, area, imageSrc, featured } = property;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Property Image */}
      <div className="relative h-48">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
        {featured && (
          <div className="absolute top-4 left-4">
            <Tag text="Featured" color="green" hasDot />
          </div>
        )}
      </div>

      {/* Property Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-green-600 text-xl font-bold mb-2">${price.toLocaleString()}</p>
        <p className="text-gray-600 mb-4">{location}</p>

        {/* Property Features */}
        <div className="flex justify-between text-gray-500 mb-4">
          <span>{bedrooms} Beds</span>
          <span>{bathrooms} Baths</span>
          <span>{area} sqft</span>
        </div>

        {/* Action Button */}
        <Link href={`/properties/${id}`}>
          <Button variant="secondary" className="w-full">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;