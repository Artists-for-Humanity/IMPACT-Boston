import Grid from "@/components/common/Grid";
import Image from "next/image";
import { PLACEHOLDER_IMAGE_SRC } from "@/components/common/placeholderImage";

export type DoubleCard =
  | {
      _key?: string | null;
      title?: string;
      description: string;
      mediaType?: "image";
      imageSrc?: string;
      imageAlt?: string;
      showImagePlaceholder?: boolean;
      dataAttributes?: {
        description?: string;
        image?: string;
        title?: string;
      };
    }
  | {
      _key?: string | null;
      title?: string;
      description: string;
      mediaType: "video";
      videoSrc: string;
      videoTitle?: string;
      dataAttributes?: {
        description?: string;
        image?: string;
        title?: string;
      };
    }
  | {
      _key?: string | null;
      title?: string;
      description: string;
      mediaType: "embed";
      scriptSrc: string;
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
        <DoubleCardItem
          key={card.title ?? index}
          card={card}
          className="col-span-full flex flex-col gap-y-8 justify-between lg:col-span-6"
        />
      ))}
    </Grid>
  );
}

const imageTopGradient =
  "linear-gradient(to right, #E36A38 0%, #E36A38 22%, #874E9F 22%, #874E9F 86%, #462458 86%, #462458 100%)";

function DoubleCardItem({ card, className = "" }: { card: DoubleCard; className?: string }) {
  return (
    <div className={className}>
      <div className="flex flex-col gap-y-2 lg:gap-y-4">
        {card.title && (
          <h3 className="h3 text-black" data-sanity={card.dataAttributes?.title}>
            {card.title}
          </h3>
        )}
        <p className="p2" data-sanity={card.dataAttributes?.description}>
          {card.description}
        </p>
      </div>

      <div data-sanity={card.dataAttributes?.image}>
        <div
          className="h-[7px]"
          style={{ background: imageTopGradient }}
          aria-hidden="true"
        />
        <div className="relative w-full aspect-[6/3] lg:aspect-auto lg:h-[348px] overflow-hidden">
          {card.mediaType === "video" ? (
            <iframe
              src={card.videoSrc}
              title={card.videoTitle ?? card.title ?? "Video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : card.mediaType === "embed" ? (
            <iframe
              srcDoc={
                card.scriptSrc.startsWith("<")
                  ? `<!DOCTYPE html><html><body style="margin:0">${card.scriptSrc}</body></html>`
                  : undefined
              }
              src={card.scriptSrc.startsWith("<") ? undefined : card.scriptSrc}
              title={card.title ?? "Embedded content"}
              className="absolute inset-0 w-full h-full"
            />
          ) : card.showImagePlaceholder ? (
            <Image
              src={PLACEHOLDER_IMAGE_SRC}
              alt={card.imageAlt ?? ""}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          ) : card.imageSrc ? (
            <Image
              src={card.imageSrc}
              alt={card.imageAlt ?? ""}
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
