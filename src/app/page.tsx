import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import {
  company,
  disciplines,
  industries,
  leaders,
  pillars,
  serviceGroups,
  values,
} from "@/lib/content";

const homeServices = [
  ...serviceGroups,
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

const accents = ["bg-green", "bg-orange", "bg-blue"] as const;

const scenes = [
  {
    href: "/services",
    title: "Consulting",
    body: "Advisory, audits, and technical work on the operation.",
    image: "/images/consulting-site.jpg",
  },
  {
    href: "/training",
    title: "Training",
    body: "Practical programs built around the workplace.",
    image: "/images/training-site.jpg",
  },
  {
    href: "/supply",
    title: "Supply",
    body: "Safety, fire protection, and PPE, backed by advice.",
    image: "/images/supply-site.jpg",
  },
] as const;

export default function Home() {
  return (
    <>
      <section className="relative isolate min-h-[92svh] overflow-hidden bg-navy text-white">
        <Image
          src="/images/hero-site.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/70 to-navy/25" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-end px-5 py-16 sm:px-8 lg:justify-center">
          <p className="text-sm font-semibold text-orange">{company.name}</p>
          <p className="mt-2 max-w-xl font-ethiopic text-base text-white/75">{company.amharic}</p>
          <h1 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl sm:leading-[1.05]">
            Tomorrow begins with <span className="text-orange">today&apos;s best.</span>
          </h1>
          <p className="mt-4 font-ethiopic text-lg text-white/80">{company.mottoAmharic}</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            Consulting, technical advisory, professional training, safety solutions, product
            supply, and trading for organizations that need safer, more productive, compliant,
            and sustainable operations.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/services">View services</ButtonLink>
            <ButtonLink href="/contact" tone="light">
              Talk with EKA
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-8 sm:px-8 lg:grid-cols-3">
        {scenes.map((scene) => (
          <Link
            key={scene.href}
            href={scene.href}
            className="group relative h-80 overflow-hidden rounded-3xl"
          >
            <Image
              src={scene.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 30vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <h2 className="text-2xl font-semibold tracking-tight">{scene.title}</h2>
              <p className="mt-1 text-sm text-white/80">{scene.body}</p>
            </div>
          </Link>
        ))}
      </section>

      <section className="border-y border-ink/10 bg-white">
        <ul className="mx-auto flex max-w-6xl flex-wrap gap-2 px-5 py-4 sm:px-8">
          {disciplines.map((item) => (
            <li
              key={item}
              className="rounded-full border border-ink/10 bg-paper px-3 py-1.5 text-sm font-medium text-navy"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 sm:px-8 lg:grid-cols-2">
        <div className="relative h-80 overflow-hidden rounded-3xl sm:h-[28rem]">
          <Image
            src="/images/workplace-site.jpg"
            alt="Advisors in a meeting"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-green">The company</p>
          <p className="mt-4 text-lg leading-relaxed text-muted">{company.overview}</p>
          <ButtonLink href="/about" tone="ink" className="mt-6">
            About EKA
          </ButtonLink>
          <blockquote className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/10">
          <p className="text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
            The future is shaped by the quality of decisions, investments, and actions
            organizations make today.
          </p>
          <footer className="mt-4 text-sm leading-relaxed text-muted">{company.belief}</footer>
        </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-green">Our business model</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Two complementary practices.
          </h2>
          <p className="mt-3 text-muted">
            Advice and competence on one side. Equipment and technical supply on the other.
          </p>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.index}
              className="flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/10 sm:p-8"
            >
              <span
                className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-semibold text-white ${accents[index]}`}
              >
                {pillar.index}
              </span>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">{pillar.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{pillar.body}</p>
              <ButtonLink href={pillar.href} tone={index === 0 ? "primary" : "ink"} className="mt-6 self-start">
                {pillar.cta}
              </ButtonLink>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-green">Services</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Work that holds up in the field.
              </h2>
            </div>
            <ButtonLink href="/services" tone="ghost">
              Full practice
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {homeServices.map((service, index) => (
              <Link
                key={service.id}
                href={service.href}
                className="group rounded-3xl border border-ink/10 bg-paper p-5 transition hover:border-green/40 hover:bg-white hover:shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-orange">{service.index}</span>
                  <span aria-hidden className="text-green opacity-0 transition group-hover:opacity-100">
                    →
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>
                <span className={`mt-5 block h-1 w-10 rounded-full ${accents[index % 3]}`} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <p className="text-sm font-semibold text-green">Industries we serve</p>
        <h2 className="mt-2 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Nine sectors. The same standard of care.
        </h2>
        <ul className="mt-8 flex flex-wrap gap-2">
          {industries.map((industry) => (
            <li
              key={industry}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-ink/10"
            >
              {industry}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-green">Our core values</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            What the work stands on.
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <li key={value} className="rounded-2xl bg-paper px-5 py-4 font-semibold">
                {value}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-green">Management team</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              The people who lead EKA.
            </h2>
          </div>
          <ButtonLink href="/about" tone="ghost">
            Company story
          </ButtonLink>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {leaders.map((leader) => (
            <article key={leader.name} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/10">
              <p className="text-sm font-semibold text-green">{leader.role}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{leader.name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <div className="flex flex-col gap-6 rounded-3xl bg-navy px-6 py-10 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Bring today&apos;s best to the operation.
          </h2>
          <ButtonLink href="/contact" tone="light">
            Start a conversation
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
