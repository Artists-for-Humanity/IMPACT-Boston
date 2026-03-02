import HeroSection from "@/components/sections/Hero/HeroSection";
import HeroHeadline, { HeroHeadlinePart } from "@/components/sections/Hero/HeroHeadline";

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
    </main>
  );
}