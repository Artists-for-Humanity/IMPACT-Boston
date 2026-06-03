import Grid from "../common/Grid";
import Image from "next/image";

type InfoCard = {
  title: string;
  description: string;
};

type SplitProps = {
  title: string;
  description: string;
  cards: InfoCard[];
  topImageSrc: string;
  topImageAlt: string;
  bottomImageSrc: string;
  bottomImageAlt: string;
  backgroundColor?: string;
  className?: string;
};

export default function Split({
  title,
  description,
  cards,
  topImageSrc,
  topImageAlt,
  bottomImageSrc,
  bottomImageAlt,
  backgroundColor = "bg-white",
  className = "",
}:SplitProps) {
  return (
    <div className={` ${backgroundColor} ${className}`}>
      <Grid>
        <div className="col-span-full lg:col-span-5 flex flex-col justify-between">
            <div>
            <h3 className="h3 mb-8">{title}</h3>
          <p className="p1 mb-8">{description}</p>
            </div>
         

          <div className="grid grid-cols-2 gap-4">
            {cards.map((card) => (
              <div
                key={card.title}
                className="border border-line-divider px-4 py-4 md:px-4 md:py-4 min-h-[170px] md:min-h-[200px] flex flex-col"
              >
                <p className="p1-bold mb-16">{card.title}</p>
                <p className="p2">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-full mt-8 lg:col-span-7 lg:mt-0 lg:h-full">
          <div className="flex flex-col gap-2 md:gap-3 lg:h-full">
            <div className="relative w-full min-h-[220px] md:min-h-[280px] lg:flex-1">
              <Image
                src={topImageSrc}
                alt={topImageAlt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="relative w-full min-h-[220px] md:min-h-[280px] lg:flex-1">
              <Image
                src={bottomImageSrc}
                alt={bottomImageAlt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
}
