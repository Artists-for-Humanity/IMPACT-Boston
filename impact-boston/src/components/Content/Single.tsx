import Grid from "@/components/common/Grid";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import ScriptEmbed from "./ScriptEmbed";
import { PLACEHOLDER_IMAGE_SRC } from "../common/placeholderImage";

export interface SingleContentParagraph {
  text: string;
  bold?: boolean;
}

interface ThumbnailImage {
  type: "image";
  label: string;
  imageSrc: string;
  imageAlt: string;
}

interface ThumbnailVideo {
  type: "video";
  label: string;
  videoSrc: string;
  title: string;
}

interface ThumbnailEmbed {
  type: "embed";
  label: string;
  scriptSrc: string;
}

type Thumbnail = ThumbnailImage | ThumbnailVideo | ThumbnailEmbed;

export interface SingleContentProps {
  id?: string;
  eyebrow?: string;
  title: string;
  titleAs?: "h2" | "h3";
  paragraphs: SingleContentParagraph[];
  subtitle?: string;
  secondaryParagraph?: string;
  imageSrc?: string;
  imageAlt?: string;
  showImagePlaceholder?: boolean;
  reverse?: boolean;
  purchaseLink?: { href: string; text: string };
  cta?: { href: string; text: string };
  bodyContent?: ReactNode;
  className?: string;
  subtitleClassName?: string;
  backgroundColor?: string;
  gridClassName?: string;
  thumbnails?: Thumbnail[];
}

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
  bodyContent,
  className,
  subtitleClassName,
  backgroundColor,
  gridClassName,
  thumbnails,
}: SingleContentProps) {
  const imageCol = reverse
    ? "col-span-full lg:col-span-6 lg:col-start-1"
    : "col-span-full lg:col-start-7 lg:col-span-6";

  const contentCol = reverse
    ? "col-span-full lg:col-span-5 lg:col-start-8"
    : "col-span-full not-last:lg:col-span-5";

  const media = showImagePlaceholder ? (
    <div
      className="relative h-[400px] w-full overflow-hidden lg:flex-1 lg:min-h-0"
    >
      <Image
        src={PLACEHOLDER_IMAGE_SRC}
        alt={imageAlt ?? `${title} placeholder image`}
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
      className="object-cover w-full h-[400px] lg:h-auto"
      loading="eager"
      priority={true}
      style={{ objectFit: "cover", display: "block" }}
    />
  ) : null;
  const hasHeading = Boolean(eyebrow || title || subtitle);

  return (
    <div
      id={id}
      className={`${className ?? ""} ${backgroundColor ?? ""}`.trim()}
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
          {hasHeading ? (
            <div className="flex flex-col gap-2">
              {eyebrow ? (
                <p className="medium-label text-secondary">{eyebrow}</p>
              ) : null}
              {title ? (
                <TitleTag className={TitleTag === "h2" ? "h2" : "h3"}>
                  {title}
                </TitleTag>
              ) : null}
              {subtitle && (
                <div
                  className={`sub-2 ${subtitleClassName ?? "text-secondary"}`}
                >
                  {subtitle}
                </div>
              )}
            </div>
          ) : null}
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-5 lg:gap-y-6">
            {bodyContent ?? paragraphs.map((para, idx) => (
              <p
                className={`p1 lg:col-span-5${para.bold ? " font-bold" : ""}`}
                key={idx}
              >
                {para.text}
              </p>
            ))}
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
            {cta && (
              <Link
                href={cta.href}
                className="lg:col-span-5"
                style={{
                  color: "var(--Secondary, #563672)",
                  fontFamily: '"IBM Plex Sans"',
                  fontSize: "18px",
                  fontWeight: 500,
                  textDecorationLine: "underline",
                  textDecorationStyle: "solid",
                  textDecorationSkipInk: "auto",
                  textUnderlineOffset: "auto",
                  textUnderlinePosition: "from-font",
                }}
              >
                {cta.text}
              </Link>
            )}
          </div>
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
