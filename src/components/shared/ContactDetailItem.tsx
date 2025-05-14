import React from 'react';

interface ContactDetailItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string; // e.g., tel: or mailto:
}

const ContactDetailItem: React.FC<ContactDetailItemProps> = ({ icon, label, value, link }) => {
  const content = (
    <>
      <span className="text-green-500 mr-3 text-xl">{icon}</span>
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="font-semibold text-white">{value}</p>
      </div>
    </>
  );

  if (link) {
    return (
      <a href={link} className="flex items-center my-3 hover:opacity-80 transition-opacity">
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center my-3">
      {content}
    </div>
  );
};
export default ContactDetailItem;