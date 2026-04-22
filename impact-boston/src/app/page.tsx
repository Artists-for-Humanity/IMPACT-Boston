import Hero1, {
  Hero1Headline,
  Hero1HeadlinePart,
} from "@/components/Hero/Hero1";
import ActionPanel from "@/components/Action/ActionPanel";
import SideTabs from "@/components/TabsPanel/SideTabs";
import HighlightsSection from "@/components/HighlightsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function IndexPage() {
  return (
    <main>
      <Hero1
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
      <section className="w-full bg-white">
        <SideTabs tabs={[
          {
            label: "The What",
            content: [
              { type: "heading", text: "What We Offer" },
              { type: "paragraph", text: "IMPACT offers self-defense education and training designed to meet the needs of individuals, schools, and organizations. Our programs are open to the public and tailored for a wide range of communities, with classes and workshops available throughout the year." },
              { type: "paragraph", text: "We focus on empowering participants with practical skills, confidence, and awareness to protect themselves in real-world situations. Our instructors bring extensive experience in safety, martial arts, and personal protection, ensuring high-quality guidance in every session. In addition to traditional self-defense techniques, our curriculum covers situational awareness, conflict de-escalation, and mental preparedness. Programs are suitable for all ages and skill levels, from beginners to advanced practitioners. IMPACT also collaborates with schools, workplaces, and community organizations to create customized workshops that address specific safety concerns. Our goal is to foster safer environments and equip individuals with the tools to respond effectively under pressure. Our offerings include:" },
              { type: "list", items: [
                "Public self-defense classes: Open to the community and held year-round. View the In-Person Class Schedule for upcoming sessions or explore Class Descriptions for more details.",
                "Customized workshops: Designed for schools, disability service organizations, community groups, businesses, human service agencies, and survivors of domestic violence and sexual assault. Workshops can cover topics such as Abuse prevention, Self-defense, Assertive communication & Conflict de-escalation.",
              ]},
            ],
          },
          {
            label: "The How",
            content: [
              { type: "paragraph", text: "Content coming soon. This section will explain our methodology and approach to self-defense training." },
            ],
          },
          {
            label: "The Why",
            content: [
              { type: "paragraph", text: "Content coming soon. This section will explain why IMPACT's approach is effective and important." },
            ],
          },
        ]} />
      </section>
      <HighlightsSection />
      <TestimonialsSection />
    </main>
  );
}
