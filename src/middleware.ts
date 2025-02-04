import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log('middleware started')
  const token = request.cookies.get('spotify_access_token')

  if(!token) {
    console.log('no token in middleware')
    return NextResponse.redirect(new URL('/api/spotify/token', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*',
}