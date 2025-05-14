import React from 'react';
import Tag from '../ui/Tag';
import Heading from '../ui/Heading';
import ReviewCard, { Review } from '../shared/ReviewCard';

export interface TestimonialsSectionProps {
  reviews: Review[];
  categoryLabel?: string;
  mainHeading?: string;
  backgroundText?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  reviews,
  categoryLabel = "CUSTOMER REVIEWS",
  mainHeading = "What's Our Customer Say",
  backgroundText = "Testimonials"
}) => {
  return (
    <section className="py-12 md:py-20 bg-teal-50 testimonial-bg-pattern"> {/* Add bg-teal-50 or your mint green */}
      <div className="container mx-auto px-4 text-center relative">
        {backgroundText && (
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center -z-10">
            <span className="text-7xl md:text-9xl font-bold text-gray-200 opacity-30 select-none">
              {backgroundText}
            </span>
          </div>
        )}
        {categoryLabel && <Tag text={categoryLabel} color="green" className="mb-3"/>}
        {mainHeading && (
          <Heading
            level={2}
            text={mainHeading}
            className="mb-10 md:mb-16 text-gray-800 font-cursive-stylized" // Add a specific cursive font class
          />
        )}

        {/* For multiple reviews, you might use a slider/carousel library or a simple grid */}
        {reviews && reviews.length > 0 && (
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-xl mx-auto"> {/* Simplified to one card for example */}
            {/* If using a carousel, this part would be different */}
            {reviews.slice(0, 1).map((review, index) => ( // Showing only the first review
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        )}
        {/* Add navigation for carousel if implemented */}
      </div>
    </section>
  );
};
export default TestimonialsSection;