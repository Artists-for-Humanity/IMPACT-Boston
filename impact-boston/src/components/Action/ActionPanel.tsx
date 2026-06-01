// components/CTASection.tsx
// Call-to-action section with three action cards for registration, classes, and donations

import Link from "next/link";
import {
  GraduationCap,
  DollarSign,
  ChevronRight,
  Handshake,
  User as UserIcon,
  type LucideIcon,
} from "lucide-react";
import Grid from "../common/Grid";

export type ActionPanelIcon = "handshake" | "user" | "dollar" | "graduation";

export type ActionPanelCard = {
  title?: string | null;
  body?: string | null;
  href?: string | null;
  bgColor?: string | null;
  icon?: ActionPanelIcon | null;
};

type ActionPanelProps = {
  title?: string | null;
  subtext?: string | null;
  cards?: ActionPanelCard[] | null;
};

const ICONS: Record<ActionPanelIcon, LucideIcon> = {
  handshake: Handshake,
  user: UserIcon,
  dollar: DollarSign,
  graduation: GraduationCap,
};

const CARD_HEIGHT_CLASSES = [
  "md:h-[245px]",
  "md:h-[256px]",
  "md:h-[260px]",
];

const FALLBACK_ACTION_PANEL = {
  title: "Everything You Need to Get Involved.",
  subtext: "Register for classes, make donations, or explore programs.",
  cards: [
    {
      title: "Hire Us to Come to You",
      body: "If you're a school, organization, workplace, or other group, explore our classes and programs.",
      href: "/programs",
      bgColor: "#E86834",
      icon: "handshake",
    },
    {
      title: "Join a Class Today",
      body: "If you're an individual seeking a self-defense class, explore options and register here online today.",
      href: "/programs",
      bgColor: "#563672",
      icon: "user",
    },
    {
      title: "Make a Donation",
      body: "Support our mission. Every gift makes an impact. Help bring self defense training to all folks today!",
      href: "/donate",
      bgColor: "#311E41",
      icon: "dollar",
    },
  ] satisfies Required<ActionPanelCard>[],
};

function isActionPanelIcon(icon: string | null | undefined): icon is ActionPanelIcon {
  return Boolean(icon && icon in ICONS);
}

export default function ActionPanel({
  title,
  subtext,
  cards,
}: ActionPanelProps = {}) {
  const visibleCards = cards?.length ? cards.slice(0, 3) : FALLBACK_ACTION_PANEL.cards;

  return (
    <section className="w-full bg-[#F0EEF5] py-8 md:py-10 lg:py-18">
      <div className="flex flex-col gap-8 lg:gap-12">
        {/* Header Row */}
        <Grid noPadding className="gap-y-4">
          {/* Title */}
          <h2 className="col-span-4 md:col-span-7 lg:col-span-6 h2 text-black text-left">
            {title || FALLBACK_ACTION_PANEL.title}
          </h2>

          {/* Empty Middle */}
          <div className="hidden lg:block lg:col-span-3" />

          {/* Subtext */}
          <p className="col-span-4 md:col-span-4 lg:col-span-3 lg:col-start-10 p2 text-gray-600 md:text-left lg:text-right self-end lg:self-center">
            {subtext || FALLBACK_ACTION_PANEL.subtext}
          </p>
        </Grid>

        {/* Cards Row */}
        <Grid noPadding className="flex-col md:flex-row gap-y-2 md:gap-y-2">
          {visibleCards.map((card, index) => {
            const fallbackCard =
              FALLBACK_ACTION_PANEL.cards[index % FALLBACK_ACTION_PANEL.cards.length];
            const icon = isActionPanelIcon(card.icon) ? card.icon : fallbackCard.icon;
            const Icon = ICONS[icon];

            return (
              <Link
                key={`${card.title || fallbackCard.title}-${index}`}
                href={card.href || fallbackCard.href}
                className={`col-span-4 md:col-span-8 lg:col-span-4 flex flex-col items-start gap-14 md:gap-0 md:justify-between ${CARD_HEIGHT_CLASSES[index] ?? CARD_HEIGHT_CLASSES[0]} lg:h-[325px] p-6 lg:p-8 hover:opacity-90 transition-opacity`}
                style={{ backgroundColor: card.bgColor || fallbackCard.bgColor }}
              >
                {/* Top - Icon and Chevron */}
                <div className="flex justify-between items-start w-full">
                  <Icon className="w-14 h-14 text-white" strokeWidth={1} />
                  <ChevronRight
                    className="w-8 h-8 text-white flex-shrink-0"
                    strokeWidth={2}
                  />
                </div>

                {/* Bottom - Title and Body */}
                <div className="flex flex-col gap-2 mt-auto md:mt-0">
                  <h4 className="sub-1 text-white">
                    {card.title || fallbackCard.title}
                  </h4>
                  <p className="p2 text-white/87 max-w-[100%]">
                    {card.body || fallbackCard.body}
                  </p>
                </div>
              </Link>
            );
          })}
        </Grid>
      </div>
    </section>
  );
}
