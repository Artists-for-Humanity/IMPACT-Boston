import HeroSection from "@/components/sections/Hero/HeroSection";
import HeroHeadline, {
  HeroHeadlinePart,
} from "@/components/sections/Hero/HeroHeadline";
import CTASection from "@/components/CTASection";
import OfferingsSection from "@/components/OfferingsSection";
import HighlightsSection from "@/components/HighlightsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function IndexPage() {
  return (
    <main className="min-h-screen">
      <HeroSection
        headline={
          <HeroHeadline>
            <HeroHeadlinePart color="black">Courage </HeroHeadlinePart>
            <HeroHeadlinePart color="primary">makes</HeroHeadlinePart>
            <HeroHeadlinePart color="black"> us </HeroHeadlinePart>
            <HeroHeadlinePart customColor="#6D3386">safer</HeroHeadlinePart>
          </HeroHeadline>
        }
        body="IMPACT believes everyone has the right to be safe. Our self-defense and abuse prevention programs equip individuals and communities with practical, inclusive safety skills."
        ctaText="Learn More"
        ctaHref="/register"
        imageSrc="https://placehold.co/1200x800/311E41/ffffff?text=Hero+Image"
        imageAlt="IMPACT Boston self-defense training"
      />
      <CTASection />
      <OfferingsSection />
      <HighlightsSection />
      <TestimonialsSection />
    </main>
  );
}

// LIST THAT DONE //
// -Hero page- //
// 1. Change the font of navigation bar to bold for all devices
// 2. More accurate heightline of heropage for all devices
// -CTA Section- //
// 3. Make a text in the right side more bolder
// -Offering Section- //
// 4. Set the cursor to be a pointer when hover the left button of the section
// 5. Appearing the header for each catergories in Offering Section
// 6. More accurate heightline of Offering section for all devices.
// -Highlights Section- //
// 7. More accurate heightline of Hightlights section
// 8.
//
