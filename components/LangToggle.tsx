"use client";

import { useLang } from "./LanguageProvider";

export default function LangToggle({ tone }: { tone?: "light" | "dark" }) {
  const { lang, setLang } = useLang();
  const isDark = tone === "dark";
  const base =
    "flex items-center gap-1 text-[11px] uppercase tracking-[0.24em] leading-none select-none";
  const sep = isDark ? "text-black/30" : "text-white/40";
  const active = isDark ? "text-black" : "text-white";
  const idle = isDark ? "text-black/50 hover:text-black" : "text-white/55 hover:text-white";

  return (
    <div className={base} aria-label="Language selector">
      <button
        type="button"
        onClick={() => setLang("de")}
        className={`transition-colors ${lang === "de" ? active : idle}`}
        aria-pressed={lang === "de"}
      >
        DE
      </button>
      <span className={sep}>/</span>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`transition-colors ${lang === "en" ? active : idle}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
