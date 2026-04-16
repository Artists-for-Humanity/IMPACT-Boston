import Grid from '@/components/common/Grid';
import Image from 'next/image';

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
  className?: string;
}

export default function SingleContent({
  title,
  subtitle,
  paragraphs,
  imageSrc,
  imageAlt,
  className,
}: SingleContentProps) {
  return (
    <div className={`px-4 md:px-8 lg:px-36 py-8 md:py-10 lg:py-18 ${className}`}>
      <Grid>
        <div className='col-span-full not-last:lg:col-span-6 px-4'>
          <h2 className="h2 pb-2">{title}</h2>
          <div className="sub-2 pb-8 text-secondary">{subtitle}</div>
          {paragraphs.map((para, idx) => (
            <p
              className={`p1 pb-2${para.bold ? ' font-bold' : ''}`}
              key={idx}
            >
              {para.text}
            </p>
          ))}
        </div>
        <div className='col-span-full lg:col-start-7 lg:col-span-6 w-full object-cover md:w-full md:h-auto'>
          <div
            style={{
              height: '8px',
              width: '100%',
              background: 'linear-gradient(to right, #E36A38 0%, #E36A38 22%, #874E9F 22%, #874E9F 86%, #462458 86%, #462458 100%)',
            }}
          />
          <Image
            src={imageSrc}
            width={5000}
            height={5000}
            alt={imageAlt}
            className=""
            loading="eager"
            priority={true}
            style={{ display: 'block', width: '100%', height: 'auto', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
          />
        </div>
      </Grid>
    </div>
  );
}