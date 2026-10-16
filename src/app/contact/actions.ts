"use server";

import { enquiryTopics } from "@/lib/content";
import { sendEnquiryEmail } from "@/lib/mail";

export type EnquiryState = {
  ok: boolean;
  error?: string;
  name?: string;
};

export async function submitEnquiry(
  _previous: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  if (String(formData.get("company_website") ?? "").trim()) {
    return { ok: true, name: "there" };
  }

  const name = clip(formData.get("name"), 120);
  const organization = clip(formData.get("organization"), 160);
  const email = clip(formData.get("email"), 160);
  const phone = clip(formData.get("phone"), 40);
  const topic = clip(formData.get("topic"), 80);
  const message = clip(formData.get("message"), 4000, true);

  if (name.length < 2) {
    return { ok: false, error: "Please enter your name." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (!enquiryTopics.includes(topic as (typeof enquiryTopics)[number])) {
    return { ok: false, error: "Please choose what the enquiry is about." };
  }
  if (message.length < 12) {
    return { ok: false, error: "Tell us a little more about what you need." };
  }

  try {
    await sendEnquiryEmail({
      name,
      organization,
      email,
      phone,
      topic,
      body: message,
    });
  } catch (error) {
    console.error("Enquiry email failed", error instanceof Error ? error.message : "unknown");
    return {
      ok: false,
      error: "We could not send your enquiry just now. Please try again in a moment.",
    };
  }

  return { ok: true, name };
}

function clip(value: FormDataEntryValue | null, max: number, keepLines = false) {
  const raw = String(value ?? "");
  const cleaned = keepLines
    ? raw.replace(/\r\n/g, "\n").trim()
    : raw.replace(/\s+/g, " ").trim();
  return cleaned.slice(0, max);
}
