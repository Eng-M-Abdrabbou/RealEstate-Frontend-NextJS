import React from 'react';

interface ParagraphProps {
  text: string | React.ReactNode;
  className?: string;
  variant?: 'default' | 'small' | 'large';
}

const Paragraph: React.FC<ParagraphProps> = ({ text, className = '', variant = 'default' }) => {
  let sizeClass = "text-base text-gray-600"; // Default
  if (variant === 'small') sizeClass = "text-sm text-gray-500";
  if (variant === 'large') sizeClass = "text-lg text-gray-700";

  return (
    <p className={`${sizeClass} ${className}`}>
      {text}
    </p>
  );
};
export default Paragraph;