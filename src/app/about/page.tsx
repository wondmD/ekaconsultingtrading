import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { PracticeSwitch } from "@/components/practice-switch";
import { Reveal } from "@/components/reveal";
import { company } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description: "Vision, mission, and business model of EKA Consulting and Trading PLC.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About EKA"
        title="A company built for safer, better work."
        lede={company.overview}
        image="/images/workplace-site.jpg"
      />

      <Reveal>
        <section className="mx-auto grid max-w-6xl gap-4 px-5 py-14 sm:px-8 lg:grid-cols-2">
          <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/10 transition duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-8">
            <p className="text-sm font-semibold text-green">Our vision</p>
            <p className="mt-4 text-xl font-semibold leading-snug tracking-tight">{company.vision}</p>
          </article>
          <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/10 transition duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-8">
            <p className="text-sm font-semibold text-green">Our mission</p>
            <p className="mt-4 text-xl font-semibold leading-snug tracking-tight">{company.mission}</p>
          </article>
        </section>
      </Reveal>

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

      <Reveal>
        <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Our business model</h2>
          <PracticeSwitch />
        </section>
      </Reveal>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 ring-1 ring-ink/10 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-sm font-semibold text-green">Office</p>
            <p className="mt-2 max-w-md text-lg font-medium leading-relaxed">{company.address}</p>
            <p className="mt-3 flex flex-col gap-1">
              {company.phones.map((phone) => (
                <a key={phone.href} className="font-medium text-green" href={phone.href}>
                  {phone.label}
                </a>
              ))}
            </p>
          </div>
          <ButtonLink href="/contact" className="w-full sm:w-auto">
            Contact the office
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
