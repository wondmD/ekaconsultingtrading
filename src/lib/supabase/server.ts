import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { supabaseEnv } from "@/lib/supabase/env";

export async function createAuthorClient() {
  const { url, key } = supabaseEnv();
  if (!url || !key) {
    throw new Error("Supabase URL or publishable key is missing");
  }

  const cookieStore = await cookies();

  return createServerClient(url, key, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          for (const { name, value, options } of cookiesToSet) {
            cookieStore.set(name, value, options);
          }
        } catch {
          // Server Components can read cookies, but only a Server Action can write them.
        }
      },
    },
  });
}
