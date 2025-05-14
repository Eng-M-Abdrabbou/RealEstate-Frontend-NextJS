import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Heading from '../ui/Heading';
import Paragraph from '../ui/Paragraph';
import Button from '../ui/button';
import ContactDetailItem from '../shared/ContactDetailItem';

// Placeholder Icons
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>;

export interface ContactSectionProps {
  phoneNumber: string;
  emailAddress: string;
  contactPersonImage: string;
  propertyImages: { src: string; alt: string; shape?: 'rectangle' | 'diamond' }[]; // Shape for collage styling
  mainHeading?: string;
  description?: string;
  invitationText?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  phoneNumber,
  emailAddress,
  contactPersonImage,
  propertyImages,
  mainHeading = "Connecting People & Property, Perfectly.",
  description = "Our dedicated team works tirelessly to match the right people with the right properties, ensuring a seamless and satisfying experience for all involved.",
  invitationText = "Let us help you do the same.",
  ctaButtonText = "Contact Us",
  ctaButtonLink = "/contact"
}) => {
  return (
    <section className="py-12 md:py-20 bg-dark-blue text-white"> {/* Dark blue background */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Part 1: Left Column (Content and Contact Info) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="relative mb-6 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-green-500">
              <Image
                src={contactPersonImage}
                alt="Contact person"
                layout="fill"
                objectFit="cover"
              />
              {/* Subtle background graphic of buildings - can be added with absolute positioning */}
            </div>

            {mainHeading && <Heading level={2} text={mainHeading} className="mb-4 text-white" />}
            {description && <Paragraph text={description} className="text-gray-300 mb-3" />}
            {invitationText && <Paragraph text={invitationText} className="text-gray-300 font-semibold mb-6" />}

            <ContactDetailItem
              icon={<PhoneIcon />}
              label="Our Hot Line:"
              value={phoneNumber}
              link={`tel:${phoneNumber.replace(/\s+/g, '')}`}
            />
            <ContactDetailItem
              icon={<MailIcon />}
              label="Mail Us:"
              value={emailAddress}
              link={`mailto:${emailAddress}`}
            />

            {ctaButtonText && ctaButtonLink && (
              <Link href={ctaButtonLink}>
                <Button variant="primary" size="lg" className="mt-6">
                  {ctaButtonText}
                </Button>
              </Link>
            )}
          </div>

          {/* Part 2: Right Column (Image Collage) */}
          {propertyImages && propertyImages.length > 0 && (
            <div className="grid grid-cols-2 gap-3 md:gap-4 property-collage">
              {/* This needs careful CSS for the collage effect (shapes, overlaps) */}
              {/* Example: first image larger, others smaller and positioned around it */}
              {propertyImages.map((img, index) => (
                <div
                  key={index}
                  className={`relative aspect-square overflow-hidden
                              ${index === 0 ? 'col-span-2 row-span-2 rounded-lg' : 'rounded-md'}
                              ${img.shape === 'diamond' ? 'transform rotate-45 scale-75' : ''}
                              `} // Basic styling, enhance for collage
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    layout="fill"
                    objectFit="cover"
                    className={`${img.shape === 'diamond' ? 'transform -rotate-45 scale-140' : ''} border-2 border-white/50`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default ContactSection;