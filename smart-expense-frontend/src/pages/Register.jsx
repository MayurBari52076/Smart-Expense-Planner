import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default function Register() {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const register = async () => {
    await api.post("/auth/register",{name,email,password});
    window.location="/login";
  };

  return (
    <div className="auth-container">

      <div className="card auth-card">

        <h2>Register</h2>

        <input
          placeholder="Name"
          onChange={e=>setName(e.target.value)}
        />

        <input
          placeholder="Email"
          onChange={e=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={e=>setPassword(e.target.value)}
        />

        <button onClick={register}>Register</button>

        <div className="auth-link">
          Already have an account?{" "}
          <Link to="/login">
            <span>Login</span>
          </Link>
        </div>

      </div>

    </div>
  );
}
