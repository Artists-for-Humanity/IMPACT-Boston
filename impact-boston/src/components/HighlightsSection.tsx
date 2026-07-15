"use client";

// components/HighlightsSection.tsx
// Highlights section with carousel showcasing key messages and features

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Grid from "./common/Grid";
import { PLACEHOLDER_IMAGE_SRC } from "./common/placeholderImage";

export interface HighlightSlide {
  _key?: string | null;
  heading?: string | null;
  body?: string | null;
  ctaText?: string | null;
  ctaLink?: string | null;
  ctaOpenInNewTab?: boolean | null;
  additionalText?: string | null;
  imageSrc?: string | null;
  imageAlt?: string | null;
  dataAttributes?: {
    additionalText?: string;
    body?: string;
    ctaText?: string;
    heading?: string;
    image?: string;
  };
}

type ResolvedHighlightSlide = {
  heading: string;
  body: string;
  ctaText: string;
  ctaLink: string;
  ctaOpenInNewTab?: boolean | null;
  additionalText: string;
  imageSrc?: string | null;
  imageAlt: string;
  dataAttributes?: HighlightSlide["dataAttributes"];
};

type HighlightsSectionProps = {
  dataAttributes?: {
    label?: string;
  };
  label?: string | null;
  slides?: HighlightSlide[] | null;
};

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

function resolveSlide(slide: HighlightSlide): ResolvedHighlightSlide {
  return {
    heading: slide.heading ?? "",
    body: slide.body ?? "",
    ctaText: slide.ctaText ?? "",
    ctaLink: slide.ctaLink ?? "#",
    ctaOpenInNewTab: slide.ctaOpenInNewTab,
    additionalText: slide.additionalText ?? "",
    imageSrc: slide.imageSrc,
    imageAlt: slide.imageAlt ?? slide.heading ?? "",
    dataAttributes: slide.dataAttributes,
  };
}

export default function HighlightsSection({
  dataAttributes,
  label,
  slides,
}: HighlightsSectionProps = {}) {
  const resolvedSlides =
    slides?.filter((slide) => slide.heading).map(resolveSlide) ?? [];

  const [currentSlide, setCurrentSlide] = useState(0);
  const activeSlide = currentSlide < resolvedSlides.length ? currentSlide : 0;

  if (!resolvedSlides.length) {
    return null;
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % resolvedSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + resolvedSlides.length) % resolvedSlides.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="w-full bg-black py-8 md:py-10 lg:py-18">
      <div className="flex flex-col gap-10 md:gap-12 lg:gap-[50px]">
        {/* Top Row - Label and Navigation */}
        <Grid noPadding>
          <div className="col-span-4 md:col-span-8 lg:col-span-12 flex justify-between items-center">
            <h5 className="sub-2 text-white" data-sanity={dataAttributes?.label}>
              {label}
            </h5>
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 relative flex items-center justify-center transition-opacity hover:opacity-80"
                aria-label="Previous slide"
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
                    r="23"
                    transform="rotate(-180 23 23)"
                    fill="white"
                    fillOpacity="0.2"
                  />
                </svg>
                <ChevronLeft
                  className="w-6 h-6 text-white relative z-10"
                  strokeWidth={2}
                />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 relative flex items-center justify-center transition-opacity hover:opacity-80"
                aria-label="Next slide"
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
                    r="23"
                    transform="rotate(-180 23 23)"
                    fill="white"
                    fillOpacity="0.2"
                  />
                </svg>
                <ChevronRight
                  className="w-6 h-6 text-white relative z-10"
                  strokeWidth={2}
                />
              </button>
            </div>
          </div>
        </Grid>

        {/* Content Row */}
        <Grid noPadding className="md:gap-y-12">
          {/* Left Panel - Heading */}
          <div className="col-span-4 md:col-span-8 lg:col-span-5 flex flex-col gap-6 lg:gap-9">
            <div className="grid">
              {resolvedSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`col-start-1 row-start-1 transition-opacity duration-500 ${
                    activeSlide === index
                      ? "opacity-100 z-10"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <h3
                    className="h3 text-white"
                    data-sanity={slide.dataAttributes?.heading}
                  >
                    {slide.heading}
                  </h3>
                </div>
              ))}
            </div>

            {/* Dot Indicators - Mobile/Tablet: below heading */}
            <div className="lg:hidden flex gap-3">
              {resolvedSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor:
                      activeSlide === index ? "#FFFFFF" : "#9F84B5",
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Dot Indicators - Desktop only */}
            <div className="hidden lg:flex gap-3">
              {resolvedSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor:
                      activeSlide === index ? "#FFFFFF" : "#9F84B5",
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Panel - Content with custom gap spacing */}
          <div className="col-span-4 md:col-span-8 lg:col-span-6 lg:col-start-7 flex flex-col gap-10 md:gap-12 lg:gap-12">
            {/* Image and Body Text wrapper */}
            <div className="flex flex-col gap-6 lg:gap-7">
              {/* Image - Desktop: all slides in same grid cell with z-index */}
              <div className="grid">
                {resolvedSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`col-start-1 row-start-1 relative aspect-[16/9] transition-opacity duration-500 ${
                      activeSlide === index
                        ? "opacity-100 z-10"
                        : "opacity-0 pointer-events-none hidden lg:block"
                    }`}
                    data-sanity={slide.dataAttributes?.image}
                    style={{ backgroundColor: "#311E41" }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-[7px] z-10"
                      style={{ background: "linear-gradient(to right, #E36A38 0%, #E36A38 22%, #874E9F 22%, #874E9F 86%, #462458 86%, #462458 100%)" }}
                      aria-hidden="true"
                    />
                    {slide.imageSrc ? (
                      <Image
                        src={slide.imageSrc}
                        alt={slide.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <Image
                        src={PLACEHOLDER_IMAGE_SRC}
                        alt={slide.imageAlt || "Placeholder image"}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Body Text - Desktop: all slides in same grid cell with z-index */}
              <div className="relative">
                {resolvedSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-500 ${
                      activeSlide === index
                        ? "opacity-100 z-10"
                        : "opacity-0 pointer-events-none hidden lg:block lg:absolute lg:inset-0"
                    }`}
                  >
                    <p
                      className="p1 text-white whitespace-pre-line"
                      data-sanity={slide.dataAttributes?.body}
                    >
                      {slide.body.trim()}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA and Additional Text wrapper with flex gap */}
            <div className="md:grid md:grid-cols-8 lg:block">
              <div className="md:col-span-4 lg:col-auto flex flex-col gap-2">
                {/* CTA Button - Desktop: all slides in same grid cell with z-index */}
                <div className="grid">
                  {resolvedSlides.map((slide, index) => (
                    <div
                      key={index}
                      className={`col-start-1 row-start-1 transition-opacity duration-500 ${
                        activeSlide === index
                          ? "opacity-100 z-10"
                          : "opacity-0 pointer-events-none hidden lg:block"
                      }`}
                    >
                      <Link
                        href={slide.ctaLink}
                        className="flex bg-white text-black link px-6 py-6 items-center justify-between hover:bg-gray-100 transition-colors lg:w-2/3"
                        data-sanity={slide.dataAttributes?.ctaText}
                        target={slide.ctaOpenInNewTab ? "_blank" : undefined}
                        rel={
                          slide.ctaOpenInNewTab
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        <span>{slide.ctaText}</span>
                        <ChevronRight className="w-5 h-5" strokeWidth={2} />
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Additional Text - Desktop: all slides in same grid cell with z-index */}
                <div className="grid">
                  {resolvedSlides.map((slide, index) => (
                    <div
                      key={index}
                      className={`col-start-1 row-start-1 transition-opacity duration-500 ${
                        activeSlide === index
                          ? "opacity-100 z-10"
                          : "opacity-0 pointer-events-none hidden lg:block"
                      }`}
                    >
                      <p
                        className="p2"
                        data-sanity={slide.dataAttributes?.additionalText}
                        style={{ color: "rgba(255, 255, 255, 0.60)" }}
                      >
                        {renderTextWithEmailLinks(slide.additionalText)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </section>
  );
}
