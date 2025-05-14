import React from 'react';

interface FeatureItemProps {
  icon: React.ReactNode;
  value: string | number;
  label?: string; // Optional label if value itself is not descriptive enough
  className?: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, value, label, className = '' }) => {
  return (
    <div className={`flex items-center text-sm text-gray-600 ${className}`}>
      <span className="mr-1.5 text-gray-500">{icon}</span>
      <span>{value}</span>
      {label && <span className="ml-1 hidden sm:inline">{label}</span>}
    </div>
  );
};
export default FeatureItem;