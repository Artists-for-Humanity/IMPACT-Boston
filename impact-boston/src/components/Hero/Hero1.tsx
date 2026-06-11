import Image from "next/image";
import React from "react";
import Grid from "../common/Grid";
import Button from "../common/Button";

interface Hero1HeadlineProps {
  children: React.ReactNode;
  className?: string;
}

export function Hero1Headline({
  children,
  className = "",
}: Hero1HeadlineProps) {
  return (
    <h1
      className={`h1 text-center lg:text-left ${className}`}
      style={{ color: "#061629" }}
    >
      {children}
    </h1>
  );
}

interface Hero1HeadlinePartProps {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "complementary" | "black" | "white";
  customColor?: string;
}

export function Hero1HeadlinePart({
  children,
  color = "black",
  customColor,
}: Hero1HeadlinePartProps) {
  const colorMap = {
    primary: "text-primary",
    secondary: "text-secondary",
    complementary: "text-complementary",
    black: "text-black",
    white: "text-white",
  };

  if (customColor) {
    return <span style={{ color: customColor }}>{children}</span>;
  }

  return <span className={colorMap[color]}>{children}</span>;
}

interface Hero1Props {
  headline: React.ReactNode;
  body: string;
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export default function Hero1({
  headline,
  body,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt,
  className = "",
}: Hero1Props) {
  return (
    <section
      className={`bg-brand-gray-light py-8 md:py-10 lg:py-18 ${className}`}
    >
      <Grid className="gap-y-10 md:gap-y-10 lg:gap-y-0">
        <div className="col-span-4 md:col-span-6 md:col-start-2 lg:col-span-5 lg:col-start-1">
          <div className="flex flex-col h-full items-center lg:items-start gap-8 lg:gap-0">
            <div className="flex flex-col gap-y-6 lg:gap-y-[32px] items-center lg:items-start w-full">
              <div className="lg:grid lg:grid-cols-5 lg:gap-6 w-full">
                <div className="lg:col-span-4">
                  {headline &&
                    (typeof headline === "string" ? (
                      <Hero1Headline>{headline}</Hero1Headline>
                    ) : (
                      headline
                    ))}
                </div>
              </div>
              <p
                className="p1 max-w-lg lg:max-w-none lg:w-4/5 text-center lg:text-left"
                style={{ color: "#333" }}
              >
                {body}
              </p>
            </div>
            <div className="flex justify-center lg:justify-start lg:mt-auto w-full">
              <div className="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-5 gap-6 w-full">
                <Button
                  href={ctaHref}
                  variant="primary"
                  size="lg"
                  className="w-full col-start-2 col-span-4 md:col-start-2 md:col-span-4 md:w-full lg:w-auto lg:col-start-auto lg:col-span-3"
                >
                  {ctaText}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4 md:col-span-8 lg:col-span-7 h-[544px]">
          <div
            className="relative w-full h-full"
            style={{ backgroundColor: "#311E41" }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[7px] z-10"
              style={{
                background:
                  "linear-gradient(to right, #E36A38 0%, #E36A38 22%, #874E9F 22%, #874E9F 86%, #462458 86%, #462458 100%)",
              }}
            />
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Grid>
    </section>
  );
}
