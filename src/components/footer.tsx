import Link from "next/link";
import { Logo } from "@/components/logo";
import { company, nav, serviceGroups } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-ink/10 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.4fr_0.6fr_0.9fr]">
        <div>
          <Logo variant="lockup" className="h-auto w-56 sm:w-64" />
          <p className="mt-5 max-w-sm font-ethiopic text-sm leading-relaxed text-muted">
            {company.amharic}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{company.motto}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Visit</p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" className="text-sm text-muted hover:text-green">
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted hover:text-green">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-sm text-muted hover:text-green">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Practice</p>
          <ul className="mt-4 space-y-2">
            {serviceGroups.map((group) => (
              <li key={group.id}>
                <Link href={group.href} className="text-sm text-muted hover:text-green">
                  {group.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/training" className="text-sm text-muted hover:text-green">
                Training
              </Link>
            </li>
            <li>
              <Link href="/supply" className="text-sm text-muted hover:text-green">
                Trading and supply
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 {company.name}</p>
          <p>General Manager, Engidawork Kibneh Abdi · Office Manager, Lidet Darge</p>
        </div>
      </div>
    </footer>
  );
}
