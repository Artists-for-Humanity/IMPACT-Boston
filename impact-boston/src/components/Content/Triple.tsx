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
      <Grid className="sm:gap-8 md:gap-8 lg:gap-y-10">
        <div className="col-span-full md:col-span-8 flex flex-col gap-2">
        {title ? <h3 className="h3 ">{title}</h3> : null}

        {subtitle ? <p className="p2">{subtitle}</p> : null}
        </div>
        {intro ? <p className="p1 col-span-full md:col-span-8">{intro}</p> : null}

        <div className="col-span-full grid  gap-y-5 md:gap-y-6  lg:grid-cols-3 lg:gap-x-6">
          {cards.map((card, index) => (
            <TripleCardRenderer key={index} card={card} />
          ))}
        </div>
      </Grid>
  );
}

function TripleCardRenderer({ card }: { card: TripleCard }) {
  return (
    <div className={`${card.bgClass ?? ""} ${card.className ?? ""} p-5 md:py-8 md:px-4 lg:p-8 flex flex-col justify-between gap-5 md:gap-6 lg:gap-0 lg:h-[360px]`}>
      {card.content.map((item, index) => {
        switch (item.type) {
        case "title":
        return (
          <p className="sub-1" key={`${item.type}-${index}`}>
            {item.value}
            {item.line2 ? (
              <>
                <br className="md:hidden lg:block" />
                <span className="hidden md:inline lg:hidden"> </span>
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
                className="p2 self-start bg-white px-1.5 border border-line-divider rounded lg:p-2"
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
