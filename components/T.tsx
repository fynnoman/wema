"use client";

import { useLang } from "./LanguageProvider";

export default function T({
  de,
  en,
}: {
  de: React.ReactNode;
  en: React.ReactNode;
}) {
  const { lang } = useLang();
  return <>{lang === "en" ? en : de}</>;
}
