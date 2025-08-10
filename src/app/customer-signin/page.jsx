"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

   
  {/** 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  
  const handleSubmit = async (e) => {
   
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setMessage("Invalid email format");
      return;
    }

    try {
      const res = await axios.post("/api/login", form);
      setMessage(res.data.message || "Login successful!");
      localStorage.setItem("userEmail", form.email);

      router.push("/customer_dashboard");
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
      
  };
*/}
  
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="border p-5 rounded w-100" style={{ maxWidth: 400 }}>
        <h4 className="mb-4 text-center">Customer Login</h4>

        {message && <div className="alert alert-info">{message}</div>}
        <form onSubmit={'handleSubmit'}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={form.email}
              onChange={'handleChange'}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={form.password}
              onChange={'handleChange'}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
