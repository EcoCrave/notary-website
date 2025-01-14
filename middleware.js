import { NextResponse } from "next/server";

// Middleware to check authentication for protected routes
export function middleware(request) {
  // Get the auth token from cookies
  const token = request.cookies.get("authToken");

  // Clone the current URL
  const url = request.nextUrl.clone();

  // If the user is not logged in (no token)
  if (!token) {
    // Redirect to the login page
    url.pathname = "/login";

    // Preserve the original requested URL so that the user can be redirected back after login
    url.searchParams.set("returnUrl", request.nextUrl.pathname);

    return NextResponse.redirect(url);
  }

  // If the token exists, allow the request to proceed
  return NextResponse.next();
}

// Apply middleware only to specific routes
export const config = {
  matcher: ["/user/:path*", "/admin/:path*"], // Protect `/user` and `/admin` routes and their subroutes
};
