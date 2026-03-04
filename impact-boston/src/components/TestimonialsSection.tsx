'use client';

// components/TestimonialsSection.tsx
// Testimonials section with carousel showcasing client feedback

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full bg-[#F0EEF5] flex justify-center overflow-hidden">
      <div className="flex flex-col gap-14 w-full max-w-[1440px] px-6 md:px-20 lg:px-[120px] py-[88px]">
        {/* Top Row - Heading and Navigation */}
        <div className="grid-12-col">
          {/* Left - Heading and Subtext */}
          <div className="col-span-12 lg:col-span-10 space-y-4">
            <h2 className="font-[Poppins] text-[48px] font-medium leading-tight text-[#000]">
              What People are Saying
            </h2>
            <p className="font-[IBM_Plex_Sans] text-base text-gray-600">
              Hear from 20 people who've worked with us.
            </p>
          </div>

          {/* Right - Arrow Navigation */}
          <div className="col-span-12 lg:col-span-2 flex gap-4 justify-start lg:justify-end self-start mt-4 lg:mt-0">
            <button
              onClick={prevSlide}
              className="w-12 h-12 relative flex items-center justify-center transition-opacity hover:opacity-80"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none" className="absolute">
                <circle cx="23" cy="23" r="23" transform="rotate(-180 23 23)" fill="black" fillOpacity="0.1" />
              </svg>
              <ChevronLeft className="w-6 h-6 text-black relative z-10" strokeWidth={2} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 relative flex items-center justify-center transition-opacity hover:opacity-80"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none" className="absolute">
                <circle cx="23" cy="23" r="23" transform="rotate(-180 23 23)" fill="black" fillOpacity="0.1" />
              </svg>
              <ChevronRight className="w-6 h-6 text-black relative z-10" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Cards Carousel */}
        <div className="relative -mx-6 md:-mx-20 lg:-mx-0">
          <div className="overflow-visible px-6 md:px-20 lg:px-0">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3 + 2)}%)`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white flex flex-col"
                >
                  {/* Colored Top Border */}
                  <div
                    className="h-1.5 w-full"
                    style={{ backgroundColor: borderColors[index % borderColors.length] }}
                  />

                  {/* Card Content */}
                  <div className="p-8 flex flex-col gap-4">
                    {/* Quote with line-clamp */}
                    <p className="font-[IBM_Plex_Sans] text-base leading-relaxed text-[#333] line-clamp-6">
                      "{testimonial.quote}
                    </p>

                    {/* Read More Link */}
                    <a
                      href={testimonial.readMoreLink}
                      className="font-[IBM_Plex_Sans] text-sm text-gray-500 hover:text-gray-700 underline transition-colors"
                    >
                      read more
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
