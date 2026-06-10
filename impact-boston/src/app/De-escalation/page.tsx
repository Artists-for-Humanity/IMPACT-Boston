import Hero2 from "@/components/Hero/Hero2";
import SideTabs from "@/components/TabsPanel/SideTabs";
import Highlight2 from "@/components/Highlights/Highlight2";
import CenterImage from "@/components/common/CenterImage";
import { ROUTES } from "@/routes";

export default function SchoolAndColleges() {
  return (
    <>
      <Hero2
        title="De-Escalate with Confidence"
        description="IMPACT De-Escalation Training teaches practical, scenario-based skills for creating and maintaining safety in high-stress situations. Built for frontline workers, educators, and community members, our training prepares you to respond not just react, when someone becomes angry, threatening, or disruptive."
        imageSrc="/images/de-escalation/placeholder.png"
        imageAlt="Group Pictures"
      />
      <SideTabs
        tabs={[
          {
            label: "How it works",
            content: [
              {
                type: "heading",
                text: "Training built around your real situations",
              },
              {
                type: "paragraph",
                text: "Every session is customized to your environment. Instructors bring scenarios drawn directly from your field — not generic roleplay, but the specific situations your team actually faces. We've developed tailored programs for human services, libraries, performance venues, emergency shelters, domestic violence programs, retail environments, and many others.",
              },
              {
                type: "subheading",
                text: "What happens in the room",
              },
              {
                type: "paragraph",
                text: "Instructors open by demonstrating realistic scenarios, modeling strategies for maintaining calm and safety so participants can see exactly what an effective response looks like before they try it themselves. From there, participants practice directly with an instructor who plays the role of the escalated person no scripts, no shortcuts, just real-time responses that mirror what your team encounters on the job.",
              },
              {
                type: "paragraph",
                text: "This hands-on approach is intentional. Reading about de-escalation and actually doing it under stress are very different skills. Experiential practice helps your nervous system learn, not just your mind so when a real situation arises, your team isn't thinking through steps. They're already responding.",
              },
            ],
          },
          {
            label: "What's covered",
            content: [
              {
                type: "heading",
                text: "A Full Toolkit for Real Situations",
              },
              {
                type: "paragraph",
                text: "De-escalation is a set of learnable, practicable skills and this training covers all of them.",
              },
              {
                type: "paragraph",
                text: "Participants learn how to recognize the early signs of escalation before a situation peaks, how to manage their own stress response so they can think clearly under pressure, and how to use body language and positioning to keep themselves and others safe. From there, the training moves into verbal strategies how to speak in a way that lowers tension rather than raises it, how to set firm boundaries without triggering defensiveness, and how to stay in control of a conversation even when the other person isn't.",
              },
              {
                type: "bullets",
                items: [
                  "Managing your stress response",
                  "Using empathy and problem solving",
                  "Understanding how trauma and systemic barriers contribute to escalation",
                  "Strategic positioning and body language to enhance physical safety",
                  "Assertive communication to diffuse hostility",
                ],
              },
            ],
          },
          {
            label: "Who it's for",
            content: [
              {
                type: "heading",
                text: "Built for your environment, not a generic classroom",
              },
              {
                type: "paragraph",
                text: "This training is for anyone whose work puts them in the room when things get hard.",
              },
              {
                type: "paragraph",
                text: "IMPACT has built customized programs for human services agencies navigating complex client relationships, library staff managing unpredictable public spaces, front-of-house teams at performance venues, intake coordinators and overnight staff at emergency shelters, advocates and residential teams at domestic violence programs, and retail environments where de-escalation happens multiple times a day.",
              },
            ],
          },
          {
            label: "How to sign up",
            content: [
              {
                type: "heading",
                text: "Getting started",
              },
              {
                type: "paragraph",
                text: "Booking a session is straightforward. IMPACT works directly with your organization to understand your environment, your team's specific challenges, and what a successful training looks like for you. From there, a customized session is scheduled at a time and format that works at your location or online via Zoom.",
              },
              {
                type: "paragraph",
                text: "Most workshops run two hours. Larger organizations often combine multiple programs into a half-day or full-day format. Group rates are available, and IMPACT has experience working with teams of all sizes, from small frontline crews to organization-wide rollouts.",
              },
              {
                type: "paragraph",
                text: "To get started, reach out to IMPACT at info@impactboston.org. Someone will follow up to talk through your needs and find the right fit.",
              },
            ],
          },
        ]}
      />

      <CenterImage
        imageSrc="/images/de-escalation/placeholder.png"
        imageAlt="Group Pictures"
      />

      <Highlight2
        title="The right training changes everything."
        body={[
          "The situations that escalate fastest are the ones no one feels prepared for. IMPACT has spent over 50 years giving people the skills to respond — not freeze — when it matters most. This training doesn't just teach your team what to do. It builds the confidence to actually do it.",
          "If your organization works with the public, this is the training that stays with people long after the session ends.",
        ]}
        ctaLabel="Book a session"
        ctaHref={ROUTES.CONTACT}
        supportingText="Subtitle or secondary line of text that helps the CTA"
      />
    </>
  );
}
