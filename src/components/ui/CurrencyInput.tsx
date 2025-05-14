import React from 'react';
import TextInput from './TextInput'; // Reusing TextInput

interface CurrencyInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  label: string;
  currency: string; // e.g., "AED"
  value: string | number;
  onValueChange: (value: string) => void; // Handle value as string for easier input management
  wrapperClassName?: string;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  label,
  currency,
  value,
  onValueChange,
  wrapperClassName = '',
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value);
  };

  return (
    <TextInput
      label={label}
      prefixElement={<span className="text-gray-500">{currency}</span>}
      value={value}
      onChange={handleChange}
      type="text" // Use text to allow flexible input, parse to number externally
      inputMode="decimal" // Hint for mobile keyboards
      wrapperClassName={wrapperClassName}
      {...props}
    />
  );
};
export default CurrencyInput;