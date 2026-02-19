import HeroSection from "@/components/sections/Hero/HeroSection";
import HeroHeadline, { HeroHeadlinePart } from "@/components/sections/Hero/HeroHeadline";

export default function IndexPage() {
  return (
    <main className="min-h-screen">
      <HeroSection
        headline={
          <HeroHeadline>
            <HeroHeadlinePart color="black">Empowering </HeroHeadlinePart>
            <HeroHeadlinePart color="primary">Communities</HeroHeadlinePart>
            <HeroHeadlinePart color="black"> Through </HeroHeadlinePart>
            <HeroHeadlinePart color="complementary">Self-Defense</HeroHeadlinePart>
          </HeroHeadline>
        }
        body="IMPACT Boston teaches practical self-defense and personal safety skills to people of all ages and abilities. Our evidence-based programs build confidence, awareness, and physical techniques to help you stay safe."
        ctaText="Get Started Today"
        ctaHref="/register"
        imageSrc="https://placehold.co/1200x800/F4F5F5/6C3789?text=Hero+Image"
        imageAlt="IMPACT Boston self-defense training"
      />
    </main>
  );
}