import { stegaClean } from "next-sanity";

import type {
  TripleCard,
  TripleCardContent,
  TripleProps,
  TripleVariant,
} from "@/components/Content/Triple";
import { resolveCmsLink } from "@/cms/links";
import type {
  CmsTripleContentBlock,
  SanityTripleContentCard,
} from "@/cms/types/blocks";

const BACKGROUND_COLOR_VALUE_MAP: Record<string, string | undefined> = {
  none: undefined,
  white: "#ffffff",
  lavender: "#faf6fd",
  primaryLight: "#fcf9ff",
  secondaryLight: "#fefcff",
  complementaryLight: "#fffaf7",
  grayLight: "#f4f5f5",
  "bg-white": "#ffffff",
  "bg-bg-lavender": "#faf6fd",
  "bg-primary-light": "#fcf9ff",
  "bg-secondary-light": "#fefcff",
  "bg-complementary-light": "#fffaf7",
  "bg-brand-gray-light": "#f4f5f5",
};

const BACKGROUND_COLOR_CLASS_MAP: Record<string, string | undefined> = {
  none: undefined,
  white: "bg-white",
  lavender: "bg-bg-lavender",
  primaryLight: "bg-primary-light",
  secondaryLight: "bg-secondary-light",
  complementaryLight: "bg-complementary-light",
  grayLight: "bg-brand-gray-light",
  "bg-white": "bg-white",
  "bg-bg-lavender": "bg-bg-lavender",
  "bg-primary-light": "bg-primary-light",
  "bg-secondary-light": "bg-secondary-light",
  "bg-complementary-light": "bg-complementary-light",
  "bg-brand-gray-light": "bg-brand-gray-light",
};

const DEFAULT_TRIPLE_CONTENT_CARDS: SanityTripleContentCard[] = [
  {
    title: "Realistic Scenarios",
    description:
      "Our self-defense classes simulate scenarios of threat, intimidation and violence perpetrated by strangers and people we know. Classes are taught by a team of two instructors, one of whom takes on the role of an aggressor. This instructor wears a full suit of body armor so students can safely defend themselves using the same force needed in a real attack.",
    backgroundColor: "primaryLight",
  },
  {
    title: "A Fight Avoided is",
    titleLine2: "a Fight Won",
    description:
      "Physical self-defense is always a last resort. Students learn verbal skills to de-escalate conflict and avoid unnecessary violence. Many assailants use verbal threats to intimidate people, so IMPACT teaches students to stay calm and respond effectively to harassment.",
    backgroundColor: "primaryLight",
  },
  {
    title: "Building Confidence,",
    titleLine2: "Healing from Trauma",
    description:
      "IMPACT gives people the opportunity to be effective and successful in the face of fear. Having this experience has helped people heal from past trauma and take on new challenges.",
    backgroundColor: "primaryLight",
  },
];

export const DEFAULT_TRIPLE_CONTENT_BLOCK_FIELDS: TripleProps = {
  variant: "filledCards",
  title: "Our Approach to Self-Defense",
  subtitle:
    "Realistic Scenarios, De-escalation Skills & Rebuilding Safety and Confidence",
  cards: DEFAULT_TRIPLE_CONTENT_CARDS.map((card) =>
    resolveTripleContentCard(card, "filledCards"),
  ),
};

export function resolveTripleContentBlock(
  section: CmsTripleContentBlock,
): TripleProps {
  const variant = resolveTripleContentVariant(section.variant);
  const cards = section.cards
    ?.map((card) => resolveTripleContentCard(card, variant))
    .filter((card): card is TripleCard => card.content.length > 0);
  const resolvedCards = cards?.length
    ? cards
    : DEFAULT_TRIPLE_CONTENT_BLOCK_FIELDS.cards;

  return {
    variant,
    title: section.title?.trim() || DEFAULT_TRIPLE_CONTENT_BLOCK_FIELDS.title,
    subtitle:
      section.subtitle?.trim() ||
      (cards?.length ? undefined : DEFAULT_TRIPLE_CONTENT_BLOCK_FIELDS.subtitle),
    intro: section.intro?.trim() || undefined,
    cards: resolvedCards,
  };
}

function resolveTripleContentCard(
  card: SanityTripleContentCard,
  variant: TripleVariant,
): TripleCard {
  const title = card.title?.trim();
  const titleLine2 = card.titleLine2?.trim();
  const description = card.description?.trim();
  const linkText = card.linkText?.trim();
  const link = resolveCmsLink(card.linkTarget, card.href);
  const tags =
    card.tags
      ?.map((tag) => tag?.trim())
      .filter((tag): tag is string => Boolean(tag)) ?? [];
  const content: TripleCardContent[] = [];

  if (title) {
    content.push({ type: "title", value: title, line2: titleLine2 });
  }

  if (description) {
    content.push({ type: "description", value: description });
  }

  if (tags.length) {
    content.push({ type: "tags", value: tags });
  }

  return {
    _key: card._key,
    bgClass:
      variant === "filledCards"
        ? resolveTripleCardBackgroundClass(card.backgroundColor)
        : undefined,
    bgStyle:
      variant === "filledCards"
        ? resolveTripleCardBackgroundStyle(card.backgroundColor)
        : undefined,
    content,
    link:
      linkText && link.href
        ? {
            href: link.href,
            openInNewTab: link.openInNewTab,
            text: linkText,
          }
        : undefined,
  };
}

function resolveTripleContentVariant(
  variant?: string | null,
): TripleVariant {
  return variant === "outlinedLinkCards" ? "outlinedLinkCards" : "filledCards";
}

function resolveTripleCardBackgroundClass(value?: string | null) {
  const trimmedValue = stegaClean(value)?.trim();

  return trimmedValue ? BACKGROUND_COLOR_CLASS_MAP[trimmedValue] : undefined;
}

function resolveTripleCardBackgroundStyle(value?: string | null) {
  const backgroundColor = resolveTripleCardBackgroundColor(value);

  return backgroundColor
    ? ({
        "--triple-card-bg": backgroundColor,
        backgroundColor,
      } as TripleCard["bgStyle"])
    : undefined;
}

function resolveTripleCardBackgroundColor(value?: string | null) {
  const trimmedValue = stegaClean(value)?.trim();

  if (!trimmedValue) {
    return undefined;
  }

  const tokenValue = BACKGROUND_COLOR_VALUE_MAP[trimmedValue];

  if (trimmedValue in BACKGROUND_COLOR_VALUE_MAP) {
    return tokenValue;
  }

  return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(trimmedValue)
    ? trimmedValue
    : undefined;
}
