export const ROUTES = {
  HOME: "/",

  ABOUT: "/AboutImpact",
  ABOUT_IMPACT: "/AboutImpact",
  BOARD_AND_STAFF: "/BoardAndStaff",
  RESOURCES: "/Resources",
  BLOG: "/Blog",
  ACCESSIBILITY: "/Accessibility",

  PROGRAMS: "/PublicClasses",
  PUBLIC_CLASSES: "/PublicClasses",
  SCHOOLS_AND_COLLEGES: "/SchoolsAndColleges",
  PEOPLE_WITH_DISABILITIES: "/PeopleWithDisabilities",
  PEOPLE_WITH_DISABILITIES_ABILITY: "/PeopleWithDisabilities/Ability",
  PEOPLE_WITH_DISABILITIES_ASAP: "/PeopleWithDisabilities/ASAP",
  DE_ESCALATION: "/De-escalation",
  COMMUNITY_ORGANIZATIONS: "/CommunityOrganizations",
  WORKPLACE_PROGRAMS: "/WorkplacePrograms",
  KNOW_YOUR_RIGHTS: "/KnowYourRights",
  HEALTHY_RELATIONSHIPS: "/HealthyRelationships",

  LEARN_MORE: "/FactCheckFriday",
  FACT_CHECK_FRIDAY: "/FactCheckFriday",
  BOOKS_BY_MEG_STONE: "/BooksByMegStone",
  PRESS: "/Press",
  EMPOWERMENT: "/Empowerment",

  REGISTER: "/PublicClasses",
  CONTACT: "mailto:info@impactboston.org",
  DONATE: "https://impactboston.app.neoncrm.com/forms/donate",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
