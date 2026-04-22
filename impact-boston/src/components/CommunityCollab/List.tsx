import React, { useState } from "react";
import Grid from "../common/Grid";

interface ListProps {
    backgroundColor?: string;
    heading: string;
    buttonText: string;
    listItems: string[];
}

function splitIntoColumns(items: string[], columns: number): string[][] {
    const perColumn = Math.ceil(items.length / columns);
    const cols: string[][] = Array.from({ length: columns }, () => []);
    items.forEach((item, idx) => {
        cols[idx % columns].push(item);
    });
    return cols;
}

export default function List({
    backgroundColor,
    heading,
    buttonText,
    listItems
}: ListProps) {
    const [expanded, setExpanded] = useState(false);

    // Sort alphabetically
    const sortedItems = [...listItems].sort((a, b) => a.localeCompare(b));

    // Show only first 5 if not expanded
    const visibleItems = expanded ? sortedItems : sortedItems.slice(0, 24);

    // Split into 3 columns, vertically
    const columns = splitIntoColumns(visibleItems, 3);

    return (
       <Grid className={` ${backgroundColor ? backgroundColor : ''}`}>
            <div className="col-span-3 md:col-span-4 lg:col-span-4">
                <h2 className="h2">{heading}</h2>
            </div>
            <div className="col-span-1 md:col-span-4  lg:col-span-8 text-right ">
                <button className="btn cursor-pointer" onClick={() => setExpanded(e => !e)}>
                    {expanded ? "See less" : buttonText}
                </button>
            </div>
            <div className="col-span-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {columns.map((col, i) => (
                        <div key={i} className="flex-1 pl-5">
                            {col.map((item, j) => (
                                <div key={j}>{item}</div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </Grid>
    );
}