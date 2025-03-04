import { NextResponse } from "next/server";

// const API_URL = process.env.NEXT_PUBLIC_API_URL!;

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  (typeof window === "undefined" ? "http://fastapi-backend:8000" : "http://127.0.0.1:8000");

console.log("🔹 Using API_URL:", API_URL);



export async function POST(req: Request) {  // ✅ Ensures only POST requests work
  try {
    const body = await req.json();

    console.log("🔹 Forwarding request to FastAPI:", `${API_URL}/api/chat/`);
    
    const res = await fetch(`${API_URL}/api/chat/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(`FastAPI request failed: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    console.log("✅ FastAPI Response:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("❌ Proxy API Error:", error);
    return NextResponse.json({ error: "Failed to connect to FastAPI" }, { status: 500 });
  }
}
