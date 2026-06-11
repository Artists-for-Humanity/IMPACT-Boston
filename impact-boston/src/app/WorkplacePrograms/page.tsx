import Hero2 from "@/components/Hero/Hero2";
// import SideTabsPanel from '@/components/SideTabsPanel';
import SideTabs from "@/components/TabsPanel/SideTabs";
import ContentTriple from "@/components/Content/Triple";
import Testimonial from "@/components/Highlights/Testimonials/ParticipantSpotlight";
import Highlight2 from "@/components/Highlights/Highlight2";
import { ROUTES } from "@/routes";

export default function WorkplacePrograms() {
  return (
    <>
      <Hero2
        title="Team Building with a Purpose"
        description="IMPACT offers fun, interactive, and practical self-defense and effective communication workshops that help employees increase their confidence and awareness. Employees can learn practical strategies to set boundaries, have challenging conversations, de-escalate potentially dangerous situations, and resist attempted violence. Whether you are addressing a specific concern or looking for an addition to your organization’s employee training program, IMPACT’s workplace programs can help."
        showMediaPlaceholder
      />
      <SideTabs
        tabs={[
          {
            label: "Corporate",
            content: [
              {
                type: "heading",
                text: "Interactive workplace workshops designed to boost employee confidence",
              },
              {
                type: "paragraph",
                text: "IMPACT provides fun, practical, and interactive workplace workshops designed to boost employee confidence and awareness through real-world self-defense and communication skills.",
              },
              {
                type: "paragraph",
                text: "Employees gain strategies for setting boundaries, navigating difficult conversations, de-escalating danger, and resisting violence — making IMPACT a natural fit for corporate wellness programs or targeted safety initiatives. With flexible formats ranging from large-group demonstrations to hands-on small-group sessions, IMPACT's programs integrate seamlessly into your existing training structure.",
              },
            ],
          },
          {
            label: "Nonprofit",
            content: [
              {
                type: "heading",
                text: "Safety training that fits how nonprofits actually work",
              },
              {
                type: "paragraph",
                text: "IMPACT partners with nonprofit organizations to deliver flexible, customized safety and communication training that meets the unique demands of mission-driven work. .",
              },
              {
                type: "paragraph",
                text: "From helping rape crisis counselors manage secondary trauma to equipping shelter workers with conflict de-escalation skills and empowering child care providers to challenge potential abusers, IMPACT tailors its programs to your organization's specific goals i.e. offering large-group demonstrations or hands-on interactive sessions that integrate seamlessly into your existing training structure.",
              },
            ],
          },
          {
            label: "Home Visitors",
            content: [
              {
                type: "heading",
                text: "2 specialized programs for Home Visitors",
              },
              {
                type: "paragraph",
                text: "Home visitors face a unique challenge. You're in someone else's space, often alone, with no way to fully predict what you'll walk into. These 2 programs were built specifically for that reality.",
              },
              {
                type: "subheading",
                text: "Verbal Self-Defense & Assertive Communication",
              },
              {
                type: "paragraph",
                text: "This program covers everything you need to handle tension before it becomes danger. You'll practice de-escalation strategies for diffusing hostility in the moment, boundary-setting techniques for holding your ground with confidence, and skills for navigating difficult or uncomfortable conversations without backing down. Everything is learned through realistic scenario-based practice — not lectures, not handouts.",
              },
              {
                type: "paragraph",
                text: "Best for Teams looking to build everyday communication confidence and a strong first line of response.",
              },
              { type: "subheading", text: "Verbal & Physical Self-Defense" },
              {
                type: "paragraph",
                text: "Everything in the verbal training, plus the physical skills to protect yourself if it ever comes to that. Physical defense is always the last resort, the goal is always to de-escalate and exit safely. But knowing you have those skills changes how you carry yourself in the field. Participants leave with more than techniques. They leave with a different kind of confidence.",
              },
              {
                type: "paragraph",
                text: "Best for Home visitors in higher-risk environments, or organizations that want to give their teams the most complete preparation possible.",
              },
            ],
          },
        ]}
      />

      <ContentTriple
        title="Workshop Options"
        subtitle="Realistic Scenarios, De-escalation Skills & Rebuilding Safety and Confidence"
        cards={[
          {
            bgClass: "bg-complementary-light",
            content: [
              { type: "title", value: "Boundary Setting" },
              {
                type: "description",
                value:
                  "Students learn practical steps to identify, communicate, and reinforce their boundaries, as well as skills to negotiate effectively. Practicing these skills in realistic scenarios gives students the opportunity to learn how to stay calm and explain their needs in situations involving strangers and people they know.",
              },
            ],
          },
          {
            bgClass: "bg-primary-light",
            content: [
              { type: "title", value: "Challenging", line2: "Conversations" },
              {
                type: "description",
                value:
                  "In this interactive training, students develop the skills to engage in challenging conversations. Students learn how to remain calm when addressing difficult issues with strangers and people they know, how to successfully negotiate, and how to respond effectively to common forms of defensiveness.",
              },
            ],
          },
          {
            bgClass: "bg-secondary-light",
            content: [
              { type: "title", value: "De-escalation:" },
              {
                type: "description",
                value:
                  "In these workshops, instructors demonstrate realistic scenarios and strategies for staying calm and safe, which can be customized to the group’s needs. Participants practice their skills with an instructor acting as the escalating person, helping them manage stress and respond effectively in the moment. Trainings are available both in person and online through Zoom.",
              },
            ],
          },
        ]}
      />
      <Testimonial
        heading="Participant Spotlight"
        subheading="Hear From One of Our Participants"
        quote="I thought the class was fantastic! I liked that there was an equal emphasis on physical presence, use of voice and awareness. Learning about statistics and the common behaviors of attackers was just as important to me as the hands on practice. The instructors were very convincing in their roles and created realistic scenarios. I’d definitely take another class if offered."
        author="Employee"
        authorTitle="Merrimack Pharmaceuticals"
      />
      <Highlight2
        title="The right training changes everything."
        body={[
          "Most workplace incidents don't happen without warning. There are moments before tension that builds, a conversation that shifts, a situation that could go either way. IMPACT has spent over 50 years teaching people to recognize those moments and respond with confidence instead of fear.",
          "This isn't compliance training. It's the kind of preparation that changes how your employees carry themselves every day how they set boundaries, handle conflict, and show up for each other when things get hard. Teams that train with IMPACT don't just learn what to do. They leave trusting themselves to actually do it.",
        ]}
        ctaLabel="Book a session"
        ctaHref={ROUTES.CONTACT}
        supportingText="Custom scheduling available. Most organizations book 4–6 weeks out."
      />
    </>
  );
}
