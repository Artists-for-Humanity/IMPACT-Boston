"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import type { TrainerListItem } from "./types";

export default function TrainerList({
  items,
  previewCount = 5,
  sortLabel,
  state,
}: {
  items: TrainerListItem[];
  previewCount?: number;
  sortLabel: string;
  state: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const [selectedState, setSelectedState] = useState(state);
  const [sortValue, setSortValue] = useState(getInitialSortValue(sortLabel));
  const filteredItems = items.filter((item) => item.state === selectedState);
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortValue === "nameDesc") {
      return b.name.localeCompare(a.name);
    }

    if (sortValue === "organization") {
      return (
        a.organization.localeCompare(b.organization) ||
        a.name.localeCompare(b.name)
      );
    }

    return a.name.localeCompare(b.name);
  });
  const hasToggle = sortedItems.length > previewCount;
  const visibleItems = expanded
    ? sortedItems
    : sortedItems.slice(0, previewCount);

  const handleStateChange = (nextState: string) => {
    setSelectedState(nextState);
    setExpanded(false);
  };

  const handleSortChange = (nextSort: string) => {
    setSortValue(nextSort);
    setExpanded(false);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-3 border-b border-line-divider pb-4 md:flex-row md:items-center">
        <div className="flex flex-col gap-2 md:flex-row">
          <TrainerListSelect
            label="State"
            onChange={handleStateChange}
            options={usStates.map((stateName) => ({
              label: stateName,
              value: stateName,
            }))}
            value={selectedState}
          />
          <TrainerListSelect
            label="Sort"
            onChange={handleSortChange}
            options={trainerSortOptions}
            value={sortValue}
          />
        </div>

        {hasToggle ? (
          <button
            className="p2 cursor-pointer text-left text-secondary underline underline-offset-2 md:ml-auto"
            onClick={() => setExpanded((current) => !current)}
            type="button"
          >
            {expanded ? "Close" : `See all ${sortedItems.length}`}
          </button>
        ) : null}
      </div>

      {visibleItems.length > 0 ? (
        <ul>
          {visibleItems.map((item) => {
            const contactHref = getTrainerContactHref(item);

            return (
              <li
                className="border-b border-line-divider py-4 last:border-b-0"
                key={`${item.state}-${item.name}`}
              >
                <p className="p2 text-black">{item.name}</p>
                <p className="p2 text-text-grey-light">{item.organization}</p>
                {item.contact && contactHref ? (
                  <a
                    className="p2 text-secondary underline underline-offset-2"
                    href={contactHref}
                  >
                    {item.contact}
                  </a>
                ) : null}
                {item.contact && !contactHref ? (
                  <p className="p2 text-secondary">{item.contact}</p>
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="p2 border-b border-line-divider py-4 text-text-grey-light">
          No certified ASAP trainers are listed for {selectedState} yet.
        </p>
      )}
    </div>
  );
}

function TrainerListSelect({
  label,
  onChange,
  options,
  value,
}: {
  label: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
  value: string;
}) {
  return (
    <label className="p2 relative flex h-10 w-full items-center border border-line-divider bg-white px-4 transition-colors focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/20 hover:border-secondary md:w-56">
      <span className="shrink-0 text-black">{label}: </span>
      <select
        aria-label={label}
        className="min-w-0 flex-1 cursor-pointer appearance-none bg-transparent pl-1 pr-8 text-dusty-purple outline-none"
        onChange={(event) => onChange(event.target.value)}
        value={value}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-3 size-4 text-grey"
        aria-hidden="true"
      />
    </label>
  );
}

const trainerSortOptions = [
  { label: "Alphabetically", value: "nameAsc" },
  { label: "Reverse Alphabetically", value: "nameDesc" },
  { label: "Organization", value: "organization" },
];

const usStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

function getInitialSortValue(sortLabel: string) {
  return (
    trainerSortOptions.find((option) => option.label === sortLabel)?.value ??
    trainerSortOptions[0].value
  );
}

function getTrainerContactHref(item: TrainerListItem) {
  if (item.contactHref) {
    return item.contactHref;
  }

  const emailMatch = item.contact?.match(
    /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i,
  );

  if (emailMatch) {
    return `mailto:${emailMatch[0]}`;
  }

  return undefined;
}
