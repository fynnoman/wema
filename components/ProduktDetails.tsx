"use client";

import { useLang } from "./LanguageProvider";

export default function ProduktDetails({
  varianten,
  variantenEn,
}: {
  varianten: string[];
  variantenEn: string[];
}) {
  const { lang } = useLang();
  const list = lang === "en" ? variantenEn : varianten;
  return (
    <ul className="mt-10 flex flex-wrap gap-2">
      {list.map((v) => (
        <li
          key={v}
          className="border border-white/25 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white/90"
        >
          {v}
        </li>
      ))}
    </ul>
  );
}
