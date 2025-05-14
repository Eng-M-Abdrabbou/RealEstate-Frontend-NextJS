import React from 'react';

export interface CircularStatProps {
  value: string; // e.g., "23,000+", "7B", "96%"
  label: string;
  // Potentially add props for progress bar effect if needed
}

const CircularStat: React.FC<CircularStatProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-green-500 flex items-center justify-center mb-3 relative">
        {/* Optional: Add a progress circle SVG here */}
        <span className="text-2xl md:text-3xl font-bold text-white">{value}</span>
      </div>
      <p className="text-sm md:text-base text-white max-w-[150px]">{label}</p>
    </div>
  );
};
export default CircularStat;