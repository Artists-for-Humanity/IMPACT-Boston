import Link from "next/link";

import Grid from "../common/Grid";

export type Hero3FeaturedArticle = {
  author?: string;
  date?: string;
  description: string;
  href: string;
  label?: string;
  linkText: string;
  openInNewTab?: boolean;
  title: string;
};

export type Hero3Props = {
  description: string;
  featuredArticle: Hero3FeaturedArticle;
  headline: string;
  dataAttributes?: {
    description?: string;
    featuredAuthor?: string;
    featuredDate?: string;
    featuredDescription?: string;
    featuredLabel?: string;
    featuredLinkText?: string;
    featuredTitle?: string;
    headline?: string;
  };
};

export default function Hero3({
  description,
  featuredArticle,
  headline,
  dataAttributes,
}: Hero3Props) {
  const meta = [
    featuredArticle.date ? formatDisplayDate(featuredArticle.date) : null,
    featuredArticle.author,
  ].filter(Boolean);

  return (
    <section className="bg-white">
      <Grid className="items-start gap-y-10 md:gap-y-0 lg:items-center">
        <div className="col-span-full flex flex-col gap-8 md:col-span-4 md:gap-10 lg:col-span-5 lg:gap-14">
          <div className="flex flex-col gap-8 lg:gap-14">
            <h1
              className="text-[48px] font-medium leading-[56px] tracking-[0em] text-black md:text-[64px] md:leading-[64px] lg:text-[80px] lg:leading-[80px]"
              data-sanity={dataAttributes?.headline}
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                whiteSpace: "pre-line",
              }}
            >
              {headline}
            </h1>
            <p
              className="max-w-[400px] text-[16px] font-normal leading-normal tracking-[0em] text-black lg:text-[18px]"
              data-sanity={dataAttributes?.description}
            >
              {description}
            </p>
          </div>
        </div>

        <article className="col-span-full border border-line-divider bg-complementary-light p-6 md:col-span-4 md:p-6 lg:col-start-7 lg:col-span-6 lg:min-h-[386px] lg:p-8">
          <div className="flex h-full flex-col gap-5 lg:gap-6">
            {featuredArticle.label ? (
              <span
                className="self-start rounded-[6px] border border-complementary bg-white px-2 py-0.5 text-[14px] leading-normal tracking-[0em] text-complementary lg:text-[16px]"
                data-sanity={dataAttributes?.featuredLabel}
              >
                {featuredArticle.label}
              </span>
            ) : null}

            <h2
              className="text-[18px] font-semibold leading-normal tracking-[0em] text-black"
              data-sanity={dataAttributes?.featuredTitle}
            >
              {featuredArticle.title}
            </h2>

            <p
              className="text-[16px] font-normal leading-normal tracking-[0em] text-black"
              data-sanity={dataAttributes?.featuredDescription}
            >
              {featuredArticle.description}
            </p>

            {meta.length ? (
              <p className="text-[16px] font-normal leading-normal tracking-[0em] text-light-grey-text">
                {featuredArticle.date ? (
                  <span data-sanity={dataAttributes?.featuredDate}>
                    {formatDisplayDate(featuredArticle.date)}
                  </span>
                ) : null}
                {featuredArticle.date && featuredArticle.author ? (
                  <span aria-hidden="true"> &bull; </span>
                ) : null}
                {featuredArticle.author ? (
                  <span data-sanity={dataAttributes?.featuredAuthor}>
                    {featuredArticle.author}
                  </span>
                ) : null}
              </p>
            ) : null}

            <Link
              className="link mt-auto self-start text-secondary underline transition hover:text-primary hover:no-underline"
              data-sanity={dataAttributes?.featuredLinkText}
              href={featuredArticle.href}
              rel={
                featuredArticle.openInNewTab ? "noopener noreferrer" : undefined
              }
              target={featuredArticle.openInNewTab ? "_blank" : undefined}
            >
              {featuredArticle.linkText}
            </Link>
          </div>
        </article>
      </Grid>
    </section>
  );
}

function formatDisplayDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);

  if (!year || !month || !day) {
    return date;
  }

  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
