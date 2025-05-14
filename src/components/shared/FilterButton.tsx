// components/shared/FilterButton.tsx
import React from 'react';

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, isActive, onClick, className = '' }) => {
  // Base styles for the button
  const baseStyle = "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 focus:outline-none";

  // Styles for active and inactive states
  const activeStyle = "bg-green-600 text-white shadow-md";
  const inactiveStyle = "bg-transparent text-gray-700 hover:bg-green-100 hover:text-green-700";

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${isActive ? activeStyle : inactiveStyle} ${className}`}
      aria-pressed={isActive} // For accessibility
    >
      {label}
    </button>
  );
};

export default FilterButton;