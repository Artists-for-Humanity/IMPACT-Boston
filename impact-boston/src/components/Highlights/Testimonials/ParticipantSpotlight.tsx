import Grid from "../../../components/common/Grid";

interface TestimonialProps {
  heading: string;
  subheading?: string;
  quote: string;
  author?: string;
  authorTitle?: string;
  backgroundColor?: string;
  cardClassName?: string;
  contentClassName?: string;
  inlineAuthorTitle?: boolean;
  quoteClassName?: string;
  dataAttributes?: {
    author?: string;
    authorTitle?: string;
    heading?: string;
    quote?: string;
    subheading?: string;
  };
}

export default function Testimonial({
  heading,
  subheading,
  quote,
  author,
  authorTitle,
  backgroundColor,
  cardClassName,
  contentClassName,
  inlineAuthorTitle = false,
  quoteClassName = "p1",
  dataAttributes,
}: TestimonialProps) {
  const quoteParagraphs = quote
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <div className={` ${backgroundColor ? backgroundColor : ""}`}>
      <Grid>
        <div
          className={`col-span-full text-center flex flex-col space-evenly gap-8 ${contentClassName ? contentClassName : ""}`}
        >
          <div>
            <h3 className="h3" data-sanity={dataAttributes?.heading}>
              {heading}
            </h3>
            {subheading ? (
              <p className="p2" data-sanity={dataAttributes?.subheading}>
                {subheading}
              </p>
            ) : null}
          </div>

          <div
            className={`flex flex-col space-evenly gap-4 p-4  bg-white ${cardClassName ? cardClassName : ""}`}
          >
            <div className="flex flex-col gap-6">
              {quoteParagraphs.map((paragraph) => (
                <p
                  className={quoteClassName}
                  data-sanity={dataAttributes?.quote}
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {inlineAuthorTitle && (author || authorTitle) ? (
              <p className="p2">
                {author ? (
                  <span
                    className="font-bold"
                    data-sanity={dataAttributes?.author}
                  >
                    {author}
                  </span>
                ) : null}
                {author && authorTitle ? ", " : null}
                {authorTitle ? (
                  <span data-sanity={dataAttributes?.authorTitle}>
                    {authorTitle}
                  </span>
                ) : null}
              </p>
            ) : author || authorTitle ? (
              <>
                {author ? (
                  <p
                    className="p2 font-bold"
                    data-sanity={dataAttributes?.author}
                  >
                    {author}
                  </p>
                ) : null}
                {authorTitle ? (
                  <p className="p2" data-sanity={dataAttributes?.authorTitle}>
                    {authorTitle}
                  </p>
                ) : null}
              </>
            ) : null}
          </div>
        </div>
      </Grid>
    </div>
  );
}
