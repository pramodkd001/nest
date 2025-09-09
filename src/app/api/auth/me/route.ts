import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "@/config/db";
import User from "@/app/api/models/User";

export async function GET(req: Request) {
  await connectDB();
  const authHeader = req.headers.get("authorization") || req.headers.get("Authorization");
  const token = authHeader?.split(" ")[1];
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    const user = await User.findById(decoded.id).select("_id name email role");
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });
    return NextResponse.json({ user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}