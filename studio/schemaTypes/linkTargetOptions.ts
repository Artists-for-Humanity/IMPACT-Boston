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
      {title: 'About Impact', value: '/about'},
      {title: 'Board and Staff', value: '/board-and-staff'},
      {title: 'Resources', value: '/resources'},
      {title: 'Guide for Abuse Survivors', value: '/resources/abuse-survivors'},
      {title: 'Blog', value: '/blog'},
      {title: 'Accessibility', value: '/accessibility'},
    ],
  },
  {
    title: 'Programs',
    slug: 'programs',
    pages: [
      {title: 'Public Classes', value: '/public-classes'},
      {title: 'Schools & Colleges', value: '/schools-and-colleges'},
      {title: 'People With Disabilities', value: '/people-with-disabilities'},
      {title: 'Ability', value: '/people-with-disabilities/ability'},
      {title: 'ASAP', value: '/people-with-disabilities/asap'},
      {title: 'Abuse Prevention', value: '/people-with-disabilities/abuse-prevention'},
      {title: 'De-Escalation', value: '/de-escalation'},
      {title: 'Community Organizations', value: '/community-organizations'},
      {title: 'Workplace Programs', value: '/workplace-programs'},
      {title: 'Know Your Rights', value: '/know-your-rights'},
      {title: 'Healthy Relationships', value: '/healthy-relationships'},
    ],
  },
  {
    title: 'Learn More',
    slug: 'learn-more',
    pages: [
      {title: 'Fact Check Fridays', value: '/fact-check-fridays'},
      {title: 'Books by Meg Stone', value: '/books-by-meg-stone'},
      {title: 'Press', value: '/press'},
      {title: 'Empowerment Self-Defense', value: '/what-is-empowerment-self-defense'},
    ],
  },
] as const

export const internalPageOptions = internalPageGroups.flatMap((group) =>
  group.pages.map((page) => {
    const isSubPage = page.value.split('/').filter(Boolean).length > 1
    const title = isSubPage
      ? `${group.title} / ↳ ${page.title}`
      : `${group.title} / ${page.title}`
    return {title, value: page.value}
  }),
)

export const linkTypeOptions = [
  {title: 'URL', value: 'url'},
  {title: 'Internal link', value: 'internal'},
  {title: 'Blog post', value: 'blogPost'},
  {title: 'Email', value: 'email'},
  {title: 'File', value: 'asset'},
] as const

export type LinkTargetType = (typeof linkTypeOptions)[number]['value']

/** Maps each internal page route to its Sanity document _id */
export const pagePathToDocId: Record<string, string> = {
  '/': 'landingPage',
  '/about': 'aboutImpactPage',
  '/accessibility': 'accessibility',
  '/blog': 'blog',
  '/board-and-staff': 'boardAndStaff',
  '/books-by-meg-stone': 'booksByMegStone',
  '/community-organizations': 'communityOrganizations',
  '/de-escalation': 'deEscalation',
  '/what-is-empowerment-self-defense': 'empowerment',
  '/fact-check-fridays': 'factCheckFriday',
  '/healthy-relationships': 'healthyRelationships',
  '/know-your-rights': 'knowYourRights',
  '/people-with-disabilities': 'disabilitiesPage',
  '/people-with-disabilities/ability': 'abilityPage',
  '/people-with-disabilities/abuse-prevention': 'AbusePreventionPage',
  '/people-with-disabilities/asap': 'ASAPPage',
  '/press': 'press',
  '/public-classes': 'publicClassesPage',
  '/resources': 'resources',
  '/resources/abuse-survivors': 'abuseSurvivorsPage',
  '/schools-and-colleges': 'schoolsAndCollegesPage',
  '/workplace-programs': 'workplacePrograms',
}
