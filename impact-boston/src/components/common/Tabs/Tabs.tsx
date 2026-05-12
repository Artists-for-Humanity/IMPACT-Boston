"use client";
import Grid from "../Grid";
import { useState } from "react";
import TabsContent from "./TabsContent";
export default function Tabs() {
  const [active, setActive] = useState(0);
  const buttons = ["The What", "The How", "The Why"];
  return (
    <Grid>
      <section className="col-span-5">
        <div className="flex">
          <ul className="flex flex-col items-start">
            {buttons.map((content, index) => (
              <button
                key={index}
                onClick={() => {
                  setActive(index);
                }}
                className={
                  active === index
                    ? "border-[#E86834] border-l-[5px] pl-2 h3 ease-linear"
                    : "border-[#DDD] text-[#0000004C] border-l-[5px] pl-2 h3"
                }
              >
                {content}
              </button>
            ))}
          </ul>
        </div>
      </section>
      <section id="Content" className="col-span-full col-start-6">
        {active === 0 && (
          <TabsContent
            heading="What We Offer"
            content={[
              {
                element: "paragraph",
                context:
                  "IMPACT offers hands-on self-defense, bystander, and de-escalation training, healthy relationships and sex education courses, and other trainings designed to meet the needs of individuals, schools, and organizations.",
              },
              {
                element: "paragraph",
                context:
                  "We focus on empowering participants with practical skills, confidence, and awareness to protect themselves in real-world situations. Our instructors bring extensive experience in safety, martial arts, and personal protection, ensuring high-quality guidance in every session. In addition to traditional self-defense techniques, our curriculum covers situational awareness, conflict de-escalation, and mental preparedness. Programs are suitable for all ages and skill levels, from beginners to advanced practitioners. IMPACT also collaborates with schools, workplaces, and community organizations to create customized workshops that address specific safety concerns. Our goal is to foster safer environments and equip individuals with the tools to respond effectively under pressure. Our offerings include:",
              },
              {
                element: "emphasize",
                phrase: "Public self-defense classes:",
                context:
                  "Open to the community and held year-round. View the In-Person Class Schedule for upcoming sessions or explore Class Descriptions for more details.",
              },
              {
                element: "emphasize",
                phrase: "Customized workshops:",
                context:
                  "Designed for schools, disability service organizations, community groups, businesses, human service agencies, and survivors of domestic violence and sexual assault. Workshops can cover topics such as Abuse Prevention, Healthy Relationships, Sex Education, Self-Defense, Assertive Communication, and Conflict De-escalation.",
              },
            ]}
          ></TabsContent>
        )}
        {active === 1 && (
          <TabsContent
            heading="How we are archieved thing"
            content={[
              {
                element: "paragraph",
                context:
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
              },
              {
                element: "bullet point",
                context: [
                  "Veni, vidi, vici",
                  "Carpe diem",
                  "Amor vincit omnia",
                  "Memento mori",
                  "Fortuna audaces iuvat",
                  "Per aspera ad astra",
                  "Alea iacta est",
                  "Dum spiro spero",
                  "Sapere aude",
                  "In vino veritas",
                ],
              },
            ]}
          ></TabsContent>
        )}
        {active === 2 && (
          <TabsContent
            heading="Why we are assemble"
            content={[
              {
                element: "paragraph",
                context:
                  "We focus on empowering participants with practical skills, confidence, and awareness to protect themselves in real-world situations. Our instructors bring extensive experience in safety, martial arts, and personal protection, ensuring high-quality guidance in every session. In addition to traditional self-defense techniques, our curriculum covers situational awareness, conflict de-escalation, and mental preparedness. Programs are suitable for all ages and skill levels, from beginners to advanced practitioners. IMPACT also collaborates with schools, workplaces, and community organizations to create customized workshops that address specific safety concerns. Our goal is to foster safer environments and equip individuals with the tools to respond effectively under pressure. Our offerings include:",
              },
              {
                element: "emphasize",
                phrase: "Customized workshops:",
                context:
                  "Designed for schools, disability service organizations, community groups, businesses, human service agencies, and survivors of domestic violence and sexual assault. Workshops can cover topics such as Abuse Prevention, Healthy Relationships, Sex Education, Self-Defense, Assertive Communication, and Conflict De-escalation.",
              },
            ]}
          ></TabsContent>
        )}
      </section>
    </Grid>
  );
}
