import Hero2 from "@/components/Hero/Hero2";
import SingleContent from "@/components/Content/Single";
import Highlight2 from "@/components/Highlights/Highlight2";
import { ROUTES } from "@/routes";

export default function PeopleWithDisabilities() {
  return (
    <>
      <Hero2
        title="People With Disabilities"
        description="IMPACT is committed to creating safe and healthy communities for people of all abilities. Ability:IMPACT is a comprehensive, organization-wide approach to abuse prevention. It combines changes in official policies with efforts to create an organizational culture that challenges abuse and bullying while supporting self-advocacy, choice, and healthy sexuality."
        youtubeUrl="https://www.youtube.com/watch?v=Ps0Rt9TU3ao"
      />

      <SingleContent
        id="ability-impact"
        backgroundColor="bg-[#FAF6FD]"
        title="Ability: IMPACT"
        paragraphs={[
          {
            text: "An empowerment approach to abuse prevention that teaches skills directly to youth and adults with disabilities, enabling them to take control of their safety. Ability:IMPACT tracks include Self-Defense & Self-Advocacy, Healthy Relationships & Healthy Sexuality, and Online Safety.",
          },
        ]}
        imageSrc="/images/disabilities/placeholder.png"
        imageAlt="placeholder"
        cta={{
          href: ROUTES.PEOPLE_WITH_DISABILITIES_ABILITY,
          text: "Know More",
        }}
      />

      <SingleContent
        id="asap"
        backgroundColor="bg-white"
        title="ASAP : Adaptive Sports Abuse Prevention"
        paragraphs={[
          {
            text: "A train-the-trainer curriculum for leaders at adaptive sports organizations to train their staff and volunteers in spotting concerning behavior, having challenging conversations that disrupt abuse, and creating policies that prevent abuse while honoring the closeness and support that make adaptive sports unique.",
          },
        ]}
        reverse
        imageSrc="/images/disabilities/placeholder.png"
        imageAlt="placeholder"
        cta={{
          href: ROUTES.PEOPLE_WITH_DISABILITIES_ASAP,
          text: "Know More",
        }}
      />

      <SingleContent
        backgroundColor="bg-[#FAF6FD]"
        title="Abuse Prevention for School & Organization Staff"
        paragraphs={[
          {
            text: "Abuse Prevention for School & Organization Staff Collaborative trainings that involve creating official policies that protect people who report suspected abuse, provide clear direction for how to respond to abuse reports, and clearly define safe and healthy interactions; staff training that helps teachers and service providers understand abuse, challenge potentially abusive behaviors, support the sexuality of people with disabilities, and provide personal care in a way that respects people’s bodies; and the creation of abuse prevention leadership teams within your community.",
          },
        ]}
        imageSrc="/images/disabilities/placeholder.png"
        imageAlt="placeholder"
      />

      <Highlight2
        title="Customized Programs"
        body={[
          "Many communities and organizations have specific safety needs or concerns. Whether you’re addressing an incident, responding to hate speech and threats, or preparing for community events, IMPACT can work with you.",
          "Our teaching team can work with community members to develop customized classes, facilitate stakeholder meetings, or create a detailed abuse prevention plan. ",
        ]}
        ctaLabel="Get in Touch"
        ctaHref={ROUTES.CONTACT}
        supportingText="Specialized training to meet your needs"
      />
    </>
  );
}
