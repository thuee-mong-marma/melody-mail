import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const token = request.cookies.get('spotify_access_token')

  if(!token) {
    return new Response('No token found', { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query')

  if(!query) {
    return new Response('No query found', { status: 400 })
  }

  const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, {
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  })


  if(!response.ok) {
    return new Response('Failed to fetch songs', { status: 500 })
  }

  const data = await response.json()

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


