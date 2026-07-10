"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useCallback, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
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
  vimeoUrl?: string;
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

function getVimeoEmbedUrl(input: string): string {
  // Handle iframe embed code — extract src attribute
  const iframeSrcMatch = input.match(/src=["']([^"']+)["']/);
  if (iframeSrcMatch) {
    return getVimeoEmbedUrl(iframeSrcMatch[1]);
  }

  try {
    const url = new URL(input);
    const hostname = url.hostname.replace(/^www\./, "");

    let videoId = "";

    if (hostname === "player.vimeo.com" && url.pathname.startsWith("/video/")) {
      videoId = url.pathname.split("/").filter(Boolean)[1] ?? "";
    } else if (hostname === "vimeo.com") {
      videoId = url.pathname.split("/").filter(Boolean)[0] ?? "";
    }

    if (videoId) {
      const params = new URLSearchParams({
        autoplay: "1",
        muted: "1",
        controls: "0",
        loop: "1",
        title: "0",
        byline: "0",
        portrait: "0",
      });
      return `https://player.vimeo.com/video/${videoId}?${params.toString()}`;
    }
  } catch {
    // not a URL — return as-is
  }

  return input;
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
  vimeoUrl,
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
  const vimeoEmbedUrl = vimeoUrl ? getVimeoEmbedUrl(vimeoUrl) : null;
  const mediaTitle =
    titleText || (typeof title === "string" ? title : "Hero media");

  const vimeoRef = useRef<HTMLIFrameElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleVimeoMute = useCallback(() => {
    const newMuted = !muted;
    vimeoRef.current?.contentWindow?.postMessage(
      JSON.stringify({ method: "setVolume", value: newMuted ? 0 : 1 }),
      "*",
    );
    setMuted(newMuted);
  }, [muted]);

  return (
      <Grid className="md:gap-12 lg:gap-x-8 lg:gap-y-8">
        <div className="col-span-full grid grid-cols-12 md:gap-y-4 lg:gap-x-8 lg:gap-y-6">
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
          className={`${mediaWrapperClass} relative aspect-video overflow-hidden bg-image-placeholder`}
        >
          <div
            className="absolute top-0 left-0 right-0 h-[7px] z-10"
            style={{ background: "linear-gradient(to right, #E36A38 0%, #E36A38 22%, #874E9F 22%, #874E9F 86%, #462458 86%, #462458 100%)" }}
            aria-hidden="true"
          />
          <iframe
            src={youtubeEmbedUrl}
            title={videoTitle ?? mediaTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      ) : vimeoEmbedUrl ? (
        <div
          className={`${mediaWrapperClass} relative aspect-video overflow-hidden bg-black`}
        >
          <div
            className="absolute top-0 left-0 right-0 h-[7px] z-10"
            style={{ background: "linear-gradient(to right, #E36A38 0%, #E36A38 22%, #874E9F 22%, #874E9F 86%, #462458 86%, #462458 100%)" }}
            aria-hidden="true"
          />
          <iframe
            ref={vimeoRef}
            src={vimeoEmbedUrl}
            title={videoTitle ?? mediaTitle}
            allow="autoplay; fullscreen; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
            style={{ zIndex: 1 }}
          />
          {/* Transparent overlay blocks mouse events, hiding Vimeo hover UI */}
          <div
            className="absolute inset-0"
            style={{ zIndex: 2 }}
            aria-hidden="true"
          />
          <button
            type="button"
            onClick={toggleVimeoMute}
            aria-label={muted ? "Unmute video" : "Mute video"}
            className="absolute bottom-4 right-4 flex items-center justify-center rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition hover:bg-black/70"
            style={{ zIndex: 3 }}
          >
            {muted ? (
              <VolumeX className="size-5" aria-hidden="true" />
            ) : (
              <Volume2 className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      ) : imageSrc ? (
        <div className={`${mediaWrapperClass} relative`}>
          <div
            className="absolute top-0 left-0 right-0 h-[7px] z-10"
            style={{ background: "linear-gradient(to right, #E36A38 0%, #E36A38 22%, #874E9F 22%, #874E9F 86%, #462458 86%, #462458 100%)" }}
            aria-hidden="true"
          />
          <Image
            src={imageSrc}
            width={1400}
            height={1050}
            alt={imageAlt ?? ""}
            data-sanity={dataAttributes?.image}
            className="w-full h-[554px] object-cover"
          />
        </div>
      ) : null}
    </Grid>
  );
}
