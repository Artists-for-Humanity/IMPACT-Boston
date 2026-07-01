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

type BlockWithCardsProps = {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundColor?: string;
  cards: CardProps[];
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
