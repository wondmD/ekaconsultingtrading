"use client";

import { useActionState } from "react";
import { signIn, type WriteState } from "@/app/blog/write/actions";

const initial: WriteState = {};

export function AuthorSignIn() {
  const [state, action, pending] = useActionState(signIn, initial);

  return (
    <form action={action} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/10 sm:p-8">
      <label className="block text-sm font-medium" htmlFor="email">
        Email
      </label>
      <input id="email" name="email" type="email" autoComplete="username" required className="field" />
      <label className="mt-5 block text-sm font-medium" htmlFor="password">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        className="field"
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
        {pending ? "Signing in" : "Sign in"}
      </button>
    </form>
  );
}
