"use client";

import { useActionState } from "react";
import { publishPost, signOut, type WriteState } from "@/app/blog/write/actions";

const initial: WriteState = {};

export function PostEditor({ email }: { email: string }) {
  const [state, action, pending] = useActionState(publishPost, initial);

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/10 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          Signed in as <span className="font-medium text-ink">{email}</span>
        </p>
        <form action={signOut}>
          <button type="submit" className="text-sm font-semibold text-green">
            Sign out
          </button>
        </form>
      </div>
      <form action={action} className="mt-6">
        <label className="block text-sm font-medium" htmlFor="title">
          Title
        </label>
        <input id="title" name="title" required maxLength={160} className="field" />
        <label className="mt-5 block text-sm font-medium" htmlFor="description">
          Short description
        </label>
        <textarea id="description" name="description" required maxLength={300} rows={3} className="field" />
        <label className="mt-5 block text-sm font-medium" htmlFor="topic">
          Topic
        </label>
        <input id="topic" name="topic" required maxLength={40} list="post-topics" className="field" />
        <datalist id="post-topics">
          <option value="HSEQ" />
          <option value="Training" />
          <option value="Supply" />
        </datalist>
        <label className="mt-5 block text-sm font-medium" htmlFor="body">
          Post
        </label>
        <textarea
          id="body"
          name="body"
          required
          rows={14}
          className="field"
          placeholder={"Opening paragraph.\n\n## A heading\n\n- A point\n- A link to [training](/training)"}
        />
        <p className="mt-2 text-sm text-muted">
          Use ## for a heading, - for a list, **bold** for emphasis, and [text](/path) for a link.
        </p>
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
          {pending ? "Publishing" : "Publish"}
        </button>
      </form>
    </div>
  );
}
