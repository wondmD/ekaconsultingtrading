import Image from "next/image";

export function PageHero({
  kicker,
  title,
  lede,
  image,
}: {
  kicker: string;
  title: string;
  lede: string;
  image?: string;
}) {
  if (image) {
    return (
      <section className="relative isolate min-h-[28rem] overflow-hidden bg-navy text-white">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/35" />
        <div className="relative mx-auto flex min-h-[28rem] max-w-6xl flex-col justify-end px-5 py-14 sm:px-8 sm:py-16">
          <p className="text-sm font-semibold text-orange">{kicker}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">{lede}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-ink/10 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <p className="text-sm font-semibold text-green">{kicker}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p>
      </div>
    </section>
  );
}
