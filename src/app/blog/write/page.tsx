import { WriterGate } from "@/components/writer-gate";
import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Write",
    description: "Author sign-in for publishing a note on the EKA Consulting and Trading PLC site.",
    path: "/blog/write",
  }),
  robots: { index: false, follow: false },
};

export default function WritePage() {
  return (
    <>
      <PageHero
        kicker="Blog"
        title="Publish a note."
        lede="Sign in with the author account. A saved note appears on the blog immediately."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-8 sm:py-14">
        <WriterGate />
      </div>
    </>
  );
}
