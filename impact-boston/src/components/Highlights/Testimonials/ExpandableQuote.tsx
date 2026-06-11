"use client";

import { useState } from "react";

const DEFAULT_MAX_QUOTE_LENGTH = 260;

type ExpandableQuoteProps = {
  quote: string;
  className?: string;
  maxLength?: number;
  withQuotationMarks?: boolean;
};

function getQuotePreview(quote: string, maxLength: number) {
  const preview = quote.slice(0, maxLength).trimEnd();
  const lastSpace = preview.lastIndexOf(" ");

  if (lastSpace > maxLength * 0.6) {
    return preview.slice(0, lastSpace).replace(/[.,;:!?-]+$/, "");
  }

  return preview.replace(/[.,;:!?-]+$/, "");
}

export default function ExpandableQuote({
  quote,
  className,
  maxLength = DEFAULT_MAX_QUOTE_LENGTH,
  withQuotationMarks = false,
}: ExpandableQuoteProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cleanQuote = quote.trim();
  const shouldTruncate = cleanQuote.length > maxLength;
  const visibleQuote =
    isExpanded || !shouldTruncate
      ? cleanQuote
      : getQuotePreview(cleanQuote, maxLength);

  return (
    <p className={className}>
      {withQuotationMarks ? "\u201c" : ""}
      {visibleQuote}
      {!isExpanded && shouldTruncate ? "..." : ""}
      {withQuotationMarks ? "\u201d" : ""}
      {!isExpanded && shouldTruncate ? (
        <>
          {" "}
          <button
            type="button"
            className="inline cursor-pointer font-medium text-primary underline-offset-4 transition-colors hover:text-complementary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            onClick={() => setIsExpanded(true)}
            aria-label="Read full testimonial quote"
          >
            Read more
          </button>
        </>
      ) : null}
    </p>
  );
}
