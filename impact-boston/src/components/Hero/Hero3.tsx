import Image from "next/image";

import Grid from "../common/Grid";

export type Hero3Props = {
  description: string;
  headline: string;
  imageAlt?: string;
  imageSrc?: string;
  subheader?: string;
  dataAttributes?: {
    description?: string;
    headline?: string;
    image?: string;
    subheader?: string;
  };
};

export default function Hero3({
  description,
  headline,
  imageAlt,
  imageSrc,
  subheader,
  dataAttributes,
}: Hero3Props) {
  return (
    <section className="bg-white">
      <Grid className="items-start gap-y-10 md:gap-y-0 lg:items-center">
        <div className="col-span-full flex flex-col md:col-span-4 lg:col-span-6">
          <div className="flex max-w-[550px] flex-col gap-4">
            <h1
              className="break-words text-[44px] font-medium leading-[52px] tracking-[0em] text-black md:text-[56px] md:leading-[60px] lg:text-[56px]"
              data-sanity={dataAttributes?.headline}
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                whiteSpace: "pre-line",
              }}
            >
              {headline}
            </h1>
            {subheader ? (
              <p
                className="p1 break-words text-grey"
                data-sanity={dataAttributes?.subheader}
              >
                {subheader}
              </p>
            ) : null}
            <p
              className="p2 break-words text-black"
              data-sanity={dataAttributes?.description}
            >
              {description}
            </p>
          </div>
        </div>

        {imageSrc ? (
          <div className="relative col-span-full aspect-[16/9] min-h-[220px] overflow-hidden md:col-span-4 md:min-h-[240px] lg:col-start-7 lg:col-span-6 lg:min-h-[320px]">
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 right-0 z-10 h-[7px]"
              style={{
                background:
                  "linear-gradient(to right, #E36A38 0%, #E36A38 22%, #874E9F 22%, #874E9F 86%, #462458 86%, #462458 100%)",
              }}
            />
            <Image
              alt={imageAlt ?? ""}
              className="object-contain"
              data-sanity={dataAttributes?.image}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, (min-width: 744px) 50vw, 100vw"
              src={imageSrc}
            />
          </div>
        ) : null}
      </Grid>
    </section>
  );
}
