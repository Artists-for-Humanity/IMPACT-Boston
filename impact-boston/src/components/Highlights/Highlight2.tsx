import Grid from "../common/Grid";
import Button from "../common/Button";
import type { CSSProperties } from "react";

interface Highlight2Props {
    title: string;
    body: string[];
    ctaLabel: string;
    ctaHref: string;
    ctaOpenInNewTab?: boolean;
    supportingText?: string;
    backgroundColor?: string;
    textColor?: string;
    buttonBgColor?: string;
    buttonTextColor?: string;
    supportingTextColor?: string;
    dataAttributes?: {
        body?: string;
        ctaLabel?: string;
        supportingText?: string;
        title?: string;
    };
}

export default function Highlight2({
    title,
    body,
    ctaLabel,
    ctaHref,
    ctaOpenInNewTab = false,
    supportingText,
    backgroundColor,
    textColor,
    buttonBgColor,
    buttonTextColor,
    supportingTextColor,
    dataAttributes,
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
                <h2 className="h2" data-sanity={dataAttributes?.title}>
                    {title}
                </h2>
            </div>
            <div className="col-span-full lg:col-span-6 grid grid-cols-subgrid gap-y-4">
                {body.map((paragraph, index) => (
                    <p
                        key={index}
                        className="p1 col-span-full"
                        data-sanity={dataAttributes?.body}
                    >
                        {paragraph}
                    </p>
                ))}
                <Button
                    href={ctaHref}
                    openInNewTab={ctaOpenInNewTab}
                    variant="primary"
                    size="lg"
                    className="w-full col-start-1 col-span-4 md:col-start-1 md:col-span-4 md:w-full lg:w-auto lg:col-start-auto lg:col-span-3"
                    data-sanity={dataAttributes?.ctaLabel}
                    style={{ ...(buttonBgColor ? { backgroundColor: buttonBgColor } : {}), ...(buttonTextColor ? { color: buttonTextColor } : {}) }}
                >
                    {ctaLabel}
                </Button>
                {supportingText ? (
                    <p
                        className="p2 col-span-full"
                        data-sanity={dataAttributes?.supportingText}
                        style={supportingTextColor ? { color: supportingTextColor } : undefined}
                    >
                        {supportingText}
                    </p>
                ) : null}
            </div>      
        </Grid>
        </div>
    )
}
