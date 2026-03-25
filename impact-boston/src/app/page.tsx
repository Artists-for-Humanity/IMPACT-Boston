import HeroSection from "@/components/sections/Hero/HeroSection";
import HeroHeadline, {
  HeroHeadlinePart,
} from "@/components/sections/Hero/HeroHeadline";
import Grid from "@/components/common/Grid";
import CTASection from "@/components/CTASection";
import OfferingsSection from "@/components/OfferingsSection";
import HighlightsSection from "@/components/HighlightsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function IndexPage() {
  return (
    
    <Grid columns={12}>
      <main className=" col-span-4 mx-4 my-8 md:mx-8 md:col-start-1 md:col-span-8 lg:col-start-2 lg:col-span-10">
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
        {/* <CTASection />
      <OfferingsSection />
      <HighlightsSection />
      <TestimonialsSection /> */}
      </main>
    </Grid>

  );
}
