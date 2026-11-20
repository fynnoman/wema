"use client";

import Link from "next/link";
import type { Produkt } from "@/lib/site";
import { useLang } from "./LanguageProvider";

export default function SitemapProdukte({ produkte }: { produkte: Produkt[] }) {
  const { lang } = useLang();
  const en = lang === "en";
  return (
    <ul className="space-y-4 text-lg">
      {produkte.map((p) => (
        <li key={p.slug}>
          <Link
            href={`/leistungen/${p.slug}`}
            className="hover:text-[color:var(--color-nav-2)]"
          >
            {en ? p.titelEn : p.titel}
          </Link>
        </li>
      ))}
    </ul>
  );
}
