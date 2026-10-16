import { EnquiryForm } from "@/components/enquiry-form";
import { PageHero } from "@/components/page-hero";
import { company, leaders } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Send an enquiry to EKA Consulting and Trading PLC about consulting, training, HSEQ, or supply.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Tell us what tomorrow needs."
        lede="Share the operation, the risk, the training, or the supply requirement. The leadership team is named below."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside>
          <p className="text-sm font-semibold text-green">Management team</p>
          <div className="mt-6 space-y-4">
            {leaders.map((leader) => (
              <article key={leader.name} className="rounded-3xl bg-white p-5 ring-1 ring-ink/10">
                <p className="text-sm font-semibold text-green">{leader.role}</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">{leader.name}</h2>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            A public phone and office address are not listed yet. Send an enquiry here, or email{" "}
            <a className="font-medium text-green" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            .
          </p>
        </aside>
        <EnquiryForm />
      </div>
    </>
  );
}
