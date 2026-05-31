// Supabase client — reads configuration from Vite env vars.
// See .env.example for the variables you must define.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
  // Failing loud here saves hours of "why doesn't login work" debugging in prod.
  // eslint-disable-next-line no-console
  console.error(
    '[supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_PUBLISHABLE_KEY. ' +
      'Set them in .env.local for dev and in your Netlify/Vercel project settings for prod.'
  );
}

export const ALLOWED_AUTH_DOMAIN =
  (import.meta.env.VITE_ALLOWED_AUTH_DOMAIN as string | undefined) ?? 'nexiafiducia.ma';

export const supabase = createClient<Database>(
  SUPABASE_URL ?? 'https://placeholder.supabase.co',
  SUPABASE_PUBLISHABLE_KEY ?? 'placeholder',
  {
    auth: {
      storage: localStorage,
      persistSession: true,
      autoRefreshToken: true,
    },
  }
);
