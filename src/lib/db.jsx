// lib/mongodb.js
import mongoose from "mongoose";

const MONGODB_URI = "mongodb://127.0.0.1:27017/noretek_energy_db"; // Local connection

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;
  try {
    const db = await mongoose.connect(MONGODB_URI);
    isConnected = db.connections[0].readyState;
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
}
