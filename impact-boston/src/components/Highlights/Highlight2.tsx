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
            <div className="col-span-full lg:col-span-6 flex flex-col gap-y-4 lg:gap-y-12">
                <div className="flex flex-col gap-y-4">
                    {body.map((paragraph, index) => (
                        <p
                            key={index}
                            className="p1"
                            data-sanity={dataAttributes?.body}
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
                <div className="flex flex-col gap-y-3">
                    <Button
                        href={ctaHref}
                        openInNewTab={ctaOpenInNewTab}
                        variant="primary"
                        size="lg"
                        className="self-start gap-x-22"
                        data-sanity={dataAttributes?.ctaLabel}
                        style={{ ...(buttonBgColor ? { backgroundColor: buttonBgColor } : {}), ...(buttonTextColor ? { color: buttonTextColor } : {}) }}
                    >
                        {ctaLabel}
                    </Button>
                    {supportingText ? (
                        <p
                            className="p2"
                            data-sanity={dataAttributes?.supportingText}
                            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                        >
                            {supportingText}
                        </p>
                    ) : null}
                </div>
            </div>      
        </Grid>
        </div>
    )
}
