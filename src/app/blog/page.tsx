import Link from "next/link";
import { Suspense } from "react";
import { BlogList } from "@/components/blog-list";
import { PageHero } from "@/components/page-hero";
import { formatPostDate, getPosts } from "@/lib/posts";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog",
  description:
    "Practical notes from EKA Consulting and Trading PLC on HSEQ, training, risk, and safety supply.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        kicker="Blog"
        title="Practical notes from the work."
        lede="Short writing on safety, training, and supply."
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-14">
        <Suspense fallback={<p className="text-muted">Loading posts…</p>}>
          <PostIndex />
        </Suspense>
        <p className="mt-8 text-sm text-muted">
          <Link href="/blog/write" className="font-semibold text-green">
            Author sign-in
          </Link>
        </p>
      </div>
    </>
  );
}

async function PostIndex() {
  const posts = (await getPosts()).map(({ slug, title, description, date, topic }) => ({
    slug,
    title,
    description,
    date: formatPostDate(date),
    topic,
  }));

  if (!posts.length) {
    return <p className="text-muted">The first note will appear here.</p>;
  }

  return <BlogList posts={posts} />;
}
