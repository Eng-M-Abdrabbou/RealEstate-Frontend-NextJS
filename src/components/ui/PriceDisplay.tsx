import React from 'react';

interface PriceDisplayProps {
  price: string | number;
  currency?: string;
  className?: string;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ price, currency = "AED", className = '' }) => {
  return (
    <div className={`text-2xl font-bold text-gray-900 ${className}`}>
      {currency} {typeof price === 'number' ? price.toLocaleString() : price}
    </div>
  );
};
export default PriceDisplay;