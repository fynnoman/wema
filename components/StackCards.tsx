"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export type StackItem = {
  eyebrow: string;
  titel: string;
  text: string;
  bild: string;
  bildAlt: string;
};

export default function StackCards({
  items,
  title,
  subtitle,
}: {
  items: StackItem[];
  title: string;
  subtitle?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section className="relative bg-[#0a1522] text-white">
      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="relative mx-auto max-w-[1400px] px-6 pt-24 pb-8 md:px-10 md:pt-32">
        {subtitle && <div className="eyebrow text-white/60">{subtitle}</div>}
        <h2 className="font-display mt-4 max-w-3xl text-4xl leading-[1.05] tracking-tight md:text-6xl">
          {title}
        </h2>
      </div>

      <div ref={ref} className="relative mx-auto max-w-[1400px] px-6 pb-24 md:px-10 md:pb-32">
        {items.map((it, i) => (
          <StackCard
            key={i}
            item={it}
            index={i}
            total={items.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

function StackCard({
  item,
  index,
  total,
  progress,
}: {
  item: StackItem;
  index: number;
  total: number;
  progress: any;
}) {
  const step = 1 / total;
  const start = index * step;

  const scale = useTransform(
    progress,
    [start, start + step, 1],
    [1, 0.96, 0.9],
  );
  const opacity = useTransform(
    progress,
    [start, start + step, Math.min(1, start + step + step * 0.6)],
    [1, 1, 0.55],
  );

  const mobileTop = 72 + index * 14;
  const desktopTop = 96 + index * 28;
  const css =
    `.wema-stack-${index} { position: sticky; top: ${mobileTop}px; }` +
    `@media (min-width: 768px) { .wema-stack-${index} { top: ${desktopTop}px; } }`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className={`wema-stack-${index} mb-6 md:mb-14`}>
        <motion.article
          style={{ scale, opacity }}
          className="relative overflow-hidden bg-[#0f2b4a] shadow-[0_20px_45px_-20px_rgba(0,0,0,0.7)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr]">
            <div className="relative aspect-[3/2] w-full overflow-hidden md:aspect-auto md:min-h-[440px]">
              <Image
                src={item.bild}
                alt={item.bildAlt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,21,34,0.1) 0%, rgba(10,21,34,0.35) 100%)",
                }}
              />
            </div>
            <div className="flex flex-col justify-between gap-6 p-6 md:gap-10 md:p-14">
              <div className="flex items-baseline justify-between text-white/70">
                <span className="eyebrow">{item.eyebrow}</span>
                <span className="mono text-[10px] uppercase tracking-[0.24em] md:text-xs">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="font-display text-[28px] leading-[1.0] tracking-tight md:text-5xl">
                  {item.titel}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 md:mt-6 md:text-lg">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </>
  );
}
