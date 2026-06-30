// import Hero2 from "@/components/Hero/Hero2";
// import SideTabs from "@/components/TabsPanel/SideTabs";
// import Grid from "@/components/common/Grid";
// import ContentDouble from "@/components/Content/Double";

// const virginiaAsapTrainers = [
//   {
//     name: "Bethann Jones",
//     organization: "Henrico County Public Schools",
//     contact: "bfjones1@henrico.k12.va.us",
//   },
//   {
//     name: "Janice Olson",
//     organization: "Chesterfield Parks and Recreation",
//     contact: "olsonj@chesterfield.gov",
//   },
//   {
//     name: "AJ McCage",
//     organization: "Henrico Parks and Recreation",
//     contact: "mcc159@henrico.gov",
//   },
//   {
//     name: "Lauren J Pisciotta",
//     organization: "Henrico County Public Schools",
//     contact: "ljpisciotta@henrico.k12.va.us",
//   },
//   {
//     name: "Scott Corwin",
//     organization: "Sportable",
//     contact: "socorwin@aol.com",
//   },
//   {
//     name: "Madison Flores",
//     organization: "Sportable",
//     contact: "madison@sportable.org",
//   },
//   {
//     name: "Abbey Tomchik",
//     organization: "Sportable",
//     contact: "abbey@sportable.org",
//   },
//   {
//     name: "Morgan Kazelskis",
//     organization: "Sportable",
//     contact: "kazelskisme@vcu.edu",
//   },
//   {
//     name: "Kloe Ward",
//     organization: "Sportable",
//     contact: "kloe@sportable.org",
//   },
//   {
//     name: "Sydney Griffin",
//     organization: "Jacob's Chance",
//     contact: "sgriffin@jacobschance.org",
//   },
//   {
//     name: "Taylor Covington",
//     organization: "Jacob's Chance",
//     contact: "covingtonte@vcu.edu",
//   },
//   {
//     name: "Holly Lynch",
//     organization: "Jacob's Chance",
//     contact: "lynchahz@vcu.edu",
//   },
//   {
//     name: "Catherine Papadopoulou",
//     organization: "Jacob's Chance",
//     contact: "cpapadopoulou@jacobschance.org",
//   },
//   {
//     name: "Amy Smith",
//     organization: "Sportable",
//     contact: "amy@sportable.org",
//   },
//   {
//     name: "Hannah Smith",
//     organization: "Sportable",
//     contact: "hannah@sportable.org",
//   },
//   {
//     name: "Mary-Parker White",
//     organization: "Sportable",
//     contact: "maryparkerbw@gmail.com",
//   },
//   {
//     name: "Michelle Page",
//     organization: "Sportable",
//     contact: "michelle@sportable.org",
//   },
//   {
//     name: "Casey Cook",
//     organization: "Sportable",
//     contact: "casey@sportable.org",
//   },
//   {
//     name: "Mandy Marchiano",
//     organization: "Sportable",
//     contact: "mdmarchiano@aol.com",
//   },
//   {
//     name: "Laura Bennett",
//     organization: "Sportable",
//     contact: "laura@sportable.org",
//   },
//   {
//     name: "Keagan Angevin",
//     organization: "Sportable",
//     contact: "keagan@sportable.org",
//   },
//   {
//     name: "Ashley Keesler-Young",
//     organization: "Sportable",
//     contact: "ashley.keesler@gmail.com",
//   },
//   {
//     name: "David Robbins",
//     organization: "Sportable",
//     contact: "david@sportable.org",
//   },
//   {
//     name: "Abbie Wright",
//     organization: "Sportable",
//     contact: "abbie@sportable.org",
//   },
//   {
//     name: "Brandon Rush",
//     organization: "Sportable",
//     contact: "brushod@gmail.com",
//   },
//   {
//     name: "Maria Altonen",
//     organization: "VA Department of Health",
//     contact: "maria.altonen@vdh.virginia.gov",
//   },
//   {
//     name: "Shep Roeper",
//     organization: "Beyond Boundaries",
//     contact: "shep@beyondboundariesrva.org",
//   },
//   {
//     name: "Katie McIernan",
//     organization: "Beyond Boundaries",
//     contact: "katie@beyondboundariesrva.org",
//   },
//   {
//     name: "Kate Mardigian",
//     organization: "Jacob's Chance",
//     contact: "kmardigian@jacobschance.org",
//   },
//   {
//     name: "Brooke Hsieh",
//     organization: "Jacob's Chance",
//     contact: "bhsieh@jacobschance.org",
//   },
//   {
//     name: "Diane Gallegos",
//     organization: "The Arc of Hanover",
//     contact: "diane@thearcofhanover.org",
//   },
//   {
//     name: "Sherri Lynn Lanning",
//     organization: "The Arc of Hanover",
//     contact: "sherri@thearcofhanover.org",
//   },
// ];

// const asapTrainers = [
//   {
//     state: "Arizona",
//     name: "Brielle Carter",
//     organization: "Ability360 Sports & Fitness Center",
//     contact: "briellec@ability360.org, (602) 626-7250",
//   },
//   {
//     state: "California",
//     name: "Daniel (DJ) Horner",
//     organization: "United States Adaptive Recreation Center",
//     contact: "dj@usarc.org, (909)-584-0269",
//   },
//   {
//     state: "California",
//     name: "Emily Hammond",
//     organization: "United States Adaptive Recreation Center",
//     contact: "emily@usarc.org, (909)-584-0269",
//   },
//   {
//     state: "Colorado",
//     name: "Chris Werhane",
//     organization: "Adaptive Adventures",
//     contact: "chris@AdaptiveAdventures.org, (505) 690-9103",
//   },
//   {
//     state: "Colorado",
//     name: "Kayla Berry",
//     organization: "We Are Safer Together LLC",
//     contact: "wearesafertogether@gmail.com, (720) 445-5778",
//   },
//   {
//     state: "Colorado",
//     name: "Krista Hanley",
//     organization: "We Are Safer Together LLC",
//     contact: "wearesafertogether@gmail.com, (720) 445-5778",
//   },
//   {
//     state: "Colorado",
//     name: "Angela Hemmen",
//     organization: "Wounded Warrior Project",
//     contact: "ahemmen@woundedwarriorproject.org",
//   },
//   {
//     state: "Colorado",
//     name: "Randa Osman",
//     organization: "Wounded Warrior Project",
//     contact: "rosman@woundedwarriorproject.org",
//   },
//   {
//     state: "Colorado",
//     name: "Lacey Staehs",
//     organization: "United States Olympic & Paralympic Committee",
//   },
//   {
//     state: "Colorado",
//     name: "Samantha Bauer",
//     organization: "USA Archery",
//   },
//   {
//     state: "Florida",
//     name: "Nan Prevost",
//     organization: "Remember Me NFP",
//     contact: "(727) 688-4544",
//   },
//   {
//     state: "Illinois",
//     name: "Breanna Bertacchi",
//     organization: "Out Our Front Door",
//     contact: "breanna@oofd.org",
//   },
//   {
//     state: "Maryland",
//     name: "Ryan Semke",
//     organization: "Move United",
//     contact: "rsemke@moveunitedsport.org",
//   },
//   {
//     state: "Nevada",
//     name: "Ed Price",
//     organization: "Trail Access Project",
//     contact: "ed@trailaccessproject.org",
//   },
//   {
//     state: "New Hampshire",
//     name: "Crystal Shakan",
//     organization: "Northeast Passage: University of NH",
//     contact: "crystal.skahan@unh.edu",
//   },
//   {
//     state: "New Jersey",
//     name: "Mark Bogosian",
//     organization: "Christopher & Dana Reeve Foundation",
//     contact: "mbogosian@christopherreeve.org",
//   },
//   {
//     state: "New Jersey",
//     name: "Kyle Marrs",
//     organization: "Christopher & Dana Reeve Foundation",
//   },
//   {
//     state: "New York",
//     name: "Jennifer O'Brien",
//     organization: "American Special Hockey Association",
//     contact: "ASHA@specialhockey.org",
//   },
//   {
//     state: "New York",
//     name: "Danielle Yacko",
//     organization: "Endeavor Therapeutic Horsemanship",
//     contact: "danielle.yacko@endeavorth.org, (914) 241-0211",
//   },
//   {
//     state: "Pennsylvania",
//     name: "Kati Brennan",
//     organization: "Philadelphia City Rowing",
//     contact: "kati.brennan@gmail.com, (917) 361-9799",
//   },
//   {
//     state: "Texas",
//     name: "Marielle Deckard",
//     organization: "Cerebral Palsy Awareness Transition Hope (CPATH)",
//     contact: "marielle@cpathtexas.org",
//   },
//   {
//     state: "Texas",
//     name: "Laura Bachtel",
//     organization: "Cerebral Palsy Awareness Transition Hope (CPATH)",
//     contact: "laura.bachtel@pfisd.net",
//   },
//   {
//     state: "Texas",
//     name: "Amy Thompson",
//     organization: "Cerebral Palsy Awareness Transition Hope (CPATH)",
//     contact: "amy@cpathtexas.org",
//   },
//   {
//     state: "Texas",
//     name: "Kelli Croll",
//     organization: "Cerebral Palsy Awareness Transition Hope (CPATH)",
//     contact: "kelli@cpathtexas.org",
//   },
//   {
//     state: "Texas",
//     name: "Victoria Polega",
//     organization: "Cerebral Palsy Awareness Transition Hope (CPATH)",
//     contact: "victoria@cpathtexas.org",
//   },
//   {
//     state: "Texas",
//     name: "Coty DeLacretaz",
//     organization: "Sun Dragon Martial Arts & Self-Defense, NFP",
//     contact: "coty@sundragon.org",
//   },
//   {
//     state: "Texas",
//     name: "Tasca Shadix",
//     organization: "Sun Dragon Martial Arts & Self-Defense, NFP",
//     contact: "tshadix@gmail.com",
//   },
//   {
//     state: "Texas",
//     name: "Erin Doss",
//     organization: "Dell Children's Ascension",
//     contact: "ez.doss@gmail.com",
//   },
//   {
//     state: "Texas",
//     name: "Bianca Nguyen",
//     organization: "Texas Workforce Commission - Chris Cole Rehab Center",
//     contact: "bianca.nguyen@twc.texas.gov",
//   },
//   {
//     state: "Texas",
//     name: "Kristen Valdez",
//     organization: "Austin ISD",
//     contact: "kristen.valdez@austinisd.org",
//   },
//   {
//     state: "Texas",
//     name: "Christine Scott",
//     organization: "Caliber Kids",
//     contact: "christinewscott@gmail.com",
//   },
//   ...virginiaAsapTrainers.map((trainer) => ({
//     ...trainer,
//     state: "Virginia",
//   })),
//   {
//     state: "Wisconsin",
//     name: "Samantha Gracz",
//     organization: "Clement J. Zablocki VA Medical Center",
//     contact: "sam@wasa.org, (414) 430-6543",
//   },
// ];

// export default function PeopleWithDisabilities() {
//   return (
//     <>
//       <Hero2
//         title="ASAP : Adaptive Sports Abuse Prevention"
//         description="Interactive, specialized trainings for people with disabilities to learn how to protect themselves."
//       />
//       <ContentDouble
//         cards={[
//           {
//             description: "IMPACT Challenging Conversations",
//             showImageGradient: true,
//             showImagePlaceholder: true,
//           },
//           {
//             description: "IMPACT Challenging Conversations Follow Up Video",
//             showImageGradient: true,
//             showImagePlaceholder: true,
//           },
//         ]}
//       />

//       <SideTabs
//         tabs={[
//           {
//             label: "About ASAP",
//             content: [
//               {
//                 type: "heading",
//                 text: "Abuse Prevention Training for Adaptive Sports Programs",
//               },
//               {
//                 type: "paragraph",
//                 bold: true,
//                 text: "People with disabilities are more likely to experience sexual violence, yet athletes with disabilities are too often left out of the conversation about sport and prevention.",
//               },
//               {
//                 type: "paragraph",
//                 text: "Adaptive Sports Abuse Prevention (ASAP) is one of the few curricula designed specifically for coaches, trainers, volunteers and leaders of programs that work with athletes with disabilities. This conference will equip participants to teach the 5-session curriculum within their organizations.",
//               },
//             ],
//           },
//           {
//             label: "Learnings",
//             content: [
//               {
//                 type: "heading",
//                 text: "Through interactive exercises and analysis of news stories, participants learn to:",
//               },
//               {
//                 type: "bullets",
//                 bold: true,
//                 items: [
//                   "Recognize abuse and sexual misconduct.",
//                   "Interrupt unsafe or inappropriate interactions that could escalate to abuse.",
//                   "Think critically and productively about safe touch and healthy relationships.",
//                   "Report sexual abuse and collaborate with a local rape crisis center.",
//                 ],
//               },
//             ],
//           },
//           {
//             label: "ASAP Trainers",
//             content: [
//               {
//                 type: "heading",
//                 text: "Certified ASAP Trainers",
//               },
//               {
//                 type: "trainerList",
//                 state: "Virginia",
//                 sortLabel: "Alphabetically",
//                 items: asapTrainers,
//               },
//             ],
//           },
//         ]}
//       />
//       <ArticleCallout
//         heading="For more on what differentiates empowerment self-defense from other approaches, read this blog post from Martha Thompson at IMPACT Chicago."
//         article={{
//           title: "Is it Empowerment Self-Defense?",
//           description:
//             "A checklist comparing non-empowerment self-defense programs to true empowerment self-defense (ESD) programs across three areas, philosophy, teaching approach, and methodology. Showing what genuine ESD looks like versus programs that fall short.",
//           author: "Martha Thompson",
//           href: "#",
//           linkText: "Read Full Article here.",
//         }}
//       />
//     </>
//   );
// }

// type ArticleCalloutProps = {
//   heading: string;
//   article: {
//     title: string;
//     description: string;
//     author: string;
//     href: string;
//     linkText: string;
//   };
// };

// function ArticleCallout({ heading, article }: ArticleCalloutProps) {
//   return (
//     <section className="bg-bg-lavender">
//       <Grid>
//         <div className="col-span-full lg:col-span-6">
//           <h2 className="h3">{heading}</h2>
//         </div>

//         <article className="col-span-full border border-line-divider bg-white p-6 md:p-8 lg:col-start-8 lg:col-span-5">
//           <div className="flex min-h-72 flex-col justify-between gap-8">
//             <div className="flex flex-col gap-5">
//               <h3 className="sub-1">{article.title}</h3>
//               <p className="p2 text-grey">{article.description}</p>
//               <p className="p2 text-grey">{article.author}</p>
//             </div>

//             <a
//               href={article.href}
//               className="p2 text-secondary underline underline-offset-2"
//             >
//               {article.linkText}
//             </a>
//           </div>
//         </article>
//       </Grid>
//     </section>
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

const ASAP_PAGE_ID = "ASAPPage";

export default async function ASAP() {
  const { isEnabled } = await draftMode();
  const data = await getCmsPageData(ASAP_PAGE_ID, isEnabled);

  return (
    <CmsPage
      blocks={getCmsPageBlocks(data, DEFAULT_CMS_PAGE_BLOCKS)}
      data={data}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}