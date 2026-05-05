import Image from "next/image";
import Grid from "../common/Grid";

//possibly multiple tags
type TagItem = {
  text: string;
  className?: string;
};

interface Hero2Props {
   tag?: string | TagItem[];
  title: string;
  highlight?: string;
  highlightColor?: 'primary' | 'secondary' | 'complementary';
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Hero2({
  tag,
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

  const highlightClass = highlightClassMap[highlightColor];

  console.log(tag);

  return (
      <Grid>
        {tag && (
          <div className="sub-2 col-span-full flex justify-center text-black">
            <div className="tag bg-secondary-light/50 p-2 flex items-center gap-2 rounded-full">
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

        <div className="col-span-full lg:col-start-3 lg:col-span-8 flex flex-col gap-6 md:gap-4 lg:gap-6">
          <h1 className="h1 text-center text-black">
            {title}{' '}
            {highlight ? (
              <span className={highlightClass}>{highlight}</span>
            ) : null}
          </h1>

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