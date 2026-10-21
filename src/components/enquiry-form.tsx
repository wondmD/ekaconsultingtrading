"use client";

import { useActionState } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/contact/actions";
import { company, enquiryTopics } from "@/lib/content";

const initial: EnquiryState = { ok: false };

export function EnquiryForm() {
  const [state, action, pending] = useActionState(submitEnquiry, initial);

  if (state.ok) {
    return (
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/10 sm:p-8">
        <p className="text-sm font-semibold text-green">Enquiry sent</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">Thank you, {state.name}.</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Your message is on its way to {company.email}. The office will reply to the email
          address you entered.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/10 sm:p-8">
      <div className="sr-only" aria-hidden>
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field label="Organization" name="organization" autoComplete="organization" />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <label className="mt-5 block text-sm font-medium" htmlFor="topic">
        What is this about?
      </label>
      <select id="topic" name="topic" required defaultValue="" className="field">
        <option value="" disabled>
          Select a practice
        </option>
        {enquiryTopics.map((topic) => (
          <option key={topic} value={topic}>
            {topic}
          </option>
        ))}
      </select>
      <label className="mt-5 block text-sm font-medium" htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        required
        rows={6}
        className="field"
        placeholder="The site, the risk, the training, or the equipment you need."
      />
      {state.error ? (
        <p className="mt-4 text-sm text-ember" role="alert">
          {state.error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex min-h-11 items-center rounded-full bg-green px-5 text-sm font-semibold text-white transition hover:bg-navy disabled:opacity-60"
      >
        {pending ? "Sending" : "Send enquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="field"
      />
    </div>
  );
}
