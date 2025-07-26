import { EnvSchema, EnvVars } from './env.schema';

const getRawEnv = (): Record<keyof EnvVars, string | undefined> => ({
  NODE_ENV: process.env.NODE_ENV,
  APP_URL: process.env.APP_URL,
  MONGODB_URL: process.env.MONGODB_URL,
  SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
  COOKIE_SECRET: process.env.COOKIE_SECRET,
});

export const env: EnvVars = (() => {
  // Only log in development to avoid exposing sensitive data
  if (process.env.NODE_ENV === 'development') {
    const rawEnv = getRawEnv();
    console.log('Environment variables loaded:', Object.keys(rawEnv).filter(key => rawEnv[key as keyof EnvVars]));
  }

  const parsed = EnvSchema.safeParse(getRawEnv());

  if (!parsed.success) {
    const errors = Object.entries(parsed.error.flatten().fieldErrors)
      .map(([k, v]) => `- ${k}: ${v?.join(', ')}`)
      .join('\n');
    throw new Error(`❌ Invalid environment variables:\n${errors}`);
  }

  return parsed.data;
})();