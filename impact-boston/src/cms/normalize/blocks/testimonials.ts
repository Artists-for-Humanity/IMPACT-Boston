import type { CmsTestimonialsBlock } from "@/cms/types/blocks";

export function isSpotlightTestimonialsBlock(section: CmsTestimonialsBlock) {
  return section._type === "testimonialsSpotlightBlock";
}

export function resolveSpotlightTestimonial(section: CmsTestimonialsBlock) {
  const featuredTestimonial = section.testimonials?.find((testimonial) =>
    Boolean(testimonial.quote),
  );

  return {
    quote: section.spotlightQuote ?? featuredTestimonial?.quote ?? null,
    author: section.spotlightAuthor ?? featuredTestimonial?.author ?? null,
    authorTitle:
      section.spotlightAuthorTitle ?? featuredTestimonial?.authorTitle ?? null,
  };
}
