import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  try {
    const res = await fetch(
      `https://uat.api.connectec.app/api/temp/feedback/questions?code=${code}`,
      {
        cache: "no-store",
      }
    );

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "Failed to fetch" },
      { status: 500 }
    );
  }
}