'use client';
import React, { useState } from 'react';
import Grid from '../common/Grid';

interface ListItem {
    title: string;
    description: string;
    paragraph: string;
}

interface ListProps {
    title?: string;
    description?: string;
    items: ListItem[];
    showToggle?: boolean;
    noPaddingTop?: boolean;
}

const Chevron: React.FC<{ open: boolean }> = ({ open }) => (
    <svg
        viewBox="0 0 18 18"
        className="w-5 h-5"
        style={{
            display: 'inline-block',
            transition: 'transform 0.2s',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        }}
        aria-hidden="true"
        focusable="false"
    >
        <polyline
            points="4.5,7 9,11 13.5,7"
            fill="none"
            stroke="#333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const List: React.FC<ListProps> = ({ title, description, items, showToggle = true, noPaddingTop = false }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [allOpen, setAllOpen] = useState(false);

    // If allOpen is true, all items are open; otherwise, only openIndex is open
    const handleToggle = (idx: number) => {
        if (allOpen) return; // Disable individual toggling when all are open
        setOpenIndex(openIndex === idx ? null : idx);
    };

    const handleToggleAll = () => {
        if (allOpen) {
            setAllOpen(false);
            setOpenIndex(null);
        } else {
            setAllOpen(true);
            setOpenIndex(null);
        }
    };

    const allOpenLabel = allOpen
        ? `Close all services`
        : `See all ${items.length} services`;

    return (
        <Grid noPaddingTop={noPaddingTop}>
            <div className={`col-span-full lg:grid lg:grid-cols-subgrid ${(title || description || showToggle) ? 'lg:gap-y-8' : ''}`}>
                {/* Top bar for desktop */}
                <div className="hidden lg:flex lg:col-span-full items-center justify-between">
                    <div className="flex items-center gap-6">
                        {title && <h3 className="h3">{title}</h3>}
                        {description && <p className="p2">{description}</p>}
                    </div>
                    {showToggle && (
                        <button
                            className="text-sm font-medium underline text-primary hover:text-primary-dark transition"
                            onClick={handleToggleAll}
                            type="button"
                        >
                            {allOpenLabel}
                        </button>
                    )}
                </div>
                {/* Title/desc for mobile/tablet */}
                <div className="lg:hidden">
                    {title && <h3 className="h3">{title}</h3>}
                    {description && <p className="p2">{description}</p>}
                </div>
                <div className="lg:col-span-full py-6">
                    {items.map((item, idx) => {
                        const isOpen = allOpen || openIndex === idx;
                        return (
                            <div
                                key={idx}
                                style={{
                                    borderBottom: '1px solid #eee',
                                    padding: '1rem 0',
                                    cursor: allOpen ? 'default' : 'pointer',
                                }}
                                onClick={() => handleToggle(idx)}
                                className='flex flex-col gap-6'
                            >
                                <div className='flex items-start gap-4 md:grid md:grid-cols-8 md:gap-x-4 lg:grid-cols-12 lg:gap-x-8'>
                                    <div className='flex-1 flex flex-col gap-2 md:col-span-6 lg:col-span-8'>
                                        <div className='sub-1'>{item.title}</div>
                                        <p className='p2'>{item.description}</p>
                                    </div>
                                    <div className='flex items-start justify-end md:col-start-8 md:col-span-1 lg:col-start-12 lg:col-span-1'>
                                        <Chevron open={isOpen} />
                                    </div>
                                </div>
                                {isOpen && (
                                    <div className='md:grid md:grid-cols-8 md:gap-x-4 lg:grid-cols-12 lg:gap-x-8'>
                                        <p className='p2 md:col-span-6 lg:col-span-8'>{item.paragraph}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
                {/* Bottom bar for mobile/tablet */}
                {showToggle && (
                    <div className="block lg:hidden w-full mt-4">
                        <button
                            className="w-full text-left text-sm font-medium underline text-primary hover:text-primary-dark transition"
                            onClick={handleToggleAll}
                            type="button"
                        >
                            {allOpenLabel}
                        </button>
                    </div>
                )}
            </div>
        </Grid>
    );
};

export default List;