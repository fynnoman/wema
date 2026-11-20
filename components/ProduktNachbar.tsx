"use client";

import Image from "next/image";
import Link from "next/link";
import type { Produkt } from "@/lib/site";
import { useLang } from "./LanguageProvider";

export default function ProduktNachbar({
  produkt,
  direction,
}: {
  produkt: Produkt;
  direction: "prev" | "next";
}) {
  const { lang } = useLang();
  const en = lang === "en";
  const isNext = direction === "next";

  return (
    <Link
      href={`/leistungen/${produkt.slug}`}
      className="group relative block overflow-hidden bg-[#0a1522]"
    >
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={produkt.bild}
          alt={en ? produkt.bildAltEn : produkt.bildAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,21,34,0.15) 0%, rgba(10,21,34,0.75) 100%)",
          }}
        />
        <div
          className={`absolute inset-0 p-8 text-white flex flex-col justify-between ${
            isNext ? "items-end text-right" : ""
          }`}
        >
          <div className="eyebrow text-white/70">
            {isNext
              ? en
                ? "Next →"
                : "Weiter →"
              : en
                ? "← Back"
                : "← Zurück"}
          </div>
          <div className="font-display text-3xl leading-none tracking-tight md:text-4xl">
            {en ? produkt.titelEn : produkt.titel}
          </div>
        </div>
      </div>
    </Link>
  );
}
