import Grid from "@/components/common/Grid";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import ScriptEmbed from "./ScriptEmbed";
import { PLACEHOLDER_IMAGE_SRC } from "../common/placeholderImage";
import Button from "../common/Button";

export interface SingleContentParagraph {
  text: string;
  bold?: boolean;
  dataAttributes?: {
    text?: string;
  };
}

type ThumbnailDataAttributes = {
  image?: string;
  outlet?: string;
  title?: string;
};

type ThumbnailBase = {
  href?: string;
  openInNewTab?: boolean;
  outlet?: string;
  title: string;
  dataAttributes?: ThumbnailDataAttributes;
};

interface ThumbnailImage extends ThumbnailBase {
  type: "image";
  imageSrc: string;
  imageAlt: string;
}

interface ThumbnailVideo extends ThumbnailBase {
  type: "video";
  videoSrc: string;
  videoTitle?: string;
}

interface ThumbnailEmbed extends ThumbnailBase {
  type: "embed";
  scriptSrc: string;
}

export type SingleContentThumbnail =
  | ThumbnailImage
  | ThumbnailVideo
  | ThumbnailEmbed;

type SingleContentButton = {
  href: string;
  text: string;
  backgroundColor?: string;
  openInNewTab?: boolean;
};

export interface SingleContentProps {
  id?: string;
  eyebrow?: string;
  title: string;
  titleAs?: "h2" | "h3";
  subtitleFirst?: boolean;
  paragraphs?: SingleContentParagraph[];
  subtitle?: string;
  secondaryParagraph?: string;
  imageSrc?: string;
  imageAlt?: string;
  showImagePlaceholder?: boolean;
  reverse?: boolean;
  purchaseLink?: { href: string; text: string; openInNewTab?: boolean };
  cta?: { href: string; text: string; openInNewTab?: boolean };
  button?: SingleContentButton;
  bodyContent?: ReactNode;
  className?: string;
  subtitleClassName?: string;
  backgroundColor?: string;
  gridClassName?: string;
  thumbnails?: SingleContentThumbnail[];
  dataAttributes?: {
    body?: string;
    buttonText?: string;
    ctaText?: string;
    eyebrow?: string;
    image?: string;
    paragraphs?: Array<{ text?: string } | undefined>;
    purchaseLinkText?: string;
    subtitle?: string;
    thumbnails?: Array<ThumbnailDataAttributes | undefined>;
    title?: string;
  };
}

export default function SingleContent({
  id,
  eyebrow,
  title,
  titleAs: TitleTag = "h3",
  subtitleFirst = false,
  subtitle,
  paragraphs,
  imageSrc,
  imageAlt,
  showImagePlaceholder = false,
  reverse = false,
  purchaseLink,
  cta,
  button,
  bodyContent,
  className,
  subtitleClassName,
  backgroundColor,
  gridClassName,
  thumbnails,
  dataAttributes,
}: SingleContentProps) {
  const imageCol = reverse
    ? "col-span-full lg:col-span-6 lg:col-start-1"
    : "col-span-full lg:col-start-7 lg:col-span-6";

  const contentCol = reverse
    ? "col-span-full lg:col-span-5 lg:col-start-8"
    : "col-span-full not-last:lg:col-span-5";

  const media = showImagePlaceholder ? (
    <div className="relative h-[400px] w-full overflow-hidden lg:flex-1 lg:min-h-0">
      <Image
        src={PLACEHOLDER_IMAGE_SRC}
        alt={imageAlt ?? `${title} placeholder image`}
        data-sanity={dataAttributes?.image}
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
      data-sanity={dataAttributes?.image}
      className="object-cover w-full h-[400px] lg:h-auto"
      loading="eager"
      priority={true}
      style={{ objectFit: "cover", display: "block" }}
    />
  ) : null;
  const hasHeading = Boolean(eyebrow || title || subtitle);
  const buttonStyle: CSSProperties | undefined = button?.backgroundColor
    ? { backgroundColor: button.backgroundColor }
    : undefined;

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
                <p
                  className="medium-label text-secondary"
                  data-sanity={dataAttributes?.eyebrow}
                >
                  {eyebrow}
                </p>
              ) : null}
              {subtitleFirst && subtitle && (
                <div
                  className={`sub-2 ${subtitleClassName ?? "text-secondary"}`}
                  data-sanity={dataAttributes?.subtitle}
                >
                  {subtitle}
                </div>
              )}
              {title ? (
                <TitleTag
                  className={TitleTag === "h2" ? "h2" : "h3"}
                  data-sanity={dataAttributes?.title}
                >
                  {title}
                </TitleTag>
              ) : null}
              {!subtitleFirst && subtitle && (
                <div
                  className={`sub-2 ${subtitleClassName ?? "text-secondary"}`}
                  data-sanity={dataAttributes?.subtitle}
                >
                  {subtitle}
                </div>
              )}
            </div>
          ) : null}
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-5 lg:gap-y-6">
            {bodyContent ? (
              <div className="contents" data-sanity={dataAttributes?.body}>
                {bodyContent}
              </div>
            ) : (
              (paragraphs ?? []).map((para, idx) => (
                <p
                  className={`p1 lg:col-span-5${para.bold ? " font-bold" : ""}`}
                  data-sanity={
                    para.dataAttributes?.text ??
                    dataAttributes?.paragraphs?.[idx]?.text
                  }
                  key={idx}
                >
                  {para.text}
                </p>
              ))
            )}
            {purchaseLink && (
              <Link
                href={purchaseLink.href}
                target={purchaseLink.openInNewTab ? "_blank" : undefined}
                rel={
                  purchaseLink.openInNewTab ? "noopener noreferrer" : undefined
                }
                className="p1-bold underline lg:col-span-5"
                data-sanity={dataAttributes?.purchaseLinkText}
              >
                {purchaseLink.text}
              </Link>
            )}
            {cta && (
              <Link
                href={cta.href}
                target={cta.openInNewTab ? "_blank" : undefined}
                rel={cta.openInNewTab ? "noopener noreferrer" : undefined}
                className="lg:col-span-5"
                data-sanity={dataAttributes?.ctaText}
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
            {button ? (
              <Button
                className="w-full md:w-auto md:min-w-[270px] lg:col-span-3 lg:justify-self-start"
                data-sanity={dataAttributes?.buttonText}
                href={button.href}
                openInNewTab={button.openInNewTab}
                size="lg"
                style={buttonStyle}
                variant="primary"
              >
                {button.text}
              </Button>
            ) : null}
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

        {thumbnails?.map((thumb, idx) => {
          const resolvedThumb = {
            ...thumb,
            dataAttributes:
              thumb.dataAttributes ?? dataAttributes?.thumbnails?.[idx],
          };

          return (
            <div
              key={idx}
              className="col-span-full flex h-full flex-col gap-2 self-stretch md:col-span-4 lg:col-span-4"
            >
              <ThumbnailHeading thumb={resolvedThumb} />
              <ThumbnailMedia thumb={resolvedThumb} />
            </div>
          );
        })}
      </Grid>
    </div>
  );
}

function ThumbnailHeading({ thumb }: { thumb: SingleContentThumbnail }) {
  const heading = (
    <div>
      <p
        className="p1-bold text-left text-black"
        data-sanity={thumb.dataAttributes?.title}
      >
        {thumb.title}
      </p>
      {thumb.outlet ? (
        <p
          className="p1-bold text-left text-light-grey-text"
          data-sanity={thumb.dataAttributes?.outlet}
        >
          {thumb.outlet}
        </p>
      ) : null}
    </div>
  );

  if (!thumb.href) {
    return heading;
  }

  return (
    <Link
      href={thumb.href}
      target={thumb.openInNewTab ? "_blank" : undefined}
      rel={thumb.openInNewTab ? "noopener noreferrer" : undefined}
      className="transition hover:opacity-80"
    >
      {heading}
    </Link>
  );
}

function ThumbnailMedia({ thumb }: { thumb: SingleContentThumbnail }) {
  if (thumb.type === "embed") {
    return (
      <div className="relative mt-auto w-full" style={{ height: "210px" }}>
        <ScriptEmbed scriptSrc={thumb.scriptSrc} />
      </div>
    );
  }

  if (thumb.type === "video") {
    return (
      <div className="relative mt-auto w-full" style={{ height: "210px" }}>
        <iframe
          src={thumb.videoSrc}
          title={thumb.videoTitle ?? thumb.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; clipboard-write; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  const image = (
    <Image
      src={thumb.imageSrc}
      width={1000}
      height={1000}
      alt={thumb.imageAlt}
      data-sanity={thumb.dataAttributes?.image}
      className="w-full object-cover"
      style={{ height: "210px", objectFit: "cover" }}
    />
  );

  if (!thumb.href) {
    return <div className="mt-auto">{image}</div>;
  }

  return (
    <Link
      href={thumb.href}
      target={thumb.openInNewTab ? "_blank" : undefined}
      rel={thumb.openInNewTab ? "noopener noreferrer" : undefined}
      className="mt-auto block transition hover:opacity-80"
    >
      {image}
    </Link>
  );
}
