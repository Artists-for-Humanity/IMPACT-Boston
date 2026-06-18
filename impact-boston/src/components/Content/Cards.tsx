import React from "react";
import Grid from "../common/Grid";

type CardContentBlock =
  | { type: "text"; content: string }
  | { type: "button"; label: string; onClick?: () => void }
  | { type: "tags"; tags: string[] };

type CardProps = {
  title: string;
  contentBlocks: CardContentBlock[];
  backgroundColor?: string;
};

type CardsProps = {
  cards: CardProps[];
};

type BlockWithCardsProps = {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundColor?: string;
  cards: CardProps[];
};


const getColSpan = (count: number) => {
  if (count === 2) return "col-span-6 md:col-span-12 sm:col-span-12";
  if (count === 3) return "col-span-4 md:col-span-12 sm:col-span-12";
  if (count === 4) return "col-span-3 md:col-span-12 sm:col-span-12";
  return "col-span-12";
};

const Card: React.FC<CardProps> = ({ title, contentBlocks, backgroundColor }) => (
  <div className={`p-8 col-span-4 md:rounded-1 ${backgroundColor}`}>
    <p className="sub-1">{title}</p>
        {contentBlocks.map((block, idx) => {
        switch (block.type) {
            case "text":
            return <p className="p2" key={idx}>{block.content}</p>;
            case "button":
            return (
                <button className="link" key={idx} onClick={block.onClick}>
                {block.label}
                </button>
            );
            case "tags":
            return (
                <div className="flex flex-col" key={idx}>
                {block.tags.map((tag, i) => (
                    <div key={i} className="inline-block p2 self-start bg-white px-1.5 border border-line-divider rounded my-2">
                    {tag}
                    </div>
                ))}
                </div>
            );
            default:
            return null;
        }
        })}
  </div>
);

const Cards: React.FC<CardsProps> = ({ cards }) => {
  const colSpanClass = getColSpan(cards.length);

  return (
    <Grid className="grid grid-cols-12 gap-4">
      {cards.map((card, idx) => (
        <div key={idx} className={colSpanClass}>
          <Card {...card} />
        </div>
      ))}
    </Grid>
  );
};


const BlockWithCards: React.FC<BlockWithCardsProps> = ({
  title,
  subtitle,
  description,
  backgroundColor,
  cards,
}) => (
    <Grid className={`${backgroundColor}`}>
      <h2 className="h2 col-span-full lg:col-span-8">{title}</h2>
      {subtitle && <p className="p1 col-span-full lg:col-span-8">{subtitle}</p>}
      {description && <p className="p1 col-span-full lg:col-span-8">{description}</p>}
      <div className="col-span-full flex flex-wrap gap-4 grid grid-cols-subgrid">
        {cards.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>
    </Grid>
);

export default BlockWithCards;