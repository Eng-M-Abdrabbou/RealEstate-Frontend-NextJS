import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  variant?: 'default' | 'floating' | 'green';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  'aria-label': string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyle = "inline-flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150";

  let variantStyle = "";
  switch (variant) {
    case 'default':
      variantStyle = "text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:ring-gray-400";
      break;
    case 'floating':
      variantStyle = "bg-white text-gray-700 shadow-lg hover:bg-gray-50 focus:ring-gray-400";
      break;
    case 'green':
      variantStyle = "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500";
      break;
  }

  let sizeStyle = "";
  switch (size) {
    case 'sm': sizeStyle = "p-1.5"; break; // Adjust icon size within this
    case 'md': sizeStyle = "p-2"; break;
    case 'lg': sizeStyle = "p-3"; break;
  }

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
};
export default IconButton;