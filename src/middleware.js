import { NextResponse } from "next/server";
import { getUserMeLoader } from "./app/data/services/get-user-me-loader";

export async function middleware(NextRequest) {
  const user = await getUserMeLoader();
  const currentPath = NextRequest.nextUrl.pathname;

  console.log('############# MIDDLEWARE ##############')
  console.log(user)
  console.log(currentPath)
  console.log('############# MIDDLEWARE ##############')

  if (currentPath.startsWith("/dashboard") && user.ok === false) {
    return NextResponse.redirect(new URL("/sign-in", NextRequest.url));
  }

  return NextResponse.next();
}