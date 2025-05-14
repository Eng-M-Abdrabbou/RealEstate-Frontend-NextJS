import React from 'react';

interface StarRatingProps {
  ratingOutOf5: number;
  size?: number; // Size of each star in pixels
}

const StarIcon = ({ filled, size }: { filled: boolean; size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1.5"
    className={`w-${size/4} h-${size/4} ${filled ? 'text-yellow-400' : 'text-gray-300'}`} // Tailwind needs w-6 h-6 etc.
    style={{ width: `${size}px`, height: `${size}px` }} // Inline style for dynamic size
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.82.61l-4.725-2.885a.563.563 0 00-.652 0l-4.725 2.885a.562.562 0 01-.82-.61l1.285-5.385a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    />
  </svg>
);

const StarRating: React.FC<StarRatingProps> = ({ ratingOutOf5, size = 20 }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <StarIcon key={index} filled={index < ratingOutOf5} size={size} />
      ))}
    </div>
  );
};
export default StarRating;