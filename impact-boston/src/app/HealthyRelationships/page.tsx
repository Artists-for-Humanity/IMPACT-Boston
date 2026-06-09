import Hero2 from "@/components/Hero/Hero2";
import Highlight2 from "@/components/Highlights/Highlight2";
import SideTabs from "@/components/TabsPanel/SideTabs";
import TestimonialsSection from "@/components/Highlights/Testimonials/Carousel";

const educatorTestimonials = [
  {
    quote:
      "IMPACT was incredible! They taught in a way that was fun and informational, which made it digestible for 9th graders. They broke things down and created a space where students felt safe to ask any question, which they always answered in a non-judgmental manner.",
    author: "School counselor",
  },
];

export default function HealthyRelationships() {
  return (
    <>
      <Hero2
        title="Inclusive Sex Education for Every Student"
        description="IMPACT's approach to teaching healthy relationships and sex education focuses on empowerment through education. Our interactive, discussion-based courses help students understand what is healthy and what is not (despite what TikTok says), feel confident in their values, boundaries, and identities, and develop the skills to make safe choices."
        imageSrc="/images/healthyRelationships/placeholder.png"
        imageAlt=""
      />

      <section className="bg-bg-lavender">
        <SideTabs
          tabs={[
            {
              label: "Core Values",
              content: [
                {
                  type: "heading",
                  text: "Inclusive, Preventative, Supportive",
                },
                {
                  type: "paragraph",
                  text: "Guided by our Core Values, our sex education program is LGBTQ+-inclusive, disability-inclusive, medically accurate, age appropriate, consent-focused, and responsive to the realities of young people. We do not shy away from difficult topics and instead aim to provide a safe space for students to learn about sexual health, sexual consent and coercion, power dynamics, and more. Our team will collaborate with your organization to present sex education topics in ways that fit with your school culture and values.",
                },
              ],
            },
            {
              label: "Healthy Relationships topics",
              content: [
                {
                  type: "heading",
                  text: "Healthy Relationships topics include:",
                },
                {
                  type: "bullets",
                  items: [
                    "Setting boundaries and the difference between healthy boundaries and coercive rules",
                    "Healthy communication",
                    "Healthy love vs abuse",
                    "Accountability & apologies",
                    "Sexual coercion & assault",
                    "The role of drugs & alcohol in sexual assault",
                    "Relationship & sexual power dynamics",
                    "Healthy breakups",
                  ],
                },
              ],
            },
            {
              label: "Sex Education topics",
              content: [
                {
                  type: "heading",
                  text: "Sex Education topics include:",
                },
                {
                  type: "bullets",
                  items: [
                    "Identity and orientation",
                    "Gender expression and attraction",
                    "Anatomy",
                    "Consent, communication & boundaries",
                    "STI's and condoms",
                    "Contraceptives",
                    "Sexting",
                    "Emotional realities of sex",
                  ],
                },
              ],
            },
          ]}
        />
      </section>

      <TestimonialsSection
        heading="Real Feedback From Real Educators"
        subheading=""
        testimonials={educatorTestimonials}
        showAuthors
      />

      <Highlight2
        title="We come to you"
        body={[
          "IMPACT instructors will travel to your school and work with you to design a program that best fits your educational goals and schedule. Programming schedules can vary from an intensive one-day workshop to year-long classes.",
          "We have experience collaborating with educators in Physical Education, Health, Wellness, Guidance & Counseling, English, Social Studies. We have experience teaching elective classes, extracurricular programs, or doing guest presentations in regular classes.",
        ]}
        ctaLabel="Get in Touch"
        ctaHref="mailto:info@impactboston.org"
      />
    </>
  );
}
