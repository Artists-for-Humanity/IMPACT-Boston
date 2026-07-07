"use client";

// Testimonials carousel showcasing client feedback

import { useState, useEffect, useRef, type CSSProperties } from "react";
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
  headingLevel = 'h2',
  headingClassName = "h2 text-[#000] text-center md:text-center lg:text-left",
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
      headingLevel={headingLevel}
      headingClassName={headingClassName}
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
  headingLevel: HeadingTag;
  headingClassName: string;
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
  headingLevel,
  headingClassName,
  dataAttributes,
}: TestimonialsCarouselTrackProps) {
  const n = testimonialItems.length;

  // activeIndex: which testimonial is centered (0 to n-1)
  // slidePos: position in the 3-card render (0=prev, 1=center, 2=next)
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidePos, setSlidePos] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [isTablet, setIsTablet] = useState(false);
  const [isLargeDesktop, setIsLargeDesktop] = useState(false);
  const pendingUpdate = useRef<null | { nextActive: number }>(null);

  const backgroundStyle: CSSProperties | undefined = isHexColor(backgroundColor)
    ? { backgroundColor }
    : undefined;
  const backgroundClassName = backgroundStyle ? "" : backgroundColor;
  const Heading = headingLevel;

  const prevIndex = (activeIndex - 1 + n) % n;
  const nextIndex = (activeIndex + 1) % n;

  // The 3 rendered cards: [prev, active, next]
  const visibleCards = [
    testimonialItems[prevIndex],
    testimonialItems[activeIndex],
    testimonialItems[nextIndex],
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 744);
      setIsTablet(window.innerWidth >= 744 && window.innerWidth < 1024);
      setIsLargeDesktop(window.innerWidth >= 1296);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    pendingUpdate.current = { nextActive: nextIndex };
    setIsTransitioning(true);
    setSlidePos(2);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    pendingUpdate.current = { nextActive: prevIndex };
    setIsTransitioning(true);
    setSlidePos(0);
  };

  const handleTransitionEnd = () => {
    if (!isTransitioning || !pendingUpdate.current) return;
    const { nextActive } = pendingUpdate.current;
    pendingUpdate.current = null;
    // Disable transition, update active card, and snap back to center position
    setIsTransitioning(false);
    setActiveIndex(nextActive);
    setSlidePos(1);
  };

  // Calculate transform to center the card at slidePos
  const getTransform = () => {
    if (isMobile) {
      // 288px cards + 16px gap, step = 304px
      return `translateX(calc(50% - 144px - ${slidePos * 304}px))`;
    } else if (isTablet) {
      // cards = 50% wide, gap = 16px
      return `translateX(calc(-${slidePos * 50}% - ${slidePos * 16}px + 25%))`;
    } else if (isLargeDesktop) {
      // cards capped at 588px, gap = 24px, step = 612px
      return `translateX(calc(50% - 294px - ${slidePos * 612}px))`;
    } else {
      // cards = calc(50% - 60px), gap = 24px, step = 50% - 36px
      return `translateX(calc(-${slidePos * 50}% + ${slidePos * 36}px + 25%))`;
    }
  };

  return (
    <section
      className={`w-full overflow-hidden py-8 md:py-10 lg:py-18 ${backgroundClassName} ${className}`}
      style={backgroundStyle}
    >
      <div className="flex flex-col gap-8 md:gap-6 lg:gap-8">
        <div className="flex flex-col gap-8">
          {/* Top Row - Heading and Navigation */}
          <Grid>
            {/* Left - Heading and Subtext */}
            <div className="col-span-4 md:col-span-8 lg:col-span-6 flex flex-col gap-4 lg:gap-2 md:items-center lg:items-start">
              {heading ? (
                <Heading
                  className={headingClassName}
                  data-sanity={dataAttributes?.heading}
                >
                  {heading}
                </Heading>
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
          <div className="relative">
            <div className="overflow-visible">
              <div
                className={`flex gap-4 lg:gap-6 ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
                style={{ transform: getTransform() }}
                onTransitionEnd={handleTransitionEnd}
              >
                {visibleCards.map((testimonial, index) => (
                  <div
                    key={`${activeIndex}-${index}`}
                    className="shrink-0 w-[288px] md:w-[50%] lg:w-[min(calc(50%-60px),588px)] bg-white flex flex-col"
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

        {/* Arrow Navigation - Mobile and Tablet */}
        <div className="flex lg:hidden gap-2 justify-center">
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

function isHexColor(value?: string) {
  return Boolean(value && /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value.trim()));
}
