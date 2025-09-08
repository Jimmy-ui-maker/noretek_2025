import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/db";
import Staff from "@/models/Staff";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret"; // keep in .env

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email & password required" },
        { status: 400 }
      );
    }

    const staff = await Staff.findOne({ email });
    if (!staff) {
      return NextResponse.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // ✅ simple password check (plain text)
    if (staff.password !== password) {
      return NextResponse.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Generate JWT
    const token = jwt.sign(
      { staffId: staff._id.toString(), role: staff.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 👇 Return "user" instead of "staff" to match your frontend
    return NextResponse.json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: staff._id.toString(),
        name: staff.name,
        email: staff.email,
        role: staff.role,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
