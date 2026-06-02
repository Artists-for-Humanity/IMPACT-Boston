import Image from "next/image";
import Grid from "../common/Grid";

//possibly multiple tags
type TagItem = {
  text: string;
  className?: string;
};

type TagColor = 'primary' | 'secondary' | 'complementary' | 'black' | 'grey';
type TagBackground = 'primary-light' | 'secondary-light' | 'complementary-light' | 'lavender';

interface Hero2Props {
  tag?: string | TagItem[];
  tagColor?: TagColor;
  tagBackground?: TagBackground;
  title: string;
  highlight?: string;
  highlightColor?: 'primary' | 'secondary' | 'complementary';
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Hero2({
  tag,
  tagColor,
  tagBackground,
  title,
  highlight,
  highlightColor = 'secondary',
  description,
  imageSrc,
  imageAlt,
}: Hero2Props) {
  const highlightClassMap = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    complementary: 'text-complementary',
  };

  const tagColorClassMap: Record<TagColor, string> = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    complementary: 'text-complementary',
    black: 'text-black',
    grey: 'text-grey',
  };

  const tagBackgroundClassMap: Record<TagBackground, string> = {
    'primary-light': 'bg-primary-light',
    'secondary-light': 'bg-secondary-light',
    'complementary-light': 'bg-complementary-light',
    lavender: 'bg-bg-lavender',
  };

  const highlightClass = highlightClassMap[highlightColor];
  const tagColorClass = tagColor ? tagColorClassMap[tagColor] : '';
  const tagBackgroundClass = tagBackground ? tagBackgroundClassMap[tagBackground] : '';
  const tagBoxClass = tagBackground ? 'rounded-xl px-3 py-2 md:px-4' : '';

  return (
      <Grid className="md:gap-12 lg:gap-8">
        {tag && (
          <div className={`sub-2 col-span-full flex justify-center ${tagColorClass}`}>
            <div className={`tag flex items-center gap-2 ${tagBoxClass} ${tagBackgroundClass}`}>
              {typeof tag === "string" ? (
                <span>{tag}</span>
              ) : (
                tag.map((item, idx) => (
                  <span key={idx} className={item.className}>
                    {item.text}
                  </span>
                ))
              )}
            </div>
          </div>
        )}

        <div className="col-span-full lg:col-start-3 lg:col-span-8 flex flex-col gap-6 md:gap-6 lg:gap-6">
          <h2 className="h2 text-center text-black">
            {title}{' '}
            {highlight ? (
              <span className={highlightClass}>{highlight}</span>
            ) : null}
          </h2>

          <p className="p1 text-center text-grey">{description}</p>
        </div>

        {imageSrc && (
          <Image
            src={imageSrc}
            width={500}
            height={500}
            alt={imageAlt ?? ""}
            className="col-span-full w-full h-auto"
          />
        )}
      </Grid>
  );
}
