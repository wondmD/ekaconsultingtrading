"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { nav } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function close() {
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    document.documentElement.classList.add("js");
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <div className="grid h-1 grid-cols-3" aria-hidden>
        <div className="bg-green" />
        <div className="bg-orange" />
        <div className="bg-blue" />
      </div>
      <header
        className={`border-b border-ink/10 bg-white/90 backdrop-blur-md transition duration-200 ${
          scrolled ? "shadow-md shadow-navy/5" : ""
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
          <Logo priority onClick={close} className="h-10 w-auto sm:h-11" />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                    active ? "bg-green/10 text-green" : "text-ink/80 hover:bg-paper hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={close}
              aria-current={pathname === "/contact" ? "page" : undefined}
              className="ml-2 inline-flex min-h-10 items-center rounded-full bg-green px-4 text-sm font-semibold text-white transition hover:bg-navy"
            >
              Contact
            </Link>
          </nav>
          <button
            type="button"
            className="inline-flex min-h-10 items-center rounded-full px-3 text-sm font-semibold lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-x-0 bottom-0 top-[calc(4rem+4px)] z-40 overflow-y-auto bg-white px-5 py-6 transition duration-300 lg:hidden ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
          <ul className="space-y-1">
            <li>
              <Link
                href="/"
                onClick={close}
                className="block rounded-2xl px-3 py-3 text-lg font-semibold"
              >
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="block rounded-2xl px-3 py-3 text-lg font-semibold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="/contact"
                onClick={close}
                className="inline-flex min-h-11 items-center rounded-full bg-green px-5 text-sm font-semibold text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}
