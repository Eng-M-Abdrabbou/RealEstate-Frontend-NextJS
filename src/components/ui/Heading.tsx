import React from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div'; // To allow semantic flexibility
}

const Heading: React.FC<HeadingProps> = ({ level, text, className = '', as }) => {
  const TagName = as || `h${level}`;

  const levelStyles = {
    1: "text-4xl md:text-5xl font-bold",
    2: "text-3xl md:text-4xl font-bold",
    3: "text-2xl md:text-3xl font-bold",
    4: "text-xl md:text-2xl font-bold",
    5: "text-lg md:text-xl font-semibold",
    6: "text-base md:text-lg font-semibold",
  };

  return (
    <TagName className={`${levelStyles[level]} ${className}`}>
      {text}
    </TagName>
  );
};
export default Heading;