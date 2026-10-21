"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { disciplines, serviceGroups } from "@/lib/content";

const services = [
  ...serviceGroups.map((group) => ({
    id: group.id,
    index: group.index,
    title: group.title,
    summary: group.summary,
    href: group.href,
  })),
  {
    id: "training",
    index: "07",
    title: "Training",
    summary: "Practical programs designed around the workplace.",
    href: "/training",
  },
  {
    id: "supply",
    index: "08",
    title: "Trading & Supply",
    summary: "Safety, fire protection, PPE, and technical products.",
    href: "/supply",
  },
];

const related: Record<(typeof disciplines)[number], readonly string[]> = {
  Consulting: ["hseq", "risk", "fire", "health", "environment", "technical"],
  "Technical Services": ["technical", "fire"],
  Training: ["training"],
  HSEQ: ["hseq"],
  Risk: ["risk"],
  Compliance: ["hseq", "environment"],
  Sustainability: ["environment"],
  "Trading & Supply": ["supply"],
};

const accents = ["bg-green", "bg-orange", "bg-blue"] as const;

export function HomeServices() {
  const [filter, setFilter] = useState<(typeof disciplines)[number] | "All">("All");
  const visible = useMemo(
    () => (filter === "All" ? services : services.filter((service) => related[filter].includes(service.id))),
    [filter],
  );

  return (
    <section className="overflow-x-clip bg-white py-14 sm:py-16">
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-green">Services</p>
            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight sm:text-4xl">
              Work that holds up in the field.
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex min-h-11 items-center justify-center self-start rounded-full border border-ink/15 bg-white px-5 text-sm font-semibold transition hover:border-green hover:text-green"
          >
            Full practice
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter services">
          <FilterChip selected={filter === "All"} onClick={() => setFilter("All")}>
            All
          </FilterChip>
          {disciplines.map((item) => (
            <FilterChip key={item} selected={filter === item} onClick={() => setFilter(item)}>
              {item}
            </FilterChip>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {visible.map((service, index) => (
            <Link
              key={service.id}
              href={service.href}
              className="rise group min-w-0 rounded-3xl border border-ink/10 bg-paper p-4 transition duration-200 hover:-translate-y-0.5 hover:border-green/40 hover:bg-white hover:shadow-sm sm:p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-orange">{service.index}</span>
                <span aria-hidden className="text-green transition group-hover:translate-x-0.5">
                  →
                </span>
              </div>
              <h3 className="mt-3 text-balance text-lg font-semibold tracking-tight sm:text-xl">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>
              <span className={`mt-5 block h-1 w-10 rounded-full ${accents[index % 3]}`} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FilterChip({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      onClick={onClick}
      className={`max-w-full rounded-full px-3 py-1.5 text-left text-sm font-medium leading-snug transition ${
        selected ? "bg-green text-white" : "border border-ink/10 bg-paper text-navy hover:border-green/40"
      }`}
    >
      {children}
    </button>
  );
}
