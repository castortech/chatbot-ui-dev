import { Database } from "@/supabase/types"
import { createBrowserClient } from "@supabase/ssr"
import { env } from 'next-runtime-env';

const NEXT_PUBLIC_SUPABASE_URL = env('NEXT_PUBLIC_SUPABASE_URL');
const NEXT_PUBLIC_SUPABASE_ANON_KEY = env('NEXT_PUBLIC_SUPABASE_ANON_KEY');

export const supabase = createBrowserClient<Database>(
  NEXT_PUBLIC_SUPABASE_URL!,
  NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
