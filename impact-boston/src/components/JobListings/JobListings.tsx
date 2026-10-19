import Button from "@/components/common/Button";
import Grid from "@/components/common/Grid";

export type JobListingItem = {
  _key?: string | null;
  title: string;
  id: string;
  summary?: string;
  pdfUrl?: string;
  fileButtonText?: string;
  applicationLink?: string;
  dataAttributes?: {
    title?: string;
    summary?: string;
  };
};

export type JobListingsProps = {
  title?: string;
  intro?: string;
  noOpeningsMessage?: string;
  positions?: JobListingItem[];
  dataAttributes?: {
    title?: string;
    intro?: string;
  };
};

const DEFAULT_NO_OPENINGS =
  "There are no open positions right now. Check back soon.";

export default function JobListings({
  title,
  intro,
  noOpeningsMessage = DEFAULT_NO_OPENINGS,
  positions = [],
  dataAttributes,
}: JobListingsProps) {
  const hasPositions = positions.length > 0;

  return (
    <Grid>
      <section className="col-span-full flex flex-col gap-y-8">
        {(title || intro) && (
          <div className="flex max-w-[760px] flex-col gap-3">
            {title && (
              <h2
                className="h3 text-[#071526]"
                data-sanity={dataAttributes?.title}
              >
                {title}
              </h2>
            )}
            {intro && (
              <p
                className="p2 text-grey"
                data-sanity={dataAttributes?.intro}
              >
                {intro}
              </p>
            )}
          </div>
        )}

        {hasPositions ? (
          <div>
            {positions.map((position) => (
              <JobListingArticle key={position._key ?? position.id} position={position} />
            ))}
          </div>
        ) : (
          <p className="p2 text-grey">{noOpeningsMessage}</p>
        )}
      </section>
    </Grid>
  );
}

function JobListingArticle({ position }: { position: JobListingItem }) {
  return (
    <article
      id={position.id}
      className="flex flex-col gap-y-5 border-b border-line-divider pt-4 pb-8 last:border-b-0 scroll-mt-[120px]"
    >
      <h3
        className="h4 text-[#071526]"
        data-sanity={position.dataAttributes?.title}
      >
        {position.title}
      </h3>

      {position.summary && (
        <p
          className="p2 whitespace-pre-line text-black max-w-[760px]"
          data-sanity={position.dataAttributes?.summary}
        >
          {position.summary}
        </p>
      )}

      {(position.pdfUrl || position.applicationLink) && (
        <div className="flex flex-wrap gap-3">
          {position.pdfUrl && (
            <Button
              href={position.pdfUrl}
              openInNewTab
              variant="primary"
            >
              {position.fileButtonText || "View Job Description (PDF)"}
              <span className="sr-only"> — opens in a new tab</span>
            </Button>
          )}
          {position.applicationLink && (
            <Button
              href={position.applicationLink}
              openInNewTab
              variant="outline"
            >
              Apply Now
            </Button>
          )}
        </div>
      )}
    </article>
  );
}
