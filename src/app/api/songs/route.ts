import { songs } from "@/data/songs"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query')

    const filteredSongs = songs.filter((song) =>
      song.label.toLowerCase().includes(query?.toLowerCase() || "")
    );

    return new Response(JSON.stringify({ data: filteredSongs, message: 'Success' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (err) {
    console.log('Error fetching songs', err)
    return new Response(JSON.stringify({ data: null, message: 'Failed' }), {
      status: 500,
    })
  }
}