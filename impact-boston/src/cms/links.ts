import { stegaClean } from "next-sanity";

export type CmsLinkTarget = {
  _type?: "linkTarget" | string | null;
  type?: "asset" | "blogPost" | "email" | "internal" | "url" | string | null;
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
    return { href: clean(target.internalPath) || fallback };
  }

  if (type === "blogPost") {
    const slug = clean(target.blogPost?.slug);

    return { href: slug ? `/Blog/${slug}` : fallback };
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
