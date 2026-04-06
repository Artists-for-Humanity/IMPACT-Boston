import Hero1Section from "@/components/sections/Hero-1/Hero1Section";
import Hero1Headline, {
  Hero1HeadlinePart,
} from "@/components/sections/Hero-1/Hero1Headline";
import ActionPanel from "@/components/ActionPanel";
import OfferingsSection from "@/components/OfferingsSection";
import HighlightsSection from "@/components/HighlightsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function IndexPage() {
  return (
    <main>
      <Hero1Section
        headline={
          <Hero1Headline>
            <Hero1HeadlinePart color="black">Courage </Hero1HeadlinePart>
            <Hero1HeadlinePart color="primary">makes</Hero1HeadlinePart>
            <Hero1HeadlinePart color="black"> us </Hero1HeadlinePart>
            <Hero1HeadlinePart customColor="#6D3386">safer</Hero1HeadlinePart>
          </Hero1Headline>
        }
        body="IMPACT believes everyone has the right to be safe. Our self-defense and abuse prevention programs equip individuals and communities with practical, inclusive safety skills."
        ctaText="Learn More"
        ctaHref="/register"
        imageSrc="/images/hero-place-holder-a.png"
        imageAlt="IMPACT Boston self-defense training"
      />
      <ActionPanel />
      <OfferingsSection />
      <HighlightsSection />
      <TestimonialsSection />
    </main>
  );
}
