import { NextResponse } from "next/server";

const DEMO_PASSWORD = "admin";

export async function POST(request: Request) {
  const body = await request.json();
  const { password } = body;

  if (password === DEMO_PASSWORD) {
    const response = NextResponse.json({ success: true });
    response.cookies.set("demolition_oc_auth", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return response;
  }

  return NextResponse.json(
    { success: false, message: "Incorrect password" },
    { status: 401 }
  );
}
