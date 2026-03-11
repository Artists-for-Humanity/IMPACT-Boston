'use client';

// components/OfferingsSection.tsx
// Offerings section with tabbed navigation for What, How, and Why content

import { useState } from 'react';

type TabId = 'what' | 'how' | 'why';

interface Tab {
  id: TabId;
  label: string;
}

const tabs: Tab[] = [
  { id: 'what', label: 'The What' },
  { id: 'how', label: 'The How' },
  { id: 'why', label: 'The Why' },
];

export default function OfferingsSection() {
  const [activeTab, setActiveTab] = useState<TabId>('what');

  return (
    <section className="w-full bg-white flex justify-center">
      <div className="flex flex-col gap-14 w-full max-w-[1440px] px-6 md:px-20 lg:px-[120px] py-[88px]">
        <div className="grid-12-col">
          {/* Left Column - Tab Navigation */}
          <div className="col-span-12 lg:col-span-3 flex flex-row lg:flex-col gap-0 overflow-x-auto lg:overflow-visible mb-8 lg:mb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  text-left pl-2 border-l-4 transition-all duration-200 whitespace-nowrap lg:whitespace-normal
                  ${
                    activeTab === tab.id
                      ? 'border-[#E86834] font-[Poppins] text-[32px] font-medium leading-[40px] tracking-[-1.28px] text-[#311E41]'
                      : 'border-gray-200 font-[Poppins] text-[32px] font-medium leading-[40px] tracking-[-1.28px] text-[rgba(0,0,0,0.30)] hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right Column - Content */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <div className="grid">
              <div className={`space-y-6 transition-opacity duration-300 col-start-1 row-start-1 ${activeTab === 'what' ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'}`}>
                <h2 className="font-[Poppins] text-[48px] font-medium leading-tight text-[#000]">
                  What We Offer
                </h2>
                <p className="font-[IBM_Plex_Sans] text-[18px] font-normal leading-normal text-[#333]">
                  IMPACT offers self-defense education and training designed to meet the needs of
                  individuals, schools, and organizations. Our programs are open to the public and
                  tailored for a wide range of communities, with classes and workshops available throughout the year.
                </p>

                <p className="font-[IBM_Plex_Sans] text-[18px] font-normal leading-normal text-[#333]">
                  We focus on empowering participants with practical skills, confidence, and awareness to
                  protect themselves in real-world situations. Our instructors bring extensive experience
                  in safety, martial arts, and personal protection, ensuring high-quality guidance in every
                  session. In addition to traditional self-defense techniques, our curriculum covers situational
                  awareness, conflict de-escalation, and mental preparedness. Programs are suitable for all ages
                  and skill levels, from beginners to advanced practitioners. IMPACT also collaborates with
                  schools, workplaces, and community organizations to create customized workshops that address
                  specific safety concerns. Our goal is to foster safer environments and equip individuals
                  with the tools to respond effectively under pressure. Our offerings include:
                </p>
                <ul className="space-y-6 mt-8">
                  <li className="font-[IBM_Plex_Sans] text-[18px] font-normal leading-normal text-[#333]">
                    <strong> Public self-defense classes:</strong> Open to the community and held year-round. View the In-Person Class Schedule
                    for upcoming sessions or explore Class Descriptions for more details.
                  </li>
                  <li className="font-[IBM_Plex_Sans] text-[18px] font-normal leading-normal text-[#333]">
                    <strong> Customized workshops:</strong> Designed for schools, disability service organizations, community groups,
                    businesses, human service agencies, and survivors of domestic violence and
                    sexual assault. Workshops can cover topics such as Abuse prevention,
                    Self-defense, Assertive communication & Conflict de-escalation.
                  </li>
                </ul>
              </div>

              <div className={`space-y-6 transition-opacity duration-300 col-start-1 row-start-1 ${activeTab === 'how' ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'}`}>
                {/* TODO: Replace with Sanity CMS content */}
                <h2 className="font-[Poppins] text-[48px] font-medium leading-tight text-[#000]">
                  How We Do It
                </h2>
                <p className="font-[IBM_Plex_Sans] text-[18px] font-normal leading-normal text-[#333]">
                  Content coming soon. This section will explain our methodology and approach
                  to self-defense training.
                </p>
              </div>

              <div className={`space-y-6 transition-opacity duration-300 col-start-1 row-start-1 ${activeTab === 'why' ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'}`}>
                {/* TODO: Replace with Sanity CMS content */}
                <h2 className="font-[Poppins] text-[48px] font-medium leading-tight text-[#000]">
                  Why Choose IMPACT
                </h2>
                <p className="font-[IBM_Plex_Sans] text-[18px] font-normal leading-normal text-[#333]">
                  Content coming soon. This section will explain why IMPACT's approach is
                  effective and important.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
