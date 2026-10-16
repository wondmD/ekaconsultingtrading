import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { serviceGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "HSEQ, risk, fire and emergency, occupational health, environment, and technical advisory services from EKA Consulting and Trading PLC.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Consulting, technical services and training"
        title="Practical work, across the operation."
        lede="Advisory, assessment, inspection, audit, management systems, risk, HSEQ, environment, occupational health, fire safety, and competency development."
        image="/images/consulting-site.jpg"
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[15rem_1fr] lg:py-16">
        <nav aria-label="Service sections" className="lg:sticky lg:top-24 lg:self-start">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {serviceGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="shrink-0 rounded-full border border-ink/10 bg-white px-3 py-2 text-sm font-medium hover:border-green hover:text-green"
              >
                <span className="mr-2 text-orange">{group.index}</span>
                {group.title}
              </a>
            ))}
            <Link href="/training" className="shrink-0 rounded-full px-3 py-2 text-sm font-semibold text-green">
              Training programs
            </Link>
            <Link href="/supply" className="shrink-0 rounded-full px-3 py-2 text-sm font-semibold text-blue">
              Trading and supply
            </Link>
          </div>
        </nav>
        <div className="space-y-4">
          {serviceGroups.map((group) => (
            <section
              id={group.id}
              key={group.id}
              className="scroll-mt-24 rounded-3xl bg-white p-6 ring-1 ring-ink/10 sm:p-8"
            >
              <p className="text-sm font-semibold text-orange">{group.index}</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">{group.title}</h2>
              <p className="mt-3 max-w-xl text-muted">{group.summary}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 rounded-2xl bg-paper px-4 py-3 text-sm leading-snug">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
