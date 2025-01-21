import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Only run middleware for /admin routes
  if (!request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.next()
  }

  // Rewrite /admin to /api/admin
  const url = request.nextUrl.clone()
  url.pathname = url.pathname.replace('/admin', '/api/admin')
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/admin/:path*']
}