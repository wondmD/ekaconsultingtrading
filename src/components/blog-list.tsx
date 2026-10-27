"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
type BlogCard = {
  slug: string;
  title: string;
  description: string;
  date: string;
  topic: string;
};

export function BlogList({ posts }: { posts: BlogCard[] }) {
  const topics = useMemo(() => ["All", ...new Set(posts.map((post) => post.topic))], [posts]);
  const [topic, setTopic] = useState("All");
  const visible = topic === "All" ? posts : posts.filter((post) => post.topic === topic);

  return (
    <div className="min-w-0">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter notes">
        {topics.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={topic === item}
            onClick={() => setTopic(item)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
              topic === item ? "bg-green text-white" : "border border-ink/10 bg-white text-navy hover:border-green/40"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-4">
        {visible.map((post) => (
          <article key={post.slug} className="min-w-0 rounded-3xl bg-white p-5 ring-1 ring-ink/10 sm:p-7">
            <p className="text-sm font-semibold text-orange">
              {post.topic}
              <span className="text-muted"> · {post.date}</span>
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight">
              <Link href={`/blog/${post.slug}`} className="hover:text-green">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted">{post.description}</p>
            <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-green">
              Read the post
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
