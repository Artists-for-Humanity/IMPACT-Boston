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
  dataAttributes?: {
    articleAuthor?: string;
    articleDescription?: string;
    articleTitle?: string;
    calloutText?: string;
    linkText?: string;
  };
};

export default function ArticleCallout({
  article,
  calloutText,
  dataAttributes,
}: ArticleCalloutProps) {
  return (
    <section className="bg-bg-lavender">
      <Grid className="items-start gap-y-8 md:gap-y-8 lg:gap-x-8">
        <h2
          className="h3 col-span-full text-black lg:col-span-6 lg:pt-2"
          data-sanity={dataAttributes?.calloutText}
        >
          {calloutText}
        </h2>

        <article className="col-span-full flex min-h-[365px] flex-col border border-line-divider bg-white p-8 md:min-h-[280px] lg:col-span-5 lg:col-start-8 lg:min-h-[412px]">
          <h3
            className="sub-1 text-black"
            data-sanity={dataAttributes?.articleTitle}
          >
            {article.title}
          </h3>

          <p
            className="p2 mt-8 text-black md:mt-7 lg:mt-8"
            data-sanity={dataAttributes?.articleDescription}
          >
            {article.description}
          </p>

          {article.author ? (
            <p
              className="p2 mt-6 text-black"
              data-sanity={dataAttributes?.articleAuthor}
            >
              {article.author}
            </p>
          ) : null}

          <a
            className="link mt-auto self-start text-secondary underline transition hover:text-primary"
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
