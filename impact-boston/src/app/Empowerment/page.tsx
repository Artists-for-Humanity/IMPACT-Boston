import ArticleCallout from "@/components/Content/ArticleCallout";
import Hero2 from "@/components/Hero/Hero2";
import SingleContent from "@/components/Content/Single";
import SideTabs from "@/components/TabsPanel/SideTabs";

export default function Empowerment() {
  return (
    <>
      <Hero2
        title="What is Empowerment Self-Defense?"
        description="Empowerment self-defense is an abuse and violence prevention strategy that teaches practical skills to de-escalate and interrupt threats, intimidation, and assaults. IMPACT and our collaborators see individual safety skills as part of a broad ecosystem of violence prevention and survivor healing that includes everything from emergency services to political advocacy."
      />

      <SingleContent
        backgroundColor="bg-bg-lavender"
        title="Philosophy & Values"
        paragraphs={[
          {
            text: "Sometimes called feminist self-defense, this approach gives people who are targeted for abuse and violence the skills to protect themselves without blaming them for being attacked. We understand violence as a political and social problem, not as the fault of those who are assaulted. This approach to personal safety emphasizes choice and agency. We make ourselves safer by resisting the conditions of inequity that often show up in our personal lives as coercion and control from people we know, like, and love.",
          },
        ]}
        showImagePlaceholder
      />

      <SideTabs
        tabs={[
          {
            label: "Empowered Defense",
            content: [
              {
                type: "heading",
                text: "Empowerment self-defense goes beyond physical techniques.",
              },
              {
                type: "subheading",
                text: "Offering a full range of strategies, from verbal skills to escape options, that help people protect themselves in any situation, including against those they love or who hold power over them.",
              },
              { type: "divider" },
              {
                type: "subheading",
                text: "1. More Than Self-Defense: Reclaiming Your Power",
              },
              {
                type: "paragraph",
                text: "Self-defense skills are taught to individual people because other systems and structures, like laws and community interventions, are not enough to stop assaults in the moment. Empowerment self-defense gives people practical skills to minimize harm against them. More than that, it helps them experience the power of their bodies and voices. It puts the people who are most likely to experience harassment, abuse, and violence at the center of efforts to stop it.",
              },
              { type: "divider" },
              {
                type: "subheading",
                text: "2. Self-Defense That Starts With You",
              },
              {
                type: "paragraph",
                text: "Empowerment self-defense programs present a range of self-protection strategies and invite people to choose the ones that work for them. The range includes the usual kicks and strikes that people picture when they think of self-defense, but also verbal skills and options for physical escape that don't involve hurting the other person. If we're threatened by people we love, or people who have power over us at work, physically striking them might not be viable.",
              },
            ],
          },
          {
            label: "Evidence-Based Defense",
            content: [
              {
                type: "heading",
                text: "Teaching the Right Skills to the Right People.",
              },
              {
                type: "subheading",
                text: "Even though most violence against women (and a lot of violence against people of other genders) is caused by people we know, a lot of us have been taught to be afraid of dark parking lots or empty stairwells. Because of this, empowerment self-defense teaches viable strategies for many types of harassment, threats, intimidation and assault.",
              },
              {
                type: "paragraph",
                text: "Empowerment self-defense is grounded in evidence. It focuses on the types of violence that are statistically common. In most groups of teenage girls that means sexual assault by a friend or intimate; Indigenous women are taught skills to resist abduction (in response to the crisis of missing and murdered Indigenous women); while mostly white groups are taught that abduction is rare compared to abuse from people they know. Self-defense programs that are explicit in their social and political analysis of violence have been shown by research to reduce sexual assault.",
              },
            ],
          },
          {
            label: "Core Principles",
            content: [
              {
                type: "heading",
                text: "We understand abuse and violence are social and political problems, not the fault of people who are harmed.",
              },
              {
                type: "subheading",
                text: "Options don't have to be burdens. Just because someone else's decision to harm you isn't your fault doesn't mean there is nothing you can do. We can give people skills to protect their bodies without making them responsible for someone else's decision to harm them. And we can do this without diminishing the experiences of survivors for whom fighting back was not an option.",
              },
              {
                type: "bullets",
                items: [
                  "We actively challenge victim blame.",
                  "We welcome critical thinking - challenging teachers and finding your own beliefs is more important than following rules.",
                  "Every activity in an ESD classroom is optional. We invite students to communicate their boundaries and we commit to respecting them.",
                  "We include opportunities to practice assertive communication that can be used in a range of situations, not just imminent danger.",
                  "Our classes are accessible - we teach physical techniques that are simple to learn, easy to remember, and able to be done by people of different ages, sizes, and abilities.",
                  'We do not tell anyone what they "should" or "should not" do. We offer options, techniques, and a way of analyzing situations.',
                ],
              },
            ],
          },
        ]}
      />

      <ArticleCallout
        calloutText="For more on what differentiates empowerment self-defense from other approaches, read this blog post from Martha Thompson at IMPACT Chicago."
        article={{
          title: "Is it Empowerment Self-Defense?",
          description:
            "A checklist comparing non-empowerment self-defense programs to true empowerment self-defense (ESD) programs across three areas, philosophy, teaching approach, and methodology. Showing what genuine ESD looks like versus programs that fall short.",
          author: "Martha Thompson",
          href: "#",
          linkText: "Read Full Article here.",
        }}
      />
    </>
  );
}
