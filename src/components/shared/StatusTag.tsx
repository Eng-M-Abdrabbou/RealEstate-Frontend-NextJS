import React from 'react';

interface StatusTagProps {
  status: 'For Sale' | 'For Rent' | string; // Allow other statuses
  className?: string;
}

const StatusTag: React.FC<StatusTagProps> = ({ status, className = '' }) => {
  let bgColor = 'bg-green-500'; // Default for "For Sale"
  if (status.toLowerCase().includes('rent')) {
    bgColor = 'bg-blue-500'; // Example for "For Rent"
  }

  return (
    <span
      className={`absolute top-3 left-3 ${bgColor} text-white text-xs font-semibold px-2.5 py-1 rounded ${className}`}
    >
      {status}
    </span>
  );
};
export default StatusTag;