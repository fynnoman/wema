"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";

export default function ProduktGalerie({
  bilder,
  altDe,
  altEn,
  titelDe,
  titelEn,
}: {
  bilder: string[];
  altDe: string;
  altEn: string;
  titelDe: string;
  titelEn: string;
}) {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="mb-10 flex items-baseline justify-between gap-6 md:mb-14">
          <div>
            <div className="eyebrow text-[color:var(--color-nav-2)]">
              {en ? "From our workshop" : "Aus unserer Fertigung"}
            </div>
            <div className="font-display mt-3 text-3xl leading-[1.05] tracking-tight text-[color:var(--color-ink)] md:text-5xl">
              {en ? titelEn : titelDe}
            </div>
          </div>
          <div className="mono hidden text-xs uppercase tracking-[0.24em] text-[color:var(--color-muted)] md:block">
            {String(bilder.length).padStart(2, "0")}{" "}
            {en ? "images" : "Aufnahmen"}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {bilder.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.05,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              className="relative aspect-[4/3] w-full overflow-hidden bg-[#0a1522]"
            >
              <Image
                src={src}
                alt={en ? altEn : altDe}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
