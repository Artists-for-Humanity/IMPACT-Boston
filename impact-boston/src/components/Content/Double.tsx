import Grid from "@/components/common/Grid";
import Image from "next/image";
import { PLACEHOLDER_IMAGE_SRC } from "@/components/common/placeholderImage";

export type DoubleCard = {
  _key?: string | null;
  title?: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  showImagePlaceholder?: boolean;
  dataAttributes?: {
    description?: string;
    image?: string;
    title?: string;
  };
};

type DoubleProps = {
  cards: DoubleCard[];
};

export default function ContentDouble({ cards }: DoubleProps) {
  return (
    <Grid noPadding className="py-8 md:py-10 lg:py-6 gap-y-8 md:gap-10 lg:gap-x-12">
      {cards.map((card, index) => (
        <DoubleCard
          key={card.title ?? card.imageSrc ?? index}
          title={card.title}
          description={card.description}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt ?? card.title ?? ""}
          showImagePlaceholder={card.showImagePlaceholder}
          dataAttributes={card.dataAttributes}
          className="col-span-full flex flex-col gap-y-8 justify-between lg:col-span-6"
        />
      ))}
    </Grid>
  );
}

const imageTopGradient =
  "linear-gradient(to right, #E36A38 0%, #E36A38 22%, #874E9F 22%, #874E9F 86%, #462458 86%, #462458 100%)";

function DoubleCard({
  title,
  description,
  imageSrc,
  imageAlt,
  showImagePlaceholder = false,
  className = "",
  dataAttributes,
}: {
  title?: string;
  description: string;
  imageSrc?: string;
  imageAlt: string;
  showImagePlaceholder?: boolean;
  className?: string;
  dataAttributes?: DoubleCard["dataAttributes"];
}) {
  return (
    <div className={className}>
      <div className="flex flex-col gap-y-2 lg:gap-y-4">
        {title && (
          <h3 className="h3 text-black" data-sanity={dataAttributes?.title}>
            {title}
          </h3>
        )}
        <p className="p2" data-sanity={dataAttributes?.description}>
          {description}
        </p>
      </div>

      <div data-sanity={dataAttributes?.image}>
        <div
          className="h-[7px]"
          style={{ background: imageTopGradient }}
          aria-hidden="true"
        />
        <div className="relative w-full aspect-[6/3] lg:aspect-auto lg:h-[348px] overflow-hidden">
          {showImagePlaceholder ? (
            <Image
              src={PLACEHOLDER_IMAGE_SRC}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          ) : imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
