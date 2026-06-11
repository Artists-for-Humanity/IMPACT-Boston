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
            <h3 className="h3">{heading}</h3>
            {subheading ? <p className="p2">{subheading}</p> : null}
          </div>

          <div
            className={`flex flex-col space-evenly gap-4 p-4  bg-white ${cardClassName ? cardClassName : ""}`}
          >
            <div className="flex flex-col gap-6">
              {quoteParagraphs.map((paragraph) => (
                <p className={quoteClassName} key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
            {inlineAuthorTitle && (author || authorTitle) ? (
              <p className="p2">
                {author ? <span className="font-bold">{author}</span> : null}
                {author && authorTitle ? ", " : null}
                {authorTitle}
              </p>
            ) : author || authorTitle ? (
              <>
                {author ? <p className="p2 font-bold">{author}</p> : null}
                {authorTitle ? <p className="p2">{authorTitle}</p> : null}
              </>
            ) : null}
          </div>
        </div>
      </Grid>
    </div>
  );
}
