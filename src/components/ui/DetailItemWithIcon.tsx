import React from 'react';

interface DetailItemWithIconProps {
  icon: React.ReactNode;
  text: string | React.ReactNode;
  className?: string;
}

const DetailItemWithIcon: React.FC<DetailItemWithIconProps> = ({ icon, text, className = '' }) => {
  return (
    <div className={`flex items-center text-sm text-gray-600 ${className}`}>
      <span className="mr-2 text-gray-500">{icon}</span>
      <span>{text}</span>
    </div>
  );
};
export default DetailItemWithIcon;