export const internalPageGroups = [
  {
    title: 'Home',
    slug: 'home',
    pages: [{title: 'Home', value: '/'}],
  },
  {
    title: 'About',
    slug: 'about',
    pages: [
      {title: 'About Impact', value: '/AboutImpact'},
      {title: 'Board and Staff', value: '/BoardAndStaff'},
      {title: 'Resources', value: '/Resources'},
      {title: 'Guide for Abuse Survivors', value: '/Resources/AbuseSurvivors'},
      {title: 'Blog', value: '/Blog'},
      {title: 'Accessibility', value: '/Accessibility'},
    ],
  },
  {
    title: 'Programs',
    slug: 'programs',
    pages: [
      {title: 'Public Classes', value: '/PublicClasses'},
      {title: 'Schools & Colleges', value: '/SchoolsAndColleges'},
      {title: 'People With Disabilities', value: '/PeopleWithDisabilities'},
      {title: 'Ability', value: '/PeopleWithDisabilities/Ability'},
      {title: 'ASAP', value: '/PeopleWithDisabilities/ASAP'},
      {title: 'Abuse Prevention', value: '/PeopleWithDisabilities/AbusePrevention'},
      {title: 'De-escalation', value: '/De-escalation'},
      {title: 'Community Organizations', value: '/CommunityOrganizations'},
      {title: 'Workplace Programs', value: '/WorkplacePrograms'},
      {title: 'Know Your Rights', value: '/KnowYourRights'},
      {title: 'Healthy Relationships', value: '/HealthyRelationships'},
    ],
  },
  {
    title: 'Learn More',
    slug: 'learn-more',
    pages: [
      {title: 'Fact Check Fridays', value: '/FactCheckFriday'},
      {title: 'Books by Meg Stone', value: '/BooksByMegStone'},
      {title: 'Press', value: '/Press'},
      {title: 'Empowerment Self-Defense', value: '/Empowerment'},
    ],
  },
] as const

export const internalPageOptions = internalPageGroups.flatMap((group) =>
  group.pages.map((page) => ({
    title: `${group.title} / ${page.title}`,
    value: page.value,
  })),
)

export const linkTypeOptions = [
  {title: 'URL', value: 'url'},
  {title: 'Internal link', value: 'internal'},
  {title: 'Email', value: 'email'},
  {title: 'Asset', value: 'asset'},
] as const

export type LinkTargetType = (typeof linkTypeOptions)[number]['value']
