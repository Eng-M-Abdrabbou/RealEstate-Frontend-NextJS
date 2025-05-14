import React from 'react';
import Link from 'next/link';

export interface NavLinkItemProps {
  href: string;
  label: string;
  isActive?: boolean; // For active link styling
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({ href, label, isActive }) => {
  return (
    <Link href={href} legacyBehavior>
      <a
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors text-green-600 bg-green-50
                    ${isActive
                      ? 'bg-green-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
      >
        {label}
      </a>
    </Link>
  );
};
export default NavLinkItem;