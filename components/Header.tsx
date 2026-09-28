"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const overHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tone = overHero ? "text-white" : "text-[color:var(--color-ink)]";
  const subtle = overHero ? "text-white/70" : "text-[color:var(--color-muted)]";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow,border-color] duration-500"
      style={{
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "saturate(160%) blur(14px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--color-line)"
          : "1px solid transparent",
      }}
    >
      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-4 md:px-10 md:py-5 ${tone}`}
      >
        <Link href="/" className="group flex items-baseline gap-3">
          <span className="font-display text-[26px] leading-none tracking-tight">
            WEMA
          </span>
          <span className={`hidden text-[10px] uppercase tracking-[0.28em] md:inline ${subtle}`}>
            seit {SITE.gruendung}
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-2 text-[12px] uppercase tracking-[0.2em]"
                style={{ opacity: active ? 1 : 0.75 }}
              >
                {item.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px w-full origin-left transition-transform duration-500"
                  style={{
                    background: "currentColor",
                    transform: active ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <a
            href={`tel:${SITE.telefon[0].replace(/\s/g, "")}`}
            className="text-[12px] uppercase tracking-[0.2em] opacity-80 hover:opacity-100"
          >
            {SITE.telefon[0]}
          </a>
        </div>

        <button
          aria-label="Menü"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center md:hidden"
        >
          <span className="relative block h-3 w-6">
            <span
              className="absolute left-0 top-0 h-px w-full bg-current transition-transform"
              style={{ transform: open ? "translateY(6px) rotate(45deg)" : "" }}
            />
            <span
              className="absolute left-0 top-3 h-px w-full bg-current transition-transform"
              style={{ transform: open ? "translateY(-6px) rotate(-45deg)" : "" }}
            />
          </span>
        </button>
      </div>

      <div
        className="grid overflow-hidden bg-white text-[color:var(--color-ink)] md:hidden"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 400ms cubic-bezier(0.2,0.7,0.2,1)",
          borderBottom: open ? "1px solid var(--color-line)" : "none",
        }}
      >
        <div className="min-h-0">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-1 px-6 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-[color:var(--color-line-soft)] py-4 text-[13px] uppercase tracking-[0.2em]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE.telefon[0].replace(/\s/g, "")}`}
              className="mt-3 text-sm text-[color:var(--color-nav-2)]"
            >
              {SITE.telefon[0]}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
