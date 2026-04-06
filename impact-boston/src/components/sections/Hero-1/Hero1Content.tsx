import React from "react";
import Button from "@/components/common/Button";
import Hero1Headline from "./Hero1Headline";

interface Hero1ContentProps {
  headline: React.ReactNode | null;
  body: string;
  ctaText: string;
  ctaHref: string;
  className?: string;
}

export default function Hero1Content({
  headline,
  body,
  ctaText,
  ctaHref,
  className = "",
}: Hero1ContentProps) {
  return (
    <div className={`flex flex-col h-full items-center lg:items-start gap-8 lg:gap-0 ${className}`}>
      <div className="flex flex-col gap-y-6 lg:gap-y-[32px] items-center lg:items-start">
        <div>
          {headline &&
            (typeof headline === "string" ? (
              <Hero1Headline>{headline}</Hero1Headline>
            ) : (
              headline
            ))}
        </div>

        <p className="p1 max-w-lg lg:max-w-none lg:w-4/5 text-center lg:text-left" style={{ color: "#333" }}>
          {body}
        </p>
      </div>

      <div className="flex justify-center lg:justify-start lg:mt-auto">
        <Button href={ctaHref} variant="primary" size="lg">
          {ctaText}
        </Button>
      </div>
    </div>
  );
}
