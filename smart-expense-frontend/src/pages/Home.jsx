import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero">
      <div className="card auth-card">

        <h1>Smart Expense & Budget Planner</h1>
        <p>Track, analyze, and optimize your finances intelligently.</p>

        <div className="hero-actions">
          <Link to="/login">
            <button>Login</button>
          </Link>

          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>

      </div>
    </div>
  );
}
