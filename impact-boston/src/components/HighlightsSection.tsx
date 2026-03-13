'use client';

// components/HighlightsSection.tsx
// Highlights section with carousel showcasing key messages and features

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  heading: string;
  body: string;
  ctaText: string;
  ctaLink: string;
  additionalText: string;
  imageSrc: string;
  imageAlt: string;
}

// Helper function to convert email addresses in text to clickable links
const renderTextWithEmailLinks = (text: string) => {
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
  const parts = text.split(emailRegex);

  return parts.map((part, index) => {
    if (emailRegex.test(part)) {
      return (
        <a
          key={index}
          href={`mailto:${part}`}
          className="underline hover:opacity-80 transition-opacity"
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

const slides: Slide[] = [
  {
    heading: 'Find your courage and make the world safer.',
    body: "IMPACT has been teaching solutions for safe living since 1971. We provide realistic personal safety training that gives people the skills to respond appropriately to threatening situations in the moment of fear or intimidation. We also collaborate with schools and organizations to create programs that proactively prevent abuse. IMPACT's prevention programs emphasize giving people the tools to manage their stress responses so they can intervene effectively when they observe risky situations. Too often abuse goes unchallenged because people don't feel safe speaking up. IMPACT programs help people increase their ability to safely advocate for themselves and others.",
    ctaText: 'Learn More',
    ctaLink: '/about',
    additionalText: 'FOR MORE INFO: Contact Shay Orent, Training Manager IMPACT Boston, sorent@impactboston.org',
    imageSrc: '/images/hero-placeholder.jpg',
    imageAlt: 'IMPACT Boston training session',
  },
  {
    // TODO: Replace with Sanity CMS content
    heading: 'Empowering communities through education.',
    body: 'Content coming soon. This slide will showcase our community impact and educational programs.',
    ctaText: 'Learn More',
    ctaLink: '/programs',
    additionalText: 'Additional information or context can be added here.',
    imageSrc: '/images/hero-placeholder.jpg',
    imageAlt: 'Community education program',
  },
  {
    // TODO: Replace with Sanity CMS content
    heading: 'Building safer environments together.',
    body: 'Content coming soon. This slide will highlight our collaborative approach to creating safer spaces.',
    ctaText: 'Learn More',
    ctaLink: '/about',
    additionalText: 'Additional information or context can be added here.',
    imageSrc: '/images/hero-placeholder.jpg',
    imageAlt: 'Safe environment collaboration',
  },
];

export default function HighlightsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="w-full bg-black flex justify-center">
      <div className="flex flex-col gap-14 w-full max-w-[1440px] px-6 md:px-20 lg:px-[120px] py-[88px]">
        {/* Top Row - Label and Navigation */}
        <div className="flex justify-between items-center">
          <h5 className="font-[Poppins] text-sm uppercase text-white font-semibold tracking-wider">
            Highlights
          </h5>
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 relative flex items-center justify-center transition-opacity hover:opacity-80"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none" className="absolute">
                <circle cx="23" cy="23" r="23" transform="rotate(-180 23 23)" fill="white" fillOpacity="0.2" />
              </svg>
              <ChevronLeft className="w-6 h-6 text-white relative z-10" strokeWidth={2} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 relative flex items-center justify-center transition-opacity hover:opacity-80"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none" className="absolute">
                <circle cx="23" cy="23" r="23" transform="rotate(-180 23 23)" fill="white" fillOpacity="0.2" />
              </svg>
              <ChevronRight className="w-6 h-6 text-white relative z-10" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Content Row */}
        <div className="grid-12-col">
          {/* Left Panel - Heading and Dots */}
          <div className="col-span-4 lg:col-span-5 flex flex-col gap-8 mb-8 lg:mb-0">
            <div className="grid">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`col-start-1 row-start-1 transition-opacity duration-500 ${
                    currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <h3 className="font-[Poppins] text-[32px] md:text-[32px] font-medium leading-tight text-white">
                    {slide.heading}
                  </h3>
                </div>
              ))}
            </div>

            {/* Dot Indicators */}
            <div className="flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="w-3 h-3 rounded-full transition-all duration-300"
                  style={{ backgroundColor: currentSlide === index ? '#FFFFFF' : '#9F84B5' }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Panel - Image, Body and CTA */}
          <div className="col-span-4 lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-6 gap-8">
              {/* Image Placeholder */}
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`col-span-6 col-start-1 row-start-1 relative aspect-[16/9] transition-opacity duration-500 ${
                    currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
                  }`}
                  style={{ backgroundColor: '#311E41' }}
                >
                  <Image
                    src={slide.imageSrc}
                    alt={slide.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}

              {/* Body Text */}
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`col-span-6 col-start-1 row-start-2 -mt-1 transition-opacity duration-500 ${
                    currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <p className="font-[IBM_Plex_Sans] text-lg leading-relaxed text-white">
                    {slide.body}
                  </p>
                </div>
              ))}

              {/* CTA Button */}
              {slides.map((slide, index) => (
                <Link
                  key={index}
                  href={slide.ctaLink}
                  className={`col-span-3 col-start-1 row-start-3 mt-4 flex bg-white text-black font-[Poppins] text-base font-medium px-6 py-6 flex items-center justify-between hover:bg-gray-100 transition-colors ${
                    currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <span>{slide.ctaText}</span>
                  <ChevronRight className="w-5 h-5" strokeWidth={2} />
                </Link>
              ))}

              {/* Additional Text */}
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`col-span-5 col-start-1 row-start-4 -mt-5 transition-opacity duration-500 ${
                    currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <p className="font-[IBM_Plex_Sans] text-base font-normal leading-normal" style={{ color: 'rgba(255, 255, 255, 0.60)' }}>
                    {renderTextWithEmailLinks(slide.additionalText)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
