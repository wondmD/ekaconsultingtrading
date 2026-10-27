import type { User } from "@supabase/supabase-js";
import { createAuthorClient } from "@/lib/supabase/server";

export async function getAuthorSession() {
  const supabase = await createAuthorClient();
  const first = await supabase.auth.getUser();
  if (first.error || !first.data.user) return { supabase, author: null };

  let user: User = first.data.user;
  if (user.app_metadata?.role !== "author") {
    const refreshed = await supabase.auth.refreshSession();
    if (refreshed.data.user) {
      user = refreshed.data.user;
    }
  }

  return {
    supabase,
    author: {
      email: user.email ?? "",
      author: user.app_metadata?.role === "author",
    },
  };
}

export async function getAuthor() {
  const { author } = await getAuthorSession();
  return author;
}
