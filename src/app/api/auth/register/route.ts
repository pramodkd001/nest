import { NextResponse } from "next/server";
import connectDB from "@/config/db";
import User from "@/app/api/models/User";

export async function POST(req: Request) {
  await connectDB();
  const { name, email, password, role, additionalInfo } = await req.json();

  if (!name || !email || !password || !role) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    const user = await User.create({ name, email, password, role, additionalInfo });

    return NextResponse.json({
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
      message: "Registered successfully"
    }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}