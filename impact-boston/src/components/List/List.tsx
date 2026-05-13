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
}

const Chevron: React.FC<{ open: boolean }> = ({ open }) => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        style={{
            display: 'inline-block',
            transition: 'transform 0.2s',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            marginLeft: 'auto',
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

const List: React.FC<ListProps> = ({ title, description, items }) => {
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
        <Grid>
            <div className="col-span-full lg:grid lg:grid-cols-subgrid">
                {/* Top bar for desktop */}
                <div className="hidden lg:flex lg:col-span-full items-center mb-4">
                    {title && <h3 className="h3">{title}</h3>}
                    {description && <p className="p2 ml-6">{description}</p>}
                    <button
                        className="ml-auto px-4 py-2 text-sm font-medium underline text-primary hover:text-primary-dark transition"
                        onClick={handleToggleAll}
                        type="button"
                    >
                        {allOpenLabel}
                    </button>
                </div>
                {/* Title/desc for mobile/tablet */}
                <div className="lg:hidden">
                    {title && <h3 className="h3">{title}</h3>}
                    {description && <p className="p2">{description}</p>}
                </div>
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
                            className='lg:col-span-full grid grid-cols-subgrid'
                        >
                            <div className='flex items-center lg:col-span-full'>
                                <div>
                                    <div className='sub-1 mb-2'>{item.title}</div>
                                    <p className='p2'>{item.description}</p>
                                </div>
                                <Chevron open={isOpen} />
                            </div>
                            {isOpen && (
                                <p className='p2 mt-4 lg:col-span-8'>
                                    {item.paragraph}
                                </p>
                            )}
                        </div>
                    );
                })}
                {/* Bottom bar for mobile/tablet */}
                <div className="block lg:hidden w-full mt-4">
                    <button
                        className="w-full text-left  py-2 text-sm font-medium underline text-primary hover:text-primary-dark transition"
                        onClick={handleToggleAll}
                        type="button"
                    >
                        {allOpenLabel}
                    </button>
                </div>
            </div>
        </Grid>
    );
};

export default List;