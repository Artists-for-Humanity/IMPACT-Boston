
import Hero2 from '@/components/Hero/Hero2';
// import SideTabsPanel from '@/components/SideTabsPanel';
import SideTabs from '@/components/TabsPanel/SideTabs';
import ContentTriple from '@/components/Content/Triple';
import Testimonial from '@/components/Testimonials/Testimonial';
import Highlight2 from '@/components/Highlights/Highlight2';

export default function WorkplacePrograms() {
  return (
    <>
      <Hero2
        tag='Workplace Programs'
        title="De-Escalate with Confidence"
        description="IMPACT De-Escalation Training teaches practical, scenario-based skills for creating and maintaining safety in high-stress situations. Built for frontline workers, educators, and community members, our training prepares you to respond not just react, when someone becomes angry, threatening, or disruptive."
        imageSrc="/images/workplacePrograms/placeholder.png"
        imageAlt="Group Pictures"
      />
      <SideTabs
        tabs={[
          {
            label: "Corporate",
            content: [
              { type: "heading", text: "Interactive workplace workshops designed to boost employee confidence" },
              { type: "paragraph", text: "IMPACT provides fun, practical, and interactive workplace workshops designed to boost employee confidence and awareness through real-world self-defense and communication skills." },
              { type: "paragraph", text: "Employees gain strategies for setting boundaries, navigating difficult conversations, de-escalating danger, and resisting violence — making IMPACT a natural fit for corporate wellness programs or targeted safety initiatives. With flexible formats ranging from large-group demonstrations to hands-on small-group sessions, IMPACT's programs integrate seamlessly into your existing training structure." },
            ],
          },
          {
            label: "Nonprofit",
            content: [
              { type: "heading", text: "Safety training that fits how nonprofits actually work" },
              { type: "paragraph", text: "IMPACT partners with nonprofit organizations to deliver flexible, customized safety and communication training that meets the unique demands of mission-driven work. ." },
              { type: "paragraph", text:"From helping rape crisis counselors manage secondary trauma to equipping shelter workers with conflict de-escalation skills and empowering child care providers to challenge potential abusers, IMPACT tailors its programs to your organization's specific goals i.e. offering large-group demonstrations or hands-on interactive sessions that integrate seamlessly into your existing training structure." },
            ],
          },
          {
            label: "Home Visitors",
            content: [
              { type: "heading", text: "2 specialized programs for Home Visitors" },
              { type: "paragraph", text: "Home visitors face a unique challenge. You're in someone else's space, often alone, with no way to fully predict what you'll walk into. These 2 programs were built specifically for that reality." },
              { type: "subheading", text: "Verbal Self-Defense & Assertive Communication" },
              { type: "paragraph", text:"This program covers everything you need to handle tension before it becomes danger. You'll practice de-escalation strategies for diffusing hostility in the moment, boundary-setting techniques for holding your ground with confidence, and skills for navigating difficult or uncomfortable conversations without backing down. Everything is learned through realistic scenario-based practice — not lectures, not handouts." },
              { type: "paragraph", text: "Best for Teams looking to build everyday communication confidence and a strong first line of response." },
              { type: "subheading", text: "Verbal & Physical Self-Defense" },
              { type: "paragraph", text: "Everything in the verbal training, plus the physical skills to protect yourself if it ever comes to that. Physical defense is always the last resort, the goal is always to de-escalate and exit safely. But knowing you have those skills changes how you carry yourself in the field. Participants leave with more than techniques. They leave with a different kind of confidence." },
              { type: "paragraph", text: "Best for Home visitors in higher-risk environments, or organizations that want to give their teams the most complete preparation possible." },
            
            ],
          },
        ]}
      />

    <ContentTriple
      title="Workshop Options"
      subtitle="Realistic Scenarios, De-escalation Skills & Rebuilding Safety and Confidence"
      cards={[
        {
          type: "default",
          title: "Assertiveness/Boundary Setting",
          description: "Our self-defense classes simulate scenarios of threat, intimidation and violence perpetrated by strangers and people we know. Classes are taught by a team of two instructors, one of whom takes on the role of a perpetrator. They wear a full suit of body armor so students can safely defend themselves using the same force needed in a real attack.",
          bgClass: 'bg-complementary-light',
        },
        {
          type: "default",
          title: "Challenging",
          titleLine2: "Conversations",
          description: "In this interactive training, students develop the skills to engage in challenging conversations. Students learn how to remain calm when addressing difficult issues with strangers and people they know, how to successfully negotiate, and how to respond effectively to common forms of defensiveness.",
          bgClass: "bg-primary-light",
        },
        {
          type: "default",
          title: "De-escalation:",
          description: "In these workshops, instructors demonstrate realistic scenarios and strategies for staying calm and safe, which can be customized to the group’s needs. Participants practice their skills with an instructor acting as the escalating person, helping them manage stress and respond effectively in the moment. Trainings are available both in person and online through Zoom.",
          bgClass: "bg-secondary-light",
        },
      ]}
    />
    <Testimonial
      heading="Participant Spotlight"
      subheading="Hear From One of Our Participants"
      quote="Meg Stone has written a powerful, accessible, and devastatingly acute analysis of the pervasiveness of gender-based violence and why our efforts to prevent it have failed, packed with expert insight drawn from her decades-long career and practical tips to empower women and others who are targeted. The Cost of Fear moved me, enraged me, and educated me. I don't think I'll ever stop thinking about it. I wish this book weren't necessary. But until we live in a better world, get this book."
      author="Alex Marzano-Lesnevich"
      authorTitle='author of "The Fact of a Body"'
    />
    <Highlight2
      title="The right training changes everything."
      body={[
        "Most workplace incidents don't happen without warning. There are moments before tension that builds, a conversation that shifts, a situation that could go either way. IMPACT has spent over 50 years teaching people to recognize those moments and respond with confidence instead of fear.",
        "This isn't compliance training. It's the kind of preparation that changes how your employees carry themselves every day how they set boundaries, handle conflict, and show up for each other when things get hard. Teams that train with IMPACT don't just learn what to do. They leave trusting themselves to actually do it.",
      ]}
      ctaLabel="Book a session"
      ctaHref="/Sessions"
      supportingText="Custom scheduling available. Most organizations book 4–6 weeks out."
      // backgroundColor="var(--color-secondary)"
      // textColor="var(--color-secondary-light)"
    />
    </>
  );
}   


    