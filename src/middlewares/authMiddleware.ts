import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function authMiddleware(req: Request) {
  const token = req.headers.get("Authorization")?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized: No token provided" }, { status: 401 });
  }

  try {
    // Verify the token using the JWT_SECRET
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    // Attach the decoded user information to the request headers
    req.headers.set("user", JSON.stringify(decoded));

    // Allow the request to proceed
    return NextResponse.next();
  } catch (error) {
    return NextResponse.json({ error: "Unauthorized: Invalid token" }, { status: 401 });
  }
}