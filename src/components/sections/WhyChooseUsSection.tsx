import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Tag from '../ui/Tag';
import Heading from '../ui/Heading';
import Paragraph from '../ui/Paragraph';
import Button from '../ui/button';
import VideoPlayerTrigger from '../shared/VideoPlayerTrigger'; // Reusing
import ChecklistItem from '../shared/ChecklistItem';

export interface WhyChooseUsSectionProps {
  videoThumbnail: string;
  videoUrl: string;
  reasons: string[];
  tagline?: string;
  mainHeading?: string;
  description?: string;
  readMoreLink?: string;
  // For wavy line graphics: you might pass an SVG component or handle with CSS
  decorativeShape?: React.ReactNode;
}

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  videoThumbnail,
  videoUrl,
  reasons,
  tagline = "WHY CHOOSE OUR PROPERTIES",
  mainHeading = "We are experts in local and international property listings",
  description = "With years of experience and a deep understanding of the market, we provide unparalleled service and access to the best properties available. Our commitment is to your satisfaction.",
  readMoreLink = "/about-us",
  decorativeShape // Example: <DecorativeWavyLine />
}) => {
  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden"> {/* Overflow hidden if decorative shape goes outside */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Part 1: Left Column (Video/Image) */}
          <div className="relative">
            {/* Decorative Element: Wavy line graphics on the left edge */}
            {decorativeShape && (
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 z-0 hidden lg:block">
                {decorativeShape}
              </div>
            )}
            <VideoPlayerTrigger
              thumbnailSrc={videoThumbnail}
              videoUrl={videoUrl}
              playButtonText="" // No text on play button in this design, just icon
            />
          </div>

          {/* Part 2: Right Column (Text Content) */}
          <div>
            {tagline && <Tag text={tagline} color="green" hasDot className="mb-3"/>}
            {mainHeading && <Heading level={2} text={mainHeading} className="mb-4 text-gray-800" />}
            {description && <Paragraph text={description} className="text-gray-600 mb-6" />}

            {reasons && reasons.length > 0 && (
              <ul className="space-y-3 mb-8">
                {reasons.map((reason, index) => (
                  <ChecklistItem key={index} text={reason} />
                ))}
              </ul>
            )}

            {readMoreLink && (
              <Link href={readMoreLink}>
                <Button variant="secondary">
                  Read More
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUsSection;