// import Grid from "../common/Grid";

// export default function ContentTriple({
//   title,
//   subtitle,
//   cards,
// }: {
//   title: string;
//   subtitle: string;
//   cards: {
//     title: string;
//     titleLine2?: string;
//     description: string;
//     bgClass: string;
//   }[];
// }) {
//   return (
//     <div className="mx-4 md:mx-8 lg:mx-36 py-8 md:py-10 lg:py-18">
//       <Grid>
//         <h2 className="h2 col-span-full">{title}</h2>
//         <p className="p2 col-span-full">{subtitle}</p>

//         <div className="col-span-full md:grid md:grid-cols-3 md:gap-x-4">
//           {cards.map((card, index) => (
//             <ContentCard
//               key={index}
//               title={card.title}
//               titleLine2={card.titleLine2}
//               description={card.description}
//               bgClass={card.bgClass}
//             />
//           ))}
//         </div>
//       </Grid>
//     </div>
//   );
// }

// function ContentCard({
//   title,
//   titleLine2,
//   description,
//   bgClass,
// }: {
//   title: string;
//   titleLine2?: string;
//   description: string;
//   bgClass: string;
// }) {
//   return (
//     <div className={`${bgClass} py-8 px-4 flex flex-col gap-4`}>
//       <p className="sub-1">
//         {title}
//         {titleLine2 ? (
//           <>
//             <br />
//             {titleLine2}
//           </>
//         ) : null}
//       </p>
//       <p className="p2">{description}</p>
//     </div>
//   );
// }

import Grid from "../common/Grid";

type DefaultCard = {
  type: "default";
  title: string;
  titleLine2?: string;
  description: string;
  bgClass: string;
};

type TagListCardType = {
  type: "tagList";
  title: string;
  tags: string[];
  bgClass: string;
};

type StatCardType = {
  type: "stat";
  title: string;
  description: string;
  bgClass: string;
};

type TripleCard = DefaultCard | TagListCardType | StatCardType;

type TripleProps = {
  title: string;
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
    <div className="mx-4 md:mx-8 lg:mx-36 py-8 md:py-10 lg:py-18">
      <Grid>
        <h2 className="h2 col-span-full">{title}</h2>

        {subtitle ? <p className="p1-bold col-span-full">{subtitle}</p> : null}
        {intro ? <p className="p1 col-span-full">{intro}</p> : null}

        <div className="col-span-full md:grid md:grid-cols-3 md:gap-x-4">
          {cards.map((card, index) => (
            <TripleCardRenderer key={index} card={card} />
          ))}
        </div>
      </Grid>
    </div>
  );
}

function TripleCardRenderer({ card }: { card: TripleCard }) {
  switch (card.type) {
    case "default":
      return (
        <DefaultCard
          title={card.title}
          titleLine2={card.titleLine2}
          description={card.description}
          bgClass={card.bgClass}
        />
      );

    case "tagList":
      return (
        <TagListCard
          title={card.title}
          tags={card.tags}
          bgClass={card.bgClass}
        />
      );

    case "stat":
      return (
        <StatCard
          title={card.title}
          description={card.description}
          bgClass={card.bgClass}
        />
      );

    default:
      return null;
  }
}

function DefaultCard({
  title,
  titleLine2,
  description,
  bgClass,
}: {
  title: string;
  titleLine2?: string;
  description: string;
  bgClass: string;
}) {
  return (
    <div className={`${bgClass} py-8 px-4 flex flex-col gap-4`}>
      <p className="sub-1">
        {title}
        {titleLine2 ? (
          <>
            <br />
            {titleLine2}
          </>
        ) : null}
      </p>
      <p className="p2">{description}</p>
    </div>
  );
}

function TagListCard({
  title,
  tags,
  bgClass,
}: {
  title: string;
  tags: string[];
  bgClass: string;
}) {
  return (
    <div className={`${bgClass} py-8 px-4 flex flex-col gap-4`}>
      <p className="sub-1">{title}</p>
      {tags.map((tag) => (
        <p
          key={tag}
          className="p2 self-start bg-white px-1.5 border border-line-divider rounded"
        >
          {tag}
        </p>
      ))}
    </div>
  );
}

function StatCard({
  title,
  description,
  bgClass,
}: {
  title: string;
  description: string;
  bgClass: string;
}) {
  return (
    <div className={`${bgClass} py-8 px-4 flex flex-col gap-4 lg:justify-between`}>
      <p className="sub-1">{title}</p>
      <p className="p2">{description}</p>
    </div>
  );
}