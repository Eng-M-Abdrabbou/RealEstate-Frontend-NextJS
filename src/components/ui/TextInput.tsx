import React from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  wrapperClassName?: string;
  prefixElement?: React.ReactNode; // For things like "AED"
}

const TextInput: React.FC<TextInputProps> = ({ label, id, wrapperClassName = '', prefixElement, className = '', ...props }) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return (
    <div className={wrapperClassName}>
      {label && <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <div className="relative rounded-md shadow-sm">
        {prefixElement && (
          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
            <span className="text-gray-500 sm:text-sm">{prefixElement}</span>
          </div>
        )}
        <input
          id={inputId}
          className={`block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm ${prefixElement ? 'pl-10' : ''} ${className}`}
          {...props}
        />
      </div>
    </div>
  );
};
export default TextInput;