import Grid from "../common/Grid";
import Button from "../common/Button";
import type { CSSProperties } from "react";

interface Highlight2Props {
    title: string;
    body: string[];
    ctaLabel: string;
    ctaHref: string;
    supportingText?: string;
    backgroundColor?: string;
    textColor?: string;
    buttonBgColor?: string;
    buttonTextColor?: string;
}

export default function Highlight2({
    title,
    body,
    ctaLabel,
    ctaHref,
    supportingText,
    backgroundColor,
    textColor,
    buttonBgColor,
    buttonTextColor,
}: Highlight2Props) {
    const containerStyles: CSSProperties = {
        ...(backgroundColor ? { backgroundColor } : {}),
        ...(textColor ? { color: textColor } : {}),
    };

    return (
        <div
            className=""
            style={containerStyles}
        >
        <Grid>
            <div className="col-span-full lg:col-span-6">
                <h2 className="h2">{title}</h2>
            </div>
            <div className="col-span-full lg:col-span-6 grid grid-cols-subgrid gap-y-4">
                {body.map((paragraph, index) => (
                    <p key={index} className="p1 col-span-full">{paragraph}</p>
                ))}
                <Button
                    href={ctaHref}
                    variant="primary"
                    size="lg"
                    className="w-full col-start-1 col-span-4 md:col-start-1 md:col-span-4 md:w-full lg:w-auto lg:col-start-auto lg:col-span-3"
                    style={{ ...(buttonBgColor ? { backgroundColor: buttonBgColor } : {}), ...(buttonTextColor ? { color: buttonTextColor } : {}) }}
                >
                    {ctaLabel}
                </Button>
                {supportingText ? (
                    <p className="p2 col-span-full">{supportingText}</p>
                ) : null}
            </div>      
        </Grid>
        </div>
    )
}
