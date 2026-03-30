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
    <main>
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
        imageSrc="/images/hero-place-holder-a.png"
        imageAlt="IMPACT Boston self-defense training"
      />
      <CTASection />
      <OfferingsSection />
      <HighlightsSection />
      <TestimonialsSection />
    </main>
  );
}
