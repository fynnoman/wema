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

  return (
    <Link
      href={`/leistungen/${produkt.slug}`}
      className="group relative grid overflow-hidden bg-[#0a1522] md:grid-cols-[1.2fr_1fr]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-auto md:min-h-[420px]">
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
      </div>
      <div className="flex flex-col justify-between gap-6 p-6 text-white md:gap-8 md:p-14">
        <div className="flex items-baseline gap-4 md:gap-6">
          <span className="mono text-[10px] uppercase tracking-[0.28em] text-white/60 md:text-xs">
            {String(index + 1).padStart(2, "0")} / 05
          </span>
          <span className="eyebrow text-white/60">
            {en ? "Programme" : "Programm"}
          </span>
        </div>
        <div>
          <h2 className="font-display text-[28px] leading-[1.0] tracking-tight sm:text-4xl md:text-5xl">
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
