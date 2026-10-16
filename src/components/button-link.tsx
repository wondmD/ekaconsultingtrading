import Link from "next/link";

const tones = {
  primary: "bg-green text-white hover:bg-navy",
  ghost: "border border-ink/15 bg-white text-ink hover:border-green hover:text-green",
  ink: "bg-navy text-white hover:bg-green",
  light: "bg-white text-ink hover:bg-paper",
} as const;

export function ButtonLink({
  href,
  children,
  tone = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition duration-200 ${tones[tone]} ${className}`}
    >
      {children}
    </Link>
  );
}
