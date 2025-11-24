// app/api/linkedin/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://api.linkedin.com/v2/ugcPosts?q=authors&authors=List(your_linkedin_urn)&count=5",
      {
        headers: {
          Authorization: `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch LinkedIn posts");
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
