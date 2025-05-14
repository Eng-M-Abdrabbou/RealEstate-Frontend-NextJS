import React from 'react';
import Image from 'next/image'; // If using Next Image for logos
import Tag from '../ui/Tag';
import Heading from '../ui/Heading';
import Paragraph from '../ui/Paragraph';
import LogoItem, { LogoItemProps as PartnerLogo } from '../shared/LogoItem'; // Re-exporting type

export interface PartnersSectionProps {
  partnerLogos: PartnerLogo[]; // Using the props from LogoItem
  tagline?: string;
  mainHeading?: string;
  description?: string;
}

const PartnersSection: React.FC<PartnersSectionProps> = ({
  partnerLogos,
  tagline = "OUR PARTNERS AND TOP DEVELOPERS",
  mainHeading = "We are always open to new partnerships",
  description = "We partner with top developers and companies to provide you with the best possible experience."
}) => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Part 1: Text Content Area */}
          <div className="text-center md:text-left">
            {tagline && <Tag text={tagline} color="green" hasDot className="mb-3"/>}
            {mainHeading && <Heading level={2} text={mainHeading} className="mb-4 text-gray-800" />}
            {description && <Paragraph text={description} className="text-gray-600 mb-6 md:mb-0" />}
          </div>

          {/* Part 2: Partner Logos Area */}
          {partnerLogos && partnerLogos.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {partnerLogos.map((logo, index) => (
                <LogoItem key={index} src={logo.src} alt={logo.alt} name={logo.name} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default PartnersSection;