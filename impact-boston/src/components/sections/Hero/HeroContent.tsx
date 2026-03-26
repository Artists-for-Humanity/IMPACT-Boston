import React from "react";
import Button from "@/components/common/Button";
import HeroHeadline from "./HeroHeadline";

interface HeroContentProps {
  headline: React.ReactNode | null;
  body: string;
  ctaText: string;
  ctaHref: string;
  className?: string;
}

export default function HeroContent({
  headline,
  body,
  ctaText,
  ctaHref,
  className = "",
}: HeroContentProps) {
  return (
    <div className={`flex flex-col h-full items-center lg:items-start ${className}`}>
      <div className="mb-3 md:mb-8">
        {headline &&
          (typeof headline === "string" ? (
            <HeroHeadline>{headline}</HeroHeadline>
          ) : (
            headline
          ))}
      </div>

      <p className="p1 max-w-lg text-center lg:text-left mb-8" style={{ color: "#333" }}>
        {body}
      </p>

      <div className="mt-auto mb-10 flex justify-center lg:justify-start">
        <Button href={ctaHref} variant="primary" size="lg">
          {ctaText}
        </Button>
      </div>
    </div>
  );
}
