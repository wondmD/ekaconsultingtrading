import { createClient } from "@supabase/supabase-js";
import { supabaseEnv } from "@/lib/supabase/env";

export function createPublicClient() {
  const { url, key } = supabaseEnv();
  if (!url || !key) {
    throw new Error("Supabase URL or publishable key is missing");
  }

  return createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}
