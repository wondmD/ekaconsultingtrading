import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { supplyPoints, supplySupport } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Trading and supply",
  description:
    "Safety, fire protection, PPE, and technical product supply from EKA Consulting and Trading PLC, backed by inspection, installation, and advisory.",
  path: "/supply",
});

export default function SupplyPage() {
  return (
    <>
      <PageHero
        kicker="Trading, supply and technical solutions"
        title="The right equipment, backed by advice."
        lede="As a consulting and trading company, EKA provides clients with access to appropriate safety, fire protection, PPE, and related technical products."
        image="/images/supply-site.jpg"
      />
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-2">
        <section>
          <p className="text-sm font-semibold text-green">What we supply</p>
          <ul className="mt-5 space-y-3">
            {supplyPoints.map((point, index) => (
              <li
                key={point}
                className="flex gap-4 rounded-2xl bg-white px-4 py-4 ring-1 ring-ink/10 transition duration-200 hover:-translate-y-0.5 hover:ring-green/30"
              >
                <span className="text-sm font-semibold text-orange">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-medium leading-snug">{point}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-3xl bg-navy px-6 py-8 text-white sm:px-8">
          <p className="text-sm font-semibold text-orange">Supported by</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Supply arrives with the technical work behind it.
          </h2>
          <p className="mt-4 leading-relaxed text-white/75">
            Where required, supply is supported by professional inspection, installation,
            commissioning, servicing, training, and technical advisory services.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {supplySupport.map((item) => (
              <li key={item} className="rounded-2xl bg-white/10 px-4 py-4 font-medium">
                {item}
              </li>
            ))}
          </ul>
          <ButtonLink href="/contact" tone="light" className="mt-8">
            Request supply
          </ButtonLink>
        </section>
      </div>
    </>
  );
}
