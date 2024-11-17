import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt, LoginPayload } from "@/app/_lib/sessions";

export default async function middleware(req: NextRequest) {
  const protectedRoutes = ["/", "/dashboard"];
  const currentPath = req.nextUrl.pathname;
  const isProtected = protectedRoutes.includes(currentPath);

  if (isProtected) {
    const cookie = (await cookies()).get("session")?.value as string;

    const session = await decrypt<LoginPayload>(cookie);

    if (!session?.userID) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }

    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image).*)"],
};
