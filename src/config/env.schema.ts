import { z } from 'zod';

export const EnvSchema = z.object({
  NODE_ENV: z.string().optional().default('development'),
  APP_URL: z.string().optional().default('http://localhost:3000'),
  MONGODB_URL: z.string(),
  SPOTIFY_CLIENT_ID: z.string(),
  SPOTIFY_CLIENT_SECRET: z.string(),
  COOKIE_SECRET: z.string(),
});

export type EnvVars = z.infer<typeof EnvSchema>;