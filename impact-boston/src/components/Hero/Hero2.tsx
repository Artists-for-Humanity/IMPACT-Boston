import Image from "next/image";
import type { ReactNode } from "react";
import Grid from "../common/Grid";
import { PLACEHOLDER_IMAGE_SRC } from "../common/placeholderImage";

interface Hero2Props {
  title: ReactNode;
  titleText?: string;
  highlight?: string;
  highlightColor?: "primary" | "secondary" | "complementary";
  description?: string;
  supportingText?: string;
  imageSrc?: string;
  imageAlt?: string;
  youtubeUrl?: string;
  videoTitle?: string;
  mediaClassName?: string;
  showMediaPlaceholder?: boolean;
  dataAttributes?: {
    description?: string;
    image?: string;
    supportingText?: string;
    title?: string;
  };
}

function getYouTubeEmbedUrl(youtubeUrl: string) {
  try {
    const url = new URL(youtubeUrl);
    const hostname = url.hostname.replace(/^www\./, "");

    if (
      (hostname === "youtube.com" || hostname === "youtube-nocookie.com") &&
      url.pathname.startsWith("/embed/")
    ) {
      return youtubeUrl;
    }

    let videoId = "";

    if (hostname === "youtu.be") {
      videoId = url.pathname.split("/").filter(Boolean)[0] ?? "";
    }

    if (hostname === "youtube.com" || hostname === "m.youtube.com") {
      if (url.pathname.startsWith("/shorts/")) {
        videoId = url.pathname.split("/").filter(Boolean)[1] ?? "";
      } else {
        videoId = url.searchParams.get("v") ?? "";
      }
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : youtubeUrl;
  } catch {
    return youtubeUrl;
  }
}

export default function Hero2({
  title,
  titleText,
  highlight,
  highlightColor = "secondary",
  description,
  supportingText,
  imageSrc,
  imageAlt,
  youtubeUrl,
  videoTitle,
  mediaClassName,
  showMediaPlaceholder = false,
  dataAttributes,
}: Hero2Props) {
  const highlightClassMap = {
    primary: "text-primary",
    secondary: "text-secondary",
    complementary: "text-complementary",
  };

  const highlightClass = highlightClassMap[highlightColor];
  const mediaWrapperClass = mediaClassName ?? "col-span-full w-full";
  const youtubeEmbedUrl = youtubeUrl ? getYouTubeEmbedUrl(youtubeUrl) : null;
  const mediaTitle =
    titleText || (typeof title === "string" ? title : "Hero media");

  return (
      <Grid className="md:gap-12 lg:gap-x-8 lg:gap-y-8">
        <div className="col-span-full grid grid-cols-12 lg:gap-x-8 lg:gap-y-6">
          <h1
            className="col-span-full h1 text-center text-black"
            data-sanity={dataAttributes?.title}
          >
            {title}{' '}
            {highlight ? (
              <span className={highlightClass}>{highlight}</span>
            ) : null}
        </h1>

          {description && (
            <div className="col-span-full lg:col-start-3 lg:col-span-8">
              <p
                className="p1 text-center text-grey"
                data-sanity={dataAttributes?.description}
              >
                {description}
              </p>
            </div>
          )}
        </div>

        {supportingText ? (
          <div className="col-span-full lg:col-start-3 lg:col-span-8">
            <p
              className="p2 text-center italic text-grey"
              data-sanity={dataAttributes?.supportingText}
            >
              {supportingText}
            </p>
          </div>
        ) : null}

      {showMediaPlaceholder ? (
        <div
          className={`${mediaWrapperClass} relative aspect-video overflow-hidden w-full h-75 md:h-100 lg:h-130`}
        >
          <Image
            src={PLACEHOLDER_IMAGE_SRC}
            alt={imageAlt ?? mediaTitle}
            data-sanity={dataAttributes?.image}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ) : youtubeEmbedUrl ? (
        <div
          className={`${mediaWrapperClass} aspect-video overflow-hidden bg-image-placeholder`}
        >
          <iframe
            src={youtubeEmbedUrl}
            title={videoTitle ?? mediaTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          width={1400}
          height={1050}
          alt={imageAlt ?? ""}
          data-sanity={dataAttributes?.image}
          className={`${mediaWrapperClass} h-auto w-full`}
        />
      ) : null}
    </Grid>
  );
}
