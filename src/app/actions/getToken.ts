import Cookies from 'js-cookie'

export async function getToken() {
  'use server'

  const token = Cookies.get('spotify_token')

  if(token) {
    console.log('token already exists', token)
    return token
  }

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials&client_id=' + process.env.SPOTIFY_CLIENT_ID + '&client_secret=' + process.env.SPOTIFY_CLIENT_SECRET,
    })

    if (response.status === 400) {
      throw new Error(response.statusText)
    }

    const data = await response.json()

    console.log('data', data)

    Cookies.set('spotify_token', data.access_token)

    return data.access_token

  } catch (err) {
    console.log('err', err)
  }
}


