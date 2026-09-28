"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { PRODUKTE } from "@/lib/site";

export default function HorizontalProgram() {
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
      className="relative bg-[#0a1522] text-white"
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
          className="absolute left-0 top-0 flex h-full items-center gap-6 pl-6 pr-[12vw] will-change-transform md:gap-10 md:pl-10 md:pr-[15vw]"
        >
          {PRODUKTE.map((p, i) => (
            <Link
              key={p.slug}
              href={`/leistungen/${p.slug}`}
              className="group relative block h-[70vh] w-[80vw] shrink-0 overflow-hidden bg-[#0a1522] md:w-[52vw] lg:w-[44vw]"
            >
              <Image
                src={p.bild}
                alt={p.bildAlt}
                fill
                sizes="(min-width: 1024px) 44vw, (min-width: 768px) 52vw, 80vw"
                className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,21,34,0.05) 0%, rgba(10,21,34,0.55) 60%, rgba(10,21,34,0.92) 100%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-between p-8 text-white md:p-10">
                <div className="flex items-center justify-between">
                  <span className="mono text-xs uppercase tracking-[0.28em] text-white/70">
                    {String(i + 1).padStart(2, "0")} / 05
                  </span>
                  <span className="eyebrow text-white/60">Programm</span>
                </div>
                <div>
                  <h3 className="font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
                    {p.titel}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80 md:text-base">
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

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 mx-auto flex max-w-[1400px] items-end justify-between px-6 pb-8 md:px-10 md:pb-10">
          <div className="mono text-xs uppercase tracking-[0.24em] text-white/50">
            Horizontal · Framer Motion · Sticky
          </div>
          <div className="relative h-px w-40 overflow-hidden bg-white/20 md:w-64">
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
