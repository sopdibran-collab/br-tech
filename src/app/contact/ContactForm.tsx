"use client";

import { useActionState, useEffect } from "react";
import { submitContact, type ContactState } from "@/app/contact/actions";
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

  useEffect(() => {
    if (state?.ok && state.mailto) {
      window.location.href = state.mailto;
    }
  }, [state]);

  const err = state?.errors ?? {};

  return (
    <form action={action} className="space-y-5" noValidate>
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Site web</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <Field label="Nom" name="name" required error={err.name} />
      <Field label="Société" name="company" />
      <Field label="Téléphone" name="phone" type="tel" required error={err.phone} />
      <Field label="E-mail" name="email" type="email" required error={err.email} />

      <div>
        <label htmlFor="projectType" className="mb-1.5 block text-[14px] font-medium">
          Type de projet
        </label>
        <select
          id="projectType"
          name="projectType"
          defaultValue={defaultType ?? ""}
          className={fieldClass}
          required
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
        {err.projectType ? <p className="mt-1 text-[13px] text-danger">{err.projectType}</p> : null}
      </div>

      <Field label="Localisation du chantier" name="location" />

      <div>
        <label htmlFor="message" className="mb-1.5 block text-[14px] font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder={contactCopy.placeholderMessage}
          className={cn(fieldClass, "h-auto min-h-[120px] py-3")}
        />
        {err.message ? <p className="mt-1 text-[13px] text-danger">{err.message}</p> : null}
      </div>

      <label className="flex items-start gap-3 text-[14px] text-ink-secondary">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 size-4 rounded-[2px] border-line"
        />
        <span>
          {contactCopy.consent}
          {err.consent ? (
            <span className="mt-1 block text-danger">{err.consent}</span>
          ) : null}
        </span>
      </label>

      {err.form ? <p className="text-[14px] text-danger">{err.form}</p> : null}
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

function Field({
  label,
  name,
  type = "text",
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-[14px] font-medium">
        {label}
        {required ? <span className="text-danger"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className={fieldClass}
      />
      {error ? <p className="mt-1 text-[13px] text-danger">{error}</p> : null}
    </div>
  );
}
