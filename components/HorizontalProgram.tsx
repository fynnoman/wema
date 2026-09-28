"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { PRODUKTE } from "@/lib/site";

export default function HorizontalProgram() {
  return (
    <>
      <MobileList />
      <DesktopHorizontal />
    </>
  );
}

function MobileList() {
  return (
    <section className="relative bg-[#0a1522] text-white md:hidden">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-6 pt-20 pb-16">
        <div className="eyebrow text-white/60">Programm</div>
        <h2 className="font-display mt-4 text-[32px] leading-[1.0] tracking-tight">
          Fünf Bereiche.
          <span className="italic text-white/70"> Ein Anspruch.</span>
        </h2>

        <div className="mt-10 grid gap-5">
          {PRODUKTE.map((p, i) => (
            <Link
              key={p.slug}
              href={`/leistungen/${p.slug}`}
              className="group relative block overflow-hidden bg-[#0f1c2f]"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={p.bild}
                  alt={p.bildAlt}
                  fill
                  sizes="(max-width: 767px) 100vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,21,34,0.1) 0%, rgba(10,21,34,0.55) 55%, rgba(10,21,34,0.95) 100%)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex items-center justify-between text-white/70">
                    <span className="mono text-[10px] uppercase tracking-[0.28em]">
                      {String(i + 1).padStart(2, "0")} / 05
                    </span>
                    <span className="eyebrow">Programm</span>
                  </div>
                  <div>
                    <h3 className="font-display text-[28px] leading-[0.98] tracking-tight">
                      {p.titel}
                    </h3>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/80">
                      {p.kurz}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em]">
                      Mehr erfahren
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function DesktopHorizontal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const measure = () => {
    const track = trackRef.current;
    if (!track) return;
    const total = track.scrollWidth;
    const viewport = window.innerWidth;
    setDistance(Math.max(0, total - viewport));
  };

  useLayoutEffect(() => {
    measure();
  }, []);

  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const railScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative hidden bg-[#0a1522] text-white md:block"
      style={{ height: "500vh" }}
    >
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 mx-auto flex max-w-[1400px] items-end justify-between gap-6 px-6 pt-32 md:px-10">
          <div>
            <div className="eyebrow text-white/60">Programm</div>
            <div className="font-display mt-4 text-4xl leading-[0.98] tracking-tight md:text-6xl">
              Fünf Bereiche.
              <span className="italic text-white/70"> Ein Anspruch.</span>
            </div>
          </div>
          <div className="hidden text-xs uppercase tracking-[0.28em] text-white/60 md:block">
            Weiterscrollen →
          </div>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="absolute left-0 top-0 flex h-full items-center gap-10 pl-10 pr-[15vw] will-change-transform"
        >
          {PRODUKTE.map((p, i) => (
            <Link
              key={p.slug}
              href={`/leistungen/${p.slug}`}
              className="group relative block h-[70vh] w-[52vw] shrink-0 overflow-hidden bg-[#0a1522] lg:w-[44vw]"
            >
              <Image
                src={p.bild}
                alt={p.bildAlt}
                fill
                sizes="(min-width: 1024px) 44vw, 52vw"
                className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,21,34,0.05) 0%, rgba(10,21,34,0.55) 60%, rgba(10,21,34,0.92) 100%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-between p-10">
                <div className="flex items-center justify-between">
                  <span className="mono text-xs uppercase tracking-[0.28em] text-white/70">
                    {String(i + 1).padStart(2, "0")} / 05
                  </span>
                  <span className="eyebrow text-white/60">Programm</span>
                </div>
                <div>
                  <h3 className="font-display text-6xl leading-[0.95] tracking-tight">
                    {p.titel}
                  </h3>
                  <p className="mt-4 max-w-sm text-base leading-relaxed text-white/80">
                    {p.kurz}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em]">
                    Mehr erfahren
                    <span className="transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 mx-auto flex max-w-[1400px] items-end justify-between px-10 pb-10">
          <div className="mono text-xs uppercase tracking-[0.24em] text-white/50">
            Horizontal · Framer Motion · Sticky
          </div>
          <div className="relative h-px w-64 overflow-hidden bg-white/20">
            <motion.div
              style={{ scaleX: railScale, transformOrigin: "0% 50%" }}
              className="absolute inset-0 bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
