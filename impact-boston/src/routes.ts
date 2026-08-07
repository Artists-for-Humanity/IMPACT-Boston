export const ROUTES = {
  HOME: "/",

  ABOUT: "/about",
  ABOUT_IMPACT: "/about",
  BOARD_AND_STAFF: "/board-and-staff",
  RESOURCES: "/resources",
  ABUSE_SURVIVORS: "/resources/abuse-survivors",
  BLOG: "/blog",
  ACCESSIBILITY: "/accessibility",

  PROGRAMS: "/public-classes",
  PUBLIC_CLASSES: "/public-classes",
  SCHOOLS_AND_COLLEGES: "/schools-and-colleges",
  PEOPLE_WITH_DISABILITIES: "/people-with-disabilities",
  PEOPLE_WITH_DISABILITIES_ABILITY: "/people-with-disabilities/ability",
  PEOPLE_WITH_DISABILITIES_ASAP: "/asap",
  PEOPLE_WITH_DISABILITIES_ABUSE_PREVENTION: "/people-with-disabilities/abuse-prevention",
  DE_ESCALATION: "/de-escalation",
  COMMUNITY_ORGANIZATIONS: "/community-organizations",
  WORKPLACE_PROGRAMS: "/workplace-programs",
  KNOW_YOUR_RIGHTS: "/know-your-rights",
  HEALTHY_RELATIONSHIPS: "/healthy-relationships",

  LEARN_MORE: "/fact-check-fridays",
  FACT_CHECK_FRIDAY: "/fact-check-fridays",
  BOOKS_BY_MEG_STONE: "/books-by-meg-stone",
  PRESS: "/press",
  EMPOWERMENT: "/what-is-empowerment-self-defense",

  REGISTER: "/public-classes",
  CONTACT: "mailto:info@impactboston.org",
  DONATE: "https://impactboston.app.neoncrm.com/forms/donate",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
