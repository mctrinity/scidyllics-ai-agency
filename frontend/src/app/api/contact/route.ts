import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    return NextResponse.json({ message: "Contact form received!", data });
  } catch (error) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 400 });
  }
}
