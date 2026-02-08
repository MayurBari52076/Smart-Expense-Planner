import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default function Login() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const login = async () => {
    const res = await api.post("/auth/login",{email,password});
    localStorage.setItem("token",res.data.token);
    window.location="/dashboard";
  };

  return (
    <div className="auth-container">

      <div className="card auth-card">

        <h2>Login</h2>

        <input
          placeholder="Email"
          onChange={e=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={e=>setPassword(e.target.value)}
        />

        <button onClick={login}>Login</button>

        <div className="auth-link">
          Don’t have an account?{" "}
          <Link to="/register">
            <span>Register</span>
          </Link>
        </div>

      </div>

    </div>
  );
}
