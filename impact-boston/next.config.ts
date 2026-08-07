import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      // About
      { source: '/about/accessibility', destination: '/accessibility', permanent: true },
      { source: '/about/6278-2', destination: '/books-by-meg-stone', permanent: true },
      { source: '/board', destination: '/board-and-staff', permanent: true },
      { source: '/about/7034-2', destination: '/about', permanent: true },
      { source: '/about/supporterspartners', destination: '/about', permanent: true },
      { source: '/about/employment-opportunities', destination: '/about', permanent: true },
      { source: '/about/impact-instructors', destination: '/about', permanent: true },
      { source: '/our-impact', destination: '/about', permanent: true },
      { source: '/media', destination: '/press', permanent: true },
      { source: '/impact-presentations', destination: '/press', permanent: true },

      // Public Classes
      { source: '/classes', destination: '/public-classes', permanent: true },
      { source: '/in-person-classes', destination: '/public-classes', permanent: true },
      { source: '/class-descriptions', destination: '/public-classes', permanent: true },
      { source: '/classes/scholarship-opportunities', destination: '/public-classes', permanent: true },

      // Schools & Colleges
      { source: '/schools', destination: '/schools-and-colleges', permanent: true },
      { source: '/college', destination: '/schools-and-colleges', permanent: true },
      { source: '/bystanders', destination: '/schools-and-colleges', permanent: true },
      { source: '/hs', destination: '/schools-and-colleges', permanent: true },
      { source: '/ms', destination: '/schools-and-colleges', permanent: true },
      { source: '/es', destination: '/schools-and-colleges', permanent: true },
      { source: '/selfadvocacy', destination: '/schools-and-colleges', permanent: true },
      { source: '/teachertraining', destination: '/schools-and-colleges', permanent: true },
      { source: '/school-collaborators', destination: '/schools-and-colleges', permanent: true },

      // People with Disabilities
      { source: '/impactability', destination: '/people-with-disabilities', permanent: true },
      { source: '/ability-impact-programs', destination: '/people-with-disabilities/ability', permanent: true },
      { source: '/__asap', destination: '/people-with-disabilities/asap', permanent: true },
      { source: '/training_for_disability', destination: '/people-with-disabilities', permanent: true },
      { source: '/policy_development', destination: '/people-with-disabilities', permanent: true },

      // Workplace
      { source: '/workplace', destination: '/workplace-programs', permanent: true },
      { source: '/corporate', destination: '/workplace-programs', permanent: true },
      { source: '/nonprofit', destination: '/workplace-programs', permanent: true },
      { source: '/home_visitors', destination: '/workplace-programs', permanent: true },

      // Community Programs
      { source: '/community', destination: '/community-organizations', permanent: true },
      { source: '/line-drawn', destination: '/community-organizations', permanent: true },
      { source: '/community/shelterinsafety', destination: '/community-organizations', permanent: true },
      { source: '/community-collaborators', destination: '/community-organizations', permanent: true },
      { source: '/impact-organizations', destination: '/community-organizations', permanent: true },
      { source: '/shelterinsafety-es', destination: '/community-organizations', permanent: true },

      // Resources
      { source: '/resources/support-services', destination: '/resources', permanent: true },
      { source: '/7059-2', destination: '/fact-check-fridays', permanent: true },
      { source: '/stories', destination: '/', permanent: true },
      { source: '/classes/classessurvivors', destination: '/resources/abuse-survivors', permanent: true },
      { source: '/classes/classessurvivors/survivorsguide', destination: '/resources/abuse-survivors', permanent: true },
      { source: '/classes/classessurvivors/survivortestimonials', destination: '/resources/abuse-survivors', permanent: true },
      { source: '/classes/classessurvivors/therapistendorsements', destination: '/resources/abuse-survivors', permanent: true },

      // Blog — paginated and author/category archives
      { source: '/blog/page/:num', destination: '/blog', permanent: true },
      { source: '/author/:slug*', destination: '/blog', permanent: true },
      { source: '/category/:slug*', destination: '/blog', permanent: true },

      // Blog posts — direct equivalents
      { source: '/making-an-impact-in-turbulent-times', destination: '/blog/making-an-impact-in-turbulent-times', permanent: true },
      { source: '/justin-baldoni-and-the-men-who-pretend-to-care-about-us', destination: '/blog/justin-baldoni-and-the-men-who-pretend-to-care-about-us', permanent: true },
      { source: '/national-sexual-assault-conference-2025', destination: '/blog/national-sexual-assault-conference-2025', permanent: true },
      { source: '/embracing-discomfort-as-a-source-of-power', destination: '/blog/embracing-discomfort-as-a-source-of-power', permanent: true },
      { source: '/governor-healey-stop-punishing-survivors', destination: '/blog/governor-healey-stop-punishing-survivors', permanent: true },
      { source: '/note-from-the-ed-adaptive-sports-abuse-prevention', destination: '/blog/note-from-the-ed-adaptive-sports-abuse-prevention', permanent: true },
      { source: '/martial-arts-culture', destination: '/blog/martial-arts-culture', permanent: true },
      { source: '/dispatch-from-a-suit', destination: '/blog/inside-the-suit', permanent: true },
      { source: '/teen-young-adult-self-defense', destination: '/blog/teen-and-young-adult-self-defense', permanent: true },

      // Blog posts — no direct equivalent, redirect to blog index
      { source: '/reversing-the-bystander-effect-2', destination: '/blog', permanent: true },
      { source: '/survivorsmakingnoiseandmakingwaves', destination: '/blog', permanent: true },
      { source: '/safety-empowerment-for-women-of-color', destination: '/blog', permanent: true },
      { source: '/dethroning-microaggressions', destination: '/blog', permanent: true },
      { source: '/taking-self-defense-into-a-time-machine', destination: '/blog', permanent: true },
      { source: '/why-take-a-self-defense-class', destination: '/blog', permanent: true },
      { source: '/safety-tips', destination: '/blog', permanent: true },
      { source: '/green-flags', destination: '/blog', permanent: true },
      { source: '/the-calculations-we-make', destination: '/blog', permanent: true },
      { source: '/a-new-era-of-boundary-setting', destination: '/blog', permanent: true },
      { source: '/timing-is-everything', destination: '/blog', permanent: true },
      { source: '/on-working-with-young-men', destination: '/blog', permanent: true },
      { source: '/no-offense-i-dont-feel-like-talking', destination: '/blog', permanent: true },
      { source: '/anthonys-ceiling', destination: '/blog', permanent: true },
      { source: '/girls-its-okay-to-be-rejected', destination: '/blog', permanent: true },
      { source: '/every-no-is-an-act-of-repair', destination: '/blog', permanent: true },
      { source: '/note-from-the-ed-think-critically-about-safety-advice', destination: '/blog', permanent: true },
      { source: '/thank-you-for-everything-kathy-brophy-happy-retirement', destination: '/blog', permanent: true },
      { source: '/why-i-signed-my-10-year-old-up-for-self-defense-classes-hint-its-not-why-you-think-by-elaine-sanfilippo', destination: '/blog', permanent: true },
      { source: '/why-i-launched-51donorsin51days', destination: '/blog', permanent: true },
      { source: '/online-dating-a-valuable-tool-or-a-soul-sucking-swamp', destination: '/blog', permanent: true },
      { source: '/the-focus-should-be-on-consent-not-sexual-assault', destination: '/blog', permanent: true },
      { source: '/impact-online-helping-girls-have-higher-expectations', destination: '/blog', permanent: true },
      { source: '/every-voice-coalition-student-survivors-coming-together-to-demand-change', destination: '/blog', permanent: true },
      { source: '/an-interview-with-shanda-from-turtle-mountain-reservation', destination: '/blog', permanent: true },
      { source: '/survivors-teaching-survivors', destination: '/blog', permanent: true },
      { source: '/when-its-one-of-us-2', destination: '/blog', permanent: true },
      { source: '/hello-world', destination: '/blog', permanent: true },
      { source: '/survivorsmakingnoise', destination: '/blog', permanent: true },

      // Unknown numeric slugs
      { source: '/5459-2', destination: '/', permanent: true },
      { source: '/7026-2', destination: '/', permanent: true },
      { source: '/7168-2', destination: '/', permanent: true },
      { source: '/5872-2', destination: '/', permanent: true },
      { source: '/1194-2', destination: '/', permanent: true },
      { source: '/1171-2', destination: '/', permanent: true },
      { source: '/1217-2', destination: '/', permanent: true },
      { source: '/1147-2', destination: '/', permanent: true },
      { source: '/1157-2', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
