import React from 'react';

interface HighlightTagProps {
  text: string;
  color?: 'blue' | 'yellow' | 'red'; // Example colors
  className?: string;
  icon?: React.ReactNode;
}

const HighlightTag: React.FC<HighlightTagProps> = ({ text, color = 'blue', icon, className = '' }) => {
  let style = "";
  switch (color) {
    case 'blue': style = "bg-blue-100 text-blue-700"; break;
    case 'yellow': style = "bg-yellow-100 text-yellow-700"; break;
    case 'red': style = "bg-red-100 text-red-700"; break;
    default: style = "bg-gray-100 text-gray-700";
  }

  return (
    <span
      className={`absolute top-3 right-3 ${style} text-xs font-semibold px-2.5 py-1 rounded flex items-center ${className}`}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {text}
    </span>
  );
};
export default HighlightTag;