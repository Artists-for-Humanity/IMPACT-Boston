import Grid from '@/components/common/Grid';
import Image from 'next/image';
import Link from 'next/link';

interface Paragraph {
  text: string;
  bold?: boolean;
}

interface SingleContentProps {
  title: string;
  paragraphs: Paragraph[];
  subtitle?: string;
  secondaryParagraph?: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  purchaseLink?: { href: string; text: string };
  className?: string;
  backgroundColor?: string;
}

export default function SingleContent({
  title,
  subtitle,
  paragraphs,
  imageSrc,
  imageAlt,
  reverse = false,
  purchaseLink,
  className,
  backgroundColor
}: SingleContentProps) {
  const imageCol = reverse
    ? 'col-span-full lg:col-span-6 lg:col-start-1'
    : 'col-span-full lg:col-start-7 lg:col-span-6';

  const contentCol = reverse
    ? 'col-span-full lg:col-span-5 lg:col-start-8'
    : 'col-span-full not-last:lg:col-span-5';

  return (
    <div className={`${className} ${backgroundColor ? backgroundColor : ''}`}>
      <Grid>
        {reverse && (
          <div className={`${imageCol} w-full object-cover md:w-full md:h-auto`}>
            <div
              style={{
                height: '8px',
                width: '100%',
                background: 'linear-gradient(to right, #E36A38 0%, #E36A38 22%, #874E9F 22%, #874E9F 86%, #462458 86%, #462458 100%)',
              }}
            />
             <Image
              src={imageSrc}
              width={1000}
              height={1000}
              alt={imageAlt}
              className="object-cover"
              loading="eager"
              priority={true}
              style={{
                display: 'block',
                width: '100%',
                height: '400px', 
                objectFit: 'cover',
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              }}
            />
          </div>
        )}

        <div className={`${contentCol} flex flex-col gap-6 lg:gap-8`}>
          <div className="flex flex-col gap-2">
            <h3 className="h3">{title}</h3>
            {subtitle && <div className="sub-2 text-secondary">{subtitle}</div>}
          </div>
          <div className="flex flex-col gap-2">
            {paragraphs.map((para, idx) => (
              <p
                className={`p1${para.bold ? ' font-bold' : ''}`}
                key={idx}
              >
                {para.text}
              </p>
            ))}
            {purchaseLink && (
              <Link href={purchaseLink.href} target="_blank" rel="noopener noreferrer" className="p1-bold underline">
                {purchaseLink.text}
              </Link>
            )}
          </div>
        </div>

        {!reverse && (
          <div className={`${imageCol} w-full object-cover md:w-full md:h-auto`}>
            <div
              style={{
                height: '8px',
                width: '100%',
                background: 'linear-gradient(to right, #E36A38 0%, #E36A38 22%, #874E9F 22%, #874E9F 86%, #462458 86%, #462458 100%)',
              }}
            />
             <Image
              src={imageSrc}
              width={1000}
              height={1000}
              alt={imageAlt}
              className="object-cover"
              loading="eager"
              priority={true}
              style={{
                display: 'block',
                width: '100%',
                height: '400px',
                objectFit: 'cover', 
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              }}
            />
          </div>
        )}
      </Grid>
    </div>
  );
}
