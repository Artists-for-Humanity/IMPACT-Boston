import { stegaClean } from "next-sanity";

export type CmsLinkTarget = {
  _type?: "linkTarget" | string | null;
  type?: "asset" | "blogPost" | "email" | "internal" | "url" | string | null;
  anchor?: string | null;
  url?: string | null;
  internalPath?: string | null;
  blogPost?: {
    title?: string | null;
    slug?: string | null;
  } | null;
  email?: string | null;
  file?: {
    asset?: {
      url?: string | null;
      originalFilename?: string | null;
    } | null;
  } | null;
  openInNewTab?: boolean | null;
};

export type ResolvedCmsLink = {
  href?: string;
  openInNewTab?: boolean;
};

/** Redirect legacy camelCase CMS-stored paths to new kebab-case slugs */
const LEGACY_PATH_MAP: Record<string, string> = {
  "/AboutImpact": "/about",
  "/BoardAndStaff": "/board-and-staff",
  "/BooksByMegStone": "/books-by-meg-stone",
  "/PublicClasses": "/public-classes",
  "/SchoolsAndColleges": "/schools-and-colleges",
  "/PeopleWithDisabilities": "/people-with-disabilities",
  "/PeopleWithDisabilities/Ability": "/people-with-disabilities/ability",
  "/PeopleWithDisabilities/ASAP": "/people-with-disabilities/asap",
  "/PeopleWithDisabilities/AbusePrevention": "/people-with-disabilities/abuse-prevention",
  "/CommunityOrganizations": "/community-organizations",
  "/WorkplacePrograms": "/workplace-programs",
  "/KnowYourRights": "/know-your-rights",
  "/De-escalation": "/de-escalation",
  "/HealthyRelationships": "/healthy-relationships",
  "/FactCheckFriday": "/fact-check-fridays",
  "/Empowerment": "/what-is-empowerment-self-defense",
  "/Blog": "/blog",
  "/Press": "/press",
  "/Accessibility": "/accessibility",
  "/Resources": "/resources",
  "/Resources/AbuseSurvivors": "/resources/abuse-survivors",
};

export function resolveCmsLink(
  target?: CmsLinkTarget | null,
  fallbackHref?: string | null,
): ResolvedCmsLink {
  const type = stegaClean(target?.type)?.trim();
  const fallback = clean(fallbackHref);

  if (!target || !type) {
    return {
      href: fallback,
      openInNewTab: shouldOpenInNewTab(fallback),
    };
  }

  if (type === "asset") {
    const href = clean(target.file?.asset?.url);

    return {
      href: href || fallback,
      openInNewTab: target.openInNewTab ?? true,
    };
  }

  if (type === "email") {
    const email = clean(target.email);

    return { href: email ? `mailto:${email}` : fallback };
  }

  if (type === "internal") {
    const raw = clean(target.internalPath) || fallback;
    const base = raw ? (LEGACY_PATH_MAP[raw] ?? raw) : raw;
    const anchor = clean(target.anchor);
    return { href: base && anchor ? `${base}#${anchor}` : base };
  }

  if (type === "blogPost") {
    const slug = clean(target.blogPost?.slug);

    return { href: slug ? `/blog/${slug}` : fallback };
  }

  if (type === "url") {
    return {
      href: clean(target.url) || fallback,
      openInNewTab: target.openInNewTab ?? true,
    };
  }

  return {
    href: fallback,
    openInNewTab: shouldOpenInNewTab(fallback),
  };
}

export function resolveCmsHref(
  target?: CmsLinkTarget | null,
  fallbackHref?: string | null,
) {
  return resolveCmsLink(target, fallbackHref).href;
}

function clean(value?: string | null) {
  return stegaClean(value)?.trim() || undefined;
}

function shouldOpenInNewTab(href?: string) {
  if (!href) return undefined;

  return (
    /^https?:\/\//i.test(href) ||
    /\.(pdf|docx?|pptx?|xlsx?|csv|zip)(\?|#|$)/i.test(href)
  );
}
