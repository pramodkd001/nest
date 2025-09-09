import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "@/config/db";

// TODO: create Property model; placeholder implementation

function getUser(req: Request) {
  const authHeader = req.headers.get("authorization") || req.headers.get("Authorization");
  const token = authHeader?.split(" ")[1];
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as { id: string; role: string };
  } catch {
    return null;
  }
}

export async function GET() {
  await connectDB();
  // Placeholder: return empty list
  return NextResponse.json({ properties: [] });
}

export async function POST(req: Request) {
  await connectDB();
  const user = getUser(req);
  if (!user || user.role !== "landlord") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const data = await req.json();
  // Placeholder create response
  return NextResponse.json({ property: { id: "temp-id", ...data, landlord: user.id } }, { status: 201 });
}