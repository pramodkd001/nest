import { NextResponse } from "next/server";
import connectDB from "@/config/db";

export async function GET() {
  await connectDB();
  return NextResponse.json({ messes: [] });
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  return NextResponse.json({ mess: { id: "temp-id", ...body } }, { status: 201 });
}