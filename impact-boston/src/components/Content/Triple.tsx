import Grid from "../common/Grid";
import type { CSSProperties } from "react";

export type TripleCardContent =
  | { type: "title"; value: string; line2?: string; dataSanity?: string; line2DataSanity?: string }
  | { type: "description"; value: string; dataSanity?: string }
  | { type: "tags"; value: string[]; dataSanity?: string };

export type TripleCard = {
  _key?: string | null;
  bgClass?: string;
  bgStyle?: CSSProperties;
  className?: string;
  content: TripleCardContent[];
  dataAttributes?: {
    backgroundColor?: string;
  };
};

export type TripleProps = {
  title?: string;
  subtitle?: string;
  intro?: string;
  cards: TripleCard[];
  dataAttributes?: {
    intro?: string;
    subtitle?: string;
    title?: string;
  };
};

export default function Triple({
  title,
  subtitle,
  intro,
  cards,
  dataAttributes,
}: TripleProps) {
  return (
    <Grid className="sm:gap-8 md:gap-8 lg:gap-y-10">
      <div className="col-span-full md:col-span-8 flex flex-col gap-2">
        {title ? (
          <h3 className="h3 " data-sanity={dataAttributes?.title}>
            {title}
          </h3>
        ) : null}

        {subtitle ? (
          <p className="p2" data-sanity={dataAttributes?.subtitle}>
            {subtitle}
          </p>
        ) : null}
      </div>
      {intro ? (
        <p
          className="p1 col-span-full md:col-span-8"
          data-sanity={dataAttributes?.intro}
        >
          {intro}
        </p>
      ) : null}

      <div className="col-span-full grid  gap-y-5 md:gap-y-6  lg:grid-cols-3 lg:gap-x-6">
        {cards.map((card, index) => (
          <TripleCardRenderer key={index} card={card} />
        ))}
      </div>
    </Grid>
  );
}

function TripleCardRenderer({ card }: { card: TripleCard }) {
  const variableBackgroundClass = card.bgStyle
    ? "bg-[var(--triple-card-bg)]"
    : "";

  return (
    <div
      className={`${card.bgClass ?? ""} ${variableBackgroundClass} ${card.className ?? ""} p-5 md:p-6 lg:p-8 flex flex-col justify-between gap-5 md:gap-6 lg:gap-0 lg:h-[360px]`}
      data-sanity={card.dataAttributes?.backgroundColor}
      style={card.bgStyle}
    >
      {card.content.map((item, index) => {
        switch (item.type) {
          case "title":
            return (
              <p className="sub-1" key={`${item.type}-${index}`}>
                <span data-sanity={item.dataSanity}>{item.value}</span>
                {item.line2 ? (
                  <>
                    <br className="md:hidden lg:block" />
                    <span className="hidden md:inline lg:hidden"> </span>
                    <span data-sanity={item.line2DataSanity}>
                      {item.line2}
                    </span>
                  </>
                ) : null}
              </p>
            );

          case "description":
            return (
              <p
                className="p2"
                data-sanity={item.dataSanity}
                key={`${item.type}-${index}`}
              >
                {item.value}
              </p>
            );

          case "tags":
            return item.value.map((tag) => (
              <p
                key={tag}
                className="p2 self-start bg-white px-1.5 border border-line-divider rounded lg:p-2"
                data-sanity={item.dataSanity}
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
