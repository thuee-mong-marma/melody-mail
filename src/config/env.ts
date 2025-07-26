import { EnvSchema, EnvVars } from './env.schema';

const getRawEnv = (): Record<keyof EnvVars, string | undefined> => ({
  APP_URL: process.env.APP_URL,
  MONGODB_URL: process.env.MONGODB_URL,
  SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
  COOKIE_SECRET: process.env.COOKIE_SECRET,
});

export const env: EnvVars = (() => {
  const parsed = EnvSchema.safeParse(getRawEnv());

  if (!parsed.success) {
    const errors = Object.entries(parsed.error.flatten().fieldErrors)
      .map(([k, v]) => `- ${k}: ${v?.join(', ')}`)
      .join('\n');
    throw new Error(`❌ Invalid environment variables:\n${errors}`);
  }

  return parsed.data;
})();