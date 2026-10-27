"use client";

import { useEffect, useState } from "react";
import { loadAuthor, signOut } from "@/app/blog/write/actions";
import { AuthorSignIn } from "@/components/author-sign-in";
import { PostEditor } from "@/components/post-editor";

type Author = {
  email: string;
  author: boolean;
} | null;

export function WriterGate() {
  const [author, setAuthor] = useState<Author | undefined>(undefined);

  useEffect(() => {
    let active = true;
    loadAuthor().then((value) => {
      if (active) setAuthor(value);
    });
    return () => {
      active = false;
    };
  }, []);

  if (author === undefined) {
    return <p className="text-muted">Opening the writing desk…</p>;
  }
  if (!author) return <AuthorSignIn />;
  if (!author.author) {
    return (
      <div className="rounded-3xl bg-white p-6 ring-1 ring-ink/10 sm:p-8">
        <p className="text-lg font-semibold tracking-tight">This account cannot publish.</p>
        <p className="mt-3 leading-relaxed text-muted">
          {author.email || "This account"} is signed in, and it is not marked as an author.
        </p>
        <form action={signOut} className="mt-6">
          <button type="submit" className="text-sm font-semibold text-green">
            Sign out
          </button>
        </form>
      </div>
    );
  }
  return <PostEditor email={author.email} />;
}
