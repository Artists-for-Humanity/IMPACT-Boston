import Grid from '@/components/common/Grid';
import Image from 'next/image';

type DoubleCard = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
};

type DoubleProps = {
  cards: DoubleCard[];
};

export default function ContentTriple({ cards }: DoubleProps) {
  return (
    <div className="mx-4 md:mx-8 lg:mx-36 py-8 md:py-10 lg:py-18">
      <Grid>
        {cards.map((card) => (
          <DoubleCard
            key={card.title}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt ?? card.title}
            className="col-span-full flex flex-col gap-y-4 justify-between lg:col-span-6"
          />
        ))}
      </Grid>
    </div>
  );
}

function DoubleCard({
  title,
  description,
  imageSrc,
  imageAlt,
  className = '',
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex flex-col gap-y-4">
        <h3 className="h3 text-black">{title}</h3>
        <p className="p2">{description}</p>
      </div>

      <Image
        src={imageSrc}
        width={500}
        height={500}
        alt={imageAlt}
        className="w-full h-auto"
      />
    </div>
  );
}