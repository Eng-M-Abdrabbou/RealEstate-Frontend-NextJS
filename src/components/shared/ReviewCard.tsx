import React from 'react';
import StarRating from '../ui/StarRating';
import Paragraph from '../ui/Paragraph';
import Heading from '../ui/Heading';

export interface Review {
  rating: number;
  quote: string;
  authorName: string;
  authorTitle: string;
}

export interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg relative text-center max-w-md mx-auto">
      {/* Decorative Quotation Marks */}
      <div className="absolute top-4 right-4 text-7xl text-gray-200 opacity-50 hidden md:block">
        “
      </div>

      <div className="flex justify-center mb-4">
        <StarRating ratingOutOf5={review.rating} />
      </div>
      <Paragraph text={review.quote} className="text-gray-700 italic mb-6 text-lg" />
      <Heading level={5} text={review.authorName} className="text-gray-900" />
      <Paragraph text={review.authorTitle} variant="small" className="text-gray-500" />
    </div>
  );
};
export default ReviewCard;