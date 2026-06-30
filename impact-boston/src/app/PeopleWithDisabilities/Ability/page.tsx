// import Hero2 from "@/components/Hero/Hero2";
// import SideTabs from "@/components/TabsPanel/SideTabs";

// export default function PeopleWithDisabilities() {
//   return (
//     <>
//       <Hero2
//         title="Safety Programs for Everybody"
//         description="Ability:IMPACT Programs equips people with disabilities with the skills and confidence to navigate the world safely — from recognizing and responding to physical threats, to building healthy relationships, to staying safe online. Through evidence-based, adaptive curricula, participants learn self-defense, self-advocacy, consent, and digital literacy in formats designed specifically for their needs."
//         showMediaPlaceholder
//       />

//       <SideTabs
//         tabs={[
//           {
//             label: "Safety and Self-Defense",
//             content: [
//               {
//                 type: "heading",
//                 text: "Ability:IMPACT Safety and Self-Defense",
//               },
//               {
//                 type: "paragraph",
//                 bold: true,
//                 text: "The Ability:IMPACT curriculum (formerly called IMPACT:Ability) teaches people with disabilities to recognize unsafe situations and respond with effective self-protective behaviors. Students learn skills that are relevant to sexual violence, attempted abduction, bullying, and harassment as well as how to assert and advocate for themselves in everyday situations.",
//               },
//               {
//                 type: "paragraph",
//                 text: "IMPACT:Ability is evidence-based. An independent evaluation conducted by the Institute for Community Health found that the program increased Boston Public Schools Students’ knowledge, self-confidence and self-protective behaviors. One-year follow-up evaluation found that many of these gains were maintained.",
//               },
//               {
//                 type: "subheading",
//                 text: "Students learn,",
//               },
//               {
//                 type: "numberedList",
//                 items: [
//                   "Refusing unwanted help or attention while commuting on public transportation.",
//                   "Deflecting and escaping a bullying situation.",
//                   "Assertive communication and self-advocacy.",
//                   "Resisting inappropriate sexual touch from a caregiver or adult, including workplace sexual harassment.",
//                   "Resisting attempted sexual assault by a dating partner or peer.",
//                   "Effective communication and conflict resolution in the workplace.",
//                   "Adaptive physical self-protection skills.",
//                 ],
//               },
//             ],
//           },
//           {
//             label: "Healthy Relationships",
//             content: [
//               {
//                 type: "heading",
//                 text: "Ability:IMPACT Healthy Relationships and Sexuality Education Training",
//               },
//               {
//                 type: "subheading",
//                 text: "Topic Options: Healthy Relationships",
//               },
//               {
//                 type: "numberedList",
//                 items: [
//                   "Appropriate touch within different relationships.",
//                   "Appropriate touch within professional, public, and private settings.",
//                   "Healthy Communication",
//                   "Healthy Decision Making",
//                   "Healthy and Unhealthy Behaviors",
//                   "Consent",
//                 ],
//               },
//               {
//                 type: "subheading",
//                 text: "Topic Options: Healthy Relationships",
//               },
//               {
//                 type: "bullets",
//                 items: [
//                   "Reproductive Anatomy",
//                   "Types of Sex and Safer sex practices",
//                   "LGBTQIA",
//                   "Consent",
//                   "STIs",
//                   "Contraceptives",
//                 ],
//               },
//             ],
//           },
//           {
//             label: "Internet Safety Training",
//             content: [
//               {
//                 type: "heading",
//                 text: "Ability:IMPACT Internet Safety Training",
//               },
//               {
//                 type: "paragraph",
//                 bold: true,
//                 text: "Ability:IMPACT’s Internet Safety Training was developed in response to increased reports of people with disabilities being exploited on the Internet. Our Internet Safety Training is specifically designed to help people with disabilities learn how to stay safe while navigating Internet platforms such as social media and online dating sites. This class teaches strategies to maintain safety while staying connected, empowering people with disabilities to find new ways to connect with their peers during this time of social distancing.",
//               },
//               {
//                 type: "subheading",
//                 text: "Topic Options: Internet Safety",
//               },
//               {
//                 type: "bullets",
//                 items: [
//                   "How to connect with people on social media",
//                   "Healthy decision making online",
//                   "Recognizing red flags on the Internet",
//                   "Consent on social media",
//                   "Understanding privacy settings",
//                   "Navigating online dating",
//                 ],
//               },
//             ],
//           },
//         ]}
//       />
//     </>
//   );
// }

import { draftMode } from "next/headers";

import {
  DEFAULT_CMS_BLOCK_FALLBACKS,
  DEFAULT_CMS_PAGE_BLOCKS,
} from "@/cms/fallbacks/blocks";
import { getCmsPageBlocks } from "@/cms/normalize/page";
import { CmsPage } from "@/cms/render/CmsPage";
import { getCmsPageData } from "@/sanity/pageData";

const ABILITY_PAGE_ID = "abilityPage";

export default async function Ability() {
  const { isEnabled } = await draftMode();
  const data = await getCmsPageData(ABILITY_PAGE_ID, isEnabled);

  return (
    <CmsPage
      blocks={getCmsPageBlocks(data, DEFAULT_CMS_PAGE_BLOCKS)}
      data={data}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}
