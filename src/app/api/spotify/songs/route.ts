import { NextRequest } from "next/server";
import { env as config } from "@/config/env";

export async function GET(request: NextRequest) {
  let token = request.cookies.get('spotify_access_token')?.value;

  // If no token, try to get a new one
  if (!token) {
    const tokenResponse = await fetch(`${config.APP_URL}/api/spotify/token`, {
      credentials: 'include',
      next: {
        revalidate: 50 * 60
      }
    });

    if (!tokenResponse.ok) {
      return new Response('Failed to obtain token', { status: 401 });
    }
    // Get the new token from the response
    const tokenData = await tokenResponse.json();
    token = tokenData.access_token;
  }

  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  if (!query) {
    return new Response('No query found', { status: 400 });
  }

  // console.log('using token', token);

  const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    return new Response('Failed to fetch songs', { status: 500 });
  }

  const data = await response.json();

  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tracks = data.tracks.items.map((track: any) => ({
    value: track.id,
    label: track.name,
    song_id: track.id,
    song_name: track.name,
    song_artist: track.artists[0].name,
    song_image: track.album.images[0].url,
  }))

  return new Response(JSON.stringify(tracks), { status: 200, headers: { 'Content-Type': 'application/json' } })
}


