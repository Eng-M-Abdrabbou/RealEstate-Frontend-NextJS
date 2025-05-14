import React from 'react';

interface SelectDropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string | number; label: string }[];
  wrapperClassName?: string;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({ label, id, options, wrapperClassName = '', className = '', ...props }) => {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return (
    <div className={wrapperClassName}>
      {label && <label htmlFor={selectId} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <select
        id={selectId}
        className={`block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md ${className}`}
        {...props}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};
export default SelectDropdown;