import TestimonialsCarousel from "@/components/Highlights/Testimonials/Carousel";
import ParticipantSpotlight from "@/components/Highlights/Testimonials/ParticipantSpotlight";
import {
  isSpotlightTestimonialsBlock,
  resolveSpotlightTestimonial,
} from "@/cms/normalize/blocks/testimonials";
import type { CmsTestimonialsBlock } from "@/cms/types/blocks";
import type { CmsBlockFallbacks } from "@/cms/types/page";
import {
  extendPath,
  getArrayItemPath,
  getFieldDataAttribute,
  type CmsDataAttribute,
  type CmsFieldPath,
} from "@/cms/visualEditing";

type TestimonialsBlockProps = {
  blockPath: CmsFieldPath;
  dataAttribute?: CmsDataAttribute;
  fallback?: CmsBlockFallbacks["testimonials"];
  section: CmsTestimonialsBlock;
};

export default function TestimonialsBlock({
  blockPath,
  dataAttribute,
  fallback,
  section,
}: TestimonialsBlockProps) {
  const resolvedSection = {
    ...section,
    authorPrefix: section.authorPrefix ?? fallback?.authorPrefix,
    heading: section.heading ?? fallback?.heading,
    showAuthors: section.showAuthors ?? fallback?.showAuthors,
    subtext: section.subtext ?? fallback?.subtext,
    testimonials: section.testimonials?.length
      ? section.testimonials
      : fallback?.testimonials,
    spotlightQuote: section.spotlightQuote ?? fallback?.spotlightQuote,
    spotlightAuthor: section.spotlightAuthor ?? fallback?.spotlightAuthor,
    spotlightAuthorTitle:
      section.spotlightAuthorTitle ?? fallback?.spotlightAuthorTitle,
  };

  if (isSpotlightTestimonialsBlock(resolvedSection)) {
    const spotlight = resolveSpotlightTestimonial(resolvedSection);
    const featuredTestimonialIndex =
      resolvedSection.testimonials?.findIndex((testimonial) =>
        Boolean(testimonial.quote),
      ) ?? -1;
    const featuredTestimonial =
      featuredTestimonialIndex >= 0
        ? resolvedSection.testimonials?.[featuredTestimonialIndex]
        : undefined;
    const featuredTestimonialPath = featuredTestimonial
      ? getArrayItemPath(
          blockPath,
          "testimonials",
          featuredTestimonial,
          featuredTestimonialIndex,
        )
      : undefined;

    if (!spotlight.quote) {
      return null;
    }

    return (
      <ParticipantSpotlight
        backgroundColor="bg-complementary-light"
        heading={resolvedSection.heading ?? "Participant Spotlight"}
        subheading={resolvedSection.subtext ?? undefined}
        quote={spotlight.quote}
        author={spotlight.author ?? undefined}
        authorTitle={spotlight.authorTitle ?? undefined}
        dataAttributes={{
          author: getFieldDataAttribute(
            dataAttribute,
            section.spotlightAuthor
              ? extendPath(blockPath, "spotlightAuthor")
              : extendPath(featuredTestimonialPath ?? blockPath, "author"),
          ),
          authorTitle: getFieldDataAttribute(
            dataAttribute,
            section.spotlightAuthorTitle
              ? extendPath(blockPath, "spotlightAuthorTitle")
              : extendPath(featuredTestimonialPath ?? blockPath, "authorTitle"),
          ),
          heading: getFieldDataAttribute(
            dataAttribute,
            extendPath(blockPath, "heading"),
          ),
          quote: getFieldDataAttribute(
            dataAttribute,
            section.spotlightQuote
              ? extendPath(blockPath, "spotlightQuote")
              : extendPath(featuredTestimonialPath ?? blockPath, "quote"),
          ),
          subheading: getFieldDataAttribute(
            dataAttribute,
            extendPath(blockPath, "subtext"),
          ),
        }}
        cardClassName="mx-auto max-w-[850px] gap-8 px-6 py-8 md:px-10 lg:px-12 lg:py-9"
        contentClassName="lg:gap-10"
        quoteClassName="p2 text-black"
      />
    );
  }

  return (
    <TestimonialsCarousel
      heading={resolvedSection.heading ?? undefined}
      subheading={resolvedSection.subtext ?? undefined}
      testimonials={resolvedSection.testimonials?.map((testimonial, index) => {
        const testimonialPath = getArrayItemPath(
          blockPath,
          "testimonials",
          testimonial,
          index,
        );

        return {
          ...testimonial,
          dataAttributes: {
            author: getFieldDataAttribute(
              dataAttribute,
              extendPath(testimonialPath, "author"),
            ),
            authorTitle: getFieldDataAttribute(
              dataAttribute,
              extendPath(testimonialPath, "authorTitle"),
            ),
            quote: getFieldDataAttribute(
              dataAttribute,
              extendPath(testimonialPath, "quote"),
            ),
          },
        };
      })}
      showAuthors={Boolean(resolvedSection.showAuthors)}
      authorPrefix={resolvedSection.authorPrefix ?? undefined}
      dataAttributes={{
        heading: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "heading")),
        subheading: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "subtext"),
        ),
      }}
    />
  );
}
