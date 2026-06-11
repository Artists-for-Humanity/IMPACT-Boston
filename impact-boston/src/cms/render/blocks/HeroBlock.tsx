import { Fragment } from "react";

import Hero1, {
  Hero1Headline,
  Hero1HeadlinePart,
} from "@/components/Hero/Hero1";
import Hero2 from "@/components/Hero/Hero2";
import {
  resolveHeadlineParts,
  resolveHero2HighlightColor,
  resolveHeroImageSrc,
} from "@/cms/normalize/blocks/hero";
import type { CmsHeroBlock } from "@/cms/types/blocks";
import type { HeroBlockFallback } from "@/cms/types/page";

const HERO_TEXT_COLOR_MAP: Record<
  string,
  "primary" | "secondary" | "complementary" | "black"
> = {
  primary: "primary",
  secondary: "secondary",
  custom_purple: "secondary",
  complementary: "complementary",
  black: "black",
};

type HeroBlockProps = {
  section: CmsHeroBlock;
  fallback?: HeroBlockFallback;
};

export default function HeroBlock({ section, fallback }: HeroBlockProps) {
  const headlineParts = resolveHeadlineParts(
    section.headlineParts,
    fallback?.headlineParts,
  );
  const imageAlt = section.imageAlt ?? fallback?.imageAlt ?? "";
  const imageSrc = resolveHeroImageSrc(section.image, fallback?.imageSrc);

  if (!imageSrc) {
    return null;
  }

  if (section._type === "hero2Block") {
    return (
      <Hero2
        title={
          section.title ??
          (headlineParts
            .map((part) => part.text.trim())
            .join(" ")
            .trim() ||
            "Title")
        }
        highlight={section.highlight ?? undefined}
        highlightColor={resolveHero2HighlightColor(section.highlightColor)}
        description={section.description ?? section.body ?? fallback?.body}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
      />
    );
  }

  const body = section.body ?? fallback?.body ?? "";
  const ctaText = section.ctaText ?? fallback?.ctaText ?? "";
  const ctaHref = section.ctaHref ?? fallback?.ctaHref ?? "#";

  const headline = (
    <Hero1Headline>
      {headlineParts.map((part, idx) => {
        const color = part.color ?? "black";
        const text = part.text.trim();

        return (
          <Fragment key={idx}>
            {idx > 0 ? " " : null}
            <Hero1HeadlinePart color={HERO_TEXT_COLOR_MAP[color] ?? "black"}>
              {text}
            </Hero1HeadlinePart>
          </Fragment>
        );
      })}
    </Hero1Headline>
  );

  return (
    <Hero1
      headline={headline}
      body={body}
      ctaText={ctaText}
      ctaHref={ctaHref}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
    />
  );
}
