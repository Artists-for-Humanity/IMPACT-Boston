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
  "primary" | "secondary" | "complementary" | "black" | "white"
> = {
  primary: "primary",
  secondary: "secondary",
  custom_purple: "secondary",
  complementary: "complementary",
  black: "black",
  white: "white",
};

const HERO_TEXT_CLASS_MAP: Record<string, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  custom_purple: "text-secondary",
  complementary: "text-complementary",
  black: "text-black",
  white: "text-white",
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
  const hasSectionHeadlineParts = Boolean(
    section.headlineParts?.some((part) => part?.text),
  );
  const imageAlt = section.imageAlt ?? fallback?.imageAlt ?? "";
  const imageSrc = resolveHeroImageSrc(section.image, fallback?.imageSrc);

  if (section._type === "hero2Block") {
    const legacyTitle = section.title?.trim();
    const legacyHighlight = section.highlight?.trim();
    const shouldUseHeadlineParts =
      hasSectionHeadlineParts || (!legacyTitle && !legacyHighlight);
    const titleText = shouldUseHeadlineParts
      ? getPlainHeadlineText(headlineParts)
      : [legacyTitle, legacyHighlight].filter(Boolean).join(" ") || "Title";
    const youtubeUrl = section.youtubeUrl?.trim() || undefined;

    if (!imageSrc && !youtubeUrl) {
      return null;
    }

    return (
      <Hero2
        title={
          shouldUseHeadlineParts
            ? renderHero2HeadlineParts(headlineParts)
            : legacyTitle || "Title"
        }
        titleText={titleText}
        highlight={shouldUseHeadlineParts ? undefined : legacyHighlight}
        highlightColor={resolveHero2HighlightColor(section.highlightColor)}
        description={section.description ?? section.body ?? fallback?.body}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        youtubeUrl={youtubeUrl}
        videoTitle={section.videoTitle ?? undefined}
      />
    );
  }

  if (!imageSrc) {
    return null;
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

function getPlainHeadlineText(
  headlineParts: Array<{ text: string; color?: string | null }>,
) {
  return (
    headlineParts
      .map((part) => part.text.trim())
      .filter(Boolean)
      .join(" ")
      .trim() || "Title"
  );
}

function renderHero2HeadlineParts(
  headlineParts: Array<{ text: string; color?: string | null }>,
) {
  return (
    <>
      {headlineParts.map((part, idx) => {
        const color = part.color ?? "black";
        const text = part.text.trim();

        return (
          <Fragment key={idx}>
            {idx > 0 ? " " : null}
            <span className={HERO_TEXT_CLASS_MAP[color] ?? "text-black"}>
              {text}
            </span>
          </Fragment>
        );
      })}
    </>
  );
}
