"use server";

import { Resend } from "resend";
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
};

const hits = new Map<string, { n: number; t: number }>();

const DEFAULT_FROM = "BR Tech <onboarding@resend.dev>";

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

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
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

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.error(
        "[contact] RESEND_API_KEY manquante. Définissez-la dans .env.local (voir .env.example).",
      );
    }
    return {
      ok: false,
      errors: {
        form: "L’envoi e-mail n’est pas configuré pour le moment. Écrivez-nous à info@brtech.ch ou appelez-nous.",
      },
    };
  }

  const typeLabel =
    projectTypes.find((item) => item.value === parsed.data.projectType)?.label ??
    parsed.data.projectType;

  const subject = `Demande — ${typeLabel} — ${parsed.data.name}`;

  const lines = [
    `Nom : ${parsed.data.name}`,
    parsed.data.company ? `Société : ${parsed.data.company}` : null,
    `Téléphone : ${parsed.data.phone}`,
    `E-mail : ${parsed.data.email}`,
    `Type de projet : ${typeLabel}`,
    parsed.data.location ? `Localisation : ${parsed.data.location}` : null,
    "",
    parsed.data.message,
  ].filter((line): line is string => line !== null);

  const text = lines.join("\n");

  const htmlRows = [
    ["Nom", parsed.data.name],
    parsed.data.company ? ["Société", parsed.data.company] : null,
    ["Téléphone", parsed.data.phone],
    ["E-mail", parsed.data.email],
    ["Type de projet", typeLabel],
    parsed.data.location ? ["Localisation", parsed.data.location] : null,
  ].filter((row): row is [string, string] => row !== null);

  const html = `
    <div style="font-family: system-ui, sans-serif; font-size: 15px; line-height: 1.5; color: #1a1a1a;">
      <p><strong>Nouvelle demande — brtech.ch</strong></p>
      <table style="border-collapse: collapse;">
        ${htmlRows
          .map(
            ([label, value]) =>
              `<tr><td style="padding: 4px 16px 4px 0; color: #555;">${escapeHtml(label)}</td><td style="padding: 4px 0;">${escapeHtml(value)}</td></tr>`,
          )
          .join("")}
      </table>
      <p style="margin-top: 16px; white-space: pre-wrap;">${escapeHtml(parsed.data.message)}</p>
    </div>
  `.trim();

  const to = process.env.CONTACT_TO_EMAIL?.trim() || site.email;
  const from = process.env.CONTACT_FROM_EMAIL?.trim() || DEFAULT_FROM;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: parsed.data.email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return {
        ok: false,
        errors: {
          form: "L’envoi a échoué. Réessayez dans un instant, ou écrivez-nous à info@brtech.ch.",
        },
      };
    }
  } catch (err) {
    console.error("[contact] Resend exception:", err);
    return {
      ok: false,
      errors: {
        form: "L’envoi a échoué. Réessayez dans un instant, ou écrivez-nous à info@brtech.ch.",
      },
    };
  }

  return { ok: true };
}
