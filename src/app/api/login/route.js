// app/api/login/route.js
import db from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(req) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return new Response(
      JSON.stringify({ message: "Email and password are required" }),
      {
        status: 400,
      }
    );
  }

  try {
    const [users] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (users.length === 0) {
      return new Response(
        JSON.stringify({ message: "Invalid email or password" }),
        {
          status: 401,
        }
      );
    }

    const user = users[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return new Response(
        JSON.stringify({ message: "Invalid email or password" }),
        {
          status: 401,
        }
      );
    }

    // Optionally store token in localStorage (frontend)
    return new Response(JSON.stringify({ message: "Login successful", user }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), {
      status: 500,
    });
  }
}
