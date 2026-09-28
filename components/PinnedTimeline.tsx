"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

export type TimelineItem = {
  jahr: string;
  titel: string;
  text: string;
  bild: string;
  bildAlt: string;
};

export default function PinnedTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <>
      <MobileTimeline items={items} />
      <DesktopPinnedTimeline items={items} />
    </>
  );
}

function MobileTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <section className="relative bg-white md:hidden">
      <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-16">
        <div className="eyebrow text-[color:var(--color-nav-2)]">Historie</div>
        <h2 className="font-display mt-4 text-[32px] leading-[1.0] tracking-tight text-[color:var(--color-ink)]">
          Sieben Jahrzehnte
          <br />
          <span className="italic text-[color:var(--color-nav-2)]">Maschinenbau.</span>
        </h2>

        <ol className="mt-10 grid gap-10">
          {items.map((item, i) => (
            <motion.li
              key={item.jahr}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
              className="relative"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a1522]">
                <Image
                  src={item.bild}
                  alt={item.bildAlt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,21,34,0.15) 0%, rgba(10,21,34,0.55) 100%)",
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-baseline justify-between text-white">
                  <span className="font-display text-5xl leading-none tracking-tight">
                    {item.jahr}
                  </span>
                  <span className="mono text-[10px] uppercase tracking-[0.28em] text-white/70">
                    {String(i + 1).padStart(2, "0")} /{" "}
                    {String(items.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <div className="mt-5">
                <div className="font-display text-2xl leading-tight text-[color:var(--color-ink)]">
                  {item.titel}
                </div>
                <p className="mt-3 text-base leading-relaxed text-[color:var(--color-ink-soft)]">
                  {item.text}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function DesktopPinnedTimeline({ items }: { items: TimelineItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      className="relative hidden bg-white md:block"
      style={{ height: `${items.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="mx-auto grid h-full max-w-[1400px] grid-cols-[1.2fr_1fr]">
          <div className="relative h-full overflow-hidden bg-[#0a1522]">
            {items.map((item, i) => (
              <TimelineImage
                key={item.jahr}
                item={item}
                index={i}
                total={items.length}
                progress={scrollYProgress}
              />
            ))}
          </div>

          <div className="relative flex flex-col justify-center px-6 py-16 md:px-14">
            <div className="eyebrow mb-6 text-[color:var(--color-nav-2)]">Historie</div>
            <div className="font-display mb-12 text-3xl leading-[1.05] tracking-tight text-[color:var(--color-ink)] md:text-5xl">
              Sieben Jahrzehnte
              <br />
              <span className="italic text-[color:var(--color-nav-2)]">Maschinenbau.</span>
            </div>

            <div className="relative min-h-[280px] md:min-h-[320px]">
              {items.map((item, i) => (
                <TimelineText
                  key={item.jahr}
                  item={item}
                  index={i}
                  total={items.length}
                  progress={scrollYProgress}
                />
              ))}
            </div>

            <ProgressBar progress={scrollYProgress} total={items.length} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineImage({
  item,
  index,
  total,
  progress,
}: {
  item: TimelineItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const step = 1 / total;
  const start = index * step;
  const end = (index + 1) * step;

  const isFirst = index === 0;
  const isLast = index === total - 1;

  const opacity = useTransform(
    progress,
    [
      isFirst ? -0.01 : start - step * 0.35,
      start,
      end - step * 0.1,
      isLast ? 1.01 : end + step * 0.35,
    ],
    [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0],
  );
  const scale = useTransform(progress, [start, end], [1.08, 1.0]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute inset-0 will-change-transform"
    >
      <Image
        src={item.bild}
        alt={item.bildAlt}
        fill
        sizes="60vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,21,34,0.3) 0%, rgba(10,21,34,0.55) 100%)",
        }}
      />
      <div className="absolute bottom-8 left-8 right-8 flex items-baseline justify-between text-white">
        <span className="font-display text-6xl leading-none tracking-tight md:text-8xl">
          {item.jahr}
        </span>
        <span className="mono text-xs uppercase tracking-[0.28em] text-white/70">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>
      </div>
    </motion.div>
  );
}

function TimelineText({
  item,
  index,
  total,
  progress,
}: {
  item: TimelineItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const step = 1 / total;
  const start = index * step;
  const end = (index + 1) * step;

  const isFirst = index === 0;
  const isLast = index === total - 1;

  const opacity = useTransform(
    progress,
    [
      isFirst ? -0.01 : start - step * 0.4,
      start,
      end - step * 0.1,
      isLast ? 1.01 : end + step * 0.4,
    ],
    [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0],
  );
  const y = useTransform(
    progress,
    [
      isFirst ? -0.01 : start - step * 0.4,
      start,
      end,
      isLast ? 1.01 : end + step * 0.4,
    ],
    [isFirst ? 0 : 24, 0, 0, isLast ? 0 : -24],
  );

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0">
      <div className="mono text-xs uppercase tracking-[0.28em] text-[color:var(--color-nav-2)]">
        {item.jahr}
      </div>
      <div className="font-display mt-4 text-3xl leading-tight text-[color:var(--color-ink)] md:text-4xl">
        {item.titel}
      </div>
      <p className="mt-4 max-w-lg text-base leading-relaxed text-[color:var(--color-ink-soft)] md:text-lg">
        {item.text}
      </p>
    </motion.div>
  );
}

function ProgressBar({
  progress,
  total,
}: {
  progress: MotionValue<number>;
  total: number;
}) {
  return (
    <div className="mt-12 flex items-center gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <ProgressSegment key={i} index={i} total={total} progress={progress} />
      ))}
    </div>
  );
}

function ProgressSegment({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const step = 1 / total;
  const opacity = useTransform(
    progress,
    [index * step, (index + 1) * step],
    [0.25, 1],
  );
  return (
    <motion.span
      style={{ opacity }}
      className="h-px flex-1 bg-[color:var(--color-nav-2)]"
    />
  );
}
