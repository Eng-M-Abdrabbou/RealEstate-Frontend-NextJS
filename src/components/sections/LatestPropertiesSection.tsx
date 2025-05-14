'use client';

import React, { useState } from 'react';
import Tag from '../ui/Tag';
import Heading from '../ui/Heading';
import Paragraph from '../ui/Paragraph';
import PropertyCard, { Property } from '../shared/PropertyCard'; // Re-exporting type
import FilterButton from '../shared/FilterButton';

export interface LatestPropertiesSectionProps {
  properties: Property[];
  tagline?: string;
  mainHeading?: string;
}

const LatestPropertiesSection: React.FC<LatestPropertiesSectionProps> = ({
  properties,
  tagline = "OUR PROPERTIES",
  mainHeading = "Latest Properties",
}) => {
  const [activeFilter, setActiveFilter] = useState<'sale' | 'buy' | 'rent'>('sale');
  // 'Buy' and 'Sale' might be the same category depending on your data.
  // For this example, assuming 'Sale' covers 'Buy'.

  const handleFilterClick = (filter: 'sale' | 'buy' | 'rent') => {
    setActiveFilter(filter);
    // Here you would typically filter the 'properties' array based on 'activeFilter'
    // or fetch new data. For this example, we'll just set the state.
  };

  // Filter properties based on their status
  const filteredProperties = properties.filter(p => {
    if (activeFilter === 'sale' || activeFilter === 'buy') return p.status === 'sale';
    if (activeFilter === 'rent') return p.status === 'rent';
    return true; // Default case
  });

  return (
    <section className="py-12 md:py-20 bg-teal-50"> {/* Light teal/mint green */}
      <div className="container mx-auto px-4">
        {/* Part 1: Section Header and Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            {tagline && <Tag text={tagline} color="green" hasDot className="mb-3"/>}
            {mainHeading && <Heading level={2} text={mainHeading} className="text-gray-800 font-cursive-stylized"/>}
          </div>
          {/* Filter Buttons Group */}
          <div className="flex space-x-2 p-1 bg-gray-200 rounded-lg">
            <FilterButton
              label="Sale"
              isActive={activeFilter === 'sale'}
              onClick={() => handleFilterClick('sale')}
            />
            <FilterButton
              label="Buy" // Or "For Sale" again if it's the same
              isActive={activeFilter === 'buy'}
              onClick={() => handleFilterClick('buy')}
            />
            <FilterButton
              label="Rent"
              isActive={activeFilter === 'rent'}
              onClick={() => handleFilterClick('rent')}
            />
          </div>
        </div>

        {/* Part 2: Property Cards Grid */}
        {filteredProperties && filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProperties.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
        ) : (
          <Paragraph text={`No properties found for "${activeFilter}".`} className="text-center text-gray-500 py-10"/>
        )}
      </div>
    </section>
  );
};
export default LatestPropertiesSection;