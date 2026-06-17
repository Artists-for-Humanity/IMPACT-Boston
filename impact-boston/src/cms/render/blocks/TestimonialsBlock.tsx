import TestimonialsCarousel from "@/components/Highlights/Testimonials/Carousel";
import ParticipantSpotlight from "@/components/Highlights/Testimonials/ParticipantSpotlight";
import {
  isSpotlightTestimonialsBlock,
  resolveSpotlightTestimonial,
} from "@/cms/normalize/blocks/testimonials";
import type { CmsTestimonialsBlock } from "@/cms/types/blocks";
import type { CmsBlockFallbacks } from "@/cms/types/page";

type TestimonialsBlockProps = {
  fallback?: CmsBlockFallbacks["testimonials"];
  section: CmsTestimonialsBlock;
};

export default function TestimonialsBlock({
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
      testimonials={resolvedSection.testimonials ?? undefined}
      showAuthors={Boolean(resolvedSection.showAuthors)}
      authorPrefix={resolvedSection.authorPrefix ?? undefined}
    />
  );
}
