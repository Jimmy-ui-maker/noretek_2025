"use client";
// pages/signup.js
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Signup() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setMessage("Invalid email format");
      return;
    }

    try {
      const res = await axios.post("/api/signup", form);
      setMessage(res.data.message);
      router.push("/customer-signin");
    } catch (err) {
      setMessage(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="border p-5 rounded w-100" style={{ maxWidth: 500 }}>
        <h4 className="mb-4 text-center">Sign Up</h4>

        {message && <div className="alert alert-info">{message}</div>}
        <form onSubmit={'handleSubmit'}>
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              required
              onChange={'handleChange'}
            />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              required
              onChange={'handleChange'}
            />
          </div>
          <div className="mb-3">
            <label>Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              onChange={'handleChange'}
            />
          </div>
          <div className="mb-3">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              onChange={'handleChange'}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              required
              onChange={'handleChange'}
            />
          </div>
          <div className="mb-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              required
              onChange={'handleChange'}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
