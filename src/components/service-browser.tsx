"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { serviceGroups } from "@/lib/content";

export function ServiceBrowser() {
  const [active, setActive] = useState(serviceGroups[0].id);

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (serviceGroups.some((group) => group.id === id)) setActive(id);
  }, []);

  function choose(id: string) {
    setActive(id);
    history.replaceState(null, "", `#${id}`);
  }

  const group = serviceGroups.find((item) => item.id === active) ?? serviceGroups[0];

  return (
    <div className="mx-auto grid w-full min-w-0 max-w-6xl gap-6 px-4 py-10 sm:px-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:py-16">
      <nav aria-label="Service sections" className="min-w-0 lg:sticky lg:top-24 lg:self-start">
        <label className="block text-sm font-medium lg:hidden" htmlFor="service-picker">
          Choose a service
        </label>
        <select
          id="service-picker"
          className="field mt-2 lg:hidden"
          value={active}
          onChange={(event) => choose(event.target.value)}
        >
          {serviceGroups.map((item) => (
            <option key={item.id} value={item.id}>
              {item.index} {item.title}
            </option>
          ))}
        </select>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:mt-0 lg:grid-cols-1">
          <div className="hidden lg:contents">
            {serviceGroups.map((item) => {
              const selected = item.id === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => choose(item.id)}
                  aria-pressed={selected}
                  className={`rounded-2xl px-3 py-2 text-left text-sm font-medium leading-snug transition ${
                    selected
                      ? "bg-green text-white"
                      : "border border-ink/10 bg-white hover:border-green hover:text-green"
                  }`}
                >
                  <span className="mr-2 text-orange">{item.index}</span>
                  {item.title}
                </button>
              );
            })}
          </div>
          <Link
            href="/training"
            className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-ink/10 bg-white px-3 text-sm font-semibold text-green lg:justify-start lg:border-0 lg:bg-transparent"
          >
            Training programs
          </Link>
          <Link
            href="/supply"
            className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-ink/10 bg-white px-3 text-sm font-semibold text-blue lg:justify-start lg:border-0 lg:bg-transparent"
          >
            Trading and supply
          </Link>
        </div>
      </nav>

      <section
        id={group.id}
        className="rise min-w-0 scroll-mt-24 rounded-3xl bg-white p-4 ring-1 ring-ink/10 sm:p-8"
      >
        <p className="text-sm font-semibold text-orange">{group.index}</p>
        <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">{group.title}</h2>
        <p className="mt-3 text-muted">{group.summary}</p>
        <ul className="mt-6 grid min-w-0 gap-3 md:grid-cols-2">
          {group.items.map((item) => (
            <li key={item} className="flex min-w-0 gap-3 rounded-2xl bg-paper px-4 py-3 text-sm leading-snug">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green" aria-hidden />
              <span className="min-w-0">{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
