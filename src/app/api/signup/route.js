import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import db from "@/lib/db";

export async function POST(req) {
  try {
    const { name, email, phone, address, password } = await req.json();

    if (!name || !email || !phone || !address || !password) {
      return NextResponse.json(
        { message: "All fields required" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const [existing] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (existing.length > 0) {
      return NextResponse.json(
        { message: "Email already registered" },
        { status: 409 }
      );
    }

    await db.query(
      "INSERT INTO users (name, email, phone, address, password) VALUES (?, ?, ?, ?, ?)",
      [name, email, phone, address, hashedPassword]
    );

    return NextResponse.json({ message: "Signup successful" }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const [users] = await db.query(
      "SELECT id, name, email, phone, address FROM users"
    );
    return new Response(JSON.stringify(users));
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
