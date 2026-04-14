'use client';

// components/TestimonialsSection.tsx
// Testimonials section with carousel showcasing client feedback

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Grid from './common/Grid';

interface Testimonial {
  quote: string;
  author: string;
  readMoreLink: string;
}

// TODO: Replace with Sanity CMS content
const testimonials: Testimonial[] = [
  {
    quote: "My therapist introduced me to IMPACT back in 1989 and I went through the course back then. Gratefully, I have never been in a situation where I have had to use the physical skills I learned during that time. (Although I still feel like they are within me). However, the course was as much mental as physical, and I think it gave me my 'voice' which I have confidently used over the years. In the last few decades, I have often thought about taking a refresher course...",
    author: "Anonymous",
    readMoreLink: "#"
  },
  {
    quote: "My therapist introduced me to IMPACT back in 1989 and I went through the course back then. The skills I learned have stayed with me throughout my life. The course was as much mental as physical, and I think it gave me my 'voice' which I have confidently used over the years. I cannot recommend this program enough for anyone looking to build confidence and practical safety skills...",
    author: "Anonymous",
    readMoreLink: "#"
  },
  {
    quote: "My therapist introduced me to IMPACT back in 1989 and I went through the course back then. Gratefully, I have never been in a situation where I have had to use the physical skills I learned during that time. However, the course was as much mental as physical, and I think it gave me my 'voice' which I have confidently used over the years. The mental preparedness and awareness I gained have been invaluable...",
    author: "Anonymous",
    readMoreLink: "#"
  },
  {
    quote: "My therapist introduced me to IMPACT back in 1989 and I went through the course back then. The physical and mental skills I gained have empowered me in countless situations. The course was as much mental as physical, and I think it gave me my 'voice' which I have confidently used over the years. In the last few decades, I have often recommended IMPACT to friends and family...",
    author: "Anonymous",
    readMoreLink: "#"
  },
  {
    quote: "My therapist introduced me to IMPACT back in 1989 and I went through the course back then. Gratefully, I have never been in a situation where I have had to use the physical skills I learned during that time. However, the course was as much mental as physical, and I think it gave me my 'voice' which I have confidently used over the years. The confidence and empowerment I feel is immeasurable...",
    author: "Anonymous",
    readMoreLink: "#"
  }
];

const borderColors = ['#6B4EA0', '#D4541A', '#2E7D4F'];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const [isTablet, setIsTablet] = useState(false);

  // Duplicate testimonials for infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const startIndex = testimonials.length;

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 744);
      setIsTablet(window.innerWidth >= 744 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= startIndex + testimonials.length) {
      setIsTransitioning(false);
      setCurrentIndex(startIndex);
    } else if (currentIndex < startIndex) {
      setIsTransitioning(false);
      setCurrentIndex(startIndex + testimonials.length - 1);
    }
  };

  // Reset transitioning state after jump
  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => setIsTransitioning(true), 50);
    }
  }, [isTransitioning]);

  // Calculate transform based on screen size
  const getTransform = () => {
    if (isMobile) {
      // Mobile: 288px cards + 16px gap
      // Center the active card: 50% viewport - (card width / 2) - (index * (card + gap))
      return `translateX(calc(50% - 144px - ${currentIndex * 304}px))`;
    } else if (isTablet) {
      return `translateX(calc(-${currentIndex * 50}% - ${currentIndex * 16}px + 25%))`;
    } else {
      // Desktop: card width is calc(50% - 60px), gap is 24px
      // Total shift per card = 50% - 60px + 24px = 50% - 36px
      return `translateX(calc(-${currentIndex * 50}% + ${currentIndex * 36}px + 25%))`;
    }
  };

  return (
    <section className="w-full bg-[#F0EEF5] overflow-hidden py-8 md:py-10 lg:py-18">
      <div className="flex flex-col gap-8 md:gap-6 lg:gap-8 mx-4 md:mx-8 lg:mx-36">
        <div className="flex flex-col gap-8">
        {/* Top Row - Heading and Navigation */}
        <Grid>
          {/* Left - Heading and Subtext */}
          <div className="col-span-4 md:col-span-8 lg:col-span-6 flex flex-col gap-4 lg:gap-2 md:items-center lg:items-start">
            <h2 className="h2 text-[#000] text-center md:text-center lg:text-left">
              What People are Saying
            </h2>
            <p className="p2 text-[#333] text-center md:text-center lg:text-left">
              Hear from 20 people who've worked with us.
            </p>
          </div>

          {/* Right - Arrow Navigation - Desktop Only */}
          <div className="hidden lg:flex col-span-4 md:col-span-8 lg:col-span-2 lg:col-start-11 gap-4 lg:justify-end self-end">
            <button
              onClick={prevSlide}
              className="w-12 h-12 relative flex items-center justify-center transition-opacity hover:opacity-80"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none" className="absolute">
                <circle cx="23" cy="23" r="22.5" stroke="#dddddd" fill="white" />
              </svg>
              <ChevronLeft className="w-6 h-6 text-black relative z-10" strokeWidth={2} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 relative flex items-center justify-center transition-opacity hover:opacity-80"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none" className="absolute">
                <circle cx="23" cy="23" r="22.5" stroke="#dddddd" fill="white" />
              </svg>
              <ChevronRight className="w-6 h-6 text-black relative z-10" strokeWidth={2} />
            </button>
          </div>
        </Grid>

        {/* Cards Carousel */}
        <div className="relative md:ml-0 lg:ml-0">
          <div className="overflow-visible md:overflow-visible lg:overflow-visible md:pl-0 lg:pl-0">
            <div
              className={`flex gap-4 md:gap-4 lg:gap-6 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{
                transform: getTransform(),
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[288px] md:w-[50%] lg:w-[calc(50%-60px)] bg-white flex flex-col"
                >
                  {/* Colored Top Border */}
                  <div
                    className="h-[7px] w-full"
                    style={{
                      background: 'linear-gradient(to right, #E36A38 0%, #E36A38 22%, #874E9F 22%, #874E9F 86%, #462458 86%, #462458 100%)'
                    }}
                  />

                  {/* Card Content */}
                  <div className="px-4 py-8 lg:p-8">
                    {/* Quote */}
                    <p className="p1 text-[#000] lg:text-[#333]">
                      "{testimonial.quote}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        </div>

        {/* Arrow Navigation - Mobile and Tablet, centered at bottom */}
        <div className="flex lg:hidden gap-4 justify-center">
          <button
            onClick={prevSlide}
            className="w-12 h-12 relative flex items-center justify-center transition-opacity hover:opacity-80"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none" className="absolute">
              <circle cx="23" cy="23" r="22.5" stroke="#dddddd" fill="white" />
            </svg>
            <ChevronLeft className="w-6 h-6 text-black relative z-10" strokeWidth={2} />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 relative flex items-center justify-center transition-opacity hover:opacity-80"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none" className="absolute">
              <circle cx="23" cy="23" r="22.5" stroke="#dddddd" fill="white" />
            </svg>
            <ChevronRight className="w-6 h-6 text-black relative z-10" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}
