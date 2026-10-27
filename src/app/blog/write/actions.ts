"use server";

import { redirect } from "next/navigation";
import { getAuthor, getAuthorSession } from "@/lib/author";
import { slugFromTitle } from "@/lib/posts";
import { createAuthorClient } from "@/lib/supabase/server";

export type WriteState = { error?: string };

export async function signIn(_state: WriteState, formData: FormData): Promise<WriteState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  if (!email || !password) return { error: "Enter the email and password for the author account." };

  const supabase = await createAuthorClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: "That email or password was not accepted." };

  redirect("/blog/write");
}

export async function loadAuthor() {
  return getAuthor();
}

export async function signOut() {
  const supabase = await createAuthorClient();
  await supabase.auth.signOut();
  redirect("/blog/write");
}

export async function publishPost(_state: WriteState, formData: FormData): Promise<WriteState> {
  const { supabase, author } = await getAuthorSession();
  if (!author?.author) return { error: "Sign in with an author account to publish." };

  const title = String(formData.get("title") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const topic = String(formData.get("topic") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();

  if (title.length < 3 || title.length > 160) return { error: "Give the post a title." };
  if (description.length < 12 || description.length > 300) {
    return { error: "Add a short description, at least a sentence." };
  }
  if (topic.length < 2 || topic.length > 40) return { error: "Add a topic, such as HSEQ or Training." };
  if (body.length < 20 || body.length > 20000) return { error: "Write the post before saving it." };

  let slug = slugFromTitle(title);
  for (let attempt = 2; attempt < 20; attempt += 1) {
    const { data } = await supabase.from("posts").select("slug").eq("slug", slug).maybeSingle();
    if (!data) break;
    slug = `${slugFromTitle(title).slice(0, 64)}-${attempt}`;
  }

  const { error } = await supabase.from("posts").insert({
    slug,
    title,
    description,
    topic,
    body,
    published: true,
    published_on: new Date().toISOString().slice(0, 10),
  });

  if (error) return { error: "The post could not be saved." };
  redirect(`/blog/${slug}`);
}
