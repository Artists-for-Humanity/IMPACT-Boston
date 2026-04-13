"use client";

// components/SideTabsPanel.tsx
// Reusable side tabs panel component with tabbed navigation
// Used for the Offerings section and can be reused for other tabbed content sections

import { useState } from "react";
import Grid from "./common/Grid";

type TabId = "what" | "how" | "why";

interface Tab {
  id: TabId;
  label: string;
}

const tabs: Tab[] = [
  { id: "what", label: "The What" },
  { id: "how", label: "The How" },
  { id: "why", label: "The Why" },
];

export default function SideTabsPanel() {
  const [activeTab, setActiveTab] = useState<TabId>("what");

  return (
    <section className="w-full bg-white py-8 md:py-10 lg:py-18">
      <div className="flex flex-col gap-14 mx-4 md:mx-8 lg:mx-36">
        <Grid>
          <div className="col-span-4 md:col-span-8 lg:contents flex flex-col gap-12">
          {/* Left Column - Tab Navigation */}
          <div className="col-span-4 md:col-span-8 lg:col-span-3 flex flex-row lg:flex-col justify-evenly md:justify-start lg:justify-start gap-0 overflow-x-auto lg:overflow-visible">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex-1 cursor-pointer lg:flex-none lg:pl-2 lg:pb-2 transition-all duration-200 whitespace-nowrap lg:whitespace-normal
                  h3
                  text-center lg:text-left
                  border-solid
                  [border-left-width:0px] [border-right-width:0px] [border-top-width:0px] [border-bottom-width:3px]
                  md:[border-left-width:0px] md:[border-right-width:0px] md:[border-top-width:0px] md:[border-bottom-width:5px]
                  lg:[border-bottom-width:0px] lg:[border-right-width:0px] lg:[border-top-width:0px] lg:[border-left-width:4px]
                  [border-left-color:transparent] [border-right-color:transparent] [border-top-color:transparent]
                  md:[border-left-color:transparent] md:[border-right-color:transparent] md:[border-top-color:transparent]
                  ${
                    activeTab === tab.id
                      ? "border-b-[#E86834] md:border-b-[#E86834] lg:border-b-transparent lg:border-l-[#E86834] text-[#183B63] md:text-[#000] lg:text-[#311E41]"
                      : "border-b-gray-200 md:border-b-gray-200 lg:border-b-transparent lg:border-l-gray-200 text-[rgba(24,59,99,0.30)] md:text-[rgba(0,0,0,0.30)] lg:text-[rgba(0,0,0,0.30)] hover:text-[#183B63] md:hover:text-gray-700 lg:hover:text-gray-700 hover:border-b-gray-300 md:hover:border-b-gray-300 lg:hover:border-l-gray-300"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right Column - Content */}
          <div className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-6">
            <div className="grid">
              <div
                className={`space-y-6 transition-opacity duration-300 col-start-1 row-start-1 ${activeTab === "what" ? "opacity-100 z-10" : "opacity-0 pointer-events-none"}`}
              >
                <h2 className="h2 text-[#000]">
                  What We Offer
                </h2>
                <p className="p1 text-[#000] lg:text-[#333]">
                  IMPACT offers self-defense education and training designed to
                  meet the needs of individuals, schools, and organizations. Our
                  programs are open to the public and tailored for a wide range
                  of communities, with classes and workshops available
                  throughout the year.
                </p>

                <p className="p1 text-[#000] lg:text-[#333]">
                  We focus on empowering participants with practical skills,
                  confidence, and awareness to protect themselves in real-world
                  situations. Our instructors bring extensive experience in
                  safety, martial arts, and personal protection, ensuring
                  high-quality guidance in every session. In addition to
                  traditional self-defense techniques, our curriculum covers
                  situational awareness, conflict de-escalation, and mental
                  preparedness. Programs are suitable for all ages and skill
                  levels, from beginners to advanced practitioners. IMPACT also
                  collaborates with schools, workplaces, and community
                  organizations to create customized workshops that address
                  specific safety concerns. Our goal is to foster safer
                  environments and equip individuals with the tools to respond
                  effectively under pressure. Our offerings include:
                </p>
                <ul className="space-y-6 mt-8">
                  <li className="p1 text-[#000] lg:text-[#333]">
                    <strong> Public self-defense classes:</strong> Open to the
                    community and held year-round. View the In-Person Class
                    Schedule for upcoming sessions or explore Class Descriptions
                    for more details.
                  </li>
                  <li className="p1 text-[#000] lg:text-[#333]">
                    <strong> Customized workshops:</strong> Designed for
                    schools, disability service organizations, community groups,
                    businesses, human service agencies, and survivors of
                    domestic violence and sexual assault. Workshops can cover
                    topics such as Abuse prevention, Self-defense, Assertive
                    communication & Conflict de-escalation.
                  </li>
                </ul>
              </div>

              <div
                className={`space-y-6 transition-opacity duration-300 col-start-1 row-start-1 ${activeTab === "how" ? "opacity-100 z-10" : "opacity-0 pointer-events-none"}`}
              >
                {/* TODO: Replace with Sanity CMS content */}
                <h2 className="hidden h2 text-[#000]">
                  How We Do It
                </h2>
                <p className="p1 text-[#000] lg:text-[#333]">
                  Content coming soon. This section will explain our methodology
                  and approach to self-defense training.
                </p>
              </div>

              <div
                className={`space-y-6 transition-opacity duration-300 col-start-1 row-start-1 ${activeTab === "why" ? "opacity-100 z-10" : "opacity-0 pointer-events-none"}`}
              >
                {/* TODO: Replace with Sanity CMS content */}
                <h2 className="hidden h2 text-[#000]">
                  Why Choose IMPACT
                </h2>
                <p className="p1 text-[#000] lg:text-[#333]">
                  Content coming soon. This section will explain why IMPACT's
                  approach is effective and important.
                </p>
              </div>
            </div>
          </div>
          </div>
        </Grid>
      </div>
    </section>
  );
}
