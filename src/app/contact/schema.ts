import { z } from "zod";
import { projectTypes } from "@/config/site";

const projectTypeValues = projectTypes.map((item) => item.value);

export const contactFieldOrder = [
  "name",
  "phone",
  "email",
  "projectType",
  "message",
  "consent",
] as const;

export type ContactField = (typeof contactFieldOrder)[number];

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Indiquez votre nom."),
  company: z.string().trim().optional(),
  phone: z.string().trim().min(8, "Indiquez un numéro de téléphone."),
  email: z.string().trim().email("Indiquez un e-mail valide."),
  projectType: z
    .string()
    .trim()
    .refine(
      (value) => projectTypeValues.some((item) => item === value),
      "Choisissez un type de projet.",
    ),
  location: z.string().trim().optional(),
  message: z
    .string()
    .trim()
    .min(10, "Écrivez au moins 10 caractères."),
  consent: z
    .boolean()
    .refine((value) => value === true, "Cochez cette case pour envoyer la demande."),
  website: z.string().optional(),
});

export type ContactErrors = Partial<Record<ContactField | "form", string>>;

export function contactErrors(
  error: z.ZodError,
): ContactErrors {
  const errors: ContactErrors = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (key in errors) continue;
    if (
      key === "form" ||
      contactFieldOrder.some((field) => field === key)
    ) {
      errors[key as ContactField | "form"] = issue.message;
    }
  }
  return errors;
}

export function firstInvalidField(errors: ContactErrors): ContactField | null {
  return contactFieldOrder.find((field) => errors[field]) ?? null;
}
