// app/api/linkedin/me/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://api.linkedin.com/v2/me", {
    headers: {
      Authorization: `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}`,
    },
  });

  const data = await res.json();
  return NextResponse.json(data);
}
