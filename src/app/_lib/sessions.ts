"use server";
import { jwtVerify, SignJWT } from "jose";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export type LoginPayload = {
  legalID: string;
  email: string;
  agentID: number;
  expires: Date;
};

const key = new TextEncoder().encode(
  process.env.NEXT_PUBLIC_JWT_SECRET as string,
);

const cookie = {
  name: "session",
  options: {
    httpOnly: true,
    secure: true,
    sameSite: true,
    path: "/",
  },
  duration: 24 * 60 * 60 * 1000,
};

export async function encrypt(payload: LoginPayload): Promise<string> {
  return new SignJWT({ payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(key);
}

export async function decrypt<T>(token: string): Promise<T | null> {
  try {
    const { payload } = await jwtVerify(token, key, { algorithms: ["HS256"] });

    return payload.payload as T;
  } catch (err) {
    console.log(err);

    return null;
  }
}

export async function createSession({
  agentID,
  legalID,
  email,
}: Omit<LoginPayload, "expires">): Promise<string> {
  const expires = new Date(Date.now() + cookie.duration);
  const session = await encrypt({ legalID, agentID, expires, email });

  (await cookies()).set(cookie.name, session, { ...cookie.options, expires });
  redirect("/dashboard");
}

export async function getCookie(name: string) {
  const browserCookie = (await cookies()).get(name)?.value;

  if (!browserCookie) {
    return null;
  }

  return decrypt<LoginPayload>(browserCookie);
}

export async function verifySession(): Promise<number> {
  const browserCookie = (await cookies()).get(cookie.name)?.value;

  if (!browserCookie) {
    redirect("/login");
  }

  const session = await decrypt<LoginPayload>(browserCookie);

  if (!session?.legalID) {
    redirect("/login");
  }

  return session.agentID as number;
}

export async function deleteSession() {
  (await cookies()).delete(cookie.name);
  redirect("/login");
}
