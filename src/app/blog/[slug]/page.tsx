import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { PostBody } from "@/components/post-body";
import { formatPostDate, getPost, getPosts } from "@/lib/posts";
import { pageMetadata } from "@/lib/seo";

export const instant = false;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  const metadata = pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const others = (await getPosts()).filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-8 sm:py-16">
      <Link href="/blog" className="text-sm font-semibold text-green">
        All posts
      </Link>
      <p className="mt-6 text-sm font-semibold text-orange">
        {post.topic}
        <span className="text-muted"> · {formatPostDate(post.date)}</span>
      </p>
      <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">{post.title}</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">{post.description}</p>
      <div className="mt-8">
        <PostBody blocks={post.blocks} />
      </div>
      {others.length ? (
        <aside className="mt-12 border-t border-ink/10 pt-8">
          <p className="text-sm font-semibold text-green">More notes</p>
          <ul className="mt-4 grid gap-3">
            {others.map((item) => (
              <li key={item.slug}>
                <Link href={`/blog/${item.slug}`} className="font-semibold tracking-tight hover:text-green">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
      <div className="mt-10">
        <ButtonLink href="/contact">Talk about this work</ButtonLink>
      </div>
    </article>
  );
}
