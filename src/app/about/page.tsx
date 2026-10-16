import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { company, leaders, pillars, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Vision, mission, values, and leadership of EKA Consulting and Trading PLC.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker={company.name}
        title="A company built for safer, better work."
        lede={company.overview}
        image="/images/workplace-site.jpg"
      />

      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-14 sm:px-8 lg:grid-cols-2">
        <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/10 sm:p-8">
          <p className="text-sm font-semibold text-green">Our vision</p>
          <p className="mt-4 text-xl font-semibold leading-snug tracking-tight">{company.vision}</p>
        </article>
        <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/10 sm:p-8">
          <p className="text-sm font-semibold text-green">Our mission</p>
          <div className="mt-4 space-y-4 leading-relaxed text-muted">
            {company.mission.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-8">
        <div className="rounded-3xl bg-navy px-6 py-10 text-white sm:px-10">
          <p className="text-sm font-semibold text-orange">Our motto</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            {company.motto}
          </h2>
          <p className="mt-4 font-ethiopic text-lg text-white/80">{company.mottoAmharic}</p>
          <p className="mt-6 max-w-2xl leading-relaxed text-white/75">{company.belief}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-8">
        <p className="text-sm font-semibold text-green">Our core values</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <li key={value} className="rounded-2xl bg-white px-5 py-4 font-semibold ring-1 ring-ink/10">
              {value}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-8">
        <p className="text-sm font-semibold text-green">Our business model</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          EKA operates through two complementary business areas.
        </h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {pillars.map((pillar) => (
            <article key={pillar.index} className="rounded-3xl bg-white p-6 ring-1 ring-ink/10 sm:p-8">
              <p className="text-sm font-semibold text-orange">{pillar.index}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{pillar.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-8">
        <p className="text-sm font-semibold text-green">Management team</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">Leadership</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {leaders.map((leader) => (
            <article key={leader.name} className="rounded-3xl bg-white p-6 ring-1 ring-ink/10">
              <p className="text-sm font-semibold text-green">{leader.role}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{leader.name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-4 px-5 pb-16 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-2xl font-semibold tracking-tight">Ready to talk about the work?</p>
        <ButtonLink href="/contact">Contact the team</ButtonLink>
      </section>
    </>
  );
}
