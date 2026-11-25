"use client";

import Image from "next/image";
import Link from "next/link";
import type { Produkt } from "@/lib/site";
import { useLang } from "./LanguageProvider";

export default function ProduktKarte({
  produkt,
  index,
}: {
  produkt: Produkt;
  index: number;
}) {
  const { lang } = useLang();
  const en = lang === "en";
  const hauptprodukt = Boolean(produkt.hauptprodukt);

  return (
    <Link
      href={`/leistungen/${produkt.slug}`}
      className={
        hauptprodukt
          ? "group relative grid overflow-hidden bg-[#0a1522] md:grid-cols-[1.4fr_1fr]"
          : "group relative grid overflow-hidden bg-[#0a1522] md:grid-cols-[1.2fr_1fr]"
      }
    >
      <div
        className={
          hauptprodukt
            ? "relative aspect-[16/10] w-full overflow-hidden md:aspect-auto md:min-h-[560px]"
            : "relative aspect-[16/10] w-full overflow-hidden md:aspect-auto md:min-h-[420px]"
        }
      >
        <Image
          src={produkt.bild}
          alt={en ? produkt.bildAltEn : produkt.bildAlt}
          fill
          sizes="(min-width: 768px) 60vw, 100vw"
          className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,21,34,0.1) 0%, rgba(10,21,34,0.5) 100%)",
          }}
        />
        {hauptprodukt && (
          <div className="absolute left-6 top-6 inline-flex items-center gap-3 border border-[color:var(--color-nav-4)]/60 bg-[color:var(--color-nav-2)]/40 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white backdrop-blur-sm md:left-10 md:top-10">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-nav-4)] opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--color-nav-4)]" />
            </span>
            {en ? "Core product" : "Hauptprodukt"}
          </div>
        )}
      </div>
      <div
        className={
          hauptprodukt
            ? "flex flex-col justify-between gap-6 p-6 text-white md:gap-10 md:p-16"
            : "flex flex-col justify-between gap-6 p-6 text-white md:gap-8 md:p-14"
        }
      >
        <div className="flex items-baseline gap-4 md:gap-6">
          <span className="mono text-[10px] uppercase tracking-[0.28em] text-white/60 md:text-xs">
            {String(index + 1).padStart(2, "0")} / 05
          </span>
          <span className="eyebrow text-white/60">
            {en ? "Programme" : "Programm"}
          </span>
        </div>
        <div>
          <h2
            className={
              hauptprodukt
                ? "font-display text-[32px] leading-[1.0] tracking-tight sm:text-5xl md:text-6xl"
                : "font-display text-[28px] leading-[1.0] tracking-tight sm:text-4xl md:text-5xl"
            }
          >
            {en ? produkt.titelEn : produkt.titel}
          </h2>
          <p className="mt-4 max-w-md text-white/80 md:text-lg">
            {en ? produkt.kurzEn : produkt.kurz}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {(en ? produkt.variantenEn : produkt.varianten).map((v) => (
              <li
                key={v}
                className="border border-white/20 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white/80"
              >
                {v}
              </li>
            ))}
          </ul>
        </div>
        <div className="link-arrow text-white">
          {en ? "Open" : "Zum Bereich"} <span className="arrow">→</span>
        </div>
      </div>
    </Link>
  );
}
