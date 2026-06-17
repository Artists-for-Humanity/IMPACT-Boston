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
import {
  extendPath,
  getFieldDataAttribute,
  type CmsDataAttribute,
  type CmsFieldPath,
} from "@/cms/visualEditing";

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
  blockPath: CmsFieldPath;
  dataAttribute?: CmsDataAttribute;
  section: CmsHeroBlock;
  fallback?: HeroBlockFallback;
};

export default function HeroBlock({
  blockPath,
  dataAttribute,
  section,
  fallback,
}: HeroBlockProps) {
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
    const showMediaPlaceholder = Boolean(section.showImagePlaceholder);

    return (
      <Hero2
        title={
          shouldUseHeadlineParts
            ? renderHero2HeadlineParts(
                headlineParts,
                blockPath,
                dataAttribute,
              )
            : legacyTitle || "Title"
        }
        titleText={titleText}
        highlight={shouldUseHeadlineParts ? undefined : legacyHighlight}
        highlightColor={resolveHero2HighlightColor(section.highlightColor)}
        description={section.description ?? section.body ?? fallback?.body}
        dataAttributes={{
          description: getFieldDataAttribute(
            dataAttribute,
            extendPath(blockPath, section.description ? "description" : "body"),
          ),
          image: getFieldDataAttribute(
            dataAttribute,
            extendPath(
              blockPath,
              showMediaPlaceholder ? "showImagePlaceholder" : "image",
            ),
          ),
          title: shouldUseHeadlineParts
            ? undefined
            : getFieldDataAttribute(dataAttribute, extendPath(blockPath, "title")),
        }}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        showMediaPlaceholder={showMediaPlaceholder}
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
            <Hero1HeadlinePart
              color={HERO_TEXT_COLOR_MAP[color] ?? "black"}
              dataSanity={getFieldDataAttribute(
                dataAttribute,
                extendPath(
                  blockPath,
                  "headlineParts",
                  part._key ? { _key: part._key } : idx,
                  "text",
                ),
              )}
            >
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
      dataAttributes={{
        body: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "body")),
        ctaText: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "ctaText"),
        ),
        image: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "image")),
      }}
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
  headlineParts: Array<{ _key?: string | null; text: string; color?: string | null }>,
  blockPath: CmsFieldPath,
  dataAttribute?: CmsDataAttribute,
) {
  return (
    <>
      {headlineParts.map((part, idx) => {
        const color = part.color ?? "black";
        const text = part.text.trim();

        return (
          <Fragment key={idx}>
            {idx > 0 ? " " : null}
            <span
              className={HERO_TEXT_CLASS_MAP[color] ?? "text-black"}
              data-sanity={getFieldDataAttribute(
                dataAttribute,
                extendPath(
                  blockPath,
                  "headlineParts",
                  "_key" in part && part._key ? { _key: part._key } : idx,
                  "text",
                ),
              )}
            >
              {text}
            </span>
          </Fragment>
        );
      })}
    </>
  );
}
