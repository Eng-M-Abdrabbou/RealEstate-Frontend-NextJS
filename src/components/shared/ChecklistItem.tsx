import React from 'react';

// Checkmark Icon
const CheckIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
);

interface ChecklistItemProps {
  text: string;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ text }) => {
  return (
    <li className="flex items-start py-1">
      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3">
        <CheckIcon className="w-4 h-4 text-green-600" />
      </span>
      <span className="text-gray-700">{text}</span>
    </li>
  );
};
export default ChecklistItem;