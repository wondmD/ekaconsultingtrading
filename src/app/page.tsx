import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ButtonLink } from "@/components/button-link";
import { formatPostDate, getPosts } from "@/lib/posts";
import { HomeServices } from "@/components/home-services";
import { PracticeSwitch } from "@/components/practice-switch";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/seo";
import { company } from "@/lib/content";

export const metadata = pageMetadata({
  title: "Consulting, HSEQ, Training and Supply",
  description:
    "EKA Consulting and Trading PLC helps organizations improve safety, manage risk, train people, and source the right equipment.",
  path: "/",
});

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
          className="hero-photo object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/70 to-navy/25" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-end px-5 py-16 sm:px-8 lg:justify-center">
          <p className="text-sm font-semibold text-orange">{company.name}</p>
          <p className="mt-2 max-w-xl font-ethiopic text-base text-white/75">{company.amharic}</p>
          <h1 className="rise mt-5 max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl sm:leading-[1.05] lg:text-6xl">
            Tomorrow begins with <span className="text-orange">today&apos;s best.</span>
          </h1>
          <p className="mt-4 font-ethiopic text-lg text-white/80">{company.mottoAmharic}</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            Consulting, technical advisory, professional training, safety solutions, product
            supply, and trading for organizations that need safer, more productive, compliant,
            and sustainable operations.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/services" className="w-full sm:w-auto">
              View services
            </ButtonLink>
            <ButtonLink href="/contact" tone="light" className="w-full sm:w-auto">
              Talk with EKA
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-8 sm:px-8 md:grid-cols-3">
        {scenes.map((scene) => (
          <Link
            key={scene.href}
            href={scene.href}
            className="group relative h-64 overflow-hidden rounded-3xl sm:h-80"
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

      <Reveal>
        <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:py-16">
          <div className="relative h-64 overflow-hidden rounded-3xl sm:h-[28rem]">
            <Image
              src="/images/workplace-site.jpg"
              alt="Advisors in a meeting"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-green">About EKA</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{company.name}</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{company.overview}</p>
            <div className="mt-6 grid gap-3">
              <article className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-ink/10">
                <p className="text-sm font-semibold text-green">Our vision</p>
                <p className="mt-2 font-medium leading-relaxed">{company.vision}</p>
              </article>
              <article className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-ink/10">
                <p className="text-sm font-semibold text-green">Our mission</p>
                <p className="mt-2 font-medium leading-relaxed">{company.mission}</p>
              </article>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Our business model</h2>
          <PracticeSwitch />
        </section>
      </Reveal>

      <HomeServices />

      <Suspense fallback={null}>
        <LatestPosts />
      </Suspense>

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

async function LatestPosts() {
  const posts = await getPosts();
  if (!posts.length) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-green">Blog</p>
          <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight sm:text-4xl">From the work.</h2>
        </div>
        <ButtonLink href="/blog" tone="ghost" className="w-full sm:w-auto">
          All posts
        </ButtonLink>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="flex min-w-0 flex-col rounded-3xl bg-white p-5 ring-1 ring-ink/10 transition hover:-translate-y-0.5 hover:ring-green/30"
        >
          <p className="text-sm font-semibold text-orange">{post.topic}</p>
          <h3 className="mt-3 text-balance text-lg font-semibold tracking-tight">{post.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.description}</p>
          <p className="mt-4 text-sm text-muted">{formatPostDate(post.date)}</p>
        </Link>
      ))}
      </div>
    </section>
  );
}
