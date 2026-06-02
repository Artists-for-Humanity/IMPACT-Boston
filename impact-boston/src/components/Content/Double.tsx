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

export default function ContentDouble({ cards }: DoubleProps) {
  return (
      <Grid className='gap-y-8 md:gap-10 lg:gap-x-12'>
        {cards.map((card) => (
          <DoubleCard
            key={card.title}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt ?? card.title}
            className="col-span-full flex flex-col gap-y-8 justify-between lg:col-span-6"
          />
        ))}
      </Grid>
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
  <div className="flex flex-col gap-y-2 lg:gap-y-4">
    <h3 className="h3 text-black">{title}</h3>
    <p className="p2">{description}</p>
  </div>

  <div className="relative w-full aspect-[6/3]">
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