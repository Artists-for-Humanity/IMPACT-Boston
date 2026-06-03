import Grid from '@/components/common/Grid';
import Image from 'next/image';

type DoubleCard = {
  title?: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  showImageGradient?: boolean;
};

type DoubleProps = {
  cards: DoubleCard[];
};

export default function ContentDouble({ cards }: DoubleProps) {
  return (
    <Grid className="gap-y-8 md:gap-10 lg:gap-x-12">
      {cards.map((card, index) => (
        <DoubleCard
          key={card.title ?? `${card.imageSrc}-${index}`}
          title={card.title}
          description={card.description}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt ?? card.title ?? ''}
          showImageGradient={card.showImageGradient}
          className="col-span-full flex flex-col gap-y-8 justify-between lg:col-span-6"
        />
      ))}
    </Grid>
  );
}

const imageTopGradient =
  'linear-gradient(to right, #E36A38 0%, #E36A38 22%, #874E9F 22%, #874E9F 86%, #462458 86%, #462458 100%)';

function DoubleCard({
  title,
  description,
  imageSrc,
  imageAlt,
  showImageGradient = false,
  className = '',
}: {
  title?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  showImageGradient?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex flex-col gap-y-2 lg:gap-y-4">
        {title && <h3 className="h3 text-black">{title}</h3>}
        <p className="p2">{description}</p>
      </div>

      <div className="relative w-full aspect-[6/3]">
        {showImageGradient && (
          <div
            className="absolute left-0 right-0 top-0 z-10 h-2"
            style={{ background: imageTopGradient }}
          />
        )}
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
