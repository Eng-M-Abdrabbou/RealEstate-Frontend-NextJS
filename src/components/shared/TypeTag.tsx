import React from 'react';

interface TypeTagProps {
  type: string;
  className?: string;
}

const TypeTag: React.FC<TypeTagProps> = ({ type, className = '' }) => {
  return (
    <span
      className={`inline-block bg-gray-200 text-gray-700 text-xs font-medium px-2 py-0.5 rounded-full ${className}`}
    >
      {type}
    </span>
  );
};
export default TypeTag;