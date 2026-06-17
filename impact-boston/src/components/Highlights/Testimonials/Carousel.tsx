"use client";

// Testimonials carousel showcasing client feedback

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Grid from "@/components/common/Grid";
import ExpandableQuote from "./ExpandableQuote";

export interface Testimonial {
  _key?: string | null;
  quote: string;
  author?: string;
  authorTitle?: string;
  readMoreLink?: string;
  dataAttributes?: {
    author?: string;
    authorTitle?: string;
    quote?: string;
  };
}

type HeadingTag = 'h2' | 'h3';

interface CarouselProps {
  heading?: string;
  subheading?: string;
  testimonials?: Testimonial[];
  showAuthors?: boolean;
  authorPrefix?: string;
  backgroundColor?: string;
  className?: string;
  headingLevel?: HeadingTag;
  headingClassName?: string;
  dataAttributes?: {
    heading?: string;
    subheading?: string;
  };
}

export default function TestimonialsCarousel({
  heading,
  subheading,
  testimonials = [],
  showAuthors = false,
  authorPrefix = "- ",
  backgroundColor = '',
  className = '',
  headingLevel,
  headingClassName,
  dataAttributes,
}: CarouselProps) {
  const testimonialItems = testimonials.filter(
    (testimonial) => testimonial.quote,
  );

  if (!testimonialItems.length) {
    return null;
  }

  return (
    <TestimonialsCarouselTrack
      authorPrefix={authorPrefix}
      heading={heading}
      dataAttributes={dataAttributes}
      showAuthors={showAuthors}
      subheading={subheading}
      testimonialItems={testimonialItems}
      backgroundColor={backgroundColor}
      className={className}
    />
  );
}

type TestimonialsCarouselTrackProps = {
  authorPrefix: string;
  heading?: string;
  showAuthors: boolean;
  subheading?: string;
  testimonialItems: Testimonial[];
  backgroundColor?: string;
  className?: string;
  dataAttributes?: {
    heading?: string;
    subheading?: string;
  };
};

function TestimonialsCarouselTrack({
  authorPrefix,
  heading,
  showAuthors,
  subheading,
  testimonialItems,
  backgroundColor = '',
  className = '',
  dataAttributes,
}: TestimonialsCarouselTrackProps) {
  const [currentIndex, setCurrentIndex] = useState(testimonialItems.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const [isTablet, setIsTablet] = useState(false);

  // Duplicate testimonials for infinite loop
  const duplicatedTestimonials = [
    ...testimonialItems,
    ...testimonialItems,
    ...testimonialItems,
  ];
  const startIndex = testimonialItems.length;

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 744);
      setIsTablet(window.innerWidth >= 744 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
    if (currentIndex >= startIndex + testimonialItems.length) {
      setIsTransitioning(false);
      setCurrentIndex(startIndex);
    } else if (currentIndex < startIndex) {
      setIsTransitioning(false);
      setCurrentIndex(startIndex + testimonialItems.length - 1);
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
    <section className={`w-full overflow-hidden py-8 md:py-10 lg:py-18 ${backgroundColor} ${className}`}>
      <div className="flex flex-col gap-8 md:gap-6 lg:gap-8">
        <div className="flex flex-col gap-8">
          {/* Top Row - Heading and Navigation */}
          <Grid>
            {/* Left - Heading and Subtext */}
            <div className="col-span-4 md:col-span-8 lg:col-span-6 flex flex-col gap-4 lg:gap-2 md:items-center lg:items-start">
              {heading ? (
                <h2
                  className="h2 text-[#000] text-center md:text-center lg:text-left"
                  data-sanity={dataAttributes?.heading}
                >
                  {heading}
                </h2>
              ) : null}
              {subheading ? (
                <p
                  className="p2 text-[#333] text-center md:text-center lg:text-left"
                  data-sanity={dataAttributes?.subheading}
                >
                  {subheading}
                </p>
              ) : null}
            </div>

            {/* Right - Arrow Navigation - Desktop Only */}
            <div className="hidden lg:flex col-span-4 md:col-span-8 lg:col-span-2 lg:col-start-11 gap-4 lg:justify-end self-end">
              <button
                onClick={prevSlide}
                className="w-12 h-12 relative flex items-center justify-center transition-opacity hover:opacity-80"
                aria-label="Previous testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  className="absolute"
                >
                  <circle
                    cx="23"
                    cy="23"
                    r="22.5"
                    stroke="#dddddd"
                    fill="white"
                  />
                </svg>
                <ChevronLeft
                  className="w-6 h-6 text-black relative z-10"
                  strokeWidth={2}
                />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 relative flex items-center justify-center transition-opacity hover:opacity-80"
                aria-label="Next testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  className="absolute"
                >
                  <circle
                    cx="23"
                    cy="23"
                    r="22.5"
                    stroke="#dddddd"
                    fill="white"
                  />
                </svg>
                <ChevronRight
                  className="w-6 h-6 text-black relative z-10"
                  strokeWidth={2}
                />
              </button>
            </div>
          </Grid>

          {/* Cards Carousel */}
          <div className="relative md:ml-0 lg:ml-0">
            <div className="overflow-visible md:overflow-visible lg:overflow-visible md:pl-0 lg:pl-0">
              <div
                className={`flex gap-4 md:gap-4 lg:gap-6 ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
                style={{
                  transform: getTransform(),
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {duplicatedTestimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="shrink-0 w-[288px] md:w-[50%] lg:w-[calc(50%-60px)] bg-white flex flex-col"
                  >
                    {/* Colored Top Border */}
                    <div
                      className="h-1.75 w-full"
                      style={{
                        background:
                          "linear-gradient(to right, #E36A38 0%, #E36A38 22%, #874E9F 22%, #874E9F 86%, #462458 86%, #462458 100%)",
                      }}
                    />

                    {/* Card Content */}
                    <div className="px-4 py-8 lg:p-8">
                      {/* Quote */}
                      <ExpandableQuote
                        quote={testimonial.quote}
                        className="p1 whitespace-pre-line text-[#000] lg:text-[#333]"
                        dataSanity={testimonial.dataAttributes?.quote}
                        withQuotationMarks
                      />
                      {showAuthors && testimonial.author ? (
                        <p
                          className="p2 mt-6 text-[#000] lg:text-[#333]"
                          data-sanity={testimonial.dataAttributes?.author}
                        >
                          {authorPrefix}
                          {testimonial.author}
                        </p>
                      ) : null}
                      {showAuthors && testimonial.authorTitle ? (
                        <p
                          className="p2 text-text-grey-light"
                          data-sanity={testimonial.dataAttributes?.authorTitle}
                        >
                          {testimonial.authorTitle}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Arrow Navigation - Mobile and Tablet, centered at bottom */}
        <div className="flex lg:hidden gap-2 justify-center">
          <button
            onClick={prevSlide}
            className="w-12 h-12 relative flex items-center justify-center transition-opacity hover:opacity-80"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              className="absolute"
            >
              <circle cx="23" cy="23" r="22.5" stroke="#dddddd" fill="white" />
            </svg>
            <ChevronLeft
              className="w-6 h-6 text-black relative z-10"
              strokeWidth={2}
            />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 relative flex items-center justify-center transition-opacity hover:opacity-80"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              className="absolute"
            >
              <circle cx="23" cy="23" r="22.5" stroke="#dddddd" fill="white" />
            </svg>
            <ChevronRight
              className="w-6 h-6 text-black relative z-10"
              strokeWidth={2}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
