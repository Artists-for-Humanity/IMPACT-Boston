import Grid from "../common/Grid";

type TripleCardContent =
  | { type: "title"; value: string; line2?: string }
  | { type: "description"; value: string }
  | { type: "tags"; value: string[] };

type TripleCard = {
  bgClass?: string;
  className?: string;
  content: TripleCardContent[];
};

type TripleProps = {
  title?: string;
  subtitle?: string;
  intro?: string;
  cards: TripleCard[];
};

export default function Triple({
  title,
  subtitle,
  intro,
  cards,
}: TripleProps) {
  return (
      <Grid>
        {title ? <h2 className="h2 col-span-full">{title}</h2> : null}

        {subtitle ? <p className="p1-bold col-span-full">{subtitle}</p> : null}
        {intro ? <p className="p1 col-span-full">{intro}</p> : null}

        <div className="col-span-full md:grid md:grid-cols-3 gap-y-4 md:gap-y-0 md:gap-x-4">
          {cards.map((card, index) => (
            <TripleCardRenderer key={index} card={card} />
          ))}
        </div>
      </Grid>
  );
}

function TripleCardRenderer({ card }: { card: TripleCard }) {
  return (
    <div className={`${card.bgClass ?? ""} ${card.className ?? ""} py-8 px-4 flex flex-col gap-4`}>
      {card.content.map((item, index) => {
        switch (item.type) {
          case "title":
            return (
              <p className="sub-1" key={`${item.type}-${index}`}>
                {item.value}
                {item.line2 ? (
                  <>
                    <br />
                    {item.line2}
                  </>
                ) : null}
              </p>
            );

          case "description":
            return (
              <p className="p2" key={`${item.type}-${index}`}>
                {item.value}
              </p>
            );

          case "tags":
            return item.value.map((tag) => (
              <p
                key={tag}
                className="p2 self-start bg-white px-1.5 border border-line-divider rounded"
              >
                {tag}
              </p>
            ));

          default:
            return null;
        }
      })}
    </div>
  );
}
