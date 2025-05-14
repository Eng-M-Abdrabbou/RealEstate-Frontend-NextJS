import React from 'react';
import GreenDotIcon from '../icons/GreenDotIcon'; // Assuming you created this

interface TagProps {
  text: string;
  color?: 'green' | 'gray' | 'blue'; // Add more colors as needed
  hasDot?: boolean;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ text, color = 'green', hasDot = false, className = '' }) => {
  // Basic styling, enhance with Tailwind or CSS
  const baseStyle = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
  let colorStyle = "";
  switch (color) {
    case 'green':
      colorStyle = "bg-green-100 text-green-800";
      break;
    case 'gray':
      colorStyle = "bg-gray-100 text-gray-800";
      break;
    case 'blue':
      colorStyle = "bg-blue-100 text-blue-800";
      break;
    default:
      colorStyle = "bg-green-100 text-green-800";
  }

  return (
    <span className={`${baseStyle} ${colorStyle} ${className}`}>
      {hasDot && <GreenDotIcon className="w-2 h-2 mr-1.5" />}
      {text}
    </span>
  );
};
export default Tag;