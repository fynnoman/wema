"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Kategorie } from "@/lib/site";
import { useLang } from "./LanguageProvider";

export default function ProduktKategorienGalerie({
  kategorien,
  titelDe,
  titelEn,
  altDe,
  altEn,
}: {
  kategorien: Kategorie[];
  titelDe: string;
  titelEn: string;
  altDe: string;
  altEn: string;
}) {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="mb-14 flex items-baseline justify-between gap-6 md:mb-20">
          <div>
            <div className="eyebrow text-[color:var(--color-nav-2)]">
              {en ? "The four designs" : "Die vier Ausführungen"}
            </div>
            <div className="font-display mt-3 text-3xl leading-[1.05] tracking-tight text-[color:var(--color-ink)] md:text-5xl">
              {en ? titelEn : titelDe}
            </div>
          </div>
          <div className="mono hidden text-xs uppercase tracking-[0.24em] text-[color:var(--color-muted)] md:block">
            {String(kategorien.length).padStart(2, "0")}{" "}
            {en ? "designs" : "Ausführungen"}
          </div>
        </div>

        <div className="grid gap-20 md:gap-28">
          {kategorien.map((kat, idx) => (
            <div key={kat.slug} id={kat.slug} className="scroll-mt-24">
              <div className="mb-8 grid gap-6 md:mb-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
                <div>
                  <div className="mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
                    {String(idx + 1).padStart(2, "0")} /{" "}
                    {String(kategorien.length).padStart(2, "0")}
                  </div>
                  <h3 className="font-display mt-4 text-3xl leading-[1.02] tracking-tight text-[color:var(--color-ink)] md:text-5xl">
                    {en ? kat.nameEn : kat.name}
                  </h3>
                </div>
                {(en ? kat.beschreibungEn : kat.beschreibung) && (
                  <p className="text-base leading-relaxed text-[color:var(--color-ink-soft)] md:text-lg">
                    {en ? kat.beschreibungEn : kat.beschreibung}
                  </p>
                )}
              </div>

              {kat.bilder.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                  {kat.bilder.map((src, i) => (
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
                        alt={`${en ? kat.nameEn : kat.name} · ${
                          en ? altEn : altDe
                        }`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:scale-105"
                      />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="relative flex min-h-[220px] items-center justify-center border border-dashed border-[color:var(--color-line)] bg-[color:var(--color-surface,theme(colors.neutral.50))] px-8 py-14 text-center">
                  <div className="max-w-md">
                    <div className="eyebrow text-[color:var(--color-muted)]">
                      {en ? "Images in preparation" : "Bilder in Vorbereitung"}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-ink-soft)] md:text-base">
                      {en
                        ? "Photographs from our workshop and installed plants will follow shortly."
                        : "Aufnahmen aus unserer Fertigung und von installierten Anlagen folgen in Kürze."}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
