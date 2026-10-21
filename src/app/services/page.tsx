import { PageHero } from "@/components/page-hero";
import { ServiceBrowser } from "@/components/service-browser";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "HSEQ, risk, fire and emergency, occupational health and safety, environment, and technical advisory services from EKA Consulting and Trading PLC.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Consulting, technical services and training"
        title="Practical work, across the operation."
        lede="Advisory, assessment, inspection, audit, management systems, risk, HSEQ, environment, occupational health and safety, fire safety, and competency development."
        image="/images/consulting-site.jpg"
      />
      <ServiceBrowser />
    </>
  );
}
