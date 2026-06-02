import Grid from '@/components/common/Grid';
import Image from 'next/image';
import Link from 'next/link';
import ScriptEmbed from './ScriptEmbed';
import Button from '../common/Button';

interface Paragraph {
  text: string;
  bold?: boolean;
}

interface ThumbnailImage {
  type: 'image';
  label: string;
  imageSrc: string;
  imageAlt: string;
}

interface ThumbnailVideo {
  type: 'video';
  label: string;
  videoSrc: string;
  title: string;
}

interface ThumbnailEmbed {
  type: 'embed';
  label: string;
  scriptSrc: string;
}

type Thumbnail = ThumbnailImage | ThumbnailVideo | ThumbnailEmbed;

interface SingleContentProps {
  id?: string;
  title: string;
  paragraphs: Paragraph[];
  subtitle?: string;
  secondaryParagraph?: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  purchaseLink?: { href: string; text: string };
  cta?: { href: string; text: string };
  className?: string;
  backgroundColor?: string;
  gridClassName?: string;
  thumbnails?: Thumbnail[];
}

export default function SingleContent({
  id,
  title,
  subtitle,
  paragraphs,
  imageSrc,
  imageAlt,
  reverse = false,
  purchaseLink,
  cta,
  className,
  backgroundColor,
  gridClassName,
  thumbnails
}: SingleContentProps) {
  const imageCol = reverse
    ? 'col-span-full lg:col-span-6 lg:col-start-1'
    : 'col-span-full lg:col-start-7 lg:col-span-6';

  const contentCol = reverse
    ? 'col-span-full lg:col-span-5 lg:col-start-8'
    : 'col-span-full not-last:lg:col-span-5';

  return (
    <div id={id} className={`${className} ${backgroundColor ? backgroundColor : ''}`}>
      <Grid className={gridClassName}>
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
            {cta && (
              <Button
                href={cta.href}
                variant="primary"
                showChevron
                className="mt-4 h-12 w-full px-5 md:w-[214px]"
              >
                {cta.text}
              </Button>
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

        {thumbnails && thumbnails.map((thumb, idx) => (
          <div key={idx} className="col-span-4 flex flex-col gap-2">
            <p className="p1-bold text-left text-grey">{thumb.label}</p>
            {thumb.type === 'image' ? (
              <Image
                src={thumb.imageSrc}
                width={1000}
                height={1000}
                alt={thumb.imageAlt}
                className="w-full object-cover"
                style={{ height: '210px', objectFit: 'cover' }}
              />
            ) : thumb.type === 'embed' ? (
              <div className="relative w-full" style={{ height: '210px' }}>
                <ScriptEmbed scriptSrc={thumb.scriptSrc} />
              </div>
            ) : (
              <div className="relative w-full" style={{ height: '210px' }}>
                <iframe
                  src={thumb.videoSrc}
                  title={thumb.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; clipboard-write; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            )}
          </div>
        ))}
      </Grid>
    </div>
  );
}
