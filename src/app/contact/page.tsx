import { EnquiryForm } from "@/components/enquiry-form";
import { PageHero } from "@/components/page-hero";
import { company } from "@/lib/content";
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
        lede="Share the operation, the risk, the training, or the supply requirement."
      />
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-14">
        <aside className="rounded-3xl bg-white p-6 ring-1 ring-ink/10 sm:p-8">
          <p className="text-sm font-semibold text-green">Office</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Visit or write</h2>
          <p className="mt-4 leading-relaxed">{company.address}</p>
          <a
            className="mt-4 inline-flex min-h-11 items-center font-medium text-green"
            href={`mailto:${company.email}`}
          >
            {company.email}
          </a>
        </aside>
        <EnquiryForm />
      </div>
    </>
  );
}
