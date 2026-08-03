import Grid from "@/components/common/Grid";

export type ArticleCalloutArticle = {
  author?: string;
  description: string;
  href: string;
  linkText: string;
  openInNewTab?: boolean | null;
  title: string;
};

export type ArticleCalloutProps = {
  article: ArticleCalloutArticle;
  calloutText: string;
  calloutTextAs?: "h2" | "h3" | "p";
  calloutSubtext?: string;
  dataAttributes?: {
    articleAuthor?: string;
    articleDescription?: string;
    articleTitle?: string;
    calloutText?: string;
    calloutSubtext?: string;
    linkText?: string;
  };
};

export default function ArticleCallout({
  article,
  calloutText,
  calloutTextAs: CalloutTag = "h2",
  calloutSubtext,
  dataAttributes,
}: ArticleCalloutProps) {
  return (
    <section className="bg-bg-lavender">
      <Grid className="items-start gap-y-8 md:gap-y-8 lg:gap-x-8">
        <div className="col-span-full lg:col-span-6 lg:pt-2 flex flex-col gap-12">
          <CalloutTag
            className="h3 text-black break-words"
            data-sanity={dataAttributes?.calloutText}
          >
            {calloutText}
          </CalloutTag>

          {calloutSubtext ? (
            <p
              className="p1 text-black break-words"
              data-sanity={dataAttributes?.calloutSubtext}
            >
              {calloutSubtext}
            </p>
          ) : null}
        </div>

        <article className="col-span-full flex min-h-[365px] flex-col gap-6 border border-line-divider bg-white p-8 md:min-h-[280px] lg:col-span-5 lg:col-start-8 lg:min-h-[412px]">
          <p
            className="p1-bold text-black break-words"
            data-sanity={dataAttributes?.articleTitle}
          >
            {article.title}
          </p>

          <p
            className="p2 text-black break-words"
            data-sanity={dataAttributes?.articleDescription}
          >
            {article.description}
          </p>

          {article.author ? (
            <p
              className="p2 text-black break-words"
              data-sanity={dataAttributes?.articleAuthor}
            >
              {article.author}
            </p>
          ) : null}

          <a
            className="link mt-auto self-start text-secondary underline transition hover:text-primary break-words min-w-0 max-w-full"
            data-sanity={dataAttributes?.linkText}
            href={article.href}
            rel={article.openInNewTab ? "noopener noreferrer" : undefined}
            target={article.openInNewTab ? "_blank" : undefined}
          >
            {article.linkText}
          </a>
        </article>
      </Grid>
    </section>
  );
}
