"use client";

import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import Grid from "../common/Grid";
import Button from "../common/Button";

interface Hero1HeadlineProps {
  children: React.ReactNode;
  className?: string;
  dataSanity?: string;
}

export function Hero1Headline({
  children,
  className = "",
  dataSanity,
}: Hero1HeadlineProps) {
  return (
    <h1
      className={`h1 text-center lg:text-left hyphens-auto ${className}`}
      data-sanity={dataSanity}
      style={{ color: "#061629" }}
    >
      {children}
    </h1>
  );
}

interface Hero1HeadlinePartProps {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "complementary" | "black" | "white";
  customColor?: string;
  dataSanity?: string;
}

export function Hero1HeadlinePart({
  children,
  color = "black",
  customColor,
  dataSanity,
}: Hero1HeadlinePartProps) {
  const colorMap = {
    primary: "text-primary",
    secondary: "text-secondary",
    complementary: "text-complementary",
    black: "text-black",
    white: "text-white",
  };

  if (customColor) {
    return (
      <span data-sanity={dataSanity} style={{ color: customColor }}>
        {children}
      </span>
    );
  }

  return (
    <span className={colorMap[color]} data-sanity={dataSanity}>
      {children}
    </span>
  );
}

function getYouTubeVideoId(url: string): string {
  try {
    const parsed = new URL(url);
    const hostname = parsed.hostname.replace(/^www\./, "");
    if (
      (hostname === "youtube.com" || hostname === "youtube-nocookie.com") &&
      parsed.pathname.startsWith("/embed/")
    ) {
      return parsed.pathname.split("/").filter(Boolean)[1] ?? "";
    }
    if (hostname === "youtu.be") {
      return parsed.pathname.split("/").filter(Boolean)[0] ?? "";
    }
    if (hostname === "youtube.com" || hostname === "m.youtube.com") {
      if (parsed.pathname.startsWith("/shorts/")) {
        return parsed.pathname.split("/").filter(Boolean)[1] ?? "";
      }
      return parsed.searchParams.get("v") ?? "";
    }
  } catch {
    // ignore
  }
  return "";
}

function buildYouTubeEmbedUrl(url: string): string {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) return url;
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    controls: "0",       // hide all player controls
    rel: "0",            // no related videos at end
    loop: "1",
    playlist: videoId,   // required for loop
    modestbranding: "1", // minimal branding
    iv_load_policy: "3", // hide annotations/info cards
    disablekb: "1",      // disable keyboard shortcuts
    fs: "0",             // hide fullscreen button
    enablejsapi: "1",
  });
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}

interface Hero1Props {
  headline: React.ReactNode;
  body: string;
  ctaText: string;
  ctaHref: string;
  ctaOpenInNewTab?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  youtubeUrl?: string;
  videoTitle?: string;
  className?: string;
  dataAttributes?: {
    body?: string;
    ctaText?: string;
    image?: string;
  };
}

export default function Hero1({
  headline,
  body,
  ctaText,
  ctaHref,
  ctaOpenInNewTab = false,
  imageSrc,
  imageAlt,
  youtubeUrl,
  videoTitle,
  className = "",
  dataAttributes,
}: Hero1Props) {
  const youtubeEmbedUrl = youtubeUrl ? buildYouTubeEmbedUrl(youtubeUrl) : null;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = useCallback(() => {
    const func = muted ? "unMute" : "mute";
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "*",
    );
    setMuted((prev) => !prev);
  }, [muted]);
  return (
    <section
      className={`bg-white ${className}`}
    >
      <Grid className="gap-y-10 md:gap-y-10 lg:gap-y-0">
        <div className="col-span-4 md:col-span-6 md:col-start-2 lg:col-span-5 lg:col-start-1">
          <div className="flex flex-col h-full items-center lg:items-start gap-8 lg:gap-0">
            <div className="flex flex-col gap-y-6 lg:gap-y-[32px] items-center lg:items-start w-full">
              <div className="lg:grid lg:grid-cols-5 lg:gap-6 w-full">
                <div className="lg:col-span-4 min-w-0">
                  {headline &&
                    (typeof headline === "string" ? (
                      <Hero1Headline>{headline}</Hero1Headline>
                    ) : (
                      headline
                    ))}
                </div>
              </div>
              <p
                className="p1 max-w-lg lg:max-w-none lg:w-4/5 text-center lg:text-left"
                data-sanity={dataAttributes?.body}
                style={{ color: "#333" }}
              >
                {body}
              </p>
            </div>
            <div className="flex justify-center lg:justify-start lg:mt-auto w-full">
              <div className="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-5 gap-6 w-full">
                <Button
                  href={ctaHref}
                  openInNewTab={ctaOpenInNewTab}
                  variant="primary"
                  size="lg"
                  className="w-full col-start-2 col-span-4 md:col-start-2 md:col-span-4 md:w-full lg:w-auto lg:col-start-auto lg:col-span-3"
                  data-sanity={dataAttributes?.ctaText}
                >
                  {ctaText}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4 md:col-span-8 lg:col-span-7 h-[544px]">
          <div
            className="relative w-full h-full overflow-hidden bg-black"
          >
            <div
              className="absolute top-0 left-0 right-0 h-[7px] z-10"
              style={{
                background:
                  "linear-gradient(to right, #E36A38 0%, #E36A38 22%, #874E9F 22%, #874E9F 86%, #462458 86%, #462458 100%)",
              }}
            />
            {youtubeEmbedUrl ? (
              <>
                <iframe
                  ref={iframeRef}
                  src={youtubeEmbedUrl}
                  title={videoTitle ?? (typeof headline === "string" ? headline : "Hero video")}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 h-full w-full"
                  style={{ zIndex: 1 }}
                />
                {/* Transparent overlay blocks mouse events from reaching the iframe,
                    preventing YouTube's hover UI (title, share, logo, watch later) */}
                <div
                  className="absolute inset-0"
                  style={{ zIndex: 2 }}
                  aria-hidden="true"
                />
                <button
                  type="button"
                  onClick={toggleMute}
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
              </>
            ) : imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt ?? ""}
                data-sanity={dataAttributes?.image}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
                priority
              />
            ) : null}
          </div>
        </div>
      </Grid>
    </section>
  );
}
