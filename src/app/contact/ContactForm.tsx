"use client";

import { useActionState, useEffect, useState } from "react";
import { submitContact, type ContactState } from "@/app/contact/actions";
import {
  contactErrors,
  contactSchema,
  firstInvalidField,
  type ContactErrors,
} from "@/app/contact/schema";
import { projectTypes } from "@/config/site";
import { contactCopy } from "@/content/contact";
import { cn } from "@/lib/cn";

const fieldClass =
  "h-12 w-full rounded-[2px] border border-line bg-white px-4 text-[16px] text-ink placeholder:text-ink-muted focus:border-primary";

export function ContactForm({ defaultType }: { defaultType?: string }) {
  const [state, action, pending] = useActionState(
    submitContact,
    null as ContactState | null,
  );
  const [clientErrors, setClientErrors] = useState<{
    errors: ContactErrors;
    stamp: ContactState | null;
  } | null>(null);

  const showClient = clientErrors !== null && clientErrors.stamp === state;
  const errors = showClient ? clientErrors.errors : (state?.errors ?? {});

  useEffect(() => {
    if (showClient || !state?.errors) return;
    const first = firstInvalidField(state.errors);
    if (first) document.getElementById(first)?.focus();
  }, [showClient, state]);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const data = new FormData(form);
    const parsed = contactSchema.safeParse({
      name: String(data.get("name") ?? ""),
      company: String(data.get("company") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      projectType: String(data.get("projectType") ?? ""),
      location: String(data.get("location") ?? ""),
      message: String(data.get("message") ?? ""),
      consent: data.get("consent") === "on",
      website: String(data.get("website") ?? ""),
    });

    if (parsed.success) {
      setClientErrors(null);
      return;
    }

    event.preventDefault();
    const nextErrors = contactErrors(parsed.error);
    setClientErrors({ errors: nextErrors, stamp: state });
    const first = firstInvalidField(nextErrors);
    if (first) document.getElementById(first)?.focus();
  }

  return (
    <form action={action} className="space-y-5" noValidate onSubmit={onSubmit}>
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Site web</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <Field
        label="Nom"
        name="name"
        autoComplete="name"
        required
        error={errors.name}
      />
      <Field label="Société" name="company" autoComplete="organization" />
      <Field
        label="Téléphone"
        name="phone"
        type="tel"
        autoComplete="tel"
        required
        error={errors.phone}
      />
      <Field
        label="E-mail"
        name="email"
        type="email"
        autoComplete="email"
        required
        error={errors.email}
      />

      <div>
        <label htmlFor="projectType" className="mb-1.5 block text-[14px] font-medium">
          Type de projet
          <RequiredMark />
        </label>
        <select
          id="projectType"
          name="projectType"
          defaultValue={defaultType ?? ""}
          required
          aria-invalid={errors.projectType ? true : undefined}
          aria-describedby={errors.projectType ? "projectType-error" : undefined}
          className={fieldClass}
        >
          <option value="" disabled>
            Choisir…
          </option>
          {projectTypes.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <FieldError id="projectType-error" message={errors.projectType} />
      </div>

      <Field label="Localisation du chantier" name="location" autoComplete="address-level2" />

      <div>
        <label htmlFor="message" className="mb-1.5 block text-[14px] font-medium">
          Message
          <RequiredMark />
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-hint message-error" : "message-hint"}
          placeholder={contactCopy.placeholderMessage}
          className={cn(fieldClass, "h-auto min-h-[120px] py-3")}
        />
        <p id="message-hint" className="mt-1 text-[13px] text-ink-secondary">
          10 caractères minimum.
        </p>
        <FieldError id="message-error" message={errors.message} />
      </div>

      <label className="flex items-start gap-3 text-[14px] text-ink-secondary">
        <input
          type="checkbox"
          name="consent"
          required
          className="consent-check mt-0.5 shrink-0 rounded-[2px] border border-line accent-primary"
        />
        <span>
          {contactCopy.consent}
          {err.consent ? (
            <span className="mt-1 block text-danger">{err.consent}</span>
          ) : null}
        </span>
      </label>

      {errors.form ? (
        <p className="text-[14px] text-danger" role="alert">
          {errors.form}
        </p>
      ) : null}
      {state?.ok ? <p className="text-[14px] text-success">{contactCopy.success}</p> : null}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-12 items-center justify-center rounded-[4px] bg-primary px-6 text-[15px] font-medium text-white hover:bg-primary-hover disabled:opacity-40"
      >
        {pending ? "Envoi…" : "Envoyer la demande"}
      </button>
    </form>
  );
}

function RequiredMark() {
  return (
    <>
      <span className="text-danger" aria-hidden>
        {" "}
        *
      </span>
      <span className="sr-only"> (obligatoire)</span>
    </>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 text-[13px] text-danger" role="alert">
      {message}
    </p>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-[14px] font-medium">
        {label}
        {required ? <RequiredMark /> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={fieldClass}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}
