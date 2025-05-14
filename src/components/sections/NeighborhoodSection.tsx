import React from 'react';
import Link from 'next/link';
import Tag from '../ui/Tag';
import Heading from '../ui/Heading';
import Button from '../ui/button';
import NeighborhoodCard, { NeighborhoodCardProps } from '../shared/NeighborhoodCard';

export interface NeighborhoodSectionProps {
  neighborhoods: Omit<NeighborhoodCardProps, 'link'>[]; // link will be auto-generated or from data
  tagline?: string;
  mainHeading?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
}

const NeighborhoodSection: React.FC<NeighborhoodSectionProps> = ({
  neighborhoods,
  tagline = "TOP AREAS",
  mainHeading = "Find Your Neighborhood",
  ctaButtonText = "Explore More",
  ctaButtonLink = "/neighborhoods" // Example link
}) => {
  return (
    <section className="py-12 md:py-20 bg-teal-50"> {/* Light teal/mint green */}
      <div className="container mx-auto px-4">
        {/* Part 1: Section Header and CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            {tagline && <Tag text={tagline} color="green" hasDot className="mb-3"/>}
            {mainHeading && <Heading level={2} text={mainHeading} className="text-gray-800 font-cursive-stylized"/>}
          </div>
          {ctaButtonText && ctaButtonLink && (
            <Link href={ctaButtonLink}>
              <Button variant="primary" size="lg">
                {ctaButtonText}
              </Button>
            </Link>
          )}
        </div>

        {/* Part 2: Neighborhood Cards Grid */}
        {neighborhoods && neighborhoods.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {neighborhoods.map((hood, index) => (
              <NeighborhoodCard
                key={index}
                name={hood.name}
                imageSrc={hood.imageSrc}
                propertyCount={hood.propertyCount}
                link={`/neighborhoods/${hood.name.toLowerCase().replace(/\s+/g, '-')}`} // Example link generation
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default NeighborhoodSection;