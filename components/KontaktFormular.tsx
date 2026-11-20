"use client";

import Link from "next/link";
import { SITE } from "@/lib/site";
import { useLang } from "./LanguageProvider";

export default function KontaktFormular() {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <form
      action={`mailto:${SITE.email}`}
      method="post"
      encType="text/plain"
      className="mt-14 grid gap-8 md:grid-cols-2"
    >
      <Field label={en ? "Name" : "Name"} name="name" required />
      <Field label={en ? "Company" : "Unternehmen"} name="unternehmen" />
      <Field label={en ? "Email" : "E-Mail"} name="email" type="email" required />
      <Field label={en ? "Phone" : "Telefon"} name="telefon" type="tel" />
      <label className="flex flex-col gap-3 text-sm md:col-span-2">
        <span className="eyebrow text-white/60">
          {en ? "Message" : "Nachricht"}
        </span>
        <textarea
          name="nachricht"
          rows={6}
          required
          className="border-b border-white/30 bg-transparent py-3 text-lg text-white placeholder:text-white/40 outline-none focus:border-white"
        />
      </label>
      <div className="md:col-span-2">
        <button type="submit" className="btn-primary">
          {en ? "Send enquiry" : "Anfrage senden"} <span aria-hidden>→</span>
        </button>
        <p className="mt-6 text-xs text-white/50">
          {en ? (
            <>
              Your data will only be used to handle your enquiry. More in our{" "}
              <Link href="/datenschutz" className="underline hover:text-white">
                privacy policy
              </Link>
              .
            </>
          ) : (
            <>
              Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage
              verwendet. Weitere Hinweise in unserer{" "}
              <Link href="/datenschutz" className="underline hover:text-white">
                Datenschutzerklärung
              </Link>
              .
            </>
          )}
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-3 text-sm">
      <span className="eyebrow text-white/60">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="border-b border-white/30 bg-transparent py-3 text-lg text-white placeholder:text-white/40 outline-none focus:border-white"
      />
    </label>
  );
}
