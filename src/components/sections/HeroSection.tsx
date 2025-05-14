'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../ui/Logo';
import NavLinkItem, { NavLinkItemProps as LinkProps } from '../shared/NavLinkItem';
import TextInput from '../ui/TextInput';
import SelectDropdown from '../ui/SelectDropdown';
import IconButton from '../ui/IconButton';
import Button from '../ui/button';
import Paragraph from '../ui/Paragraph';
import SearchIcon from '../icons/SearchIcon'; // Assuming you have this

// Placeholder Icons
const FilterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>;
const ChatIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3.696-3.696c-.84.062-1.68.093-2.52.093s-1.68-.031-2.52-.093L9.136 21v-3.091A23.848 23.848 0 018.458 17.5c-2.805-.607-5.007-3.209-5.007-6.173L3.451 7.331A26.69 26.69 0 018.458 6c4.236 0 8.21 1.394 11.25 3.75.335.236.64.507.942.783z" /></svg>;


export interface HeroSectionProps {
  backgroundImage: string; // URL for background image/video placeholder
  navLinks: LinkProps[];
  sloganText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  navLinks,
  sloganText = "We've More than 50,000 apartments for you to take your pick",
}) => {
  const [keyword, setKeyword] = useState('');
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [specificLocation, setSpecificLocation] = useState('');


  const propertyTypes = [
    { value: '', label: 'Select Type' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'villa', label: 'Villa' },
    { value: 'townhouse', label: 'Townhouse' },
  ];

  const locations = [
    { value: '', label: 'Select Location' },
    { value: 'dubai_marina', label: 'Dubai Marina' },
    { value: 'downtown', label: 'Downtown Dubai' },
    { value: 'jvc', label: 'JVC' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ keyword, type, location, specificLocation });
    // Implement search logic
  };

  return (
    <section className="relative min-h-screen flex flex-col text-white">
      {/* Background Image/Video */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/images/hero/city-skyline-video-placeholder.mp4"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div> {/* Overlay */}
      </div>

      {/* Part 1: Navigation Bar */}
      <header className="py-4 md:py-6 absolute top-0 left-0 right-0 z-20">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Logo src="/logo.png" className="text-white" /> {/* Assuming white logo text */}
          <nav className="hidden md:flex space-x-2">
            {navLinks.map((link) => (
              <NavLinkItem key={link.href} {...link} />
            ))}
          </nav>
          {/* Mobile Menu Button - Implement if needed */}
          <div className="md:hidden">
            <IconButton
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>}
              aria-label="Open menu"
              className="text-white"
            />
          </div>
        </div>
      </header>

      {/* Centered Content: Search Form Area & Slogan */}
      <div className="flex-grow flex flex-col items-center justify-center container mx-auto px-4 z-10 pt-24 pb-12"> {/* Added padding top for navbar */}
        {/* Optional: Main Hero Heading could go here */}
        {/* <Heading level={1} text="Find Your Dream Home" className="text-center mb-8 text-shadow-lg" /> */}

        {/* Part 2: Search Form Area */}
        <form
          onSubmit={handleSearch}
          className="bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-xl w-full max-w-4xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 items-end">
            <TextInput
              placeholder="Enter Keyword here..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              wrapperClassName="lg:col-span-1"
              className="bg-white text-gray-800"
            />
            <SelectDropdown
              options={propertyTypes}
              value={type}
              onChange={(e) => setType(e.target.value)}
              wrapperClassName="lg:col-span-1"
              className="bg-white text-gray-800"
            />
            <SelectDropdown
              options={locations}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              wrapperClassName="lg:col-span-1"
              className="bg-white text-gray-800"
            />
            <TextInput
              placeholder="Enter location"
              value={specificLocation}
              onChange={(e) => setSpecificLocation(e.target.value)}
              wrapperClassName="lg:col-span-1"
              className="bg-white text-gray-800"
            />
            {/* The example has 2 location fields, the purpose of the second is unclear - using TextInput for now */}

            <div className="flex space-x-2 w-full md:col-span-2 lg:col-span-1">
              <IconButton
                icon={<FilterIcon />}
                aria-label="Advanced Filters"
                className="bg-gray-200 text-gray-700 hover:bg-gray-300 flex-shrink-0 h-[42px]" // Match button height
                onClick={() => console.log('Filter clicked')}
              />
              <Button type="submit" leftIcon={<SearchIcon className="w-5 h-5"/>} className="w-full">
                SEARCH
              </Button>
            </div>
          </div>
        </form>

        {/* Part 3: Slogan/CTA Text */}
        {sloganText && (
          <Paragraph text={sloganText} className="mt-6 text-center text-sm text-gray-200 max-w-lg" />
        )}
      </div>

      {/* Part 4: Floating Action Buttons (FABs) */}
      <div className="fixed bottom-6 right-6 z-30 space-y-3">
        <IconButton
          icon={<ChatIcon />}
          aria-label="Chat with us"
          variant="green"
          size="lg"
          className="rounded-full shadow-xl"
          onClick={() => console.log('Chat FAB clicked')}
        />
        <Button
          variant="floating"
          size="md"
          className="rounded-full shadow-xl px-6"
          onClick={() => console.log('Contact Us FAB clicked')}
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
};
export default HeroSection;