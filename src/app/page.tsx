// app/page.tsx
import React from 'react';
import PartnersSection, { PartnersSectionProps } from '@/components/sections/PartnersSection';
import TestimonialsSection, { TestimonialsSectionProps } from '@/components/sections/TestimonialsSection';
import StatsSection, { StatsSectionProps } from '@/components/sections/StatsSection';
import HeroSection, { HeroSectionProps } from '@/components/sections/HeroSection';
import MortgageCalculatorSection from '@/components/sections/MortgageCalculatorSection';
import FeatureHighlightSection, { FeatureHighlightSectionProps } from '@/components/sections/FeatureHighlightSection';
import NeighborhoodSection, { NeighborhoodSectionProps } from '@/components/sections/NeighborhoodSection';
import ContactSection, { ContactSectionProps } from '@/components/sections/ContactSection';
import LatestPropertiesSection, { LatestPropertiesSectionProps } from '@/components/sections/LatestPropertiesSection';
import WhyChooseUsSection, { WhyChooseUsSectionProps } from '@/components/sections/WhyChooseUsSection';

// Dummy Data
const dummyPartnerLogos: PartnersSectionProps['partnerLogos'] = [
  { src: '/logos/partner (1).jpg', alt: 'Partner 1', name: 'Alpha Corp' },
  { src: '/logos/partner (2).jpg', alt: 'Partner 2', name: 'Beta Solutions' },
  { src: '/logos/partner (3).jpg', alt: 'Partner 3', name: 'Gamma Devs' },
  { src: '/logos/partner (4).jpg', alt: 'Partner 4', name: 'Delta Group' },
  { src: '/logos/partner (5).jpg', alt: 'Partner 5', name: 'Epsilon Builders' },
  { src: '/logos/partner (6).jpg', alt: 'Partner 6', name: 'Zeta Estates' },
];

const dummyReviews: TestimonialsSectionProps['reviews'] = [
  { rating: 5, quote: "Absolutely fantastic service! They helped me find my dream home in no time. Highly recommended.", authorName: "Sarah L.", authorTitle: "Google Reviewer" },
  // Add more reviews if you implement a carousel
];

const dummyStats: StatsSectionProps['stats'] = [
  { value: "23,000+", label: "Rented Till Date" },
  { value: "7B+", label: "Worth of Assets Under Mgt" },
  { value: "96%", label: "Customer Satisfaction Rate" },
];

const dummyNavLinks: HeroSectionProps['navLinks'] = [
  { href: "/buy", label: "Buy" },
  { href: "/rent", label: "Rent" },
  { href: "/developers", label: "Developers" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const dummyFeatureHighlight: FeatureHighlightSectionProps = {
  backgroundImage: '/images/modern-interior.jpg',
  videoThumbnail: '/images/video-thumb-lounge.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
};

const dummyNeighborhoods: NeighborhoodSectionProps['neighborhoods'] = [
  { name: "Saadiyat Island", imageSrc: "/hoods/saadiyat.jpg", propertyCount: 35 },
  { name: "Al Reem Island", imageSrc: "/hoods/alreem.jpg", propertyCount: 52 },
  { name: "Yas Island", imageSrc: "/hoods/yas.jpg", propertyCount: 41 },
  { name: "Downtown Dubai", imageSrc: "/hoods/downtown.jpg", propertyCount: 120 },
  { name: "Dubai Marina", imageSrc: "/hoods/marina.jpg", propertyCount: 95 },
  { name: "Palm Jumeirah", imageSrc: "/hoods/palm.jpg", propertyCount: 77 },
];

const dummyContact: ContactSectionProps = {
  phoneNumber: "+971 50 123 4567",
  emailAddress: "info@purehomerealestate.com",
  contactPersonImage: "/images/contact-person.jpg",
  propertyImages: [
    { src: "/props/prop-collage1.jpg", alt: "Property 1", shape: 'rectangle' },
    { src: "/props/prop-collage2.jpg", alt: "Property 2" },
    { src: "/props/prop-collage3.jpg", alt: "Property 3", shape: 'diamond' },
    { src: "/props/prop-collage4.jpg", alt: "Property 4" },
  ],
};

const dummyProperties: LatestPropertiesSectionProps['properties'] = [
  {
    id: 'sale-174',
    imageSrc: "/props/latest1.jpg",
    status: "sale",
    title: "Luxury Marina View Apartment",
    price: 2500000,
    location: "Dubai Marina, Dubai",
    bedrooms: 3,
    bathrooms: 4,
    area: 2100,
    featured: true
  },
  {
    id: 'rent-082',
    imageSrc: "/props/latest2.jpg",
    status: "rent",
    title: "Spacious Family Villa with Garden",
    price: 120000,
    location: "Jumeirah Village Circle, Dubai",
    bedrooms: 4,
    bathrooms: 5,
    area: 3500
  },
  {
    id: 'sale-199',
    imageSrc: "/props/latest3.jpg",
    status: "sale",
    title: "Modern Downtown Townhouse",
    price: 5800000,
    location: "Downtown Dubai",
    bedrooms: 3,
    bathrooms: 3,
    area: 2800
  }
];

const dummyWhyChooseUs: WhyChooseUsSectionProps = {
  videoThumbnail: "/images/cityscape-sunset.jpg",
  videoUrl: "https://www.youtube.com/watch?v=another-video",
  reasons: [
    "Access to exclusive property listings.",
    "Expert negotiation on your behalf.",
    "Comprehensive market analysis and insights.",
    "Personalized service tailored to your needs.",
    "Transparent and honest communication."
  ],
  // Example for decorative shape if you create one:
  // decorativeShape: <SomeSvgShapeComponent />
};


export default function HomePage() {
  return (
    <main>
      <HeroSection
        backgroundImage="/images/hero-background.jpg"
        navLinks={dummyNavLinks}
      />
      <PartnersSection partnerLogos={dummyPartnerLogos} />
      <TestimonialsSection reviews={dummyReviews} />
      <StatsSection stats={dummyStats} />
      <LatestPropertiesSection properties={dummyProperties} />
      <NeighborhoodSection neighborhoods={dummyNeighborhoods} />
      <FeatureHighlightSection {...dummyFeatureHighlight} />
      <MortgageCalculatorSection />
      <WhyChooseUsSection {...dummyWhyChooseUs} />
      <ContactSection {...dummyContact} />
    </main>
  );
}