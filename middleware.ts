import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSession } from './app/lib/auth';

export async function middleware(request: NextRequest) {
  const session = await getSession();

  // If the request is for /admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Redirect to login if the user is not authenticated
    if (!session?.userInfo) {
      const loginUrl = new URL('/auth/login', request.url);
      return NextResponse.redirect(loginUrl);
    }

    // Redirect to home if the user doesn't have admin roles
    const hasAdminRole = session.userInfo.roles?.admin;
    if (!hasAdminRole) {
      const homeUrl = new URL('/', request.url);
      return NextResponse.redirect(homeUrl);
    }

    // Rewrite /admin to /api/admin
    const rewrittenUrl = request.nextUrl.clone();
    rewrittenUrl.pathname = rewrittenUrl.pathname.replace('/admin', '/api/admin');
    return NextResponse.rewrite(rewrittenUrl);
  }

  // Allow all other routes to proceed
  return NextResponse.next();
}

export const config = {
  matcher: [''],
};
