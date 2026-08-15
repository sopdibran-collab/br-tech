"use server";

import { z } from "zod";
import { projectTypes, site } from "@/config/site";

const schema = z.object({
  name: z.string().trim().min(2, "Indiquez votre nom."),
  company: z.string().trim().optional(),
  phone: z.string().trim().min(8, "Indiquez un numéro de téléphone."),
  email: z.string().trim().email("Indiquez un e-mail valide."),
  projectType: z.string().trim().min(1, "Choisissez un type de projet."),
  location: z.string().trim().optional(),
  message: z.string().trim().min(10, "Précisez le besoin (quelques lignes)."),
  consent: z
    .boolean()
    .refine((value) => value === true, "Le consentement est requis."),
  website: z.string().optional(),
});

export type ContactState = {
  ok: boolean;
  errors?: Record<string, string>;
  mailto?: string;
};

const hits = new Map<string, { n: number; t: number }>();

function rateLimited(key: string) {
  const now = Date.now();
  const row = hits.get(key);
  if (!row || now - row.t > 60_000) {
    hits.set(key, { n: 1, t: now });
    return false;
  }
  if (row.n >= 5) return true;
  row.n += 1;
  return false;
}

export async function submitContact(
  _prev: ContactState | null,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    company: String(formData.get("company") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    email: String(formData.get("email") ?? ""),
    projectType: String(formData.get("projectType") ?? ""),
    location: String(formData.get("location") ?? ""),
    message: String(formData.get("message") ?? ""),
    consent: formData.get("consent") === "on",
    website: String(formData.get("website") ?? ""),
  };

  if (raw.website) {
    return { ok: true };
  }

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!errors[key]) errors[key] = issue.message;
    }
    return { ok: false, errors };
  }

  if (rateLimited(parsed.data.email)) {
    return {
      ok: false,
      errors: { form: "Trop de tentatives. Réessayez dans une minute." },
    };
  }

  const typeLabel =
    projectTypes.find((item) => item.value === parsed.data.projectType)?.label ??
    parsed.data.projectType;

  const body = [
    `Nom : ${parsed.data.name}`,
    parsed.data.company ? `Société : ${parsed.data.company}` : null,
    `Téléphone : ${parsed.data.phone}`,
    `E-mail : ${parsed.data.email}`,
    `Type de projet : ${typeLabel}`,
    parsed.data.location ? `Localisation : ${parsed.data.location}` : null,
    "",
    parsed.data.message,
  ]
    .filter(Boolean)
    .join("\n");

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    `Demande — ${typeLabel} — ${parsed.data.name}`,
  )}&body=${encodeURIComponent(body)}`;

  return { ok: true, mailto };
}
