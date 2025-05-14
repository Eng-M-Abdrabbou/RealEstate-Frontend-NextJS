import React from 'react';
import Heading from '../ui/Heading';
import Paragraph from '../ui/Paragraph';
import CircularStat, { CircularStatProps } from '../shared/CircularStat';

export interface StatsSectionProps {
  stats: CircularStatProps[];
  mainHeading?: string;
  subHeading?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({
  stats,
  mainHeading = "Our Real Estate Figures by the Numbers",
  subHeading = "In 2024 things look like this percentage" // Or a more fitting subtitle
}) => {
  return (
    <section className="py-12 md:py-20 bg-dark-blue text-white relative overflow-hidden"> {/* bg-dark-blue */}
      {/* Subtle city skyline silhouette - could be an SVG or a ::after pseudo-element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 opacity-10 z-0">
        {/* Placeholder for skyline - use an actual SVG or image */}
        {/* <img src="/skyline-silhouette.svg" alt="" className="w-full h-full object-cover" /> */}
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        {mainHeading && <Heading level={2} text={mainHeading} className="mb-3 text-white" />}
        {subHeading && <Paragraph text={subHeading} className="mb-10 md:mb-16 text-gray-300 font-cursive-stylized-light" />} {/* Add specific font class */}

        {stats && stats.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-items-center">
            {stats.map((stat, index) => (
              <CircularStat key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default StatsSection;