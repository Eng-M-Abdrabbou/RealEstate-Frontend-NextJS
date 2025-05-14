import React from 'react';

interface RangeSliderProps {
  label: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  className?: string;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  unit = '',
  className = ''
}) => {
  return (
    <div className={`my-4 ${className}`}>
      <div className="flex justify-between items-center mb-1">
        <label className="text-sm font-medium text-white">{label}</label>
        <span className="text-sm text-green-400 font-semibold">
          {value}{unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-green-500"
        // Note: Styling range inputs consistently across browsers can be tricky.
        // You might need more specific CSS or Tailwind plugins.
      />
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>{min}{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </div>
  );
};
export default RangeSlider;