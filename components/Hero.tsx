"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SITE } from "@/lib/site";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden bg-[#0a1522]"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/images/hero-halle.jpg"
          alt="Fertigung in der Halle bei WEMA in St. Wendel"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 hero-scrim" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 340px at 12% 40%, rgba(79,172,255,0.5), transparent 60%), radial-gradient(600px 300px at 92% 82%, rgba(79,172,255,0.4), transparent 60%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute left-6 top-32 bottom-14 hidden w-px bg-gradient-to-b from-transparent via-[color:var(--color-nav-4)]/60 to-transparent md:block"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-between px-6 pt-32 pb-14 text-white md:px-10 md:pt-40 md:pb-16"
      >
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr] md:items-start">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
              className="inline-flex items-center gap-3 border border-[color:var(--color-nav-4)]/40 bg-[color:var(--color-nav-2)]/25 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white backdrop-blur-sm"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-nav-4)] opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--color-nav-4)]" />
              </span>
              Weiskircher · Kompetenz seit {SITE.gruendung}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
              className="font-display mt-8 text-[38px] leading-[0.98] tracking-tight sm:text-[54px] md:text-[80px] lg:text-[104px]"
            >
              Beton verlangt Präzision.
              <br />
              <span className="relative inline-block italic text-white">
                <span className="relative z-10">Und Charakter.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
                  className="absolute bottom-1 left-0 right-0 h-[8px] origin-left bg-[color:var(--color-nav-4)]/70 md:bottom-2 md:h-[12px]"
                  style={{ zIndex: 0 }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
              className="mt-8 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
            >
              Seit über sieben Jahrzehnten bauen wir aus St. Wendel Anlagen
              für die Beton produzierende Industrie. Ruhig, gründlich, gemacht
              für den Dauerbetrieb im Werk.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 0.61, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link href="/leistungen" className="btn-primary">
                Was wir bauen
                <span aria-hidden>→</span>
              </Link>
              <Link href="/unternehmen" className="btn-ghost">
                Über WEMA
              </Link>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative hidden self-end border-l-2 border-[color:var(--color-nav-4)] bg-[color:var(--color-nav-1)]/45 p-8 backdrop-blur-md md:block"
          >
            <div className="mono absolute -top-3 left-6 bg-[#0a1522] px-3 text-[10px] uppercase tracking-[0.32em] text-[color:var(--color-nav-4)]">
              Werksdaten
            </div>
            <div className="grid gap-6">
              <MetricRow label="Gegründet" value={String(SITE.gruendung)} />
              <div className="h-px bg-white/10" />
              <MetricRow label="Mitarbeiter" value={`ca. ${SITE.mitarbeiter}`} />
              <div className="h-px bg-white/10" />
              <MetricRow label="Recyclinganlagen" value="1.000+" />
              <div className="h-px bg-white/10" />
              <MetricRow label="Halle" value="1.000 m²" />
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.0 }}
          className="flex items-end justify-between gap-8 text-white/70"
        >
          <div className="flex items-center gap-4 md:hidden">
            <MobileMetric value={String(SITE.gruendung)} label="Gegründet" />
            <span className="h-6 w-px bg-white/20" />
            <MobileMetric value={`ca. ${SITE.mitarbeiter}`} label="Team" />
            <span className="h-6 w-px bg-white/20" />
            <MobileMetric value="1.000+" label="Anlagen" />
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <span className="text-xs uppercase tracking-[0.28em]">
              Werk · St. Wendel · Saarland
            </span>
            <span className="block h-px w-16 bg-[color:var(--color-nav-4)]" />
          </div>

          <div className="hidden items-center gap-3 text-xs uppercase tracking-[0.28em] md:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-nav-4)] opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--color-nav-4)]" />
            </span>
            <span>Scroll</span>
            <span className="block h-8 w-px bg-white/40" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function MetricRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6">
      <div className="text-[10px] uppercase tracking-[0.28em] text-white/60">
        {label}
      </div>
      <div className="font-display text-2xl leading-none tracking-tight text-white md:text-3xl">
        {value}
      </div>
    </div>
  );
}

function MobileMetric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-base leading-none text-white">
        {value}
      </div>
      <div className="mt-1 text-[9px] uppercase tracking-[0.24em] text-white/60">
        {label}
      </div>
    </div>
  );
}
