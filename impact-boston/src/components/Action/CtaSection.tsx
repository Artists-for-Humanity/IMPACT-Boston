import Button from "../common/Button";
import Image from "next/image";
import { stegaClean } from "next-sanity";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type CtaPanelData = {
  wrapperClassName?: string | null;
  bgColor?: string | null;
  title?: string | null;
  titleLine2?: string | null;
  description?: string | null;
  buttonText?: string | null;
  href?: string | null;
  icon?: string | null;
  iconSrc?: string | null;
  iconWidth?: number | null;
  iconHeight?: number | null;
};

const LUCIDE_ICON_COMPONENTS = LucideIcons as unknown as Record<
  string,
  LucideIcon | undefined
>;

const DEFAULT_PANEL_COLORS = ["#e86834", "#311e41"];
const DEFAULT_PANEL_CLASS =
  "md:w-1/2 py-14 px-10 md:p-10 lg:py-[118px] lg:px-[144px]";
const BRAND_PANEL_COLORS: Record<string, string> = {
  primary: "#311e41",
  secondary: "#563672",
  complementary: "#e86834",
  "bg-primary": "#311e41",
  "bg-secondary": "#563672",
  "bg-complementary": "#e86834",
};

function getPanelBackgroundColor(
  bgColor: string | null | undefined,
  index: number,
  shouldUseDefault: boolean,
) {
  const cleanColor = stegaClean(bgColor)?.trim();

  if (cleanColor) {
    return BRAND_PANEL_COLORS[cleanColor.toLowerCase()] ?? cleanColor;
  }

  return shouldUseDefault
    ? DEFAULT_PANEL_COLORS[index] ?? DEFAULT_PANEL_COLORS[0]
    : undefined;
}

function toKebabIconName(icon: string) {
  return icon
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function toPascalIconName(icon: string) {
  return icon
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function getLucideIcon(iconName: string | null | undefined) {
  if (!iconName) {
    return null;
  }

  return (
    LUCIDE_ICON_COMPONENTS[toPascalIconName(toKebabIconName(iconName))] ?? null
  );
}

export default function CtaSection({
  panels,
}: {
  panels?: CtaPanelData[] | null;
}) {
  const visiblePanels =
    panels
      ?.filter(
        (panel) =>
          panel.title && panel.description && panel.buttonText && panel.href,
      )
      .slice(0, 2) ?? [];

  if (!visiblePanels.length) {
    return null;
  }

  return (
    <div className="md:flex max-w-[2000px] mx-auto">
      {visiblePanels.map((panel, index) => (
        <CtaPanel key={`${panel.href}-${index}`} index={index} {...panel} />
      ))}
    </div>
  );
}

function CtaPanel({
  index,
  wrapperClassName,
  bgColor,
  title,
  titleLine2,
  description,
  buttonText,
  href,
  icon,
  iconSrc,
  iconWidth,
  iconHeight,
}: {
  index: number;
} & CtaPanelData) {
  const Icon = getLucideIcon(icon);
  const panelClassName = wrapperClassName ?? DEFAULT_PANEL_CLASS;
  const backgroundColor = getPanelBackgroundColor(
    bgColor,
    index,
    !wrapperClassName,
  );
  const panelStyle = backgroundColor ? { backgroundColor } : undefined;

  function renderButtonIcon() {
    if (Icon) {
      return (
        <Icon
          className="h-6 w-6 text-black group-hover:text-white"
          strokeWidth={2}
        />
      );
    }

    if (iconSrc) {
      return (
        <Image
          src={iconSrc}
          width={iconWidth ?? 24}
          height={iconHeight ?? 24}
          alt=""
          className="group-hover:invert"
        />
      );
    }

    return null;
  }

  if (!title || !description || !buttonText || !href) {
    return null;
  }

  return (
    <div className={panelClassName} style={panelStyle}>
      <div className="flex flex-col gap-8 h-full justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="h3 text-white">
            {title}
            {titleLine2 ? (
              <>
                <br />
                {titleLine2}
              </>
            ) : null}
          </h3>

          <p className="p1 text-white">{description}</p>
        </div>

        <Button
          className="col-span-full bg-white flex justify-between cursor-pointer w-[270px] md:w-full lg:w-[270px] h-14 md:h-[73px] group"
          href={href}
        >
          <p className="p1-bold text-black group-hover:text-white">
            {buttonText}
          </p>
          {renderButtonIcon()}
        </Button>
      </div>
    </div>
  );
}
