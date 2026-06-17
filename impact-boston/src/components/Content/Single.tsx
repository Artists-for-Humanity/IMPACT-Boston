import Grid from "@/components/common/Grid";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import ScriptEmbed from "./ScriptEmbed";
import Button from "../common/Button";
import { PLACEHOLDER_IMAGE_SRC } from "../common/placeholderImage";

export type SingleContentParagraph = {
  text: string;
  bold?: boolean;
};

export type SingleContentThumbnailImage = {
  type: "image";
  label: string;
  imageSrc: string;
  imageAlt: string;
};

export type SingleContentThumbnailVideo = {
  type: "video";
  label: string;
  videoSrc: string;
  title: string;
};

export type SingleContentThumbnailEmbed = {
  type: "embed";
  label: string;
  scriptSrc: string;
};

export type SingleContentThumbnail =
  | SingleContentThumbnailImage
  | SingleContentThumbnailVideo
  | SingleContentThumbnailEmbed;

export type SingleContentProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  titleAs?: "h2" | "h3";
  paragraphs?: SingleContentParagraph[];
  subtitle?: string;
  secondaryParagraph?: string;
  imageSrc?: string;
  imageAlt?: string;
  showImagePlaceholder?: boolean;
  reverse?: boolean;
  purchaseLink?: { href: string; text: string };
  cta?: { href: string; text: string };
  className?: string;
  subtitleClassName?: string;
  backgroundColor?: string;
  gridClassName?: string;
  thumbnails?: SingleContentThumbnail[];
  children?: ReactNode;
};

export default function SingleContent({
  id,
  eyebrow,
  title,
  titleAs: TitleTag = "h3",
  subtitle,
  paragraphs,
  imageSrc,
  imageAlt,
  showImagePlaceholder = false,
  reverse = false,
  purchaseLink,
  cta,
  className,
  subtitleClassName,
  backgroundColor,
  gridClassName,
  thumbnails,
  children,
}: SingleContentProps) {
  const imageCol = reverse
    ? "col-span-full lg:col-span-6 lg:col-start-1"
    : "col-span-full lg:col-start-7 lg:col-span-6";

  const contentCol = reverse
    ? "col-span-full lg:col-span-5 lg:col-start-8"
    : "col-span-full not-last:lg:col-span-5";

  const fallbackImageAlt = title
    ? `${title} placeholder image`
    : "Single content image";

  const media = showImagePlaceholder ? (
    <div
      className="relative h-[400px] w-full overflow-hidden lg:flex-1 lg:min-h-0"
    >
      <Image
        src={PLACEHOLDER_IMAGE_SRC}
        alt={imageAlt ?? fallbackImageAlt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
        loading="eager"
        priority={true}
      />
    </div>
  ) : imageSrc ? (
    <Image
      src={imageSrc}
      width={1000}
      height={1000}
      alt={imageAlt ?? ""}
      className={
        reverse
          ? "object-cover w-full h-[400px] lg:flex-1 lg:min-h-0 lg:h-auto"
          : "object-cover"
      }
      loading="eager"
      priority={true}
      style={
        reverse
          ? { objectFit: "cover" }
          : {
              display: "block",
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }
      }
    />
  ) : null;

  return (
    <div
      id={id}
      className={[className, backgroundColor].filter(Boolean).join(" ")}
    >
      <Grid className={gridClassName}>
        {reverse && (
          <div
            className={`${imageCol} w-full md:w-full lg:h-full lg:flex lg:flex-col`}
          >
            <div
              style={{
                height: "8px",
                width: "100%",
                background:
                  "linear-gradient(to right, #E36A38 0%, #E36A38 22%, #874E9F 22%, #874E9F 86%, #462458 86%, #462458 100%)",
              }}
            />
            {media}
          </div>
        )}

        <div className={`${contentCol} flex flex-col gap-6 lg:gap-8`}>
          {children ? (
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-5 lg:gap-y-6">
              {children}
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-2">
                {eyebrow && (
                  <p className="medium-label text-secondary">{eyebrow}</p>
                )}
                {title && (
                  <TitleTag className={TitleTag === "h2" ? "h2" : "h3"}>
                    {title}
                  </TitleTag>
                )}
                {subtitle && (
                  <div
                    className={`sub-2 ${subtitleClassName ?? "text-secondary"}`}
                  >
                    {subtitle}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-6 lg:grid lg:grid-cols-5 lg:gap-y-6">
                {(paragraphs ?? []).map((para, idx) => (
                  <p
                    className={`p1 lg:col-span-5${para.bold ? " font-bold" : ""}`}
                    key={idx}
                  >
                    {para.text}
                  </p>
                ))}
                {cta && (
                  <Button
                    href={cta.href}
                    variant="primary"
                    showChevron
                    className="box-border md:box-content h-[8px] md:h-[25px] py-6 w-full md:w-auto md:self-start lg:col-span-5 justify-self-start gap-x-16"
                  >
                    {cta.text}
                  </Button>
                )}
                {purchaseLink && (
                  <Link
                    href={purchaseLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p1-bold underline lg:col-span-5"
                  >
                    {purchaseLink.text}
                  </Link>
                )}
              </div>
            </>
          )}
        </div>

        {!reverse && (
          <div
            className={`${imageCol} w-full object-cover md:w-full md:h-auto`}
          >
            <div
              style={{
                height: "8px",
                width: "100%",
                background:
                  "linear-gradient(to right, #E36A38 0%, #E36A38 22%, #874E9F 22%, #874E9F 86%, #462458 86%, #462458 100%)",
              }}
            />
            {media}
          </div>
        )}

        {thumbnails &&
          thumbnails.map((thumb, idx) => (
            <div key={idx} className="col-span-4 flex flex-col gap-2">
              <p className="p1-bold text-left text-grey">{thumb.label}</p>
              {thumb.type === "image" ? (
                <Image
                  src={thumb.imageSrc}
                  width={1000}
                  height={1000}
                  alt={thumb.imageAlt}
                  className="w-full object-cover"
                  style={{ height: "210px", objectFit: "cover" }}
                />
              ) : thumb.type === "embed" ? (
                <div className="relative w-full" style={{ height: "210px" }}>
                  <ScriptEmbed scriptSrc={thumb.scriptSrc} />
                </div>
              ) : (
                <div className="relative w-full" style={{ height: "210px" }}>
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
