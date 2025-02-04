import { cookies } from "next/headers";

export async function GET() {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
    },
    body: 'grant_type=client_credentials',
    cache: 'no-store',
  });

  if (!response.ok) {
    return new Response('Failed to fetch Spotify token', { status: 500 })
  }

  const data = await response.json();

  cookies().set('spotify_access_token', data.access_token, {
    httpOnly: true,
    secure: true,
    path: '/',
    maxAge: data.expires_in,
  })

  return new Response(JSON.stringify(data), { status: 200 })

}


