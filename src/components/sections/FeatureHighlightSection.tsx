import React from 'react';
import Image from 'next/image';
import Tag from '../ui/Tag';
import Heading from '../ui/Heading';
import VideoPlayerTrigger from '../shared/VideoPlayerTrigger'; // Assuming this component is created

export interface FeatureHighlightSectionProps {
  backgroundImage: string;
  videoThumbnail: string;
  videoUrl: string;
  tagline?: string;
  mainHeading?: string;
  decorativeText?: string;
}

const FeatureHighlightSection: React.FC<FeatureHighlightSectionProps> = ({
  backgroundImage,
  videoThumbnail,
  videoUrl,
  tagline = "LET'S TAKE A TOUR",
  mainHeading = "Search Property Smarter, Quicker & Anywhere",
  decorativeText = "Property For All"
}) => {
  return (
    <section className="relative py-16 md:py-24 bg-gray-100 min-h-[70vh] flex items-center">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Modern interior background"
        layout="fill"
        objectFit="cover"
        className="opacity-80" // Adjust opacity as needed
      />
      <div className="absolute inset-0 bg-black/10"></div> {/* Optional overlay */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Part 1: Information Card with Video Link (Left/Center) */}
          <div className="md:col-span-7 lg:col-span-6">
            <div className="bg-white p-6 md:p-10 rounded-lg shadow-xl max-w-xl">
              {tagline && <Tag text={tagline} color="green" hasDot className="mb-3"/>}
              {mainHeading && <Heading level={2} text={mainHeading} className="mb-6 text-gray-800" />}
              <VideoPlayerTrigger
                thumbnailSrc={videoThumbnail}
                videoUrl={videoUrl}
                playButtonText="Play Video"
              />
            </div>
          </div>

          {/* Part 2: Decorative Text Overlay (Right/Background) */}
          {decorativeText && (
            <div className="hidden md:block md:col-span-5 lg:col-span-6 relative h-full">
              <div className="absolute inset-0 flex items-center justify-center md:justify-end pointer-events-none">
                <h2
                  className="text-6xl lg:text-8xl font-cursive-stylized text-white opacity-20 transform -rotate-6 select-none"
                  // Style this carefully for desired effect
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
                >
                  {decorativeText}
                </h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default FeatureHighlightSection;