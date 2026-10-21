"use client";

import { useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { pillars } from "@/lib/content";

const accents = ["bg-green", "bg-orange"] as const;

export function PracticeSwitch() {
  const [active, setActive] = useState(0);
  const pillar = pillars[active];

  return (
    <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div role="tablist" aria-label="Business areas" className="grid gap-3">
        {pillars.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.index}
              type="button"
              role="tab"
              id={`practice-tab-${item.index}`}
              aria-selected={selected}
              aria-controls="practice-panel"
              onClick={() => setActive(index)}
              className={`rounded-3xl px-5 py-4 text-left ring-1 transition duration-200 ${
                selected
                  ? "bg-white shadow-sm ring-green/40"
                  : "bg-white/70 ring-ink/10 hover:-translate-y-0.5 hover:bg-white hover:ring-ink/20"
              }`}
            >
              <span
                className={`inline-flex h-8 w-8 items-center justify-center rounded-xl text-xs font-semibold text-white ${accents[index]}`}
              >
                {item.index}
              </span>
              <span className="mt-3 block text-lg font-semibold tracking-tight">{item.title}</span>
            </button>
          );
        })}
      </div>
      <article
        id="practice-panel"
        role="tabpanel"
        aria-labelledby={`practice-tab-${pillar.index}`}
        key={pillar.index}
        className="rise rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/10 sm:p-8"
      >
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{pillar.title}</h3>
        <p className="mt-4 leading-relaxed text-muted">{pillar.body}</p>
        <ButtonLink href={pillar.href} tone={active === 0 ? "primary" : "ink"} className="mt-6">
          {pillar.cta}
        </ButtonLink>
      </article>
    </div>
  );
}
